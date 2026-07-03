import { LitElement, html, css, unsafeCSS } from 'lit';
import globalStyle from "./index.css?inline";


export class Componente_Ajuda_Interna extends LitElement {
    // 1. Em vez de @property, use o objeto static properties
    static properties = {
        objeto_os: { type: Object },
        necessario: {type: Boolean},
        ajuda_interna: {type: Object},
    };

    static get styles() {
        return css`${unsafeCSS(globalStyle)}`;
    }

    constructor() {
        super();
        this.objeto_os = {};
        this.ajuda_interna = {};
        this.necessario = false;
    }

    // Executado assim que o componente é renderizado na tela
    firstUpdated() {

    }
    connectedCallback() {
        super.connectedCallback(); // ⚠️ Sempre chame o super PRIMEIRO no Lit
        this.ajuda_interna = this.objeto_os.OS.ajuda_interna;
        this.necessario = this.ajuda_interna.verdadeiro;
    }

    _Alterar_Necessidade = (e) =>{
        const Valor = e.target.value === "true"?true:false;
        this.necessario = Valor;
        this.ajuda_interna.verdadeiro = Valor;
        this.objeto_os.salvar_os_localstorage();
    }

    _Alterar_Setor = (e)=>{
        const Valor = e.target.value
        this.ajuda_interna.setor = Valor;
        this.objeto_os.salvar_os_localstorage();
    }

    _Alterar_Colaborador = (e)=>{
        const Valor = e.target.value === ""?null:e.target.value;
        this.ajuda_interna.nome = Valor;
        this.objeto_os.salvar_os_localstorage();
    }

    render() {
        return html`
            <!--Retorno renderizado-->
            <br>
            <h2>Ajuda Interna</h2>
            <br>
            <div style="display:flex;flex-direction:column; gap:.5rem">
                <div @change="${this._Alterar_Necessidade}" class="radio-input" id="ativo-local">
                    <label>
                        <input ?checked="${this.ajuda_interna.verdadeiro === true?true:false}" value="true" name="tipo-ativo" id="value-1" type="radio" />
                        <span>S i m</span>
                    </label>
                    <label>
                        <input ?checked="${this.ajuda_interna.verdadeiro === false?true:false}" value="false" name="tipo-ativo" id="value-2" type="radio" />
                        <span>N ã o</span>
                    </label>
                    <span class="selection"></span>
                </div>
            </div>
            <br>
            ${this.necessario?html`
            <div class="form-group">
                <label for="ativo" class="form-label">Selecione o Setor:</label>
                <select 
                    @change="${this._Alterar_Setor}"
                    id="ativo" name="ativo" class="form-select">
                    <option ?selected="${this.ajuda_interna.setor==="Torre"?true:false}" value="Torre">Torre</option>
                    <option ?selected="${this.ajuda_interna.setor==="TI"?true:false}" value="TI">TI</option>
                    <option ?selected="${this.ajuda_interna.setor==="Supervisão"?true:false}" value="Supervisão">Supervisão</option>
                </select>
            </div>

            <div class="form-group">
                <label for="fname" class="form-label">Nome do Colaborador:</label>
                <input 
                    placeholder="Nome de quem auxiliou!"
                    type="text" 
                    @change="${this._Alterar_Colaborador}"
                    id="fname" name="fname" .value="${this.ajuda_interna.nome}" class="form-input">
            </div>
                `:''}
        `;
    }
}

// 2. Em vez de @customElement, use o registro manual
customElements.define('componente-ajuda-interna', Componente_Ajuda_Interna);