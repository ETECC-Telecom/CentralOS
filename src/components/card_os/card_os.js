import { LitElement, html, css, unsafeCSS } from 'lit';
import globalStyle from "./card_os.css?inline";

export class Card_OS extends LitElement {
    // 1. Em vez de @property, use o objeto static properties
    static properties = {
        nome: { type: String },
        url_config: { type: String },
        titulo: { type: String },
        descricao: { type: String },
        icone: { type: Object },
        cor_borda: { type: String },
        link: { type: String },
    };

    static get styles() {
        return css`${unsafeCSS(globalStyle)}`;
    }

    constructor() {
        super();
        this.url_config = ''
        this.titulo = "valor padrão"
        this.descricao = "valor padrão"
        this.icone = "valor padrão"
        this.link = "/"

    }
    
    render() {
        return html`
            <!--Retorno renderizado-->
            <a 
                id="container-card-os" 
                href="/${this.link}" 
                style="border-color: ${this.cor_borda};">
                ${this.icone}
                <div>
                    <h3>${this.titulo}</h3>
                    <p>${this.descricao}</p>
                </div>
            </a>
        `;
    }
}

// 2. Em vez de @customElement, use o registro manual
customElements.define('card-os', Card_OS);