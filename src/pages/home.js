import { LitElement, html, css, unsafeCSS} from 'lit';

import { Modal_Cadastro_Usuario } from '../components/modal_cadastro_usuario/modal_cadastro_usuario';

//Componentes
import { BotaoTema } from '../components/btn_thema/btn-tema';

export class Home_Page extends LitElement {
    // 1. Em vez de @property, use o objeto static properties
    static properties = {
        nome: { type: String },
        url_config: {type: String},
        exibirModal: { type: Boolean }
    };

    // Função utilizada para estourar um POP UP de cadastro de Usuário
    Verificar_usuario(){
        const nome = localStorage.getItem('usuario');
        
        // Filtro para Verificar se o usuário já existe 
        if (nome == null){
            this.exibirModal = true;    
        }

    }

    static styles = [
        // Transformamos o CSS importado em um objeto que o Lit entende
        css`

        /* Estilo padrão: Celulares e telas pequenas */
        .header-superior{
            display:flex;
            justify-content: space-between;
            align-items: center;
            background-color: var(--header-color);
            margin:0;
            height:auto;         
            padding:.7rem;
            box-sizing: border-box; /* Garante que o padding não quebre o tamanho de 100% */
        }

        /* Telas grandes: Desktops (a partir de 1024px de largura) */
        @media (min-width: 1024px) {
            .header-superior {
                margin-top:0.5rem;
                padding: 0.4rem;
                border-radius:100rem;
          }
        }
        .logo {
            height: 2rem;
        }
        .logo-sync {
            height: 1.5rem;
        }
        .item-sync{
            border-color:#f7ecac;
            border-style: solid;
            border-width: 2px;
            display:flex;
            align-items: center;
            padding:0 0.5rem 0 0.5rem;
            height: 2.5rem;
            box-sizing: border-box;
            border-radius: 100rem;
        }
        
        nav {
            display:flex;
            justify-content: space-around;
            padding: .2rem 0 .2rem 0;
            align-items: center;
            background-color: var(--header-color);
            position: fixed;
            bottom: 0;
            width: 100%;
            margin-left: auto;
            margin-right: auto;
            box-sizing: border-box;
            z-index: 9999; /* Garante que fique acima de tudo */
        }
        nav a svg{
            width: 1.7rem;
            fill: var(--text-color);
        }
        nav a {
            padding: 0.2rem;
            width: 7rem;
            text-align: center;
            text-decoration: none;
            color: var(--text-color);
            font-weight: 600;
            border-radius: .7rem;
            transition: background-color 0.2s ease;
        }
        nav a:hover{
            background-color: var(--destaque-color);
        }
        nav a p{
            margin:0;
            font-size: .8rem;
        }

        
        @media (min-width: 1024px) {
            nav {
                margin-bottom:0.5rem;
                padding: 0.4rem;
                border-radius: 100rem;
                background-color: var(--background-color);
                width: 50%;

            }
            nav a p{
                font-size: 1rem;
            }
            nav a{
                border-radius: 100rem;
                width: 9rem;
                padding-bottom:0.1rem;
            }
            
        }

        article {
            padding: 1rem;
        }

        #dashboard {
            display:flex;
            justify-content: center;
            gap: 0.3rem;
            margin-top:0.3rem;
                     
        }
        #dashboard div{
            background-color: red;
            text-align: center;
            background-color: var(--cards-background);
            border-radius: 1rem;
            color: var(--text-color);     
        }
        .coluna{
            flex:1;
        }
        .dash-titulo {
            font-size: 1rem;
            font-weight: 900;
            margin:1rem 0 0 0;
        }
        .dash-value{
            font-size: 2rem;
            margin:0 0 .5rem 0;
        }

        #andamento {
            background-color: var(--destaque-color);
            margin-top: .5rem;
            text-align: center;
            border-radius:1rem;
            padding: 0.1rem;
        }
        #andamento a{
            display:block;
            padding: 0.5rem;
            margin: 0.5rem;
            border-radius: 100rem;
            border-color: var(--white-color);
            border-style: solid;
            border-width: 0.1rem;
        }
        
        #andamento a:hover{
            color: var(--btn-text-background-color);
            background-color: var(--white-color);
        }

        #acoes {
            display:flex;
            gap: 0.5rem;
            margin-top:.5rem;
        }
        .coluna-acoes{
            flex:1;
            border-radius: 1rem;
            border-color: var(--btn-border-color);
            border-style: solid;
            border-width: 0.1rem;
            text-align: center;
            text-decoration: none;
            background-color: var(--btn-background-color);
            color: var(--btn-text-background-color);
            transition: background-color 0.1s ease;
        }

        .coluna-acoes:hover{
            background-color: var(--destaque-color);
            color: var(--btn-text-background-color);
            fill: var(--btn-text-background-color);
        }
        .coluna-acoes:hover svg {
            fill: var(--btn-text-background-color);
        }

        .coluna-acoes svg{
            fill: var(--btn-text-background-color);
            width: 3rem;
            padding-bottom: 1rem;
        }

        `
      ];

