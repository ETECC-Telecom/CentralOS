import { LitElement, html, css, unsafeCSS } from 'lit';
import globalStyle from "./index.css?inline";


export class Verificacao_Cabo_UTP extends LitElement {
    // 1. Em vez de @property, use o objeto static properties
    static properties = {
        objeto_os: { type: Object },
        modal_aberto: { type: Boolean },
        objeto_gateway: { type: Object },
        ativo: { type: Object },
    };

    static get styles() {
        return css`${unsafeCSS(globalStyle)}`;
    }

    constructor() {
        super();
        this.objeto_os = {};
        this.modal_aberto = false;
        this.objeto_utp = [];
        this.ativo = {};
        let acao = null;
    }

    // Executado assim que o componente é renderizado na tela
    firstUpdated() {

    }
    connectedCallback() {
        super.connectedCallback(); // ⚠️ Sempre chame o super PRIMEIRO no Lit
        this.objeto_utp = this.objeto_os.OS.conferencia_tecnica.cabos_utp
    }

    _Fechar_Modal = () => {
        this.modal_aberto = false;
    }

    _Abrir_Modal_Novo = (e, tipo) =>{
        //Criamos um novo Objeto de Cabo para adicionar a lista posteriormente!
        this.ativo = {
			cabo: tipo === "WAN"? tipo:null, 
			checagens: [true, true, true], 
			anexo_cabos: false,
			observacao: null,
		}
        this.acao = false;
        this.modal_aberto = true;
    }
    _Abrir_Modal_Editar = (e, chave) =>{
        this.ativo = this.objeto_utp[chave];
        this.acao = true;
        this.modal_aberto = true;
    }

    _Salvar_data = (e, acao) => {
        
        const Nome = this.renderRoot?.querySelector("#nome-cabo").value;
        const Observacao = this.renderRoot?.querySelector("#observacao-cabo").value;
        const Giga = this.renderRoot?.querySelector("#checagem-giga").checked;
        const Powermitter = this.renderRoot?.querySelector("#checagem-powermitter").checked;
        const Ping = this.renderRoot?.querySelector("#checagem-ping").checked;
        const Anexo = this.renderRoot?.querySelector("#anexo-cabo-utp input[name='anexo-cabo-utp']:checked").value;
        
        this.ativo.cabo = Nome;
        this.ativo.checagens[0] = Giga;
        this.ativo.checagens[1] = Powermitter;
        this.ativo.checagens[2] = Ping;
        this.ativo.anexo_cabos = Anexo==="true"?true:false;
        this.ativo.observacao = Observacao;
        
        if (!acao) {
            this.objeto_utp.push(this.ativo);
            this.ativo = {};
        } 
        this.objeto_os.salvar_os_localstorage();
        this._Fechar_Modal();
    }

    _Deletar_Item = (e, chave) => {
        // Filtra o array mantendo apenas os itens que têm o índice DIFERENTE do que queremos remover
        this.objeto_utp = this.objeto_utp.filter((_, index) => index !== chave);
        this.objeto_os.OS.conferencia_tecnica.cabos_utp = this.objeto_utp

        this.objeto_os.salvar_os_localstorage();

        this.objeto_utp = this.objeto_os.OS.conferencia_tecnica.cabos_utp;
        this.requestUpdate();
    }

