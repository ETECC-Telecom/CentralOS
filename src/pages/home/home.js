import { LitElement, html, css, unsafeCSS } from 'lit';
import { Cadastrar_Hash } from '../../model/Service_Hash';

import { Menu_Inferior } from '../../components/menu_inferior/menu_inferior';

import globalStyle from "./home.css?inline";

import { Contagen_OS_Dash } from '../../controller/Contagem_OS_Dash';
//Componentes
import { BotaoTema } from '../../components/btn_thema/btn-tema';
import { Card_Continuar_OS } from '../../components/card_continuar_os/card_continuar_os';

import { Botao_Sinc } from '../../components/btn_sinc/btn_sinc';

import Controller_Objeto_OS_Completa from '../../controller/controller_objeto_os_completa';

import { Capturar_Nivel_Lider } from '../../model/Service_Niveis_Usuario';
import { Capturar_Nivel_Treino } from '../../model/Service_Niveis_Usuario';


//Icones
import { Icone_Lideranca } from '../../components/icones/icone_lideranca';
import { Icone_Treinamento } from '../../components/icones/icone_treinamento';

export class Home_Page extends LitElement {
    // 1. Em vez de @property, use o objeto static properties
    static properties = {
        nome: { type: String },
        url_config: { type: String },
        os_em_aberto: { type: Boolean },
        url_nova_os: { type: String },
        os_dash: {type: Object},
        lideranca: {type: Boolean},
        treinamento: {type: Boolean}
    };

    static get styles() {
        return css`${unsafeCSS(globalStyle)}`;
    }

    constructor() {
        super();
        this.os_em_aberto = false;
        this.url_nova_os = ""
        this.os_dash = {"dia":0,"semana":0,"mes":0}
        this.lideranca = false;
        this.treinamento = false;
        Cadastrar_Hash();
    }

    async connectedCallback() {
        super.connectedCallback(); // ⚠️ Sempre chame o super PRIMEIRO no Lit
        this._checar_os_aberta();
        
        //Carregando dados da Dash
        this.os_dash = JSON.parse(localStorage.getItem("dash_os"));
        this.lideranca = Capturar_Nivel_Lider() === "true"? true: false;
        this.treinamento = Capturar_Nivel_Treino() === "true"? true: false;
    }

    _checar_os_aberta = () => {
        const ORDEM = new Controller_Objeto_OS_Completa();
        const tipo_os = ORDEM.verificar_os_localstorage();
        if (tipo_os === null) {
            this.os_em_aberto = false;
        }

        //
        switch (tipo_os) {
            case 'completa':
                //OS Completa
                this.url_nova_os = '/iniciar_os_completa/continue';
                break;
            case 'retencao':
                //OS Retenção
                this.url_nova_os = '/iniciar_os_retencao/continue';
                break;
            case 'retirada':
                //OS Retirada
                this.url_nova_os = '/iniciar_os_retirada/continue';
                break;
            case 'los':
                //OS Encaminhar Externa
                this.url_nova_os = '/iniciar_os_los/continue';
                break;
            case 'chip':
                //OS Encaminhar Externa
                this.url_nova_os = '/iniciar_os_chip/continue';
                break;
            default:
                return
        };

        this.os_em_aberto = true;

    }

