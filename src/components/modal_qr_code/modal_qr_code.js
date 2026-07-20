import { LitElement, html, css, unsafeCSS } from 'lit';
import globalStyle from "./index.css?inline";
import { Leitor_QR_Code } from '../leitor_qr_code/leitor_qr_code';

export class Modal_QR_Code extends LitElement {
    // 1. Em vez de @property, use o objeto static properties
    static properties = {
        exibir_modal: { type: Boolean },
        exibir_load: { type: Boolean },
        url_consulta: { type: String },
        texto_load: { type: String },
        objeto_os: { type: Object }
    };

    static get styles() {
        return css`${unsafeCSS(globalStyle)}`;
    }

    constructor() {
        super();
        this.exibir_modal = false;
        this.url_consulta = null;
        this.exibir_load = false;
        this.texto_load = "Esperando Leitura!"
        this.objeto_os = {}
    }

    // Executado assim que o componente é renderizado na tela
    firstUpdated() {

    }
    connectedCallback() {
        super.connectedCallback(); // ⚠️ Sempre chame o super PRIMEIRO no Lit

    }
   
    _notificar_fechamento() {
        const evento = new CustomEvent('fechar_modal', {
            detail: { valor: false }, // 📦 Dados que o pai vai receber
            bubbles: true,               // 🫧 Permite o evento subir na árvore do DOM
            composed: true               // 🛂 "Passaporte" para atravessar o Shadow DOM
        });

        this.dispatchEvent(evento);
    }

    async _iniciar_estruturacao(e, chave) {
        this.texto_load = "Carregando os dados!"
        this.exibir_load = true;

        //Inicia a função do objeto de OS que ira fazer a requisição ao servidor. 

        await this.objeto_os.Carregar_dados_Externos(chave)

        //Finaliza o procedimento
        this.texto_load = "Finalizado!"
        this.exibir_load = false;
    }

    render() {
        return html`
            <!--Retorno renderizado-->
            ${this.exibir_modal ? html`
                <div
                    class="modal-backdrop"
                    @click=${this._notificar_fechamento}
                >
                    <div
                        class="modal-content"
                        
                        @click=${(e) => e.stopPropagation()}
                    >
                        <h2>Aponte a Câmera para o QRCode</h2>
                        <br>
                        <br>
                        <div style="display:flex; flex-direction: column; gap:1rem; align-items: center;">
                            <h3>${this.texto_load}</h3>
                            ${this.exibir_load ? html`
                                <div class="loader"></div>    
                            `: ""}
                        </div>
                        <leitor-qr-code
                            @qr-scanned="${e => this._iniciar_estruturacao(e, e.detail.result)}"    
                        ></leitor-qr-code>

                    </div>
                </div>
            ` : ''}
        `;
    }
}

// 2. Em vez de @customElement, use o registro manual
customElements.define('modal-qr', Modal_QR_Code);