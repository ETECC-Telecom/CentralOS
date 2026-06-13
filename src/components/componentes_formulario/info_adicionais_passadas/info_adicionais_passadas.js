import { LitElement, html, css, unsafeCSS } from 'lit';
import globalStyle from "./index.css?inline";


export class Informacao_Adicionais_Passadas extends LitElement {
    // 1. Em vez de @property, use o objeto static properties
    static properties = {
        objeto_os: { type: Object },
        info_anexada: { type: Boolean },
    };

    static get styles() {
        return css`${unsafeCSS(globalStyle)}`;
    }

    constructor() {
        super();
        this.objeto_os = {}
        this.info_anexada = []
    }

    // Executado assim que o componente é renderizado na tela
    firstUpdated() {
        
    }
    connectedCallback() {
        super.connectedCallback(); // ⚠️ Sempre chame o super PRIMEIRO no Lit
        this.info_anexada = this.objeto_os.OS.complemento_atendimento;
    }

    _adicionar_informacao = (e) =>{
        const valor = this.shadowRoot.getElementById("info_extra_titulo");
        this.info_anexada.push(valor.value);

        this.objeto_os.salvar_os_localstorage();
        valor.value = "";
        this.requestUpdate()
    }

    _remover_info_anexada(e){
        const id_valor = e.target.id; 
        
        this.info_anexada.splice(id_valor,1);
        this.objeto_os.salvar_os_localstorage();
        
        this.requestUpdate()

    }

    render() {
        return html`
            <!--Retorno renderizado-->
            <h2>Informações Adicionais Passadas ao Cliente</h2>
            <div class="form-group">
                    <p class="texto_informativo">Caso você tenha passado mais alguma informação ao Cliente que não esteja listada acima, pode adicioná-la manualmente para complementar sua Ordem de Serviço!</p>
                    <br>
                                       
                    <textarea id="info_extra_titulo" name="" value="" id="message" name="message" rows="5" class="form-textarea"></textarea>

                    <br>

                    <button 
                        @click="${this._adicionar_informacao}"
                        type="button" class="form-button">+</button>
                </div>

            <div class="Container_info_extra">
                ${this.info_anexada.length !== 0 
                ? html`
                    ${this.info_anexada.map((element, chave) => html`
                        
                        <div class="item_info_extra">
                            <p class="texto_informativo" style="flex:8">
                                ${element}
                            </p>
                            <button
                                style="flex:1"
                                @click="${this._remover_info_anexada}"
                                id="${chave}"
                                class="botao-close">–</button>
                        </div>

                    `)}
                    `
                : html``}

                
                
            </div>
        `;
    }
}

// 2. Em vez de @customElement, use o registro manual
customElements.define('informacoes-adicionais-passadas', Informacao_Adicionais_Passadas);