    render() {
        return html`
            <!--Retorno renderizado-->
            
            <header class="header-superior">
                <img class="logo" src="letter-logo.svg" alt="letter-logo">
                <btn-sinc></btn-sinc>
                
            </header>
            
            <article>
                <!--Dashboard Básica-->
                <div id="dashboard">
                    <div class="coluna">
                        <p class="dash-titulo">Hoje</p>
                        <p class="dash-value">${this.os_dash?.dia ||0}</p>
                    </div>
                    <div class="coluna">
                        <p class="dash-titulo">Semanal</p>
                        <p class="dash-value">${this.os_dash?.semana ||0}</p>
                    </div>
                    <div class="coluna">
                        <p class="dash-titulo">Mensal</p>
                        <p class="dash-value">${this.os_dash?.mes ||0}</p>
                    </div>
                </div>
                
                <!--OS em Andamento!-->
                ${this.os_em_aberto ? html`
                    <card-continuar-os
                        url_acesso="${this.url_nova_os}"
                        ></card-continuar-os>
                ` : ''}
                <!-- Botões de Ações-->
                <div id="acoes"> 
                    <a href="/addos" class="coluna-acoes">
                        <p>adicionar OS</p>
                        <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 143.93 143.93"><path d="M-279.86 654.1a69 69 0 0 0-68.95 68.96 69 69 0 0 0 68.95 68.95 69 69 0 0 0 68.95-68.95 69 69 0 0 0-68.95-68.95m0 6.62a62.3 62.3 0 0 1 62.34 62.34 62.3 62.3 0 0 1-62.34 62.34 62.3 62.3 0 0 1-62.34-62.34 62.3 62.3 0 0 1 62.34-62.34m-1.39 13.72a3.3 3.3 0 0 0-3.3 3.3v43.1h-43.1a3.3 3.3 0 0 0-3.3 3.3 3.3 3.3 0 0 0 3.3 3.31h43.1v43.09a3.3 3.3 0 0 0 3.3 3.3 3.3 3.3 0 0 0 3.3-3.3v-43.09h43.1a3.3 3.3 0 0 0 3.3-3.3 3.3 3.3 0 0 0-3.3-3.32h-43.1v-43.08a3.3 3.3 0 0 0-3.3-3.31" style="baseline-shift:baseline;display:inline;overflow:visible;opacity:1;vector-effect:none;stroke-linecap:round;stroke-miterlimit:3.9;stop-color:#000;stop-opacity:1" transform="translate(351.83 -651.1)"/></svg>
                    </a> 
                    <a href="/lista_os" class="coluna-acoes">
                        <p>Histórico Local</p>
                        <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 143.93 143.93"><path d="M-292.56 792.52c-9.23-.92-19.84-2.92-25.66-4.83-7.29-2.38-14.41-6.68-17-10.25l-1.62-2.24v-51.27c0-42.08.14-51.59.77-53.08 2.74-6.46 15.22-12.64 30.82-15.3 30.42-5.16 66.14-.23 77.87 10.74 4.85 4.54 4.49-.13 4.49 57.52v51.22l-1.51 2.17c-1.94 2.8-8.8 7.3-14.44 9.48-10.16 3.91-21.36 5.63-38.49 5.87-7.13.1-13.99.1-15.23-.03m35.82-8.67c11.41-1.99 21.62-5.8 25.23-9.4 1.25-1.25 1.29-1.57 1.29-12.36 0-6.09-.2-10.97-.43-10.85-12.65 6.5-25.17 9.25-44.7 9.84-20.4.62-39.02-2.36-50.32-8.05a43 43 0 0 0-4.1-1.92c-.17 0-.3 4.66-.3 10.35 0 9.81.07 10.45 1.27 12.22 3.22 4.72 17.18 9.42 33.42 11.25 2.48.28 10.6.43 18.05.33 10.74-.15 15-.44 20.6-1.41m8.11-8.74c-3.84-1.65-4.75-5.76-1.96-8.89 1.35-1.51 2.04-1.83 4-1.83 1.97 0 2.66.32 4.01 1.83 2.19 2.44 2.22 5.13.09 7.4-1.9 2.01-3.82 2.48-6.14 1.49m-8.1-22.86c11.38-1.97 21.6-5.78 25.22-9.39 1.25-1.25 1.29-1.57 1.29-12.36 0-6.09-.2-10.97-.43-10.85-13.6 6.98-28.53 10.03-49.21 10.03-18.32 0-34.28-2.8-45-7.9l-4.65-2.2v10.9c0 12.47 0 12.45 5.03 15.2 6.08 3.3 15.9 5.94 27.7 7.45 9.12 1.17 31 .68 40.04-.88m7.39-9.26c-4.9-2.7-2.85-10.5 2.76-10.5 2.86 0 5.64 2.76 5.64 5.6a5.7 5.7 0 0 1-8.4 4.9m-7.4-22.33c8.93-1.55 18.3-4.62 22.6-7.41a67 67 0 0 0 3.46-2.32c.17-.24.76-24.7.59-24.7-.08 0-1.48.76-3.1 1.67-6.09 3.44-18.22 6.55-30.88 7.94-7.6.83-23.9.82-31.87-.02-12.27-1.29-25.07-4.65-31.05-8.15a18 18 0 0 0-2.76-1.43c-.18 0-.32 5.01-.32 11.14 0 10.02.11 11.32 1.1 12.93 2.83 4.65 17.39 9.61 33.6 11.44 2.47.28 10.6.43 18.04.33 10.76-.15 15-.44 20.6-1.42m8.07-10.45c-5-2.1-4.59-8.7.65-10.42 4.98-1.65 9.26 4.77 5.8 8.71a5.7 5.7 0 0 1-6.45 1.7m-19.19-21.43c15.27-.86 32.74-6.06 36.53-10.88 2.38-3.02.66-6.5-4.5-9.13-20.86-10.6-67.95-10.53-88.21.14-7.28 3.84-7.4 7.94-.36 12.14 3.32 1.98 13.47 5.1 20.62 6.35 6.93 1.2 21.08 2.19 27.02 1.87z" style="stroke-width:1" transform="translate(351.83 -651.1)"/></svg>
                    </a>
                    <a href="/lista_troca" class="coluna-acoes">
                        <p>Histórico de Trocas</p>
                        <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 143.933 143.933"><path d="M-408.776 658.557a21.4 21.4 0 0 1-7.735-2.539c-1.158-.644-9.098-5.2-17.643-10.123a11809 11809 0 0 0-21.235-12.211c-8.446-4.832-11.833-8.479-13.523-14.562-.595-2.139-.831-53.53-.265-57.544.31-2.201.771-3.623 1.916-5.911 2.47-4.931 4.028-6.15 18.633-14.556 6.821-3.926 16.908-9.738 22.415-12.914s10.95-6.203 12.093-6.727c4.976-2.276 10.367-2.221 15.53.159.949.437 6.231 3.395 11.738 6.572s15.591 8.988 22.408 12.913c13.23 7.617 15.44 9.214 17.824 12.892.699 1.077 1.643 3.097 2.099 4.489l.829 2.53v28.14c0 31.442.132 29.604-2.49 34.61-1.836 3.507-4.758 6.02-11.522 9.909-3.118 1.792-12.66 7.289-21.206 12.214s-16.625 9.539-17.955 10.252c-3.73 2-8.135 2.89-11.911 2.407m12.31-16.971 22.044-12.711c7.976-4.6 15.03-8.778 15.674-9.285s1.46-1.46 1.813-2.116c.608-1.134.64-2.553.64-28.056 0-28.87.04-28.183-1.768-29.833-.83-.757-4.774-3.094-22.056-13.069-21.663-12.504-24.29-13.968-25.444-14.184-.665-.125-1.776-.057-2.47.151-.694.209-5.457 2.809-10.584 5.779a7594 7594 0 0 1-18.645 10.757c-15.824 9.093-17.348 10.037-18.372 11.38l-.963 1.262-.103 26.959c-.07 18.291.014 27.364.263 28.22.513 1.768 1.753 2.733 8.646 6.73 23.42 13.584 36.967 21.372 38.152 21.933 1.008.478 1.955.624 3.506.542 2.01-.105 2.532-.346 9.667-4.46zm-15.063-20.36c-3.979-.659-9.235-2.658-12.339-4.691l-.773-.507 2.81-4.11c1.545-2.26 2.92-4.109 3.055-4.109.134 0 .94.39 1.791.865 2.878 1.608 5.426 2.292 9.244 2.481 4.377.217 7.241-.36 11.05-2.225 3.601-1.765 7.967-6.127 9.76-9.753l1.28-2.59-3.382-.3-3.382-.3 6.174-5.885 6.174-5.884 1.657 1.696c.911.933 3.572 3.717 5.914 6.185l4.257 4.489-3.534.173-3.534.172-.971 2.81c-2.542 7.347-7.355 13.308-13.882 17.19-6.43 3.826-14.46 5.439-21.369 4.293m-25.601-31.14a579 579 0 0 1-5.81-6.187l-1.814-1.985h6.881l.782-2.33c4.518-13.462 16.247-22.16 30.04-22.275 5.982-.05 10.776 1.091 15.987 3.805 1.574.82 2.287 1.38 2.165 1.699-.1.262-1.307 2.142-2.68 4.178a852 852 0 0 0-2.564 3.813c-.036.06-.728-.307-1.536-.817-3.888-2.454-10.255-3.48-15.17-2.443-4.167.879-8.006 2.975-11.077 6.05-2.393 2.397-4.688 5.806-5.31 7.888-.215.721-.125.777 1.259.78.82.001 2.297.1 3.282.218l1.791.215-4.553 4.377c-2.505 2.407-5.257 5.015-6.115 5.796l-1.562 1.419z" style="fill:#000;stroke-width:1" transform="translate(351.828 -651.095)"/><path d="m-278.808 787.286-1.286-1.106-.125-29.033c-.092-21.277.017-29.377.408-30.32 1.107-2.673.451-2.62 32.143-2.62 31.67 0 30.344-.11 31.476 2.623.39.94.499 9.065.407 30.24l-.124 28.957-1.112 1.183-1.111 1.182h-59.39zm54.417-30.757v-23.61h-47.222v47.221h47.222zm-74.5 20.834c-12.902-1.97-23.798-9.876-29.606-21.48-1.84-3.676-3.633-9.63-3.633-12.062 0-.73-.177-1.22-.395-1.085-.217.134-1.537 2.158-2.933 4.499-3.048 5.108-3.885 5.93-6.099 5.993-1.358.038-1.95-.242-3.009-1.427-.77-.863-1.318-1.996-1.318-2.729 0-1.333 10.896-19.976 12.296-21.04.424-.323 1.534-.593 2.468-.6 1.375-.013 3.525 1.086 11.299 5.77 6.361 3.834 9.771 6.162 10.107 6.9.85 1.864.59 3.348-.833 4.772-2.024 2.024-3.572 1.804-8.646-1.223-2.363-1.41-4.391-2.468-4.508-2.351-.493.492 1.308 7.19 2.733 10.17 3.167 6.62 7.812 11.321 14.283 14.455 3.783 1.832 9.246 3.212 12.715 3.212 1.09 0 2.424.31 2.965.69 1.304.913 2.124 3.435 1.579 4.86-1.054 2.757-3.819 3.538-9.465 2.676m-42.444-56.788-1.34-1.34v-58.684l1.187-1.41 1.187-1.41h59.56l1.126 1.125 1.125 1.125v59.56l-1.41 1.187-1.41 1.187h-58.684zm54.134-30.981v-23.611h-46.763v47.221h46.763zm46.07 23.983c-4.967-3.83-9.251-7.444-9.52-8.033-.32-.704-.343-1.657-.065-2.78.503-2.038 2.95-3.642 4.833-3.169.63.158 3.175 1.845 5.655 3.749 2.48 1.903 4.606 3.365 4.723 3.247.54-.54-1.522-7.549-3.218-10.94-1.44-2.878-2.754-4.632-5.58-7.444-5.636-5.606-11.214-8.168-19.41-8.915-3.49-.318-4.078-.505-5.01-1.588-1.542-1.793-1.45-4.52.205-6.067 1.22-1.14 1.403-1.17 5.616-.922 17.32 1.022 31.948 13.9 35.465 31.22l.55 2.715 2.43-3.276c4.341-5.857 6.62-6.902 9.27-4.251 1.562 1.561 1.786 3.764.566 5.55-2.543 3.718-13.134 17-13.871 17.395-2.285 1.223-3.327.687-12.639-6.49" style="troke-width:.999999" transform="translate(351.828 -651.095)"/></svg>
                        
                    </a>
                </div>

                <div id="acoes">
                    ${this.lideranca?html`
                        <a href="/lideranca" class="coluna-acoes">
                            <p>Liderança</p>
                            <icone-lideranca style="--icon-size: 4rem;"></icone-lideranca>                        
                        </a>
                    `:""}
                    ${this.treinamento?html`
                        <a href="/treinamento" class="coluna-acoes">
                            <p>Treinamento</p>
                            <icone-treinamento style="--icon-size: 4rem;"></icone-treinamento>  
                        </a>
                    `:""}    
                    
                </div>

            </article>

            <menu-inferior></menu-inferior>
        `;
    };
}

// 2. Em vez de @customElement, use o registro manual
customElements.define('home-page', Home_Page);