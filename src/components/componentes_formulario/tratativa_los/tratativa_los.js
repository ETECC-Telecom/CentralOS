import { LitElement, html, css, unsafeCSS } from 'lit';
import globalStyle from "./index.css?inline";


export class Tratativa_Los extends LitElement {
    // 1. Em vez de @property, use o objeto static properties
    static properties = {
        objeto_os: {type: Object},
    };

    static get styles() {
        return css`${unsafeCSS(globalStyle)}`;
    }

    constructor() {
        super();
        this.objeto_os = {}
    }

    // Executado assim que o componente é renderizado na tela
    firstUpdated() {

    }
    connectedCallback() {
        super.connectedCallback(); // ⚠️ Sempre chame o super PRIMEIRO no Lit

    }

    _alterar_checagem_rompimento = (e) =>{
        if(e.target.value === "true"){
            this.objeto_os.OS.conferencias_tecnicas.rompimento_externo = true;
        }else{
            this.objeto_os.OS.conferencias_tecnicas.rompimento_externo = false;
        }

        this.objeto_os.salvar_os_localstorage();
    }
    _alterar_checagem_fibra = (e) =>{
        if(e.target.value === "true"){
            this.objeto_os.OS.conferencias_tecnicas.fibra_padrao = true;
        }else{
            this.objeto_os.OS.conferencias_tecnicas.fibra_padrao = false;
        }

        this.objeto_os.salvar_os_localstorage();
    }
    _alterar_checagem_pto = (e) =>{
        if(e.target.value === "true"){
            this.objeto_os.OS.conferencias_tecnicas.pto = true;
        }else{
            this.objeto_os.OS.conferencias_tecnicas.pto = false;
        }

        this.objeto_os.salvar_os_localstorage();
    }
    _alterar_checagem_cordao_obtico = (e) =>{
        if(e.target.value === "true"){
            this.objeto_os.OS.conferencias_tecnicas.cordao_obtico = true;
        }else{
            this.objeto_os.OS.conferencias_tecnicas.cordao_obtico = false;
        }

        this.objeto_os.salvar_os_localstorage();
    }

    _alterar_checagem_limpeza = (e) =>{
        if(e.target.value === "true"){
            this.objeto_os.OS.conferencias_tecnicas.limpeza = true;
        }else{
            this.objeto_os.OS.conferencias_tecnicas.limpeza = false;
        }

        this.objeto_os.salvar_os_localstorage();
    }
    _alterar_checagem_checagem = (e) =>{
        if(e.target.value === "true"){
            this.objeto_os.OS.conferencias_tecnicas.checagem = true;
        }else{
            this.objeto_os.OS.conferencias_tecnicas.checagem = false;
        }

        this.objeto_os.salvar_os_localstorage();
    }
    _alterar_checagem_anexos = (e) =>{
        if(e.target.value === "true"){
            this.objeto_os.OS.conferencias_tecnicas.anexos = true;
        }else{
            this.objeto_os.OS.conferencias_tecnicas.anexos = false;
        }

        this.objeto_os.salvar_os_localstorage();
    }

