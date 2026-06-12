import { LitElement, html, css, unsafeCSS } from 'lit';
import globalStyle from "./index.css?inline";


export class Select_Parentesco extends LitElement {
    // 1. Em vez de @property, use o objeto static properties
    static properties = {
        parentesco_just: {type: Boolean},
        objeto_os: {type: Object}
    };

    static get styles() {
        return css`${unsafeCSS(globalStyle)}`;
    }

    constructor() {
        super();
        this.parentesco_just = false;
        this.objeto_os = {}

    }

    connectedCallback() {
        super.connectedCallback(); // ⚠️ Sempre chame o super PRIMEIRO no Lit
        this.parentesco_just = (this.objeto_os.OS.info_cliente.parentesco === "Outro")? true:false;
    }

    _mudar_parentesco = (e)=>{
        if (e.target.value === "Outro"){
            this.parentesco_just = true;
        }else{
            this.parentesco_just = false;
        }
        
    }

    _salvar_descricao_outros = (e) =>{
        
        const valor = e.target.value;
        const tipo = e.target.id;
        
        const data = [tipo, valor];
        this.objeto_os.alterar_informacoes_cliente(data);
    }

    render() {
        return html`
            <!--Retorno renderizado-->
            <div class="form-group">
                <label for="parentesco" class="form-label">Qual o Parentesco?</label>
                <select 
                    @change="${(e) => { this._mudar_parentesco(e); this._salvar_descricao_outros(e); }}"
                    id="parentesco" name="parentesco" class="form-select">
                    <option ?selected="${this.objeto_os.OS.info_cliente.parentesco === `Titular`}" value="Titular">Titular</option>
                    <option ?selected="${this.objeto_os.OS.info_cliente.parentesco === `Esposa'o`}" value="Esposa'o">Esposa'o</option>
                    <option ?selected="${this.objeto_os.OS.info_cliente.parentesco === `Filho'a`}" value="Filho'a">Filho'a</option>
                    <option ?selected="${this.objeto_os.OS.info_cliente.parentesco === `Funcionário`}" value="Funcionário">Funcionário</option>
                    <option ?selected="${this.objeto_os.OS.info_cliente.parentesco === `Avó'ô`}" value="Avó'ô">Avó'ô</option>
                    <option ?selected="${this.objeto_os.OS.info_cliente.parentesco === `Tio'a`}" value="Tio'a">Tio'a</option>
                    <option ?selected="${this.objeto_os.OS.info_cliente.parentesco === `Outro`}" value="Outro">Outro</option>
                </select>

                ${this.parentesco_just? html`
                <br>
                <div class="form-group">
                    <label for="message" class="form-label">Justifique em Caso de "Outro"</label>
                    <textarea 
                        @change="${this._salvar_descricao_outros}"
                        id="message" 
                        name="message" 
                        rows="3" 
                        class="form-textarea"
                        .value="${(this.objeto_os.OS.info_cliente.parentesco_info === null)?'':this.objeto_os.OS.info_cliente.parentesco_info}"
                        ></textarea>
                </div>`:''
                }
            </div>
        `;
    }
}

// 2. Em vez de @customElement, use o registro manual
customElements.define('select-parentesco', Select_Parentesco);