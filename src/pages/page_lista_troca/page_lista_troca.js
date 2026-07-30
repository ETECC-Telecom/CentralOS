import { LitElement, html, css, unsafeCSS } from 'lit';
import globalStyle from "./page_lista_troca.css?inline";

import { Header_Page_OS } from '../../components/header_page_os/header_page_os';

import { disparar_notificacao } from '../../controller/disparar_notificacao';

//Componentes de Formulário

export class Page_Lista_Troca extends LitElement {
    // 1. Em vez de @property, use o objeto static properties
    static properties = {
        nome: { type: String },
    };

    static get styles() {
        return css`${unsafeCSS(globalStyle)}`;
    }

    constructor() {
        super();

    }

    async connectedCallback() {
        super.connectedCallback(); // ⚠️ Sempre chame o super PRIMEIRO no Lit

    }

    // Executado assim que o componente é renderizado na tela
    firstUpdated() {
    }

    render() {
        return html`
            <!--Retorno renderizado-->
            <header-page-os
                titulo="Controle de Troca de Ativos"
                retorno="/"
            ></header-page-os>
           
            <!-- Campo que irá conter os fomulários -->
            <main id="container-form">
                
                <br><br><br>
            </main>
           
        `;
    }
}

// 2. Em vez de @customElement, use o registro manual
customElements.define('page-lista-troca', Page_Lista_Troca);