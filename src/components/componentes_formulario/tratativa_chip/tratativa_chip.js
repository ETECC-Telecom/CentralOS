import { LitElement, html, css, unsafeCSS } from 'lit';
import globalStyle from "./index.css?inline";


export class Tratativa_Chip extends LitElement {
    // 1. Em vez de @property, use o objeto static properties
    static properties = {
        objeto_os: {type: Object},
        exibir_justificativa: {type: Boolean},
    };

    static get styles() {
        return css`${unsafeCSS(globalStyle)}`;
    }

    constructor() {
        super();
        this.objeto_os = {}
        this.exibir_justificativa = false;
    }

    // Executado assim que o componente é renderizado na tela
    firstUpdated() {

    }
    connectedCallback() {
        super.connectedCallback(); // ⚠️ Sempre chame o super PRIMEIRO no Lit
        this.exibir_justificativa = !(this.objeto_os.OS.informacao_atendimento.APN)
    }

    _alterar_data_APN = (e) =>{
        const VALOR = e.target.value;
        if (VALOR === "true"){
            this.objeto_os.OS.informacao_atendimento.APN = true;
            this.exibir_justificativa = false;
        }else{
            this.objeto_os.OS.informacao_atendimento.APN = false;
            this.exibir_justificativa = true;
        }

        this.objeto_os.salvar_os_localstorage();
    }
    _alterar_data_ICCID = (e) =>{
        const ID = e.target.value;
        if (ID !== ""){
            this.objeto_os.OS.informacao_atendimento.ICCID = ID;
        }else{
            this.objeto_os.OS.informacao_atendimento.ICCID = null;
        }

        this.objeto_os.salvar_os_localstorage();

    }
    _alterar_data_justificativa = (e) =>{
        const VALOR = e.target.value;
        if (VALOR !== ""){
            this.objeto_os.OS.informacao_atendimento.justificativa = VALOR;
        }else{
            this.objeto_os.OS.informacao_atendimento.justificativa = null;
        }

        this.objeto_os.salvar_os_localstorage();

    }

    

    render() {
        return html`
            <!--Retorno renderizado-->
            <h3>Auxiliou o Cliente a Configurar APN?</h3>
            <br>

            <div @change="${this._alterar_data_APN}" class="radio-input">
                <label>
                    <input ?checked="${this.objeto_os.OS.informacao_atendimento.APN === true? true:false}" value="true" name="value-radio-insumos" id="retirada-insumos-1" type="radio" />
                    <span>S i m</span>
                </label>
                <label>
                    <input ?checked="${this.objeto_os.OS.informacao_atendimento.APN === false? true:false}" value="false" name="value-radio-insumos" id="retirada-insumos-2" type="radio" />
                    <span>N ã o</span>
                </label>
                <span class="selection"></span>
            </div>
            <br>
            
            ${this.exibir_justificativa?html`
            <div class="form-group;">
                <label for="fname" class="form-label">Justificativa:</label>
                <input 
                    @change="${this._alterar_data_justificativa}"
                    placeholder="Informe o motivo de não ter auxiliado cliente a Configurar APN!" type="text" id="fname" name="fname" 
                    .value="${this.objeto_os.OS.informacao_atendimento.justificativa === null? "": this.objeto_os.OS.informacao_atendimento.justificativa}" class="form-input">
            </div>
            
                `:""}
            <br>
            <div class="form-group;">
                <label for="fname" class="form-label">Informe o ICCID:</label>
                <input 
                    @change="${this._alterar_data_ICCID}"
                    placeholder="ICCID" type="text" id="fname" name="fname" 
                    .value="${this.objeto_os.OS.informacao_atendimento.ICCID === null? "": this.objeto_os.OS.informacao_atendimento.ICCID}" class="form-input">
            </div>
        `;
    }
}

// 2. Em vez de @customElement, use o registro manual
customElements.define('tratativa-chip', Tratativa_Chip);