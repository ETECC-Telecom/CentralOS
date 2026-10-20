import { LitElement, html, css, unsafeCSS } from 'lit';
import globalStyle from "./index.css?inline";

import { Icone_Editar } from '../../icones/icone_editar';
import { Icone_Salvar } from '../../icones/icone_salvar';

import { disparar_notificacao } from '../../../controller/disparar_notificacao';

export class Componente_Caixa_Texto_Edicao extends LitElement {
    // 1. Em vez de @property, use o objeto static properties
    static properties = {
        objeto_ficha:{type:Object},
        atributo_controle:{type:Object},
        atualizar_atributo:{type:Function},
        tipo_input: {type: String},
        placeholder: {type: String},
    };

    static get styles() {
        return css`${unsafeCSS(globalStyle)}`;
    }   

    constructor() {
        super();

        this.objeto_ficha = {};
        this.atributo_controle = {};
        this.tipo_input = 'text'
        this.placeholder = "placeholder"

    }

    // Executado assim que o componente é renderizado na tela
    firstUpdated() {

    }
    connectedCallback() {
        super.connectedCallback(); // ⚠️ Sempre chame o super PRIMEIRO no Lit
    
    }

    _Habilitar_Formulario = () =>{
        const FORMULARIO = this.shadowRoot.getElementById('fomulario');
        const atributo = FORMULARIO.disabled;
        FORMULARIO.disabled = !atributo
    }

    _Salvar_Data_Formulario = async() =>{
        const FORMULARIO = this.shadowRoot.getElementById('fomulario');

        if (FORMULARIO.disabled === true){
            return
        }

        if (!FORMULARIO.value){
            disparar_notificacao("aviso", "O Atributo não pode estar vazio!")
            return
        }
        FORMULARIO.disabled=true;

        if (typeof this.atualizar_atributo === "function"){
            this.atualizar_atributo(FORMULARIO.value)
        }

        await this.objeto_ficha.salvar_data_banco()
    
    }

    render() {
        return html`
            <!--Retorno renderizado-->
            <div style="display: flex; flex-direction: row; gap:1rem; align-items: flex-end;">
                <div class="form-group" style="flex:6">
                    <label for="fname" class="form-label">${this.placeholder}</label>
                    <input 
                        @change=""
                        disabled
                        placeholder="${this.placeholder}" type="${this.tipo_input}" id="fomulario" name="fomulario"
                        value="${this.atributo_controle}" 
                        class="form-input">
                </div>
                <div @click="${this._Habilitar_Formulario}" class="btn-acao" style="flex:1;">
                    <icone-editar style="--icon-size: 1.7rem;"></icone-editar>
                </div>
                <div @click="${this._Salvar_Data_Formulario}" class="btn-acao" style="flex:1;">
                    <icone-salvar style="--icon-size: 1.7rem;"></icone-salvar>
                </div>
            </div>
        `;
    }
}

// 2. Em vez de @customElement, use o registro manual
customElements.define('componente-caixa-texto-edicao', Componente_Caixa_Texto_Edicao);