    constructor() {
        super();
        this.url_config = ''
        this.exibirModal = false; // Começa fechado por padrão
        this.Verificar_usuario();

    }

    render() {
        return html`
            <!--Retorno renderizado-->
            <modal-cadastro-user
                .aberto="${this.exibirModal}"
            ></modal-cadastro-user>
            
            <header class="header-superior">
                <img class="logo" src="letter-logo.svg" alt="letter-logo">
                <div class="item-sync">
                    <p style="margin-right:.4rem;">Em Aberto</p>
                    <img class="logo-sync" src="sync.svg" alt="letter-logo">
                </div>
                <botao-tema></botao-tema>
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
                    <a href="#" class="coluna-acoes">
                        <p>adicionar OS</p>
                        <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 143.93 143.93"><path d="M-279.86 654.1a69 69 0 0 0-68.95 68.96 69 69 0 0 0 68.95 68.95 69 69 0 0 0 68.95-68.95 69 69 0 0 0-68.95-68.95m0 6.62a62.3 62.3 0 0 1 62.34 62.34 62.3 62.3 0 0 1-62.34 62.34 62.3 62.3 0 0 1-62.34-62.34 62.3 62.3 0 0 1 62.34-62.34m-1.39 13.72a3.3 3.3 0 0 0-3.3 3.3v43.1h-43.1a3.3 3.3 0 0 0-3.3 3.3 3.3 3.3 0 0 0 3.3 3.31h43.1v43.09a3.3 3.3 0 0 0 3.3 3.3 3.3 3.3 0 0 0 3.3-3.3v-43.09h43.1a3.3 3.3 0 0 0 3.3-3.3 3.3 3.3 0 0 0-3.3-3.32h-43.1v-43.08a3.3 3.3 0 0 0-3.3-3.31" style="baseline-shift:baseline;display:inline;overflow:visible;opacity:1;vector-effect:none;stroke-linecap:round;stroke-miterlimit:3.9;stop-color:#000;stop-opacity:1" transform="translate(351.83 -651.1)"/></svg>
                    </a> 
                    <a class="coluna-acoes">
                        <p>Histórico Local</p>
                        <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 143.93 143.93"><path d="M-292.56 792.52c-9.23-.92-19.84-2.92-25.66-4.83-7.29-2.38-14.41-6.68-17-10.25l-1.62-2.24v-51.27c0-42.08.14-51.59.77-53.08 2.74-6.46 15.22-12.64 30.82-15.3 30.42-5.16 66.14-.23 77.87 10.74 4.85 4.54 4.49-.13 4.49 57.52v51.22l-1.51 2.17c-1.94 2.8-8.8 7.3-14.44 9.48-10.16 3.91-21.36 5.63-38.49 5.87-7.13.1-13.99.1-15.23-.03m35.82-8.67c11.41-1.99 21.62-5.8 25.23-9.4 1.25-1.25 1.29-1.57 1.29-12.36 0-6.09-.2-10.97-.43-10.85-12.65 6.5-25.17 9.25-44.7 9.84-20.4.62-39.02-2.36-50.32-8.05a43 43 0 0 0-4.1-1.92c-.17 0-.3 4.66-.3 10.35 0 9.81.07 10.45 1.27 12.22 3.22 4.72 17.18 9.42 33.42 11.25 2.48.28 10.6.43 18.05.33 10.74-.15 15-.44 20.6-1.41m8.11-8.74c-3.84-1.65-4.75-5.76-1.96-8.89 1.35-1.51 2.04-1.83 4-1.83 1.97 0 2.66.32 4.01 1.83 2.19 2.44 2.22 5.13.09 7.4-1.9 2.01-3.82 2.48-6.14 1.49m-8.1-22.86c11.38-1.97 21.6-5.78 25.22-9.39 1.25-1.25 1.29-1.57 1.29-12.36 0-6.09-.2-10.97-.43-10.85-13.6 6.98-28.53 10.03-49.21 10.03-18.32 0-34.28-2.8-45-7.9l-4.65-2.2v10.9c0 12.47 0 12.45 5.03 15.2 6.08 3.3 15.9 5.94 27.7 7.45 9.12 1.17 31 .68 40.04-.88m7.39-9.26c-4.9-2.7-2.85-10.5 2.76-10.5 2.86 0 5.64 2.76 5.64 5.6a5.7 5.7 0 0 1-8.4 4.9m-7.4-22.33c8.93-1.55 18.3-4.62 22.6-7.41a67 67 0 0 0 3.46-2.32c.17-.24.76-24.7.59-24.7-.08 0-1.48.76-3.1 1.67-6.09 3.44-18.22 6.55-30.88 7.94-7.6.83-23.9.82-31.87-.02-12.27-1.29-25.07-4.65-31.05-8.15a18 18 0 0 0-2.76-1.43c-.18 0-.32 5.01-.32 11.14 0 10.02.11 11.32 1.1 12.93 2.83 4.65 17.39 9.61 33.6 11.44 2.47.28 10.6.43 18.04.33 10.76-.15 15-.44 20.6-1.42m8.07-10.45c-5-2.1-4.59-8.7.65-10.42 4.98-1.65 9.26 4.77 5.8 8.71a5.7 5.7 0 0 1-6.45 1.7m-19.19-21.43c15.27-.86 32.74-6.06 36.53-10.88 2.38-3.02.66-6.5-4.5-9.13-20.86-10.6-67.95-10.53-88.21.14-7.28 3.84-7.4 7.94-.36 12.14 3.32 1.98 13.47 5.1 20.62 6.35 6.93 1.2 21.08 2.19 27.02 1.87z" style="stroke-width:1" transform="translate(351.83 -651.1)"/></svg>
                    </a> 
                </div>
             
            </article>

            <nav>
                <a href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 143.93 143.93"><path d="M-324.28 776.63a6 6 0 0 1-3.72-3.56c-.2-.68-.29-7.83-.29-21.67v-20.64l24.06-19.84c13.24-10.9 24.2-19.83 24.36-19.83s11.12 8.92 24.36 19.83l24.06 19.84v20.64c0 13.84-.1 20.99-.29 21.67a5.8 5.8 0 0 1-3.92 3.58c-.92.2-6.62.3-17.37.3h-16v-32.28h-21.69v32.27l-16.2-.02c-9.42-.02-16.7-.14-17.36-.29m-16.52-44.32c-.74-.2-6.51-7.23-6.69-8.15a3 3 0 0 1 .12-1.5c.34-.9 60.85-51.38 62.8-52.4a11.2 11.2 0 0 1 9.1-.22c.6.27 5.9 4.5 11.77 9.41l10.68 8.93.07-8.65c.08-9.65.09-9.7 1.88-10.22.63-.19 3.94-.26 9.5-.2l8.52.08.73.74.73.73.08 17.72.07 17.73 9.4 7.83c5.76 4.8 9.51 8.1 9.67 8.53.5 1.3.04 2.19-3.08 5.91-2.55 3.05-3.18 3.65-3.94 3.8-.5.09-1.16.09-1.46-.01s-13.68-11.12-29.71-24.5a3516 3516 0 0 0-29.31-24.32c-.1 0-13.27 10.93-29.29 24.3a2440 2440 0 0 1-29.57 24.47 4 4 0 0 1-2.07-.01" style="fill-opacity:1" transform="translate(351.83 -651.1)"/></svg> 
                    <br>
                    <p>HOME</p>
                </a>
                <a>
                    <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 143.93 143.93"><path d="M-310.7 790.36a43 43 0 0 1-19.43-7.93c-2.93-2.11-8.17-7.62-10.3-10.82a41.1 41.1 0 0 1-3.1-40.35c2.46-5.32 4.5-7.84 14.73-18.17 5.35-5.4 10.38-10.2 11.19-10.67a9 9 0 0 1 7.92-.36q4.93 2.26 5.33 7.5c.3 4.12.3 4.12-10.3 14.86-5.25 5.33-10.1 10.53-10.77 11.56a22.5 22.5 0 0 0-3.78 12.92c.02 3.63.73 6.5 2.53 10.2 1.16 2.38 1.97 3.45 4.67 6.14 2.7 2.7 3.77 3.51 6.16 4.67 3.9 1.9 6.28 2.47 10.36 2.47 4.1 0 6.48-.57 10.36-2.47 2.74-1.34 3.4-1.91 12.81-11.17 6.57-6.46 10.43-10 11.42-10.48 1.95-.95 5.6-.99 7.56-.08 2.99 1.39 5.26 4.86 5.27 8.05 0 3.82-.3 4.24-10.16 14.2-4.98 5.01-10.22 10.07-11.67 11.23a41 41 0 0 1-16.89 8.05c-3.38.76-10.71 1.1-13.9.65m7.76-38.02c-5.2-1.71-7.9-7.49-5.76-12.28.53-1.18 5.73-6.58 22.35-23.23 12.87-12.89 22.2-21.97 22.99-22.38a9.1 9.1 0 0 1 10.4 1.73 8.8 8.8 0 0 1 2.15 9.4c-.5 1.52-2.55 3.68-22.17 23.37-11.9 11.93-22.3 22.08-23.1 22.56-1.58.94-5.19 1.37-6.86.83m52.5-8.33a9.4 9.4 0 0 1-4.75-5.45c-.64-2.14-.63-3.04.04-5.33.51-1.73 1.13-2.43 9.8-11.19 5.08-5.14 9.71-9.96 10.28-10.7a28 28 0 0 0 4.06-8.6c.69-2.88.67-8.1-.03-10.78a33 33 0 0 0-1.93-4.93c-2.6-5.35-9.38-11.11-14.73-12.53a23.4 23.4 0 0 0-18.36 2.42c-1.83 1.07-4.66 3.65-12.24 11.12-10.77 10.64-10.65 10.55-14.65 10.54a7.9 7.9 0 0 1-5.97-2.53c-1.97-2-2.49-3.35-2.49-6.47 0-2.34.13-2.94.9-4.25 1.2-2 19.52-20.15 22.44-22.2a41.3 41.3 0 0 1 47.43-.17 54 54 0 0 1 10.23 9.96c2.44 3.23 5.64 9.8 6.69 13.77a41.3 41.3 0 0 1-6.9 35.52c-.85 1.12-5.75 6.29-10.9 11.48-10.53 10.61-11.23 11.13-14.98 11.12-1.62 0-2.7-.22-3.94-.8" style="fill-opacity:1;stroke-width:.999997" transform="translate(351.83 -651.1)"/></svg>
                    <br>
                    <p>LINKS</p>
                </a>
                <a>
                    <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 143.93 143.93"><path d="M-331.52 790.42a25 25 0 0 1-6.26-2.33l-.9-.53 15.61-15.63c13.51-13.54 15.65-15.79 15.9-16.7a3.97 3.97 0 0 0-4.89-4.87c-.9.24-3.32 2.56-16.68 15.9l-15.64 15.6-.67-1.14a20.5 20.5 0 0 1-1.82-15.04c1.57-5.3 1.55-5.29 21.3-25.07l17.5-17.54 14.09 14.1 14.09 14.1-17.53 17.5c-13.46 13.43-17.98 17.77-19.45 18.72a20 20 0 0 1-14.65 2.93m87.86.1a27.4 27.4 0 0 1-23.4-22.26c-.76-3.99-.33-10.72.87-13.7.25-.62-.85-1.77-22.1-23.05l-22.38-22.4-1.03.36c-3.48 1.23-9.7 1.54-13.84.68a27.3 27.3 0 0 1-20.87-19.12 30 30 0 0 1-.53-14.3c.49-2.15 1.36-3.2 3-3.65 2.12-.57 2.55-.25 10.86 8.06l7.54 7.55h11.24v-11.24l-7.65-7.67c-8.22-8.26-8.42-8.53-7.95-10.65.28-1.23 1.67-2.57 3.08-2.97.56-.15 2.35-.42 3.99-.6a27.5 27.5 0 0 1 30 21.88c.85 4.14.55 10.36-.68 13.84l-.36 1.03 22.4 22.38c21.27 21.25 22.43 22.36 23.06 22.1 2.97-1.2 9.7-1.63 13.69-.87a27.3 27.3 0 0 1 21.5 19.92c.86 3.3 1.18 7.27.83 10.36-.57 4.97-1.23 6.28-3.47 6.89-2.12.57-2.55.25-10.86-8.07l-7.54-7.54h-11.24v11.25l7.42 7.4c4.09 4.08 7.6 7.73 7.8 8.12.22.4.39 1.33.39 2.09 0 1.23-.1 1.46-1 2.37-1.12 1.11-2.02 1.42-5.35 1.83-2.55.31-4.91.31-7.42-.01m-22.22-81.6-2.77-2.77 8.97-8.98 8.97-8.97 1.26-8.82c1.58-10.98 1.45-10.36 2.28-11.35.9-1.06 24.02-12.68 25.23-12.68 1.46 0 2.48.72 5.86 4.14 3.35 3.4 3.91 4.2 3.91 5.66 0 1.19-11.64 24.33-12.68 25.2-.99.83-.37.7-11.35 2.28l-8.82 1.26-8.9 8.9c-4.9 4.9-8.98 8.92-9.05 8.92s-1.38-1.25-2.9-2.78" style="fill-opacity:1" transform="translate(351.83 -651.1)"/></svg>
                    <br>
                    <p>FERRAMENTAS</p>
                </a>
                <a>
                    <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 143.93 143.93"><path d="M-283.08 790.53a21 21 0 0 1-9.78-4.47c-1.07-.86-7.65-7.28-14.6-14.26l-12.67-12.68 2.74-.18c4.42-.28 7.64-1.29 10.72-3.36.7-.47 6.34-5.89 12.52-12.05 6.19-6.15 11.58-11.32 11.99-11.47a4 4 0 0 1 2.91.02c.32.16 5.58 5.26 11.7 11.33 6.58 6.55 11.78 11.5 12.77 12.16 3.57 2.4 7.35 3.46 12.28 3.46h2.99l-12.44 12.47a679 679 0 0 1-14.37 14.13 22 22 0 0 1-8 4.36c-2.2.62-6.78.9-8.76.54m-51.59-45.98c-8.44-8.5-9.29-9.48-10.77-12.42-1.47-2.91-2-5.35-2-9.08s.53-6.16 2-9.07c1.48-2.95 2.33-3.92 10.77-12.43l8.35-8.4h4.96c5.64 0 6.96.2 9.75 1.52 1.89.88 2.53 1.48 13.5 12.36 6.32 6.3 11.92 11.69 12.43 11.99a10 10 0 0 0 5.77 1.3c3.4-.32 3.63-.51 16.1-12.85 6.23-6.16 11.93-11.61 12.67-12.1 2.82-1.89 3.73-2.07 11.08-2.16l6.6-.1 7.52 7.5c8.16 8.13 10.18 10.44 11.58 13.2 1.54 3.08 2.08 5.46 2.08 9.24s-.54 6.16-2.08 9.24c-1.4 2.76-3.42 5.07-11.58 13.2l-7.53 7.5-6.6-.1c-7.23-.09-8.2-.27-10.85-2-.63-.4-6.25-5.81-12.5-12-12.24-12.16-12.54-12.4-15.83-12.94a10 10 0 0 0-5.88.96c-1.25.57-3.23 2.41-12.99 12.13-10.96 10.91-11.6 11.5-13.5 12.4-2.77 1.3-4.1 1.5-9.74 1.5h-4.96zm52.3-30.52c-.3-.17-5.6-5.33-11.78-11.48s-11.82-11.56-12.52-12.03c-3.08-2.07-6.3-3.08-10.72-3.36l-2.74-.18 12.4-12.42a675 675 0 0 1 14.32-14.09 22 22 0 0 1 8.14-4.4c2.98-.85 7.83-.85 10.82 0 2.9.82 5.84 2.42 8.13 4.4 1.07.92 7.53 7.28 14.37 14.14l12.44 12.46h-3c-4.92 0-8.7 1.06-12.27 3.46-1 .67-6.2 5.64-12.97 12.37l-11.3 11.24-1.4.1a5 5 0 0 1-1.93-.2" style="fill-opacity:1" transform="translate(351.83 -651.1)"/></svg>
                    <br>
                    <p>FINANCEIRO</p>
                </a>
            </nav>
         

        `;
    }
}

// 2. Em vez de @customElement, use o registro manual
customElements.define('home-page', Home_Page);