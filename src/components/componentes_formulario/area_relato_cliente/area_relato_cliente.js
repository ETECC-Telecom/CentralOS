import { LitElement, html, css, unsafeCSS } from 'lit';

import { estourar_drawer } from '../../drawer_scripts/drawer_scripts_component';

export class Area_Relato_Cliente extends LitElement {
    // 1. Em vez de @property, use o objeto static properties
    static properties = {
        objeto_os: { type: Object }
    };

    static get styles() {
        return css`
	    host: {
            
	    }
        /* Helper para organizar os blocos sem usar <br> */
        .form-group {
            margin-bottom: 20px;
            display: flex;
            flex-direction: column;
        }

        .form-group-row {
            margin-bottom: 15px;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        /* Estilização das Labels */
        .form-label {
            font-size: 17px;
            font-weight: 600;
            margin-bottom: 6px;
            color: var(--btn-text-background-color);
        }

        .form-label-inline {
            font-size: 14px;
            color: #333333;
            cursor: pointer;
        }

        /* Reset e Estilo Flat para Inputs de Texto, Select e Textarea */
        .form-input,
        .form-select,
        .form-textarea {
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            /* Zera o visual padrão do navegador */

            width: 100%;
            box-sizing: border-box;
            font-family: inherit;
            font-size: 15px;
            padding: 10px 12px;

            border: 2px solid #e2e8f0;
            border-radius: 6px;
            /* Bordas levemente arredondadas */
            background-color: #f8fafc;
            color: #1a202c;
            transition: border-color 0.2s ease, background-color 0.2s ease;
        }

        /* Estados de Foco */
        .form-input:focus,
        .form-select:focus,
        .form-textarea:focus {
            outline: none;
            border-color: var(--destaque-color);
            /* Azul Flat */
            background-color: #ffffff;
        }
        /* Customizações específicas do Textarea */
        .form-textarea {
            resize: vertical;
            min-height: 100px;
        }
	  `;
    }

    constructor() {
        super();
        this.objeto_os = {}
    }

    connectedCallback() {
        super.connectedCallback(); // ⚠️ Sempre chame o super PRIMEIRO no Lit
        
    }

    _alterar_data_cliente = (e) => {
        const nome = e.target.value;

        this.objeto_os.OS.info_cliente.relato_cliente = nome;
        this.objeto_os.salvar_os_localstorage();
    }

    render() {
        return html`
            <!--Retorno renderizado-->
            <div class="form-group">
                <label for="message" class="form-label">Relato do Cliente</label>
                <textarea
                    @dblclick="${(e) => estourar_drawer(e.target, 'Relato do Cliente')}"
                    style="border-left: 5px solid #ff0000;"
                    @change="${this._alterar_data_cliente}"
                    placeholder="Em sua Tratativa inicial, qual foi o relato do cliente?"
                    id="message" name="message" rows="10" cols="30" class="form-textarea"
                    .value="${(this.objeto_os.OS.info_cliente.relato_cliente === null) ? "" : this.objeto_os.OS.info_cliente.relato_cliente}"></textarea>
            </div>
            
        `;
    }
}

// 2. Em vez de @customElement, use o registro manual
customElements.define('area-relato-cliente', Area_Relato_Cliente);