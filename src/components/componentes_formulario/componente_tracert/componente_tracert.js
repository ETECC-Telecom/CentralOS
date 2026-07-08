import { LitElement, html, css, unsafeCSS } from 'lit';
import globalStyle from "./index.css?inline";
import { estourar_drawer } from '../../drawer_scripts/drawer_scripts_component';

export class Componente_Tracert extends LitElement {
    // 1. Em vez de @property, use o objeto static properties
    static properties = {
        objeto_os: { type: Object },
        modal_aberto: { type: Boolean },
        objeto_tracert: { type: Object },
        ativo: { type: Object },
    };

    static get styles() {
        return css`${unsafeCSS(globalStyle)}`;
    }

    constructor() {
        super();
        this.objeto_os = {};
        this.modal_aberto = false;
        this.objeto_tracert = [];
        this.ativo = {};
        let acao = null;
    }

    // Executado assim que o componente é renderizado na tela
    firstUpdated() {

    }
    connectedCallback() {
        super.connectedCallback(); // ⚠️ Sempre chame o super PRIMEIRO no Lit
        this.objeto_tracert = this.objeto_os.OS.conferencia_tecnica.tracert_adicional;
    }

    _Alterar_Descricao_Tracert = (e) => {
        const Texto = e.target.value === "" ? null : e.target.value;
        this.objeto_os.OS.conferencia_tecnica.observacao_tracert = Texto;
        this.objeto_os.salvar_os_localstorage();
    }

    _Fechar_Modal = () => {
        this.modal_aberto = false;
    }

    _Deletar_Item = (e, chave) => {
        // Filtra o array mantendo apenas os itens que têm o índice DIFERENTE do que queremos remover
        this.objeto_tracert = this.objeto_tracert.filter((_, index) => index !== chave);
        this.objeto_os.OS.conferencia_tecnica.tracert_adicional = this.objeto_tracert

        this.objeto_os.salvar_os_localstorage();

        this.objeto_tracert = this.objeto_os.OS.conferencia_tecnica.tracert_adicional;
    }

    _Abrir_Modal_Editar = (e, chave) => {

        //Referenciamos o tracert para poder editá-lo 
        this.ativo = this.objeto_tracert[chave];
        this.acao = true;
        this.modal_aberto = true;
    }
    _Abrir_Modal_Novo = () => {

        //Criamos um novo modelo de Tracert para adicionar a lista posteriormente!
        this.ativo = {
            ativo: "empresa", //exe.: Notebook da empresa;
            protocolo: "ipv4", // IPv4/Ipv6
            url: "google", // Google/Youtube/Instagram/Facebook/Outros;
            outra_url: null
        }
        this.acao = false;
        this.modal_aberto = true;
    }

    _Alterar_visibilidade_outro = (e) => {
        const Valor = e.target.value;
        this.ativo.url = Valor;
        this.requestUpdate();
    }

    _Salvar_data = (e, acao) => {

        const titulo = this.renderRoot?.querySelector("#titulo input[name='tipo_teste_ativo']:checked").value
        const destino = this.renderRoot?.querySelector("#destino").value
        const outro_destino = this.renderRoot?.querySelector("#outro-destino") === null ? null : this.renderRoot?.querySelector("#outro-destino").value
        const protocolo = this.renderRoot?.querySelector('#protocolo input[name="tipo_teste_ip"]:checked').value

        if (acao) {
            this.ativo.ativo = titulo;
            this.ativo.protocolo = protocolo;
            this.ativo.url = destino;
            this.ativo.outra_url = outro_destino;
            
        } else {
            this.ativo.ativo = titulo;
            this.ativo.protocolo = protocolo;
            this.ativo.url = destino;
            this.ativo.outra_url = outro_destino;

            this.objeto_tracert.push(this.ativo);
            this.ativo = {};

        }
        this.objeto_os.salvar_os_localstorage();
        this._Fechar_Modal();

    }

