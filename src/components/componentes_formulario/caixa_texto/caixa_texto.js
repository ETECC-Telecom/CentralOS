import { LitElement, html, css, unsafeCSS } from 'lit';
import { ref, createRef } from 'lit/directives/ref.js';

import globalStyle from "./index.css?inline";

import { estourar_drawer } from '../../drawer_scripts/drawer_scripts_component';

export class Caixa_Texto extends LitElement {
    // 1. Em vez de @property, use o objeto static properties
    static properties = {
        Campo_Texto: { type: Function},
        Atualizar_BD: { type: Function},
        Texto: {Type: String},
        Categoria: { type: String },
        Placeholder: {type: String},
        Titulo: {type: String},
        Tamanho: {Type: Number},
    };

    static get styles() {
        return css`${unsafeCSS(globalStyle)}`;
    }

    constructor() {
        super();
        this.Campo_Texto = null;
        this.Atualizar_BD = null;
        this.Categoria = "";
        this.Texto = "";
        this.Placeholder = "Nenhuma dica inserida!"
        this.Titulo = ""
        this.Tamanho = 10
        this.textareaRef = createRef();
    }

    // Executado assim que o componente é renderizado na tela
    firstUpdated() {

    }
    connectedCallback() {
        super.connectedCallback(); // ⚠️ Sempre chame o super PRIMEIRO no Lit

    }

    _Iniciar_Drawer = () => {
        estourar_drawer(this.textareaRef.value, this.Categoria, this.Atualizar_BD, this.Campo_Texto);
    }
    _Atualizar_Campo = () => {
        const Valor = this.textareaRef.value.value;
        this.Campo_Texto(Valor);
        this.Atualizar_BD();
    }
    _checar_vazio = () =>{
        const Valor = this.textareaRef.value.value;
        if(Valor === ""){
            this.Campo_Texto(null);
            this.Atualizar_BD();
        }
    }

    render() {
        return html`
            <!--Retorno renderizado-->
            <div class="form-group">
                <label for="message" class="form-label">${this.Titulo}</label>
                <div class="container-relativo">
                    <textarea
                    ${ref(this.textareaRef)}
                    style="border-left: 5px solid #ff0000;"
                    @change="${this._checar_vazio}"
                    @input="${this._Atualizar_Campo}"
                    placeholder="${this.Placeholder}"
                    id="caixa_texto" name="message" rows="${this.Tamanho}" cols="30" class="form-textarea"
                    .value="${this.Texto === null? "": this.Texto}"></textarea>
                    <button 
                    @click="${this._Iniciar_Drawer}"
                    type="button" class="form-button"
                    style="display:flex; align-items: center; justify-content: center; gap:1rem">
                    <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 143.933 143.933"><path d="m-316.857 791.438 22.081-58.391c.104-.272-2.963-.344-14.775-.344h-14.906l31.696-31.493c17.433-17.322 35.501-35.27 40.151-39.887l8.455-8.392-1.089 3.158c-.598 1.737-5.299 15.318-10.445 30.181-5.147 14.864-9.357 27.065-9.357 27.115s6.658.123 14.796.162l14.796.071-37.457 36.385c-20.601 20.012-39.066 37.916-41.032 39.787l-3.576 3.402zm28.332-4.782c-3.98-.564-7.55-1.38-10.946-2.504l-2.982-.987.785-.755c.432-.416 2.355-2.244 4.273-4.062l3.488-3.307 2.004.513c8.765 2.24 17.741 2.09 27.11-.451 6.682-1.814 13.655-5.283 19.54-9.722 2.895-2.184 8.393-7.674 10.587-10.572 6.004-7.929 9.86-17.147 11.219-26.813.56-3.988.574-11.505.029-15.339-1.502-10.555-5.471-19.834-11.987-28.024-2.085-2.62-7.043-7.522-9.433-9.327-1.091-.824-1.513-1.31-1.402-1.617.646-1.776 3.892-8.812 4.066-8.812.827-.002 7.171 5.356 10.684 9.024 8.133 8.493 13.913 18.992 16.66 30.27 3.325 13.64 2.294 28.33-2.876 41-3.507 8.596-8.338 15.848-14.925 22.407-9.987 9.946-22.167 16.21-36.397 18.72-4.073.717-15.476.927-19.497.358m-28.158-10.594c-4.169-2.694-9.533-7.31-12.99-11.176-11.586-12.96-17.627-29.37-17.105-46.462.316-10.37 2.401-18.886 6.79-27.73 3.652-7.365 7.855-13.13 13.62-18.687 10.424-10.05 22.855-16.094 37.622-18.291 4.582-.682 13.461-.617 18.345.135 4.217.649 7.98 1.546 11.805 2.814 3.525 1.17 3.52 1.164 2.158 2.384-.626.562-2.454 2.246-4.06 3.743l-2.922 2.721-3.216-.738c-9.04-2.076-18.195-2.074-26.695.005-21.885 5.354-38.854 23.452-42.702 45.543-1.282 7.356-1.012 15.932.726 23.067 1.843 7.565 5.407 15.056 10.155 21.342 2.434 3.224 7.841 8.545 11.226 11.049a281 281 0 0 1 2.975 2.217c.073.067-3.711 8.857-3.927 9.124-.032.038-.844-.439-1.805-1.06" style="stroke-width:.999996" transform="translate(351.828 -651.095)"/></svg>
                    </button> 
                </div>       
            </div>
        `;
    }
}

// 2. Em vez de @customElement, use o registro manual
customElements.define('caixa-texto', Caixa_Texto);