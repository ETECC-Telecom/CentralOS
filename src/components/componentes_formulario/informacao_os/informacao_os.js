import { LitElement, html, css, unsafeCSS } from 'lit';

export class Informacao_na_OS extends LitElement {
    // 1. Em vez de @property, use o objeto static properties
    static properties = {
        objeto_os: { type: Object },
        info_anexada: { type: Boolean },
        informacoes_adicionais: {type: Array},
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
        
        .texto_informativo{
            font-size: var(--paragraph-info) ;
            color:var(--color-text-info);
        }

        /* From Uiverse.io by Ghost-aft */ 
        .radio-input input {
        display: none;
        }

        .radio-input {
        --container_width: 100%;
        position: relative;
        display: flex;
        align-items: center;
        border-radius: 10px;
        background-color: #fff;
        color: #000000;
        width: var(--container_width);
        overflow: hidden;
        border: 1px solid rgba(53, 52, 52, 0.226);
        }

        .radio-input label {
        width: 100%;
        padding: 10px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1;
        font-weight: 600;
        letter-spacing: -1px;
        font-size: 14px;
        }

        .selection {
        display: none;
        position: absolute;
        height: 100%;
        width: 50%;
        z-index: 0;
        left: 0;
        top: 0;
        transition: 0.15s ease;
        }

        .radio-input label:has(input:checked) {
        color: #fff;
        }

        .radio-input label:has(input:checked) ~ .selection {
        background-color: var(--destaque-color);
        display: inline-block;
        }

        .radio-input label:nth-child(1):has(input:checked) ~ .selection {
        transform: translateX(calc(50% / 20%));
        }

        .radio-input label:nth-child(2):has(input:checked) ~ .selection {
        transform: translateX(calc(50% * 2));
        }

        /* Informações Não Anexadas*/
        .container_info_anexada{
            display:flex;
            flex-direction: row;
            justify-content: space-between;
            color: var(--text-color);
            margin:.2rem 0 .2rem 0;
        }
    

        /*CheackBox*/
        /* Inputs de Seleção (Radio e Checkbox) */
        .form-checkbox {
            -webkit-appearance: none;
            appearance: none;
            background-color: #f8fafc;
            margin: 0;
            font: inherit;
            color: var(--destaque-color);
            width: 18px;
            height: 18px;
            border: 2px solid #cbd5e1;
            display: grid;
            place-content: center;
            cursor: pointer;
            transition: border-color 0.2s ease;
        }

        .form-checkbox {
            border-radius: 4px;
            /* Levemente arredondado para checkbox */
        }

        /* Indicadores internos para Checkbox e Radio ativos */
        
        .form-checkbox::before {
            content: "";
            width: 10px;
            height: 10px;
            transform: scale(0);
            transition: 120ms transform ease-in-out;
            background-color: currentcolor;
            clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
            /* Formato de "Check" */
        }
        .form-checkbox:checked::before {
            transform: scale(1);
        }

        .form-checkbox:checked {
            border-color: var(--destaque-color);
        }

        .form-checkbox:focus {
            outline: 2px solid #ebf8ff;
        }
        .form-group-row label{
            color: var(--text-color);
        }


        /* Botão Flat */
        .form-button {
            -webkit-appearance: none;
            appearance: none;
            font-family: inherit;
            font-size: 15px;
            font-weight: 600;
            background-color: var(--destaque-color);
            color: #ffffff;
            border: none;
            border-radius: 6px;
            padding: 12px 24px;
            cursor: pointer;
            transition: background-color 0.2s ease;
            width: 100%;
            margin-top: 1rem;
        }

        .form-button:hover {
            background-color: var(--destaque-color);
        }

        .form-button:active {
            background-color: var(--destaque-color);
        }

        .botao-close {
            display: inline-block;
            -webkit-appearance: none;
            appearance: none;
            border: none;
            color:white;
            border-radius: 6px;
            padding: 5px 12px;
            cursor: pointer;
            background-color: var(--destaque-color);
        }
	  `;
    }

    constructor() {
        super();
        this.objeto_os = {}
        this.info_anexada = true;
        this.informacoes_adicionais = [];
    }

    connectedCallback() {
        super.connectedCallback(); // ⚠️ Sempre chame o super PRIMEIRO no Lit
        this.informacoes_adicionais = this.objeto_os.OS.endereco_info_os.complemento_info_necessaria.requerimentos;
        this.info_anexada = this.objeto_os.OS.endereco_info_os.info_necessaria;
    }

    _alterar_data_cliente = (e) => {
        const data = e.target.value.toLowerCase() === "true";

        this.objeto_os.OS.endereco_info_os.info_necessaria = data;
        this.info_anexada = data;

        this.objeto_os.salvar_os_localstorage();
    }
    _alterar_info_OS(e) {
        const tipo = e.target.checked;
        const valor = e.target.value;

        switch (valor) {
            case "historico":
                this.objeto_os.OS.endereco_info_os.complemento_info_necessaria.info_padrao.historico = tipo
                break;
            case "comodato":
                this.objeto_os.OS.endereco_info_os.complemento_info_necessaria.info_padrao.comodato = tipo
                break;
            case "descricao":
                this.objeto_os.OS.endereco_info_os.complemento_info_necessaria.info_padrao.descricao = tipo
                break;
            case "contratacao":
                this.objeto_os.OS.endereco_info_os.complemento_info_necessaria.info_padrao.contratacao = tipo
                break;
        }

        this.objeto_os.salvar_os_localstorage();
    }

    _add_info_anexada(e){
        const valor = this.shadowRoot.getElementById("info_extra_titulo");
        this.informacoes_adicionais.push(valor.value);
        this.objeto_os.salvar_os_localstorage();
        valor.value = "";
        this.requestUpdate()
    }
    _remover_info_anexada(e){
        const id_valor = e.target.id; 
        
        this.informacoes_adicionais.splice(id_valor,1);
        this.objeto_os.salvar_os_localstorage();
        
        this.requestUpdate()

    }

    _alterar_operador(e){
        const nome = e.target.value;
        this.objeto_os.OS.endereco_info_os.complemento_info_necessaria.operador = nome

        this.objeto_os.salvar_os_localstorage();

    }
    
    render() {
        return html`
            <!--Retorno renderizado-->
            <div class="form-group">
                <label for="fname" class="form-label">Informações Anexadas:</label>
                <p class="texto_informativo">Todas as informações necessárias para realizar a OS foram anexadas?</p>
                <br>
                <div @change="${this._alterar_data_cliente}" class="radio-input">
                    <label>
                        <input ?checked="${this.objeto_os.OS.endereco_info_os.info_necessaria === true}" value="true" name="value-radio" id="value-1" type="radio" />
                        <span>S i m</span>
                    </label>
                    <label>
                        <input ?checked="${this.objeto_os.OS.endereco_info_os.info_necessaria === false}" value="false" name="value-radio" id="value-2" type="radio" />
                        <span>N ã o</span>
                    </label>
                    <span class="selection"></span>
                </div>
                <br>


                ${!this.info_anexada
                ? html`
                    
                    <div class="form-group">
                        <label for="operadornome" class="form-label">Nome do Operador:</label>
                        <input
                            @change="${this._alterar_operador}"
                            type="text" id="operadornome" name="operadornome" value="${this.objeto_os.OS.endereco_info_os.complemento_info_necessaria.operador === null?"":this.objeto_os.OS.endereco_info_os.complemento_info_necessaria.operador}" class="form-input">
                    </div>

                    <label for="fname" class="form-label">Informações Não Anexadas!</label>
                    <br>
                <div class="form-group-row">
            
                    <input
                        ?checked="${this.objeto_os.OS.endereco_info_os.complemento_info_necessaria.info_padrao.historico}"
                        @change="${this._alterar_info_OS}"
                        type="checkbox" id="info1" name="info" value="historico" class="form-checkbox">
                    <label for="info1" class="form-label-inline">Histórico de Quedas</label>
                </div>

                <div class="form-group-row">
                    <input
                        ?checked="${this.objeto_os.OS.endereco_info_os.complemento_info_necessaria.info_padrao.comodato}"
                        @change="${this._alterar_info_OS}"
                        type="checkbox" id="info2" name="info" value="comodato" class="form-checkbox">
                    <label for="info2" class="form-label-inline">Informação de Comodato</label>
                </div>

                <div class="form-group-row">
                    <input
                        ?checked="${this.objeto_os.OS.endereco_info_os.complemento_info_necessaria.info_padrao.descricao}"
                        @change="${this._alterar_info_OS}"
                        type="checkbox" id="info3" name="info" value="descricao" class="form-checkbox">
                    <label for="info3" class="form-label-inline">Descrição na OS</label>
                </div>

                <div class="form-group-row">
                    <input
                        ?checked="${this.objeto_os.OS.endereco_info_os.complemento_info_necessaria.info_padrao.contratacao}"
                        @change="${this._alterar_info_OS}"
                        type="checkbox" id="info4" name="info" value="contratacao" class="form-checkbox">
                    <label for="info4" class="form-label-inline">Data de Contratação</label>
                </div>

                <div class="form-group">
                    <p class="texto_informativo">Adicione Informações extras que não foram listadas nos itens acima:</p>
                    <input type="text" id="info_extra_titulo" name="" value="" class="form-input">
                    <button 
                        @click="${this._add_info_anexada}"
                        type="button" class="form-button">+</button>
                </div>
                

                ${this.informacoes_adicionais.length !== 0 
                ? html`
                    ${this.informacoes_adicionais.map((element, chave) => html`
                        <div class="container_info_anexada">
                            <p>${element}</p> 
                            <button 
                                @click="${this._remover_info_anexada}"
                                id="${chave}"
                                class="botao-close">–</button>
                        </div>
                    `)}
                    `
                : html``}       
                            </div>
                `:``}
                
        `;
    }
}

// 2. Em vez de @customElement, use o registro manual
customElements.define('informacao-na-os', Informacao_na_OS);