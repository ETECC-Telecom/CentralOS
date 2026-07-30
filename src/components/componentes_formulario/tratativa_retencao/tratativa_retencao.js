import { LitElement, html, css, unsafeCSS } from 'lit';
import globalStyle from "./index.css?inline";


export class Tratativa_Retencao extends LitElement {
    // 1. Em vez de @property, use o objeto static properties
    static properties = {
        objeto_os: {type: Object},
        exibir_info: {type: Boolean},
        exibir_info_vizinho: {type: Boolean},
    };

    static get styles() {
        return css`${unsafeCSS(globalStyle)}`;
    }

    constructor() {
        super();
        this.objeto_os = {};
        this.exibir_info = false;
    }

    // Executado assim que o componente é renderizado na tela
    firstUpdated() {

    }
    connectedCallback() {
        super.connectedCallback(); // ⚠️ Sempre chame o super PRIMEIRO no Lit
        this.exibir_info = this.objeto_os.OS.informacao_atendimento.alt_data_vencimento;
        this.exibir_info_vizinho = this.objeto_os.OS.informacao_atendimento.info.verdadeiro;
    }

    _alterar_data_atendimento = (e) => {
        if(e.target.value === "true"){
            this.objeto_os.OS.informacao_atendimento.foi_atendido = true;
        }else{
            this.objeto_os.OS.informacao_atendimento.foi_atendido = false;
        }

        this.objeto_os.salvar_os_localstorage();
    }
    _alterar_data_local_ocupado = (e) => {
        if(e.target.value === "true"){
            this.objeto_os.OS.informacao_atendimento.local_ocupado = true;
        }else{
            this.objeto_os.OS.informacao_atendimento.local_ocupado = false;
        }

        this.objeto_os.salvar_os_localstorage();
    }
    _alterar_data_acordo = (e) => {
        if(e.target.value === "true"){
            this.objeto_os.OS.informacao_atendimento.acordo = true;
        }else{
            this.objeto_os.OS.informacao_atendimento.acordo = false;
        }

        this.objeto_os.salvar_os_localstorage();
    }
    _alterar_data_alt_data_vencimento = (e) => {
        if(e.target.value === "true"){
            this.objeto_os.OS.informacao_atendimento.alt_data_vencimento = true;
            this.exibir_info = true;
        }else{
            this.objeto_os.OS.informacao_atendimento.alt_data_vencimento = false;
            this.exibir_info = false;
        }

        this.objeto_os.salvar_os_localstorage();
    }
    _alterar_data_info = (e) => {
        if(e.target.value === "true"){
            this.objeto_os.OS.informacao_atendimento.info.verdadeiro = true;
            
        }else{
            this.objeto_os.OS.informacao_atendimento.info.verdadeiro = false;
            
        }

        this.objeto_os.salvar_os_localstorage();
    }

    _alterar_data_vizinho = (e) => {
        if(e.target.value === ""){
            return
        }
        this.objeto_os.OS.informacao_atendimento.info.observacao = e.target.value;

        this.objeto_os.salvar_os_localstorage();
    }

    _alterar_data_vencimento = (e) =>{
        if(e.target.value === ""){
            return
        }
        this.objeto_os.OS.informacao_atendimento.nova_data = parseInt(e.target.value);

        this.objeto_os.salvar_os_localstorage();
    }

