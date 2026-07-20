import { LitElement, html, css, unsafeCSS } from 'lit';
import globalStyle from "./index.css?inline";


export class Modal_IA extends LitElement {
    // 1. Em vez de @property, use o objeto static properties
    static properties = {
        exibir: { type: Boolean },
        legenda: { type: String },
        liberado: { type: Boolean },
        color: { type: String },
        legenda_botton: { type: String }
    };

    static get styles() {
        return css`${unsafeCSS(globalStyle)}`;
    }

    constructor() {
        super();
        this.exibir = false;
        this.liberado = false;
        this.legenda = ""
        this.color = "white";
        this.legenda_botton = "";

    }

    // Executado assim que o componente é renderizado na tela
    firstUpdated() {

    }
    connectedCallback() {
        super.connectedCallback(); // ⚠️ Sempre chame o super PRIMEIRO no Lit

    }


    _Notificar_Fechar_Modal() {
        if (this.liberado) {
            const evento = new CustomEvent('fechar_modal', {
                detail: { retorno: false }, // 📦 Dados que o pai vai receber
                bubbles: true,               // 🫧 Permite o evento subir na árvore do DOM
                composed: true               // 🛂 "Passaporte" para atravessar o Shadow DOM
            });

            this.dispatchEvent(evento);
        }
    }

    render() {
        return html`
            <!--Retorno renderizado-->
            ${this.exibir ? html`
            
            <div
                class="modal-backdrop"
                @click="${this._Notificar_Fechar_Modal}">
                
                <div class="loader">
                    <svg width="100" height="100" viewBox="0 0 100 100">
                        <defs>
                        <mask id="clipping">
                            <polygon points="0,0 100,0 100,100 0,100" fill="black"></polygon>
                            <polygon points="25,25 75,25 50,75" fill="white"></polygon>
                            <polygon points="50,25 75,75 25,75" fill="white"></polygon>
                            <polygon points="35,35 65,35 50,65" fill="white"></polygon>
                            <polygon points="35,35 65,35 50,65" fill="white"></polygon>
                            <polygon points="35,35 65,35 50,65" fill="white"></polygon>
                            <polygon points="35,35 65,35 50,65" fill="white"></polygon>
                        </mask>
                        </defs>
                    </svg>
                    <div class="box"></div>
                </div>
                <br>
                <h2 style="color:${this.color}">${this.legenda}</h2>

                <h3 style="color:${this.color}">${this.legenda_botton}</h3>
            </div>

            `: ""}
        `;
    }
}

// 2. Em vez de @customElement, use o registro manual
customElements.define('modal-ia', Modal_IA);