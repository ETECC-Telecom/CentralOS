import { LitElement, html, css, unsafeCSS } from 'lit';
import globalStyle from "./index.css?inline";
import { Header_Page_OS } from '../../components/header_page_os/header_page_os';
import { Menu_Inferior } from '../../components/menu_inferior/menu_inferior';


export class Page_Lideranca extends LitElement {
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
            <header-page-os
                titulo="Página da Liderança"
                retorno="/"
            ></header-page-os>
            
            <!-- Campo que irá conter os elementos -->
            <article>

            </article>

            <menu-inferior></menu-inferior>
        `;
    }
}

// 2. Em vez de @customElement, use o registro manual
customElements.define('page-lideranca', Page_Lideranca);