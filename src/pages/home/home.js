import { LitElement, html, css, unsafeCSS } from 'lit';

import { Menu_Inferior } from '../../components/menu_inferior/menu_inferior';

import globalStyle from "./home.css?inline";

//Componentes
import { BotaoTema } from '../../components/btn_thema/btn-tema';

import { Ordem_Servico_Completa } from '../../model/objeto_os_completa';

export class Home_Page extends LitElement {
    // 1. Em vez de @property, use o objeto static properties
    static properties = {
        nome: { type: String },
        url_config: { type: String },

    };



    static get styles() {
        return css`${unsafeCSS(globalStyle)}`;
    }

    constructor() {
        super();
        this.url_config = ''
        console.log(Ordem_Servico_Completa)


    }

    render() {
        return html`
            <!--Retorno renderizado-->
            
            <header class="header-superior">
                <img class="logo" src="letter-logo.svg" alt="letter-logo">
                <div class="item-sync">
                    <p style="margin-right:.4rem;">Em Aberto</p>
                    <img class="logo-sync" src="sync.svg" alt="letter-logo">
                </div>
                
            </header>
            
            <article>
                <!--Dashboard Básica-->
                <div id="dashboard">
                    <div class="coluna">
                        <p class="dash-titulo">Hoje</p>
                        <p class="dash-value">0</p>
                    </div>
                    <div class="coluna">
                        <p class="dash-titulo">Semanal</p>
                        <p class="dash-value">0</p>
                    </div>
                    <div class="coluna">
                        <p class="dash-titulo">Mensal</p>
                        <p class="dash-value">0</p>
                    </div>
                </div>
                
                <!--OS em Andamento!-->
                <div id="andamento">
                    <p>Script em Aberto!</p>
                    <a>
                        Continuar Script...
                    </a>
                    
                </div>

                <!-- Botões de Ações-->
                <div id="acoes"> 
                    <a href="/addos" class="coluna-acoes">
                        <p>adicionar OS</p>
                        <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 143.93 143.93"><path d="M-279.86 654.1a69 69 0 0 0-68.95 68.96 69 69 0 0 0 68.95 68.95 69 69 0 0 0 68.95-68.95 69 69 0 0 0-68.95-68.95m0 6.62a62.3 62.3 0 0 1 62.34 62.34 62.3 62.3 0 0 1-62.34 62.34 62.3 62.3 0 0 1-62.34-62.34 62.3 62.3 0 0 1 62.34-62.34m-1.39 13.72a3.3 3.3 0 0 0-3.3 3.3v43.1h-43.1a3.3 3.3 0 0 0-3.3 3.3 3.3 3.3 0 0 0 3.3 3.31h43.1v43.09a3.3 3.3 0 0 0 3.3 3.3 3.3 3.3 0 0 0 3.3-3.3v-43.09h43.1a3.3 3.3 0 0 0 3.3-3.3 3.3 3.3 0 0 0-3.3-3.32h-43.1v-43.08a3.3 3.3 0 0 0-3.3-3.31" style="baseline-shift:baseline;display:inline;overflow:visible;opacity:1;vector-effect:none;stroke-linecap:round;stroke-miterlimit:3.9;stop-color:#000;stop-opacity:1" transform="translate(351.83 -651.1)"/></svg>
                    </a> 
                    <a class="coluna-acoes">
                        <p>Histórico Local</p>
                        <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 143.93 143.93"><path d="M-292.56 792.52c-9.23-.92-19.84-2.92-25.66-4.83-7.29-2.38-14.41-6.68-17-10.25l-1.62-2.24v-51.27c0-42.08.14-51.59.77-53.08 2.74-6.46 15.22-12.64 30.82-15.3 30.42-5.16 66.14-.23 77.87 10.74 4.85 4.54 4.49-.13 4.49 57.52v51.22l-1.51 2.17c-1.94 2.8-8.8 7.3-14.44 9.48-10.16 3.91-21.36 5.63-38.49 5.87-7.13.1-13.99.1-15.23-.03m35.82-8.67c11.41-1.99 21.62-5.8 25.23-9.4 1.25-1.25 1.29-1.57 1.29-12.36 0-6.09-.2-10.97-.43-10.85-12.65 6.5-25.17 9.25-44.7 9.84-20.4.62-39.02-2.36-50.32-8.05a43 43 0 0 0-4.1-1.92c-.17 0-.3 4.66-.3 10.35 0 9.81.07 10.45 1.27 12.22 3.22 4.72 17.18 9.42 33.42 11.25 2.48.28 10.6.43 18.05.33 10.74-.15 15-.44 20.6-1.41m8.11-8.74c-3.84-1.65-4.75-5.76-1.96-8.89 1.35-1.51 2.04-1.83 4-1.83 1.97 0 2.66.32 4.01 1.83 2.19 2.44 2.22 5.13.09 7.4-1.9 2.01-3.82 2.48-6.14 1.49m-8.1-22.86c11.38-1.97 21.6-5.78 25.22-9.39 1.25-1.25 1.29-1.57 1.29-12.36 0-6.09-.2-10.97-.43-10.85-13.6 6.98-28.53 10.03-49.21 10.03-18.32 0-34.28-2.8-45-7.9l-4.65-2.2v10.9c0 12.47 0 12.45 5.03 15.2 6.08 3.3 15.9 5.94 27.7 7.45 9.12 1.17 31 .68 40.04-.88m7.39-9.26c-4.9-2.7-2.85-10.5 2.76-10.5 2.86 0 5.64 2.76 5.64 5.6a5.7 5.7 0 0 1-8.4 4.9m-7.4-22.33c8.93-1.55 18.3-4.62 22.6-7.41a67 67 0 0 0 3.46-2.32c.17-.24.76-24.7.59-24.7-.08 0-1.48.76-3.1 1.67-6.09 3.44-18.22 6.55-30.88 7.94-7.6.83-23.9.82-31.87-.02-12.27-1.29-25.07-4.65-31.05-8.15a18 18 0 0 0-2.76-1.43c-.18 0-.32 5.01-.32 11.14 0 10.02.11 11.32 1.1 12.93 2.83 4.65 17.39 9.61 33.6 11.44 2.47.28 10.6.43 18.04.33 10.76-.15 15-.44 20.6-1.42m8.07-10.45c-5-2.1-4.59-8.7.65-10.42 4.98-1.65 9.26 4.77 5.8 8.71a5.7 5.7 0 0 1-6.45 1.7m-19.19-21.43c15.27-.86 32.74-6.06 36.53-10.88 2.38-3.02.66-6.5-4.5-9.13-20.86-10.6-67.95-10.53-88.21.14-7.28 3.84-7.4 7.94-.36 12.14 3.32 1.98 13.47 5.1 20.62 6.35 6.93 1.2 21.08 2.19 27.02 1.87z" style="stroke-width:1" transform="translate(351.83 -651.1)"/></svg>
                    </a> 
                </div>
             
            </article>

            <menu-inferior></menu-inferior>
        `;
    }
}

// 2. Em vez de @customElement, use o registro manual
customElements.define('home-page', Home_Page);