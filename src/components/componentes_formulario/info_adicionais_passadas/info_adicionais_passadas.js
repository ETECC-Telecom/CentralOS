import { LitElement, html, css, unsafeCSS } from 'lit';
import globalStyle from "./index.css?inline";


export class Informacao_Adicionais_Passadas extends LitElement {
    // 1. Em vez de @property, use o objeto static properties
    static properties = {

    };

    static get styles() {
        return css`${unsafeCSS(globalStyle)}`;
    }

    constructor() {
        super();

    }

    // Executado assim que o componente é renderizado na tela
    firstUpdated() {

    }
    connectedCallback() {
        super.connectedCallback(); // ⚠️ Sempre chame o super PRIMEIRO no Lit

    }

    render() {
        return html`
            <!--Retorno renderizado-->
            <h2>Informações Adicionais Passadas ao Cliente</h2>
        `;
    }
}

// 2. Em vez de @customElement, use o registro manual
customElements.define('informacoes-adicionais-passadas', Informacao_Adicionais_Passadas);