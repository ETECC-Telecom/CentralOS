import { LitElement, html, css, unsafeCSS } from 'lit';
import globalStyle from "./index.css?inline";
import { estourar_drawer } from '../../drawer_scripts/drawer_scripts_component';

export class Componente_Velocidade extends LitElement {
    // 1. Em vez de @property, use o objeto static properties
    static properties = {
        objeto_os: { type: Object },
        modal_aberto: { type: Boolean },
        objeto_velocidade: { type: Object },
        ativo: { type: Object },
    };

    static get styles() {
        return css`${unsafeCSS(globalStyle)}`;
    }

    constructor() {
        super();
        this.objeto_os = {};
        this.modal_aberto = false;
        this.objeto_velocidade = [];
        this.ativo = {};
        let acao = null;
    }

    // Executado assim que o componente é renderizado na tela
    firstUpdated() {

    }
    connectedCallback() {
        super.connectedCallback(); // ⚠️ Sempre chame o super PRIMEIRO no Lit
        this.objeto_velocidade = this.objeto_os.OS.conferencia_tecnica.velocidade_adicional;

    }

    _Alterar_Descricao = (e)=>{
        const Texto = e.target.value === ""? null:e.target.value;
        this.objeto_os.OS.conferencia_tecnica.observacao_velocidade = Texto;
        this.objeto_os.salvar_os_localstorage();
    }

    _Fechar_Modal = () => {
        this.modal_aberto = false;
    }

    _Abrir_Modal_Novo = (e) =>{
        //Criamos um novo Objeto de Velocidade para adicionar a lista posteriormente!
        this.ativo = {
            ativo: "notebook", // exe.: Notebook/Celular/Computador e etc;
			dono: "empresa", //Empresa/Cliente
			tipo: "cabo", // Wifi/Cabeado
			site: "SpeedTest", // Speedtest, minha conexão e etc;
			jitter:0.0,
			down: null,
			up: null,
			ping: null,
			url: null, //informação que vem o speedtest cli. Não temos acesso pela interface;
        }
        this.acao = false;
        this.modal_aberto = true;
    }
    _Abrir_Modal_Editar = (e, chave) =>{
        this.ativo = this.objeto_velocidade[chave];
        this.acao = true;
        this.modal_aberto = true;
    }

    _Deletar_Item = (e, chave) => {
        // Filtra o array mantendo apenas os itens que têm o índice DIFERENTE do que queremos remover
        this.objeto_velocidade = this.objeto_velocidade.filter((_, index) => index !== chave);
        this.objeto_os.OS.conferencia_tecnica.velocidade_adicional = this.objeto_velocidade

        this.objeto_os.salvar_os_localstorage();

        this.objeto_velocidade = this.objeto_os.OS.conferencia_tecnica.velocidade_adicional;
    }

    _Salvar_data = (e, acao) => {
        const responsabilidade = this.renderRoot?.querySelector("#responsabilidade input[name='tipo_teste_ativo']:checked").value;
        const teste = this.renderRoot?.querySelector("#teste input[name='tipo_teste']:checked").value;
        const destino = this.renderRoot?.querySelector("#destino").value;
        const ativo = this.renderRoot?.querySelector("#ativo").value;
        const down = parseInt(this.renderRoot?.querySelector("#down").value);
        const up = parseInt(this.renderRoot?.querySelector("#up").value);
        const ping = parseInt(this.renderRoot?.querySelector("#ping").value);
        const jitter = parseFloat(this.renderRoot?.querySelector("#jitter").value);
        
        this.ativo.ativo = ativo;
		this.ativo.dono = responsabilidade;
		this.ativo.tipo = teste;
		this.ativo.site = destino;
		this.ativo.jitter = jitter;
		this.ativo.down = down;
		this.ativo.up = up;
		this.ativo.ping = ping;
		this.ativo.url = null;
        
        if (!acao) {
            this.objeto_velocidade.push(this.ativo);
            this.ativo = {};
        } 
        this.objeto_os.salvar_os_localstorage();
        this._Fechar_Modal();

    }