    render() {
        return html`
            <!--Retorno renderizado-->
            <br>
            <h2>Cabos de Rede Testados</h2>
            <div class="form-group" style="margin-top: 10px; flex-direction:row;gap:1rem;">
                <button 
                    @click="${(e)=>this._Abrir_Modal_Novo(e, "WAN")}"
                    type="button" class="form-button">WAN</button>
                <button 
                    @click="${(e)=>this._Abrir_Modal_Novo(e, "Outro")}"
                    type="button" class="form-button">Outro</button>
            </div>
            
            <div class="container-lista">
                ${this.objeto_utp.map((item, chave) => html`
                <div class="container-item">
                    <div 
                        @click="${(e)=> this._Abrir_Modal_Editar(e, chave)}"
                        style="flex:1">
                        <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 143.933 143.933"><path d="M-275.878 791.584c-12.669-2.656-22.526-12.758-24.568-25.177l-.222-1.353 5.948.098 5.948.098.828 2.37c2.107 6.033 7.277 10.761 13.297 12.162 2.33.542 7.095.535 9.13-.013 6.183-1.665 10.963-6.119 13.236-12.331l.931-2.546.1-47.544c.091-43.383.15-47.588.682-48.029.423-.35 1.855-.483 5.22-.483 4.464 0 4.66.031 5.334.862.686.848.697 1.717.581 48.387l-.118 47.524-.792 2.981c-2.82 10.614-10.31 18.644-20.505 21.988-3.037.996-3.947 1.129-8.423 1.228-2.76.061-5.733-.038-6.607-.222zm-33.604-30.118c-1.132-.731-2.62-3.227-2.62-4.393 0-.535.53-.604 4.647-.604 4.227 0 4.68-.063 5.018-.693.48-.897.474-.945-.193-1.611-.455-.456-1.475-.563-5.346-.563h-4.784l-.388-1.81c-.731-3.41-.987-3.208 4.068-3.208 4.176 0 4.471-.046 4.69-.734.478-1.51-.306-1.775-5.24-1.775-5.2 0-4.556.404-5.28-3.315l-.33-1.703h4.423c4.008 0 4.46-.065 4.796-.693.48-.897.474-.945-.193-1.611-.453-.453-1.456-.563-5.129-.563h-4.565l-.341-2.061-.34-2.061h43.609l-.235 1.569c-.398 2.654-.126 2.523-5.46 2.632-4.167.086-4.912.189-5.25.727-.288.457-.288.798 0 1.255.336.534 1.07.642 4.965.727l4.57.101-.249 1.659c-.526 3.51-.219 3.337-5.889 3.337-4.561 0-5.021.059-5.214.666-.116.367-.11.931.014 1.255.194.505.91.588 5.07.588h4.846l-.233 1.165c-.129.64-.331 1.77-.45 2.509l-.215 1.344h-4.767c-3.856 0-4.875.107-5.33.563-.667.666-.673.714-.193 1.61.338.632.79.694 5.025.694h4.653l-.236.986c-.357 1.489-1.038 2.68-2.101 3.674l-.959.896-13.86.09c-13.472.088-13.893.07-15.004-.649m-7.193-30.843c-1.761-.871-2.708-2.053-3.27-4.082-.266-.963-.397-7.5-.399-19.912l-.002-18.478.89-1.772c.516-1.028 1.446-2.15 2.213-2.67 1.277-.864 1.555-.9 8.06-1.007l6.736-.11.101 15.55.1 15.55.882 1.285c3.357 4.898 10.859 4.45 13.545-.809.798-1.562.807-1.73.807-16.556v-14.978l6.182.008c7.083.01 8.374.353 10.167 2.703l1.034 1.355.106 19.383c.058 10.66.009 19.91-.108 20.555-.264 1.458-2.116 3.615-3.655 4.258-.927.387-5.228.484-21.51.484-19.98 0-20.38-.015-21.88-.757zm19.375-15.596c-2.522-1.244-2.425-.464-2.539-20.484-.093-16.37-.046-18.137.51-19.307.927-1.955 2.383-2.705 4.931-2.54 1.895.121 2.237.27 3.316 1.447l1.202 1.312v18.595c0 18.314-.01 18.61-.748 19.547-1.55 1.969-4.358 2.571-6.672 1.43m-18.028-45.967v-11.155l1.29-1.427c.753-.834 1.834-1.579 2.598-1.791.792-.22 7.47-.365 16.914-.366 21.889-.002 20.192-1.235 20.342 14.767l.104 11.133-1.135-.227c-.624-.125-3.534-.227-6.466-.227h-5.332l-.008-2.06c-.009-2.584-.91-4.631-2.677-6.088-3.065-2.527-7.37-2.444-10.298.197-1.844 1.664-2.429 3.058-2.429 5.789v2.162h-5.331c-2.933 0-5.836.1-6.452.224l-1.12.224zm8.154-3.555c.628-.799.56-3.699-.11-4.655-.357-.51-.93-.796-1.592-.796-1.36 0-2.15 1.156-2.15 3.143 0 2.74 2.387 4.171 3.852 2.308zm6.462.443c.678-.476.796-.89.796-2.796 0-2.476-.369-3.098-1.838-3.098-1.52 0-2.104.854-2.104 3.072 0 1.468.176 2.122.716 2.663.863.862 1.377.896 2.43.159m7.248-.16c.54-.54.717-1.194.717-2.662 0-2.218-.585-3.072-2.105-3.072-1.47 0-1.838.622-1.838 3.098 0 1.906.118 2.32.797 2.796 1.052.737 1.566.703 2.429-.16m7.005-.162c1.76-1.76.89-5.572-1.27-5.572-1.38 0-2.151 1.161-2.151 3.237 0 1.667.46 2.618 1.434 2.966.916.327 1.081.275 1.987-.631m6.894.322c.659-.462.796-.899.796-2.533 0-2.524-.443-3.361-1.779-3.361-1.613 0-2.164.822-2.164 3.231 0 1.768.128 2.194.797 2.663.438.306.967.557 1.175.557s.736-.25 1.175-.557" style="fill:var(--text-color);stroke-width:1" transform="translate(351.828 -651.095)"/></svg>
                    </div>
                    <div style="flex:7">
                        <div class="container-upt-item">
                            <h4
                                @click="${(e)=> this._Abrir_Modal_Editar(e, chave)}"
                                >${item.cabo}</h4>
                            <button
                                @click="${(e)=>this._Deletar_Item(e, chave)}"
                                type="button" class="botao-close">–</button>
                        </div>
                    </div>
                </div>
                    `)}
                
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
                        <h3>Editar Cabo de Rede</h3>
                        <br>
                        
                        <input
                            style="margin-top:.5rem; margin-bottom:.8rem;"
                            type="text" 
                            placeholder="Qual o objetivo do cabo?"
                            ?disabled="${this.ativo.cabo === "WAN"? true:false}"
                            id="nome-cabo" name="nome-cabo" .value="${this.ativo.cabo}" class="form-input">
                        
                        <textarea
                            id="observacao-cabo"
                            name="message"
                            style="margin-bottom:.8rem;"
                            style="border-left: 5px solid #ff0000;"
                            rows="5"
                            class="form-textarea"
                            .value="${this.ativo.observacao}"
                            placeholder="Adicione aqui qualquer observação relacionado ao cabo de rede testado!"></textarea>

                        <div style="margin-bottom:.8rem; display: flex; flex-direction: row; gap: 1rem; align-items: center;  justify-content: center;">
                            <div style="display: flex; flex-direction: column; gap: 1rem; align-items: center;  justify-content: flex-start;">
                                <p>Cabo 100/1000</p>
                                <label class="toggle-switch">
                                    <input @change=""
                                    id="checagem-giga" 
                                    ?checked="${this.ativo.checagens[0]}"
                                    type="checkbox">
                                    <div class="toggle-switch-background">
                                        <div class="toggle-switch-handle"></div>
                                    </div>
                                </label>
                            </div>
                            <div style="display: flex; flex-direction: column; gap: 1rem; align-items: center;  justify-content: flex-start;">
                                <p>Teste no Powermitter</p>
                                <label class="toggle-switch">
                                    <input @change=""
                                    id="checagem-powermitter" 
                                    ?checked="${this.ativo.checagens[1]}"
                                    type="checkbox">
                                    <div class="toggle-switch-background">
                                        <div class="toggle-switch-handle"></div>
                                    </div>
                                </label>
                            </div>
                            <div style="display: flex; flex-direction: column; gap: 1rem; align-items: center;  justify-content: flex-start;">
                                <p>Teste de Ping</p>
                                <label class="toggle-switch">
                                    <input @change=""
                                    id="checagem-ping" 
                                    ?checked="${this.ativo.checagens[2]}"
                                    type="checkbox">
                                    <div class="toggle-switch-background">
                                        <div class="toggle-switch-handle"></div>
                                    </div>
                                </label>
                            </div>
                        </div>
                                             

                        <div class="form-group">
                            <label for="cars" class="form-label">Foto do Cabo Anexado:</label>

                            <div id="anexo-cabo-utp" class="radio-input">
                                <label>
                                    <input ?checked="${this.ativo.anexo_cabos === true ? true : false}" value="true" name="anexo-cabo-utp" id="value-1" type="radio" />
                                    <span>S i m</span>
                                </label>
                                <label>
                                    <input ?checked="${this.ativo.anexo_cabos === false ? true : false}" value="false" name="anexo-cabo-utp" id="value-2" type="radio" />
                                    <span>N ã o</span>
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
               
            </div>
        `;
    }
}

// 2. Em vez de @customElement, use o registro manual
customElements.define('verificacao-utp', Verificacao_Cabo_UTP);