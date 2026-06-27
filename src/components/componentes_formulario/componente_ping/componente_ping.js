import { LitElement, html, css, unsafeCSS } from 'lit';
import globalStyle from "./index.css?inline";


export class Componente_Ping extends LitElement {
    // 1. Em vez de @property, use o objeto static properties
    static properties = {
        objeto_os: { type: Object },
        modal_aberto: { type: Boolean },
        objeto_ping: { type: Object },
        ativo: { type: Object },
    };

    static get styles() {
        return css`${unsafeCSS(globalStyle)}`;
    }

    constructor() {
        super();
        this.objeto_os = {};
        this.modal_aberto = false;
        this.objeto_ping = [];
        this.ativo = {};
        let acao = null;

    }

    // Executado assim que o componente é renderizado na tela
    firstUpdated() {

    }
    connectedCallback() {
        super.connectedCallback(); // ⚠️ Sempre chame o super PRIMEIRO no Lit
        this.objeto_ping = this.objeto_os.OS.conferencia_tecnica.ping_adicional;


    }

    _Fechar_Modal = () =>{
        this.modal_aberto = false;
    }

    _Alterar_Descricao_Ping = (e)=>{
        const Texto = e.target.value === ""? null:e.target.value;
        this.objeto_os.OS.conferencia_tecnica.observacao_ping = Texto;
        this.objeto_os.salvar_os_localstorage();
    }

    _deletar_Item = (e, chave) => {
        
        // Filtra o array mantendo apenas os itens que têm o índice DIFERENTE do que queremos remover
        this.objeto_ping = this.objeto_ping.filter((_, index) => index !== chave);
        this.objeto_os.OS.conferencia_tecnica.ping_adicional = this.objeto_ping
        this.objeto_os.salvar_os_localstorage();
        this.objeto_ping = this.objeto_os.OS.conferencia_tecnica.ping_adicional;
    }

    _Abrir_Modal_Edicao = (e, chave)=>{
        this.acao = true;
        const Objeto = this.objeto_ping[chave]
        this.ativo = Objeto;
        this.modal_aberto = true
    }
    _Abrir_Modal_criacao = (e)=>{
        this.acao = false;
        const Objeto = this.objeto_ping
        this.ativo = {
            titulo: "empresa", //exe.: Ativos da empresa/cliente
			tipo: "ipv4", //ipv4/ipv6
			destino: "google", //Google, Youtube, Facebook, Instagram, gateway, outro!
			outro:null,
			pacotes: [200, 200, 0], //enviados, recebidos, perdidos
			latencia: [0, 0, 0] //min, média, máx
        };
        this.modal_aberto = true
    }

    _Editar_Ping = (e, acao) => {
                
        //Capturando o valor das propriedades
        const titulo = this.renderRoot?.querySelector('#titulo input[name="tipo_teste_ativo"]:checked').value;
        const destino = this.renderRoot?.querySelector("#destino").value
        let outro_destino = null
        if (this.renderRoot?.querySelector("#outro-destino")){
            outro_destino = this.renderRoot?.querySelector("#outro-destino").value === ""? null: this.renderRoot?.querySelector("#outro-destino").value;
        }
        const protocolo = this.renderRoot?.querySelector('#protocolo input[name="tipo_teste_ip"]:checked').value
        const pacotes_enviado = this.renderRoot?.querySelector("#pacotes-enviado").value
        const pacotes_recebidos = this.renderRoot?.querySelector("#pacotes-recebidos").value
        const pacotes_perdidos = this.renderRoot?.querySelector("#pacotes-perdidos").value
        const latencia_minima = this.renderRoot?.querySelector("#latencia-minima").value
        const latencia_media = this.renderRoot?.querySelector("#latencia-media").value
        const latencia_maxima = this.renderRoot?.querySelector("#latencia-maxima").value

        //Verifica oque fazer: Se acao = true, ele edita, se for false, ele cria um novo ping
        if(acao){
            //Edita o Ping
            this.ativo.titulo = titulo;
            this.ativo.destino = destino;
            this.ativo.outro = outro_destino;
            this.ativo.tipo = protocolo;

            this.ativo.pacotes[0] = parseInt(pacotes_enviado);
            this.ativo.pacotes[1] = parseInt(pacotes_recebidos);
            this.ativo.pacotes[2] = parseInt(pacotes_perdidos);

            this.ativo.latencia[0] = parseInt(latencia_minima);
            this.ativo.latencia[1] = parseInt(latencia_media);
            this.ativo.latencia[2] = parseInt(latencia_maxima);
            
        }else{
            this.ativo.titulo = titulo;
            this.ativo.destino = destino;
            this.ativo.outro = outro_destino;
            this.ativo.tipo = protocolo;

            this.ativo.pacotes[0] = parseInt(pacotes_enviado);
            this.ativo.pacotes[1] = parseInt(pacotes_recebidos);
            this.ativo.pacotes[2] = parseInt(pacotes_perdidos);

            this.ativo.latencia[0] = parseInt(latencia_minima);
            this.ativo.latencia[1] = parseInt(latencia_media);
            this.ativo.latencia[2] = parseInt(latencia_maxima);

            this.objeto_ping.push(this.ativo)
            this.ativo = {};
            
        }

        this.objeto_os.salvar_os_localstorage();

        this._Fechar_Modal();
    }

