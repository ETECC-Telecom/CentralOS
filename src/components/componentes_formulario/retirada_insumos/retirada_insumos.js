import { LitElement, html, css, unsafeCSS } from 'lit';
import globalStyle from "./index.css?inline";


export class Retirada_Insumos extends LitElement {
    // 1. Em vez de @property, use o objeto static properties
    static properties = {
        objeto_os: { type: Object },
    };

    static get styles() {
        return css`${unsafeCSS(globalStyle)}`;
    }

    constructor() {
        super();
        this.objeto_os = {};
    }

    // Executado assim que o componente é renderizado na tela
    firstUpdated() {

    }
    connectedCallback() {
        super.connectedCallback(); // ⚠️ Sempre chame o super PRIMEIRO no Lit

    }

    alterar_data_fonte_retirada = (e)=>{
        const VALOR = e.target.value;
        if(VALOR === "true"){
            this.objeto_os.OS.conferencia_tecnica.fontes_retiradas = true;
        }else{
            this.objeto_os.OS.conferencia_tecnica.fontes_retiradas = false;
        }
        
        this.objeto_os.salvar_os_localstorage();
    }
    alterar_data_foto_anexada = (e)=>{
        const VALOR = e.target.value;
        if(VALOR === "true"){
            this.objeto_os.OS.conferencia_tecnica.fotos_anexadas = true;
        }else{
            this.objeto_os.OS.conferencia_tecnica.fotos_anexadas = false;
        }
        
        this.objeto_os.salvar_os_localstorage();
    }

    alterar_data_comprovante = (e)=>{
        const VALOR = e.target.value;
        if(VALOR === "true"){
            this.objeto_os.OS.conferencia_tecnica.comprovante_retirada = true;
        }else{
            this.objeto_os.OS.conferencia_tecnica.comprovante_retirada = false;
        }
        
        this.objeto_os.salvar_os_localstorage();
    }

    render() {
        return html`
            <!--Retorno renderizado-->
            <h4>Deixado o comprovante de retirada?</h4>
            <br>
            <div @change="${this.alterar_data_comprovante}" class="radio-input">
                <label>
                    <input ?checked="${this.objeto_os.OS.conferencia_tecnica.comprovante_retirada === true? true:false}" value="true" name="value-radio-comprovante" id="retirada-comprovante-1" type="radio" />
                    <span>S i m</span>
                </label>
                <label>
                    <input ?checked="${this.objeto_os.OS.conferencia_tecnica.comprovante_retirada === false? true:false}" value="false" name="value-radio-comprovante" id="retirada-comprovante-2" type="radio" />
                    <span>N ã o</span>
                </label>
                <span class="selection"></span>
            </div>
            <br>
            <div style="display:flex;flex-direction: row; gap:1rem;">

                <div style="display:flex;flex-direction: column; gap:.5rem; flex:1; align-items: center;">

                    <h4>Fontes Retiradas?</h4>

                    <div @change="${this.alterar_data_fonte_retirada}" class="radio-input">
                        <label>
                            <input ?checked="${this.objeto_os.OS.conferencia_tecnica.fontes_retiradas === true? true:false}" value="true" name="value-radio-insumos" id="retirada-insumos-1" type="radio" />
                            <span>S i m</span>
                        </label>
                        <label>
                            <input ?checked="${this.objeto_os.OS.conferencia_tecnica.fontes_retiradas === false? true:false}" value="false" name="value-radio-insumos" id="retirada-insumos-2" type="radio" />
                            <span>N ã o</span>
                        </label>
                        <span class="selection"></span>
                    </div>
                </div>

                <div style="display:flex;flex-direction: column; gap:.5rem; flex:1; align-items: center;">

                    <h4>Fotos dos Ativos Anexadas?</h4>
                    
                    <div @change="${this.alterar_data_foto_anexada}" class="radio-input">
                        <label>
                            <input ?checked="${this.objeto_os.OS.conferencia_tecnica.fotos_anexadas === true? true:false}" value="true" name="value-radio-insumos-2" id="retirada-insumos-1" type="radio" />
                            <span>S i m</span>
                        </label>
                        <label>
                            <input ?checked="${this.objeto_os.OS.conferencia_tecnica.fotos_anexadas === false? true:false}" value="false" name="value-radio-insumos-2" id="retirada-insumos-2" type="radio" />
                            <span>N ã o</span>
                        </label>
                        <span class="selection"></span>
                    </div>
                </div>
            </div>
        `;
    }
}

// 2. Em vez de @customElement, use o registro manual
customElements.define('retirada-insumos', Retirada_Insumos);