    render() {
        return html`
            <!--Retorno renderizado-->
            <div class="form-group">
                <label for="fname" class="form-label">Foi identificado algum rompimento externo?</label>
                <br>
                <div @change="${this._alterar_checagem_rompimento}" class="radio-input">
                    <label>
                        <input ?checked="${this.objeto_os.OS.conferencias_tecnicas.rompimento_externo === true}" value="true" name="value-radio" id="value-1" type="radio" />
                        <span>S i m</span>
                    </label>
                    <label>
                        <input ?checked="${this.objeto_os.OS.conferencias_tecnicas.rompimento_externo === false}" value="false" name="value-radio" id="value-2" type="radio" />
                        <span>N ã o</span>
                    </label>
                    <span class="selection"></span>
                </div>
            </div>

            <div class="form-group">
                <label for="fname" class="form-label">A fibra interna está nos padrões?</label>
                <br>
                <div @change="${this._alterar_checagem_fibra}" class="radio-input">
                    <label>
                        <input ?checked="${this.objeto_os.OS.conferencias_tecnicas.fibra_padrao === true}" value="true" name="value-radio-fibra" id="value-1" type="radio" />
                        <span>S i m</span>
                    </label>
                    <label>
                        <input ?checked="${this.objeto_os.OS.conferencias_tecnicas.fibra_padrao === false}" value="false" name="value-radio-fibra" id="value-2" type="radio" />
                        <span>N ã o</span>
                    </label>
                    <span class="selection"></span>
                </div>
            </div>

            <div class="form-group">
                <label for="fname" class="form-label">A PTO está instalada corretamente?</label>
                <br>
                <div @change="${this._alterar_checagem_pto}" class="radio-input">
                    <label>
                        <input ?checked="${this.objeto_os.OS.conferencias_tecnicas.pto === true}" value="true" name="value-radio-pto" id="value-1" type="radio" />
                        <span>S i m</span>
                    </label>
                    <label>
                        <input ?checked="${this.objeto_os.OS.conferencias_tecnicas.pto === false}" value="false" name="value-radio-pto" id="value-2" type="radio" />
                        <span>N ã o</span>
                    </label>
                    <span class="selection"></span>
                </div>
            </div>

            <div class="form-group">
                <label for="fname" class="form-label">Verificou o patch cord (se está dobrado ou quebrado)?</label>
                <br>
                <div @change="${this._alterar_checagem_cordao_obtico}" class="radio-input">
                    <label>
                        <input ?checked="${this.objeto_os.OS.conferencias_tecnicas.cordao_obtico === true}" value="true" name="value-radio-patch" id="value-1" type="radio" />
                        <span>S i m</span>
                    </label>
                    <label>
                        <input ?checked="${this.objeto_os.OS.conferencias_tecnicas.cordao_obtico === false}" value="false" name="value-radio-patch" id="value-2" type="radio" />
                        <span>N ã o</span>
                    </label>
                    <span class="selection"></span>
                </div>
            </div>

            <div class="form-group">
                <label for="fname" class="form-label">Realizou a limpeza do leitor óptico da ONU e do conector?</label>
                <br>
                <div @change="${this._alterar_checagem_limpeza}" class="radio-input">
                    <label>
                        <input ?checked="${this.objeto_os.OS.conferencias_tecnicas.limpeza === true}" value="true" name="value-radio-limpeza" id="value-1" type="radio" />
                        <span>S i m</span>
                    </label>
                    <label>
                        <input ?checked="${this.objeto_os.OS.conferencias_tecnicas.limpeza === false}" value="false" name="value-radio-limpeza" id="value-2" type="radio" />
                        <span>N ã o</span>
                    </label>
                    <span class="selection"></span>
                </div>
            </div>

            <div class="form-group">
                <label for="fname" class="form-label">Verificou se o causador do LOS não seria o próprio equipamento?</label>
                <br>
                <div @change="${this._alterar_checagem_checagem}" class="radio-input">
                    <label>
                        <input ?checked="${this.objeto_os.OS.conferencias_tecnicas.checagem === true}" value="true" name="value-radio-checagem" id="value-1" type="radio" />
                        <span>S i m</span>
                    </label>
                    <label>
                        <input ?checked="${this.objeto_os.OS.conferencias_tecnicas.checagem === false}" value="false" name="value-radio-checagem" id="value-2" type="radio" />
                        <span>N ã o</span>
                    </label>
                    <span class="selection"></span>
                </div>
            </div>

            <div class="form-group">
                <label for="fname" class="form-label">Todas as fotos das verificações solicitadas foram anexadas no MK?</label>
                <br>
                <div @change="${this._alterar_checagem_anexos}" class="radio-input">
                    <label>
                        <input ?checked="${this.objeto_os.OS.conferencias_tecnicas.anexos === true}" value="true" name="value-radio-anexos" id="value-1" type="radio" />
                        <span>S i m</span>
                    </label>
                    <label>
                        <input ?checked="${this.objeto_os.OS.conferencias_tecnicas.anexos === false}" value="false" name="value-radio-anexos" id="value-2" type="radio" />
                        <span>N ã o</span>
                    </label>
                    <span class="selection"></span>
                </div>
            </div>

        `;
    }
}

// 2. Em vez de @customElement, use o registro manual
customElements.define('tratativa-los', Tratativa_Los);