    _Somar_Percas = () =>{
        const pacotes_enviado = parseInt(this.renderRoot?.querySelector("#pacotes-enviado").value);
        const pacotes_recebidos = parseInt(this.renderRoot?.querySelector("#pacotes-recebidos").value);
        
        const Soma = pacotes_enviado-pacotes_recebidos;
        
        this.ativo.pacotes[2] = Soma;

        this.objeto_os.salvar_os_localstorage();

        this.requestUpdate();
    }


    _Alterar_Tipo_Destino = (e)=>{
        const Ativo = e.target.value;
        this.ativo.destino = Ativo;
        this.requestUpdate();
    }

    render() {
        return html`
            <!--Retorno renderizado-->
            <br>
            <h2>Relatório do Ping</h2>
            <div class="form-group">
                <label for="message" class="form-label">Relatório:</label>
                <textarea
                    @change="${this._Alterar_Descricao_Ping}"
                    .value="${this.objeto_os.OS.conferencia_tecnica.observacao_ping}"
                    style="border-left: 5px solid #ff0000;"
                    id="message" 
                    name="message" 
                    rows="5" class="form-textarea"></textarea>
            </div>
            <div class="form-group" style="margin-top: 10px;">
                <button 
                    @click="${this._Abrir_Modal_criacao}"
                    type="button" class="form-button">Add Ping Manual</button>
            </div>
            <br>
            <div class="container-pings">

                ${this.objeto_ping.map((item, chave)=>html`
                    <div class="container-ping">
                        <div class="container-data-ping">
                            <div @click="${(e)=> this._Abrir_Modal_Edicao(e, chave)}">
                                <p><b>Ping ${item.tipo}</b> - Ativo ➔ ${item.titulo} (${item.destino})</p>
                            </div>
                            <div>
                                <button 
                                    @click="${(e) => this._deletar_Item(e, chave)}"
                                    type="button" class="botao-close">–</button>
                            </div>
                        </div>
                        <div class="container-data-result">
                            <div class="card-data-ping">
                                <p>Enviados: <strong>${item.pacotes[0]}</strong></p>
                                <p>Recebidos: <strong>${item.pacotes[1]}</strong></p>
                                <p>Perdidos: <strong>${item.pacotes[2]}</strong></p>
                            </div>
                            <div class="card-data-ping">
                                <p>Mínimo: <strong>${item.latencia[0]}ms</strong></p>
                                <p>Média: <strong>${item.latencia[1]}ms</strong></p>
                                <p>Máxima: <strong>${item.latencia[2]}ms</strong></p>
                            </div>
                        </div>
                    </div>
                    <br>
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
                        <h3>Editar Ping</h3>
                        <br>
                        <br>
                        <div class="form-group">
                            <label for="cars" class="form-label">Ativo Testado:</label>

                            <div id="titulo" class="radio-input">
                                <label>
                                    <input ?checked="${this.ativo.titulo === "empresa"? true:false}" value="empresa" name="tipo_teste_ativo" id="value-1" type="radio" />
                                    <span>E m p r e s a</span>
                                </label>
                                <label>
                                    <input ?checked="${this.ativo.titulo === "cliente"? true:false}" value="cliente" name="tipo_teste_ativo" id="value-2" type="radio" />
                                    <span>C l i e n t e</span>
                                </label>
                                <span class="selection"></span>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="destino" class="form-label">Selecione o destino:</label>
                            <select 
                                @change="${this._Alterar_Tipo_Destino}"
                                id="destino" name="destino" class="form-select">
                                <option ?selected="${this.ativo.destino === "google"?true:false}" value="google">Google</option>
                                <option ?selected="${this.ativo.destino === "youtube"?true:false}" value="youtube">Youtube</option>
                                <option ?selected="${this.ativo.destino === "facebook"?true:false}" value="facebook">Facebook</option>
                                <option ?selected="${this.ativo.destino === "instagram"?true:false}" value="instagram">Instagram</option>
                                <option ?selected="${this.ativo.destino === "gateway"?true:false}" value="gateway">Gateway</option>
                                <option ?selected="${this.ativo.destino === "outro"?true:false}" value="outro">Outro</option>
                            </select>
                        </div>
                        
                        ${this.ativo.destino === "outro"?html`
                        <div class="form-group">
                            <label for="outro-destino" class="form-label">Em caso de "Outro"</label>
                            <input type="text" id="outro-destino" name="outro-destino" .value="${this.ativo.outro}" class="form-input">
                        </div>
                            `:``}
                        

                        <div class="form-group">
                            <label for="fname" class="form-label">Selecione o Protocolo</label>
                            <div id="protocolo" class="radio-input">
                                <label>
                                    <input ?checked="${this.ativo.tipo === "ipv4"?true:false}" value="ipv4" name="tipo_teste_ip" id="value-1" type="radio" />
                                    <span>I P v 4</span>
                                </label>
                                <label>
                                    <input ?checked="${this.ativo.tipo === "ipv6"?true:false}" value="ipv6" name="tipo_teste_ip" id="value-2" type="radio" />
                                    <span>I P v 6</span>
                                </label>
                                <span class="selection"></span>
                            </div>
                        </div>
                        
                        <div style="display:flex; flex-direction: row; gap:.5rem;">
                            <div class="form-group">
                                <label for="pacotes-enviado" class="form-label">Enviados</label>
                                <input 
                                    @change="${this._Somar_Percas}"
                                    type="number" id="pacotes-enviado" name="pacotes-enviado" .value="${this.ativo.pacotes[0]}" class="form-input">
                            </div>
                            <div class="form-group">
                                <label for="pacotes-recebidos" class="form-label">Recebidos</label>
                                <input 
                                    @change="${this._Somar_Percas}"
                                    type="number" id="pacotes-recebidos" name="pacotes-recebidos" .value="${this.ativo.pacotes[1]}" class="form-input">
                            </div>
                            <div class="form-group">
                                <label for="pacotes-perdidos" class="form-label">Perdidos</label>
                                <input disabled type="number" id="pacotes-perdidos" name="pacotes-perdidos" .value="${this.ativo.pacotes[2]}" class="form-input">
                            </div>
                        </div>

                        <div style="display:flex; flex-direction: row; gap:.5rem;">
                            <div class="form-group">
                                <label for="latencia-minima" class="form-label">Mínima</label>
                                <input type="number" id="latencia-minima" name="latencia-minima" .value="${this.ativo.latencia[0]}" class="form-input">
                            </div>
                            <div class="form-group">
                                <label for="latencia-media" class="form-label">Média</label>
                                <input type="number" id="latencia-media" name="latencia-media" .value="${this.ativo.latencia[1]}" class="form-input">
                            </div>
                            <div class="form-group">
                                <label for="latencia-maxima" class="form-label">Máxima</label>
                                <input type="number" id="latencia-maxima" name="latencia-maxima" .value="${this.ativo.latencia[2]}" class="form-input">
                            </div>
                        </div>

                        <div class="form-group" style="margin-top: 10px; display: flex; flex-direction: row; gap:.5rem">
                            <button 
                                @click="${(e)=>this._Editar_Ping(e, this.acao)}"
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
customElements.define('componente-ping', Componente_Ping);