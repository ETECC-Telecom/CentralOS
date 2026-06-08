import { LitElement, html, css, unsafeCSS } from 'lit';
import globalStyle from "./page_os_completa.css?inline";


export class Page_OS_Completa extends LitElement {
    // 1. Em vez de @property, use o objeto static properties
    static properties = {
        nome: { type: String },
        url_config: { type: String }
    };

    static get styles() {
        return css`${unsafeCSS(globalStyle)}`;
    }

    constructor() {
        super();
        this.url_config = ''
    }

    render() {
        return html`
            <!--Retorno renderizado-->
            <h1>OLá carai!</h1>
        `;
    }
}

// 2. Em vez de @customElement, use o registro manual
customElements.define('page-os-completa', Page_OS_Completa);