import { LitElement, html, css, unsafeCSS} from 'lit';
import globalStyle from "./modal_cadastro_formulario.css?inline";

import { CADASTRAR_FORMULARIO_FEEDBACK } from '../../controller/Cadastrar_Fomulario';
export class Modal_Cadastro_Formulario extends LitElement {
    static properties = {
        aberto: { type: Boolean } 
    };

    static get styles(){
        return css`${unsafeCSS(globalStyle)}`;
    }

    constructor() {
        super();
        this.url_config = '';
        this.aberto = false; // Garante uma inicialização padrão
    }

    Btn_Cadastro(e) {
        const formulario = e.target.form;
        const dados = new FormData(formulario);
        const chave = dados.get('chave');
        
        if (chave === "") {
            return;
        }
        CADASTRAR_FORMULARIO_FEEDBACK(chave);
        this._dispararFechar()
    }
    _dispararFechar() {
        this.aberto = false;
        // Avisa o componente pai (Home) que o estado mudou aqui dentro
        this.dispatchEvent(new CustomEvent('ao-fechar', {
        bubbles: true,
        composed: true
        }));
    }



    render() {
        // REMOVIDO: if (!this.aberto) return html``;
        // Agora controlamos o estado injetando a classe 'visivel' dinamicamente no #container
        return html`
            <div id="container" class="${this.aberto ? 'visivel' : ''}">
                <div id="modal">
                    <div id="close-button">
                        <a @click="${this._dispararFechar}">
                            <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 143.93 143.93"><path d="M-231.1 674.3a69 69 0 0 0-97.52 0 69 69 0 0 0 0 97.52 69 69 0 0 0 97.52 0 69 69 0 0 0 0-97.52m-4.68 4.68a62.3 62.3 0 0 1 0 88.16 62.3 62.3 0 0 1-88.16 0 62.3 62.3 0 0 1 0-88.16 62.3 62.3 0 0 1 88.16 0m-10.68 8.72a3.3 3.3 0 0 0-4.68 0l-30.47 30.47-30.47-30.47a3.3 3.3 0 0 0-4.67 0 3.3 3.3 0 0 0 0 4.68l30.46 30.46-30.46 30.47a3.3 3.3 0 0 0 0 4.68 3.3 3.3 0 0 0 4.67 0l30.47-30.47 30.47 30.47a3.3 3.3 0 0 0 4.68 0 3.3 3.3 0 0 0 0-4.68l-30.47-30.47 30.47-30.46a3.3 3.3 0 0 0 0-4.68" style="baseline-shift:baseline;display:inline;overflow:visible;opacity:1;vector-effect:none;stroke-linecap:round;stroke-miterlimit:3.9;stop-color:#000;stop-opacity:1" transform="translate(351.83 -651.1)"/></svg>
                        </a>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 143.93 143.93"><path d="M-304.7 670.66q-2.64.13-5.26.8a25.4 25.4 0 0 0-18.48 20.07c-.4 2.34-.4 6.53 0 8.86a25.5 25.5 0 0 0 20.3 20.46c2.22.4 6.77.4 9.03.01 5.13-.9 9.65-3.26 13.43-7.04a25 25 0 0 0 3.64-4.53l-.11-.33.76-.77.5-.95a25.4 25.4 0 0 0-2.58-26.78 32 32 0 0 0-6.25-5.75c-4.47-2.9-9.71-4.3-14.98-4.05m51.65 25.2-.5 1a88 88 0 0 0-2.81 6.71 20 20 0 0 1-1 2.37c-.1.1-1.15.56-2.34 1.05l-2.16.88-2.46-1.02c-3.53-1.46-6.96-2.74-7.62-2.84l-.56-.1-2.94 2.95-2.93 2.95.27.77c.4 1.12 1.67 4.1 2.94 6.83l1.1 2.4-.92 2.22-.94 2.23-2.62 1.06a101 101 0 0 0-7.22 3.13l-.46.28v8.32l1.13.53c1.42.66 2.72 1.18 6.33 2.53l2.85 1.06.94 2.24.94 2.23-1.38 3.25c-1.56 3.66-2.45 5.96-2.55 6.62-.06.41.15.66 2.88 3.38l2.95 2.94 1.17-.41c.65-.22 2.72-1.07 4.59-1.88s3.68-1.58 4-1.7l.61-.24 2.26.9 2.26.9.28.7c1.66 4.1 3.75 8.73 4.15 9.17.22.24.57.26 4.4.26h4.15l.5-1a88 88 0 0 0 2.8-6.7c.47-1.21.92-2.28 1.01-2.38.19-.19 4.3-1.86 4.56-1.85.09 0 1.46.55 3.06 1.2 3.98 1.65 6.83 2.68 7.24 2.63.22-.03 1.4-1.1 3.22-2.9 2.66-2.66 2.87-2.9 2.79-3.3-.1-.53-1.64-4.14-3.07-7.25l-1.11-2.4.93-2.22.93-2.22 2.48-1c3.07-1.22 6.74-2.81 7.36-3.2l.47-.28v-8.32l-1.29-.6a126 126 0 0 0-7.28-2.87l-1.74-.64-.94-2.22-.94-2.23 1.02-2.38c1.6-3.75 2.79-6.8 2.89-7.4l.09-.57-2.9-2.85c-2.45-2.43-2.94-2.86-3.3-2.84-.48.02-3.53 1.23-7.22 2.86a35 35 0 0 1-2.8 1.15c-.1 0-1.16-.4-2.37-.88l-2.2-.88-1.02-2.46c-1.32-3.18-2.95-6.76-3.3-7.22l-.26-.37-4.2-.04zm4.38 25.16c1.15 0 2.3.1 3.12.34 4.67 1.34 7.91 4.82 8.7 9.36a9 9 0 0 1 0 3.96 11.8 11.8 0 0 1-8.36 9.25c-1.7.5-4.3.62-5.87.27-4.97-1.1-8.56-4.78-9.4-9.61-1.03-5.86 2.68-11.5 8.67-13.21.83-.24 1.98-.36 3.14-.36m-78.55 2.77c-3.07.02-5.14 1.05-8.17 4.08a45.3 45.3 0 0 0-13.03 27.51c-.29 2.8-.28 10.59 0 11.96.8 3.77 3.88 6.91 7.7 7.84 1.01.24 6.87.3 37.12.3 25.49.02 36.23-.04 37-.2 3.7-.78 6.9-3.82 7.85-7.5.13-.48.22-1.52.27-2.85l-.92-2.2c-.28-1.07-1.5-1.2-2.34-1.6-3.72 1.58-7.42 3.2-11.26 4.46-1.9-1.87-3.75-3.8-5.67-5.65-1.23-1.2-2.63-2.65-2.55-4.5.62-3.13 2.08-6 3.27-8.94.6-.9-.11-1.9-.45-2.75a121 121 0 0 1-11.1-4.62v-7.9c-.02-1.31-.19-2.81.4-4.02a33 33 0 0 1-7.67 2.6c-1.88.41-2.74.47-6.77.47s-4.89-.06-6.76-.46c-4.12-.89-7.01-2.03-11.1-4.37-2.17-1.24-3.66-1.67-5.82-1.66" style="stroke-width:.999999" transform="translate(351.83 -651.1)"/></svg>
                    <p><b>Cadastrar Formulário</b></p>
                    <p>É necessário ter o cadastro de seu formulário de Feedback para o pleno funcionamento do sistema. Solicite o mesmo a supervisão!</p>
                    <form action="#" @submit="${(e) => e.preventDefault()}">
                        <input 
                            type="text"
                            placeholder="Insira o Link"
                            name="chave"
                            required
                        ><br>
                        <button @click="${this.Btn_Cadastro}">Cadastrar no Sistema</button>
                    </form>
                </div>
            </div>
        `;
    }
}

customElements.define('modal-cadastro-formulario', Modal_Cadastro_Formulario);