    render() {
        return html`
            <!--Retorno renderizado-->
            <div class="form-group">
                <label for="fname" class="form-label">Foi atendido no local?</label>
                <br>
                <div @change="${this._alterar_data_atendimento}" class="radio-input">
                    <label>
                        <input ?checked="${this.objeto_os.OS.informacao_atendimento.foi_atendido === true}" value="true" name="value-radio-foi_atendido" id="value-1" type="radio" />
                        <span>S i m</span>
                    </label>
                    <label>
                        <input ?checked="${this.objeto_os.OS.informacao_atendimento.foi_atendido === false}" value="false" name="value-radio-foi_atendido" id="value-2" type="radio" />
                        <span>N ã o</span>
                    </label>
                    <span class="selection"></span>
                </div>
            </div>
            <div class="form-group">
                <label for="fname" class="form-label">A Casa/Ap está em ocupação pelo titular ou outras pessoas?</label>
                <br>
                <div @change="${this._alterar_data_local_ocupado}" class="radio-input">
                    <label>
                        <input ?checked="${this.objeto_os.OS.informacao_atendimento.local_ocupado === true}" value="true" name="value-radio-local_ocupado" id="value-1" type="radio" />
                        <span>T i t u l a r</span>
                    </label>
                    <label>
                        <input ?checked="${this.objeto_os.OS.informacao_atendimento.local_ocupado === false}" value="false" name="value-radio-local_ocupado" id="value-2" type="radio" />
                        <span>O u t r o s</span>
                    </label>
                    <span class="selection"></span>
                </div>
            </div>
            <div class="form-group">
                <label for="fname" class="form-label">O cliente aceitou o acordo proposto na ordem de serviço?</label>
                <br>
                <div @change="${this._alterar_data_acordo}" class="radio-input">
                    <label>
                        <input ?checked="${this.objeto_os.OS.informacao_atendimento.acordo === true}" value="true" name="value-radio-acordo" id="value-1" type="radio" />
                        <span>S i m</span>
                    </label>
                    <label>
                        <input ?checked="${this.objeto_os.OS.informacao_atendimento.acordo === false}" value="false" name="value-radio-acordo" id="value-2" type="radio" />
                        <span>N ã o</span>
                    </label>
                    <span class="selection"></span>
                </div>
            </div>
            <div class="form-group">
                <label for="fname" class="form-label">Houve alteração na data de vencimento?</label>
                <br>
                <div @change="${this._alterar_data_alt_data_vencimento}" class="radio-input">
                    <label>
                        <input ?checked="${this.objeto_os.OS.informacao_atendimento.alt_data_vencimento === true}" value="true" name="value-radio-alt_data_vencimento" id="value-1" type="radio" />
                        <span>S i m</span>
                    </label>
                    <label>
                        <input ?checked="${this.objeto_os.OS.informacao_atendimento.alt_data_vencimento === false}" value="false" name="value-radio-alt_data_vencimento" id="value-2" type="radio" />
                        <span>N ã o</span>
                    </label>
                    <span class="selection"></span>
                </div>
            </div>

            ${this.exibir_info? html`
                <div class="form-group;">
                    <label for="fname" class="form-label">Qual o novo dia de vencimento?</label>
                    <input 
                        @change="${this._alterar_data_vencimento}"
                        placeholder="Nova data!" type="number" id="fname" name="fname" 
                        .value="${this.objeto_os.OS.informacao_atendimento.nova_data === ""?"":this.objeto_os.OS.informacao_atendimento.nova_data}" class="form-input">
                </div>
                <br>
            `:""}

            <div class="form-group">
                <label for="fname" class="form-label">Informações negociadas com vizinho, amigo, parente ou outra pessoa além do titular?</label>
                <br>
                <div @change="${this._alterar_data_info}" class="radio-input">
                    <label>
                        <input ?checked="${this.objeto_os.OS.informacao_atendimento.info.verdadeiro === true}" value="true" name="value-radio-info" id="value-1" type="radio" />
                        <span>S i m</span>
                    </label>
                    <label>
                        <input ?checked="${this.objeto_os.OS.informacao_atendimento.info.verdadeiro === false}" value="false" name="value-radio-info" id="value-2" type="radio" />
                        <span>N ã o</span>
                    </label>
                    <span class="selection"></span>
                </div>
            </div>
            

            

        `;
    }
}

// 2. Em vez de @customElement, use o registro manual
customElements.define('tratativa-retencao', Tratativa_Retencao);