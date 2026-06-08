import { LitElement, html, css, unsafeCSS } from 'lit';
import { Router } from '@lit-labs/router';

//Import das páginas
import { Home_Page } from './pages/home/home';
import { ADD_OS } from './pages/add_os/add_os';
import { Page_OS_Completa } from './pages/page_os_completa/page_os_completa';

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
                path: `${BASE_PATH}/iniciar_os_completa`,
                render: () => html`<page-os-completa></page-os-completa>`,
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
      <main class="meu-container">
        ${this._router.outlet()}
      </main>
    `;
    }
}

customElements.define('main-element', Main);