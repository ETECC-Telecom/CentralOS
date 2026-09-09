import { LitElement, html, css, unsafeCSS } from 'lit';
import globalStyle from "./index.css?inline";

import { Header_Page_OS } from '../../components/header_page_os/header_page_os';
import { Menu_Inferior } from '../../components/menu_inferior/menu_inferior';

import { VERSAO } from '../../data/versao';
import { DATA_ATUALIZACAO } from '../../data/versao';
import { CHARGELOG } from '../../data/versao';

export class Page_Sobre extends LitElement {
    // 1. Em vez de @property, use o objeto static properties
    static properties = {
        changelog: { type: Array },
    };

    static get styles() {
        return css`${unsafeCSS(globalStyle)}`;
    }

    constructor() {
        super();
        this.changelog = CHARGELOG;
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
                titulo="SOBRE"
                retorno="/"
            ></header-page-os>
            <main>
                <br>
                <h2>Informações do APP</h2>
                <hr>
                <br>
                <div class="container_sobre">
                    <article>
                        <h3>Detalhes da Versão</h3>
                        <br>
                        <p>v${VERSAO} (Stable)</p>
                        <p>Lançado em: ${DATA_ATUALIZACAO}</p>
                    </article>

                    <article>
                        <h3>Equipe do APP</h3>
                        <br>
                        <ul>
                            <li><a href="https://raphaelanjos27.github.io/Raphael-Page/" target="_blank">Raphael dos Anjos</a> (Desenvolvedor)</li>
                        </ul>
                    </article>

                    <article>
                        <h3>Changelog</h3>
                        <br>
                        ${this.changelog.map((item, index) => {
                            return html`
                                <h4>${item.versao} - ${item.data}</h4>
                                ${item.logs.map(item => {
                                    return html`
                                        <p>${item.tipo === 1? "🟢":item.tipo === 2? "🟡": item.tipo === 3? "🔴": "🟢"} ${item.descricao}</p>
                                        
                                    `
                                })}
                                <br>
                            `
                        })}
                    </article>
                </div>
                <br><br><br><br>
            </main>
            <menu-inferior></menu-inferior>
        `;
    }
}

// 2. Em vez de @customElement, use o registro manual
customElements.define('page-sobre', Page_Sobre);