    render() {
        return html`
            <!--Retorno renderizado-->
            <br>
            <h2>Relatório de Velocidade</h2>
            <div class="form-group">
                <label for="message" class="form-label">Relatório:</label>
                <textarea
                    @dblclick="${(e) => estourar_drawer(e.target, 'Velocidade')}"
                    @change="${this._Alterar_Descricao}"
                    .value="${this.objeto_os.OS.conferencia_tecnica.observacao_velocidade}"
                    style="border-left: 5px solid #ff0000;"
                    id="message" 
                    name="message" 
                    rows="5" class="form-textarea"></textarea>
            </div>
            <div class="form-group" style="margin-top: 10px;">
                <button 
                    @click="${this._Abrir_Modal_Novo}"
                    type="button" class="form-button">Add Velocidade Manual</button>
            </div>
            <br>
            <div class="container-velocidade">
                ${this.objeto_velocidade.map((item, chave)=>html`
                <div
                    class="container-velocidade-item">
                    <div 
                        @click="${(e)=> this._Abrir_Modal_Editar(e, chave)}"
                        style="display:flex; gap:0.4rem; Flex-direction:column">
                        <p>Velocidade: ${item.ativo} - ${item.dono} (${item.tipo})</p>
                        <p>Down: <span class="destaque">${item.down}</span> UP: <span class="destaque">${item.up}</span> Ping: ${item.ping}</p>
                    </div>
                    <button
                        @click="${(e)=>{this._Deletar_Item(e, chave)}}"
                        type="button" class="botao-close">–</button>
                </div>
                <hr>
                `)}
                
            </div>

            <!--Modal de Configuracao do Ping-->

            ${this.modal_aberto ? html`
                <div
                    class="modal-backdrop"
                    @click=${this._Fechar_Modal}
                >
                    <div
                        class="modal-content"
                        
                        @click=${(e) => e.stopPropagation()}
                    >
                        <h3>Editar Velocidade</h3>
                        <br>
                        <br>
                        <div class="form-group">
                            <label for="cars" class="form-label">Ativo Testado:</label>

                            <div style="display:flex;gap:.4rem">

                                <div id="responsabilidade" class="radio-input">
                                    <label>
                                        <input ?checked="${this.ativo.dono === "empresa"? true:false}" value="empresa" name="tipo_teste_ativo" id="value-1" type="radio" />
                                        <span>E m p r e s a</span>
                                    </label>
                                    <label>
                                        <input ?checked="${this.ativo.dono === "cliente"? true:false}" value="cliente" name="tipo_teste_ativo" id="value-2" type="radio" />
                                        <span>C l i e n t e</span>
                                    </label>
                                    <span class="selection"></span>
                                </div>

                                <div id="teste" class="radio-input">
                                    <label>
                                        <input ?checked="${this.ativo.tipo === "wifi"? true:false}" value="wifi" name="tipo_teste" id="value-1" type="radio" />
                                        <span>W i F i</span>
                                    </label>
                                    <label>
                                        <input ?checked="${this.ativo.tipo === "cabo"? true:false}" value="cabo" name="tipo_teste" id="value-2" type="radio" />
                                        <span>C a b o</span>
                                    </label>
                                    <span class="selection"></span>
                                </div>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="destino" class="form-label">Site do Teste</label>
                            <input type="text" id="destino" name="destino" .value="${this.ativo.site}" class="form-input">
                        </div>

                        <div class="form-group">
                            <label for="ativo" class="form-label">Selecione o Ativo Testado:</label>
                            <select 
                                @change=""
                                id="ativo" name="ativo" class="form-select">
                                <option ?selected="${this.ativo.ativo === "celular"? true:false}" value="celular">Celular</option>
                                <option ?selected="${this.ativo.ativo === "notebook"? true:false}" value="notebook">Notebook</option>
                                <option ?selected="${this.ativo.ativo === "computador"? true:false}" value="computador">Computador</option>
                                <option ?selected="${this.ativo.ativo === "tv"? true:false}" value="tv">TV</option>
                                <option ?selected="${this.ativo.ativo === "tvbox"? true:false}" value="tvbox">TVBox</option>
                                <option ?selected="${this.ativo.ativo === "video game"? true:false}" value="video game">Video Game</option>
                            </select>
                        </div>                      

                        <div style="display:flex; gap:.5rem">
                            <div class="form-group">
                                <label for="down" class="form-label">Download</label>
                                <input type="number" id="down" name="down" .value="${this.ativo.down}" class="form-input">
                            </div>
                            <div class="form-group">
                                <label for="up" class="form-label">Upload</label>
                                <input type="number" id="up" name="up" .value="${this.ativo.up}" class="form-input">
                            </div>
                            <div class="form-group">
                                <label for="ping" class="form-label">Ping</label>
                                <input type="number" id="ping" name="ping" .value="${this.ativo.ping}" class="form-input">
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="jitter" class="form-label">Jitter</label>
                            <input type="number" id="jitter" name="jitter" .value="${this.ativo.jitter}" class="form-input">
                        </div>
                        
                        
                        <div class="form-group" style="margin-top: 10px; display: flex; flex-direction: row; gap:.5rem">
                            <button 
                                @click="${(e)=>this._Salvar_data(e, this.acao)}"
                                style="background-color: var(--btn-background-color); color: var(--text-color);"
                                type="button" class="form-button")">Salvar</button>
                            <button 
                                @click="${this._Fechar_Modal}"
                                type="button" class="form-button")">Fechar</button>
                        </div>

                    </div>
                </div>
            ` : ''}
        `;
    }
}

// 2. Em vez de @customElement, use o registro manual
customElements.define('componente-velocidade', Componente_Velocidade);