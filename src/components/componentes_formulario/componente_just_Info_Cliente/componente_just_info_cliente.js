import { LitElement, html, css, unsafeCSS } from 'lit';
import globalStyle from "./index.css?inline";

import { Caixa_Texto } from '../caixa_texto/caixa_texto';

export class Componente_Just_Info_Cliente extends LitElement {
    // 1. Em vez de @property, use o objeto static properties
    static properties = {
        objeto_os: {type: Object},
        aceitou: {type: Boolean}
    };

    static get styles() {
        return css`${unsafeCSS(globalStyle)}`;
    }

    constructor() {
        super();
        this.objeto_os = {};
        this.aceitou = true;
    
    }

    // Executado assim que o componente é renderizado na tela
    firstUpdated() {

    }
    connectedCallback() {
        super.connectedCallback(); // ⚠️ Sempre chame o super PRIMEIRO no Lit
        this.aceitou = this.objeto_os.OS.config_OS.info_encaminhadas;
    }

    _alterar_switch_permisao = (e)=>{
        const VALOR = e.target.value === "true"? true:false;
        this.aceitou = VALOR;
        this.objeto_os.OS.config_OS.info_encaminhadas = VALOR;
        this.objeto_os.salvar_os_localstorage();        
    }

    render() {
        return html`
            <!--Retorno renderizado-->
            <hr>
            <br>
            <h2>Informações Extras Encaminhadas?</h2>
            <br>
            <p>O Cliente aceitou receber as informações passadas via WhatsApp?</p>
            <br>
            <div style="display:flex;flex-direction:column; gap:.5rem">
                <div @change="${this._alterar_switch_permisao}" class="radio-input" id="ativo-local">
                    <label>
                        <input ?checked="${this.aceitou === true?true:false}" value="true" name="tipo-ativo" id="value-1" type="radio" />
                        <span>S i m</span>
                    </label>
                    <label>
                        <input ?checked="${this.aceitou === false?true:false}" value="false" name="tipo-ativo" id="value-2" type="radio" />
                        <span>N ã o</span>
                    </label>
                    <span class="selection"></span>
                </div>
            </div>
            <br>

            ${!this.aceitou?html`
            <caixa-texto
                Titulo = "Relato Adicional da Omissão:"
                .Tamanho = ${5}
                .Texto = ${this.objeto_os.OS?.relato_omissao || "Atributo não existe!"}
                .Campo_Texto = ${this.objeto_os.callback_adicionar_texto_justificativa_educao_cliente.bind(this.objeto_os)}
                .Atualizar_BD = ${this.objeto_os.salvar_os_localstorage.bind(this.objeto_os)}
                categoria = "Outros"
                Placeholder = "Descreva o motivo da decisão do cliente, ou o motivo pelo qual a mensagem não foi encaminhada via WhatsApp!"
            ></caixa-texto>    
            `:""}

        `;
    }
}

// 2. Em vez de @customElement, use o registro manual
customElements.define('componente-just-info-cliete', Componente_Just_Info_Cliente);