import { LitElement, html, css, unsafeCSS } from 'lit';
import { Router } from '@lit-labs/router';

//Import das páginas
import { Home_Page } from './pages/home/home';
import { ADD_OS } from './pages/add_os/add_os';
import { Page_OS_Completa } from './pages/page_os_completa/page_os_completa';
import { Page_OS_Los } from './pages/page_os_los/page_os_los';
import { Page_OS_Chip } from './pages/page_os_chip/page_os_chip';
import { Page_OS_Retencao } from './pages/page_os_retencao/page_os_retencao';
import { Page_OS_Retirada } from './pages/page_os_retirada/page_os_retirada';

import { Gerenciar_Scripts } from './pages/gerenciar_scripts/gerenciar_scripts';
import { Page_Lista_OS } from './pages/page_lista_os/page_lista_os';

//Import dos Componentes
import { Notificacao } from './components/notificacao/notificacao';

import { Page_Relatorio } from './pages/page_relatorio/page_relatorio';

// Detecta se estamos no GitHub Pages ou Localhost
const BASE_PATH = window.location.hostname.includes('github.io')
    ? '/Scripts-Lideran-a-Moto'
    : '';

export class Main extends LitElement {
    static properties = {
        // Não precisamos mais de _routeView aqui, o Router cuida disso
    };

    constructor() {
        super();

        // No JS puro, declaramos o router diretamente no 'this'
        // O primeiro argumento 'this' conecta o router ao ciclo de vida do Lit
        this._router = new Router(this, [
            {
                path: `${BASE_PATH}/`,
                render: () => html`<home-page url_config="${BASE_PATH}"></home-page>`,
            },
            {
                path: `${BASE_PATH}/addos`,
                render: () => html`<add-os></add-os>`,
            },
            {
                path: `${BASE_PATH}/gerenciar_script`,
                render: () => html`<gerenciar-script></gerenciar-script>`,
            },
            {
                path: `${BASE_PATH}/lista_os`,
                render: () => html`<page-lista-os></page-lista-os>`,
            },
            {
                path: `${BASE_PATH}/iniciar_os_completa/:tipo`,
                render: (params) => html`<page-os-completa .tipo="${params.tipo}"></page-os-completa>`,
            },
            {
                path: `${BASE_PATH}/iniciar_os_completa`,
                render: () => html`<page-os-completa></page-os-completa>`,
            },
            {
                path: `${BASE_PATH}/iniciar_os_los`,
                render: () => html`<page-os-los></page-os-los>`,
            },
            {
                path: `${BASE_PATH}/iniciar_os_los/:tipo`,
                render: (params) => html`<page-os-los .tipo="${params.tipo}"></page-os-los>`,
            },
            {
                path: `${BASE_PATH}/iniciar_os_retencao`,
                render: () => html`<page-os-retencao></page-os-retencao>`,
            },
            {
                path: `${BASE_PATH}/iniciar_os_retencao/:tipo`,
                render: (params) => html`<page-os-retencao .tipo="${params.tipo}"></page-os-retencao>`,
            },

            {
                path: `${BASE_PATH}/iniciar_os_retirada/:tipo`,
                render: (params) => html`<page-os-retirada .tipo="${params.tipo}"></page-os-retirada>`,
            },
            {
                path: `${BASE_PATH}/iniciar_os_retirada`,
                render: () => html`<page-os-retirada></page-os-retirada>`,
            },

            {
                path: `${BASE_PATH}/iniciar_os_chip/:tipo`,
                render: (params) => html`<page-os-chip .tipo="${params.tipo}"></page-os-chip>`,
            },
            {
                path: `${BASE_PATH}/iniciar_os_chip`,
                render: () => html`<page-os-chip></page-os-chip>`,
            },
            {
                path: `${BASE_PATH}/relatorio_os`,
                render: () => html`<page-relatorio></page-relatorio>`,
            },

            {
                path: '/perfil/:name',
                // Os parâmetros da URL chegam como um objeto no primeiro argumento
                render: (params) => html`<h2>👤 Usuário: ${params.name}</h2>`,
            },
            {
                // Rota de "Catch-all" para erro 404
                path: `${BASE_PATH}/*`,
                render: () => html`<erro-404></erro-404>`,
            }
        ]);
    }

    static styles = [
        // Transformamos o CSS importado em um objeto que o Lit entende
        css`
        /* Estilo padrão: Celulares e telas pequenas */
        .meu-container {
          width: 100%;
          margin-left: auto;
          margin-right: auto;
          box-sizing: border-box; /* Garante que o padding não quebre o tamanho de 100% */
        }

        /* Telas grandes: Desktops (a partir de 1024px de largura) */
        @media (min-width: 1024px) {
          .meu-container {
            max-width: 50%;
            padding-left: 0;  /* Opcional: remove o espaçamento extra no desktop */
            padding-right: 0;
          }
        }
      `
    ];


    render() {
        return html`
        <componente-notificacao></componente-notificacao>
        <main class="meu-container">
            ${this._router.outlet()}
        </main>
    `;
    }
}

customElements.define('main-element', Main);