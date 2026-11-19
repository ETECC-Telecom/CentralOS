import { LitElement, html, css, unsafeCSS } from 'lit';
import globalStyle from "./index.css?inline";


export class Componente_Coordenada extends LitElement {
    // 1. Em vez de @property, use o objeto static properties
    static properties = {
        Ficha: { type: Object },
        Fachada_Anexada: { type: Boolean },
    };

    static get styles() {
        return css`${unsafeCSS(globalStyle)}`;
    }

    constructor() {
        super();
        this.Ficha = {};
        this.Fachada_Anexada = false;

    }

    // Executado assim que o componente é renderizado na tela
    firstUpdated() {

    }
    connectedCallback() {
        super.connectedCallback(); // ⚠️ Sempre chame o super PRIMEIRO no Lit
        this.Fachada_Anexada = this.Ficha?.COORDENADAS?.Get_Fachada_Anexada?.() ?? false;
    }

    Set_Fachada_Anexada = (e) => {
        const VALOR = e.target.value === "true" ? true : false;

        const RETORNO = this.Ficha.COORDENADAS.Set_Fachada_Anexada(VALOR);
        this.Fachada_Anexada = RETORNO;
        this.Ficha.Salvar_OS_Banco();
    }

    Set_Relatorio_Fachada = (e) => {

        const VALOR = e.target.value === ""? null: e.target.value; 
        this.Ficha.COORDENADAS.Set_Relatorio_Anexada(VALOR);

        this.Ficha.Salvar_OS_Banco();
    }

    render() {
        return html`
            <!--Retorno renderizado-->
            <h2>Informações do Endereço</h2>
            <hr>
            <br>
            <div class="form-group">   
                <label for="" class="form-label">Foto da Fachada Anexada?</label>
              
                <div @change="${this.Set_Fachada_Anexada}" class="radio-input">
                    <label>
                        <input ?checked="${this.Fachada_Anexada === true? true:false}" 
                        value="true" 
                        name="value-radio" 
                        id="value-1" 
                        type="radio" />
                        <span>S i m</span>
                    </label>
                    <label>
                        <input ?checked="${this.Fachada_Anexada === false? true:false}" 
                        value="false" 
                        name="value-radio" 
                        id="value-2" 
                        type="radio" />
                        <span>N ã o</span>
                    </label>
                    <span class="selection"></span>
                </div>
            </div>
            ${this.Fachada_Anexada === false ? html`
                <div class="form-group">
                    <label for="fname" class="form-label">Qual o motivo de não anexar a Foto?</label>
                    <input 
                        @blur="${this.Set_Relatorio_Fachada}"
                        placeholder="" type="text" id="" name=""
                        .value="${this.Ficha?.COORDENADAS?.Get_Relatorio_Anexada?.()??''}" 
                        class="form-input">
                </div>
            `: ""}
            
        `;
    }
}

// 2. Em vez de @customElement, use o registro manual
customElements.define('componente-coordenada', Componente_Coordenada);