import { LitElement, html, css, unsafeCSS } from 'lit';
import globalStyle from "./index.css?inline";


export class Card_Lista_OS extends LitElement {
    // 1. Em vez de @property, use o objeto static properties
    static properties = {
        nome: { type: String },
        categoria: { type: String },
        data: { type: String },
        id: { type: String },
        bg: { type: String },
    };

    static get styles() {
        return css`${unsafeCSS(globalStyle)}`;
    }

    constructor() {
        super();
        this.nome = "Não Informado";
        this.categoria = "Não Informado";
        this.data = "00/00/0000"
        this.id = "0";

    }

    // Executado assim que o componente é renderizado na tela
    firstUpdated() {

    }

    connectedCallback() {
        super.connectedCallback(); // ⚠️ Sempre chame o super PRIMEIRO no Lit
        switch (this.categoria) {
            case 'completa':
                this.bg = "#47ac62"
                break;
            case 'retencao':
                this.bg = "#2a79d7"
                break;
            case 'los':
                this.bg = "#8b3db3"
                break;
            case 'retirada':
                this.bg = "#ee9015"
                break;
            case 'chip':
                this.bg = "#c83737"
                break;
            default:
                this.bg = "#333333"
                break;
        }
    }

    _ver_os() {
        const evento = new CustomEvent('ver-os', {
            detail: { id: this.id, categoria: this.categoria}, // 📦 Dados que o pai vai receber
            bubbles: true,               // 🫧 Permite o evento subir na árvore do DOM
            composed: true               // 🛂 "Passaporte" para atravessar o Shadow DOM
        });

        this.dispatchEvent(evento);
    }
    _editar_os() {
        const evento = new CustomEvent('editar-os', {
            detail: { id: this.id, categoria: this.categoria}, // 📦 Dados que o pai vai receber
            bubbles: true,               // 🫧 Permite o evento subir na árvore do DOM
            composed: true               // 🛂 "Passaporte" para atravessar o Shadow DOM
        });

        this.dispatchEvent(evento);
    }
    _excluir_os() {
        const evento = new CustomEvent('excluir-os', {
            detail: { id: this.id}, // 📦 Dados que o pai vai receber
            bubbles: true,               // 🫧 Permite o evento subir na árvore do DOM
            composed: true               // 🛂 "Passaporte" para atravessar o Shadow DOM
        });

        this.dispatchEvent(evento);
    }

    render() {
        return html`
            <!--Retorno renderizado-->

            <div style="box-sizing: border-box; padding: 8px;">
                <div class="container-itens">
                    <div style="display:flex; align-items: center; gap:1rem">
                        <span style="background-color:${this.bg}"> </span>
                        <h4>${this.nome}</h4>
                        <h4>${this.data}</h4>
                    </div>
                    <div>
                        <p class="tag-line" style="display:flex; gap:.5rem; align-items: center; background-color:${this.bg}">
                            <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="1rem" height="1rem" viewBox="0 0 126.235 126.257"><path d="M-270.473 786.043c-1.358-.245-2.75-.85-4.033-1.75-.707-.497-61.221-61.015-62.308-62.312-2.233-2.666-4.394-7.084-5.456-11.152-.769-2.948-.708-1.011-.708-22.638v-19.389l.224-.841c.424-1.586 1.153-2.953 2.278-4.268 1.607-1.877 3.67-3.12 5.95-3.586.909-.186 1.622-.191 20.152-.158 18.95.033 19.223.037 20.225.243 4.724.976 9.21 2.926 12.725 5.53.762.566 6.652 6.39 26.61 26.318a34478 34478 0 0 0 30.281 30.21c2.558 2.54 4.934 4.968 5.28 5.396 1.713 2.113 2.509 4.307 2.509 6.915 0 2.503-.653 4.549-2.043 6.398-.286.38-10.004 10.187-21.597 21.794-21.92 21.946-21.51 21.55-23.159 22.386-.8.404-1.849.744-2.83.916-1.051.184-3.048.179-4.1-.012zm-44.588-88.878c2.87-.352 5.246-1.717 7.153-4.108 2.77-3.472 2.942-8.7.408-12.428-1.176-1.73-3.245-3.382-5.074-4.049-2.132-.777-4.634-.873-6.77-.26-3.545 1.018-6.451 4.015-7.379 7.608-.632 2.45-.269 5.486.918 7.664 2.143 3.932 6.344 6.112 10.744 5.573" style="fill:var(--btn-text-background-color);stroke-width:1" transform="translate(342.98 -659.933)"/></svg>
                            ${this.categoria}
                        </p>
                    </div>
                    <div>
                        <div class="form-group" style="flex-direction:row;gap:.5rem;">
                            <button 
                                @click="${this._ver_os}"
                                type="button" style="background-color: var(--btn-background-color)" class="form-button">Ver</button>
                            <button 
                                @click="${this._editar_os}"
                                type="button" style="background-color: var(--btn-background-color)" class="form-button">Editar</button>
                            <button 
                                @click="${this._excluir_os}"
                                type="button" class="form-button">Excluir</button>
                        </div>
                    </div>
                </div>
            
            </div>
        `;
    }
}

// 2. Em vez de @customElement, use o registro manual
customElements.define('card-lista_os', Card_Lista_OS);