    render() {
        return html`
            <!--Retorno renderizado-->
            <br>
            <h2>Relatório de Tracert</h2>
            <div class="form-group">
                <label for="message" class="form-label">Relatório:</label>
                <textarea
                    @dblclick="${(e) => estourar_drawer(e.target, 'Tracert')}"
                    @change="${this._Alterar_Descricao_Tracert}"
                    .value="${this.objeto_os.OS.conferencia_tecnica.observacao_tracert}"
                    style="border-left: 5px solid #ff0000;"
                    id="message" 
                    name="message" 
                    rows="5" class="form-textarea"></textarea>
            </div>
            <div class="form-group" style="margin-top: 10px;">
                <button 
                    @click="${this._Abrir_Modal_Novo}"
                    type="button" class="form-button">Add Tracert Manual</button>
            </div>
            <br>
            <div class="container-tracert">
                ${this.objeto_tracert.map((item, chave) => html`
                <div class="container-tracert-item">
                    
                    <div @click="${(e) => this._Abrir_Modal_Editar(e, chave)}">
                        <p>
                            <span class="destaque"> Tracert:</span> Ativo - ${item.ativo} <span class="destaque">${item.protocolo}</span>
                        </p>
                        <br>
                        <p>
                            <span class="destaque"> Destino:</span> ${item.url}
                        </p>
                    </div>
                    <button
                        @click="${(e) => this._Deletar_Item(e, chave)}"
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
                        <h3>Editar Tracert</h3>
                        <br>
                        <br>
                        <div class="form-group">
                            <label for="cars" class="form-label">Ativo Testado:</label>

                            <div id="titulo" class="radio-input">
                                <label>
                                    <input ?checked="${this.ativo.ativo === "empresa" ? true : false}" value="empresa" name="tipo_teste_ativo" id="value-1" type="radio" />
                                    <span>E m p r e s a</span>
                                </label>
                                <label>
                                    <input ?checked="${this.ativo.ativo === "cliente" ? true : false}" value="cliente" name="tipo_teste_ativo" id="value-2" type="radio" />
                                    <span>C l i e n t e</span>
                                </label>
                                <span class="selection"></span>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="destino" class="form-label">Selecione o destino:</label>
                            <select 
                                @change="${this._Alterar_visibilidade_outro}"
                                id="destino" name="destino" class="form-select">
                                <option ?selected="${this.ativo.url === 'google' ? true : false}" value="google">Google</option>
                                <option ?selected="${this.ativo.url === 'youtube' ? true : false}" value="youtube">Youtube</option>
                                <option ?selected="${this.ativo.url === 'facebook' ? true : false}" value="facebook">Facebook</option>
                                <option ?selected="${this.ativo.url === 'instagram' ? true : false}" value="instagram">Instagram</option>
                                <option ?selected="${this.ativo.url === 'outro' ? true : false}" value="outro">Outro</option>
                            </select>
                        </div>
                        
                        ${this.ativo.url === "outro" ? html`
                        <div class="form-group">
                            <label for="outro-destino" class="form-label">Em caso de "Outro"</label>
                            <input type="text" id="outro-destino" name="outro-destino" .value="${this.ativo.outra_url}" class="form-input">
                        </div>
                            `: ``}
                        

                        <div class="form-group">
                            <label for="fname" class="form-label">Selecione o Protocolo</label>
                            <div id="protocolo" class="radio-input">
                                <label>
                                    <input ?checked="${this.ativo.protocolo === 'ipv4' ? true : false}" value="ipv4" name="tipo_teste_ip" id="value-1" type="radio" />
                                    <span>I P v 4</span>
                                </label>
                                <label>
                                    <input ?checked="${this.ativo.protocolo === 'ipv6' ? true : false}" value="ipv6" name="tipo_teste_ip" id="value-2" type="radio" />
                                    <span>I P v 6</span>
                                </label>
                                <span class="selection"></span>
                            </div>
                        </div>
                        
                        <div class="form-group" style="margin-top: 10px; display: flex; flex-direction: row; gap:.5rem">
                            <button 
                                @click="${(e) => this._Salvar_data(e, this.acao)}"
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
customElements.define('componente-tracert', Componente_Tracert);