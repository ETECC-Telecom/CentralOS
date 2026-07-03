import { LitElement, html, css, unsafeCSS } from 'lit';
import globalStyle from "./index.css?inline";


export class Componente_Encaminhar_Externa extends LitElement {
    // 1. Em vez de @property, use o objeto static properties
    static properties = {
        objeto_os: { type: Object },
        necessario: {type: Boolean},
        objeto_encaminhado: {type: Object},
    };

    static get styles() {
        return css`${unsafeCSS(globalStyle)}`;
    }

    constructor() {
        super();
        this.objeto_os = {};
        this.objeto_encaminhado = {};
        this.necessario = false;
    }

    // Executado assim que o componente é renderizado na tela
    firstUpdated() {

    }
    connectedCallback() {
        super.connectedCallback(); // ⚠️ Sempre chame o super PRIMEIRO no Lit
        this.objeto_encaminhado = this.objeto_os.OS.conferencia_tecnica.encaminhar_externa;
        this.necessario = this.objeto_encaminhado.necessidade;
    }

    _Alterar_Necessidade = (e)=>{
        const Valor = e.target.value === "true"?true:false;
        this.necessario = Valor;
        this.objeto_encaminhado.necessidade=Valor;

        this.objeto_os.salvar_os_localstorage();
    }

    _Alterar_descricao = (e)=>{
        const Texto = e.target.value === null?null:e.target.value;
        
        this.objeto_encaminhado.observacao = Texto;

        this.objeto_os.salvar_os_localstorage();
    }
    render() {
        return html`
            <!--Retorno renderizado-->
            <br>
            <h2>Necessário Encaminhar Equipe Externa?</h2>
            <br>
            <div style="display:flex;flex-direction:column; gap:.5rem">
                <div @change="${this._Alterar_Necessidade}" class="radio-input" id="ativo-local">
                    <label>
                        <input ?checked="${this.objeto_encaminhado.necessidade === true?true:false}" value="true" name="tipo-ativo" id="value-1" type="radio" />
                        <span>S i m</span>
                    </label>
                    <label>
                        <input ?checked="${this.objeto_encaminhado.necessidade === false?true:false}" value="false" name="tipo-ativo" id="value-2" type="radio" />
                        <span>N ã o</span>
                    </label>
                    <span class="selection"></span>
                </div>
            </div>
            <br>
            ${this.necessario?html`
            <div class="form-group">
                <label for="message" class="form-label">Relatório:</label>
                <textarea
                    @change="${this._Alterar_descricao}"
                    .value="${this.objeto_encaminhado.observacao}"
                    placeholder="Informe o Mótivo do porque é necessário encaminhar para a equipe externa!"
                    style="border-left: 5px solid #ff0000;"
                    id="message" 
                    name="message" 
                    rows="5" class="form-textarea"></textarea>
            </div>
                `:''}
            
        `;
    }
}

// 2. Em vez de @customElement, use o registro manual
customElements.define('encaminhar-externa', Componente_Encaminhar_Externa);