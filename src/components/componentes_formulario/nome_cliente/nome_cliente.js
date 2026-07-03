import { LitElement, html, css, unsafeCSS } from 'lit';

export class Nome_Cliente extends LitElement {
    // 1. Em vez de @property, use o objeto static properties
    static properties = {
        objeto_os: {type: Object}
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
	  `;
	}

    constructor() {
        super();
        this.objeto_os = {}
    }

    connectedCallback() {
        super.connectedCallback(); // ⚠️ Sempre chame o super PRIMEIRO no Lit

    }

    _alterar_nome_cliente = (e)=>{
        const nome = e.target.value === ""? null:e.target.value;

        this.objeto_os.OS.info_cliente.nome_cliente = nome;
        this.objeto_os.salvar_os_localstorage();
    }

    _alterar_nome_cadastro = (e) =>{
        const nome = e.target.value === ""? null:e.target.value;

        this.objeto_os.OS.info_cliente.nome_cadastro = nome;
        this.objeto_os.salvar_os_localstorage();
    }

    _alterar_telefone_contato = (e) =>{
        const nome = e.target.value === ""? null:e.target.value;

        this.objeto_os.OS.info_cliente.telefone = nome;
        this.objeto_os.salvar_os_localstorage();
    }



    render() {
        return html`
            <!--Retorno renderizado-->
            <div class="form-group">
                <label for="fname" class="form-label">Nome do Cliente/Acompanhante:</label>
                <input 
                    @change="${this._alterar_nome_cliente}"
                    placeholder="Nome de quem acompanhou a visita" type="text" id="fname" name="fname" value="${(this.objeto_os.OS.info_cliente.nome_cliente === null)? "":this.objeto_os.OS.info_cliente.nome_cliente}" class="form-input">
            </div>
            <p style="color:var(--color-text-info);">É necessário que você preencha o nome do cadastro desse cliente para as mensagens altomáticas.<p>
            <div style="display:flex; gap:1rem; align-items: flex-end;">
                <div class="form-group; flex:2">
                    <label for="fname" class="form-label">Nome do Cadastro:</label>
                    <input 
                        @change="${this._alterar_nome_cadastro}"
                        placeholder="Nome do Cliente em Cadastro" type="text" id="fname" name="fname" 
                        .value="${this.objeto_os.OS.info_cliente.nome_cadastro}" class="form-input">
                </div>
                <div class="form-group; flex:1">
                    <label for="fname" class="form-label">Telefone:</label>
                    <input 
                        @change="${this._alterar_telefone_contato}"
                        placeholder="Telefone de contato atualizado!" type="text" id="fname" name="fname" 
                        .value="${this.objeto_os.OS.info_cliente.telefone}" class="form-input">
                </div>
            </div>
            <br>
            
        `;
    }
}

// 2. Em vez de @customElement, use o registro manual
customElements.define('nome-cliente', Nome_Cliente);