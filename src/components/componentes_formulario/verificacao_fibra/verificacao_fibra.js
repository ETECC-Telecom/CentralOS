import { LitElement, html, css, unsafeCSS } from 'lit';
import globalStyle from "./index.css?inline";


export class Verificacao_Fibra extends LitElement {
    // 1. Em vez de @property, use o objeto static properties
    static properties = {
        objeto_os: { type: Object },
        fibra: { type: Object },
        container_sinais: { type: Boolean },
    };

    static get styles() {
        return css`${unsafeCSS(globalStyle)}`;
    }

    constructor() {
        super();
        this.objeto_os = {}
        this.container_sinais = true;

    }

    // Executado assim que o componente é renderizado na tela
    firstUpdated() {
        //Desabilitando por LOS
        if (this.fibra.sinal_pto === "LOS") {
            const container = this.shadowRoot.getElementById("text_sinal_drop");
            const btn = this.shadowRoot.getElementById("btn_desabilitar");
            container.disabled = true;
            
            container.classList.add("is-disabled");
            btn.classList.add('habilitado')
            container.value = 0;
        }
    }
    connectedCallback() {
        super.connectedCallback(); // ⚠️ Sempre chame o super PRIMEIRO no Lit
        this.fibra = this.objeto_os.OS.conferencia_tecnica.fibra;
        console.log(this.fibra)
        this.container_sinais = this.fibra.sinal_pto === "LOS" ? false:true;
       
    }

    _desabilitar_por_LOS = (e) => {
        const valor = "LOS";
        //Variável que vai receber o container de texto no switch
        let container = null;

        container = this.shadowRoot.getElementById("text_sinal_drop");
        if (container.disabled) {
            container.disabled = false;
            this.container_sinais = true;
            this.fibra.sinal_pto = 0;
            e.target.classList.remove('habilitado')
            container.classList.remove("is-disabled");
            container.value = "";

        } else {
            container.disabled = true;
            this.container_sinais = false
            this.fibra.sinal_pto = valor;
            container.classList.add("is-disabled");
            e.target.classList.add('habilitado')
            container.value = 0;
        }

        this.objeto_os.salvar_os_localstorage();
    }

    _adicionar_sinal_fibra = (e) => {
        const valor = e.target.value;
        const id_fibra = e.target.id
        switch (id_fibra) {
            case "text_sinal_drop":
                this.fibra.sinal_pto = valor
                break;
            case "text_sinal_pathcord":
                this.fibra.sinal_pathcord = valor
                break;
            case "text_sinal_autoisp":
                this.fibra.sinal_autoisp = valor
                break;
        }
        this.objeto_os.salvar_os_localstorage();
    }


    render() {
        return html`
            <!--Retorno renderizado-->
            <h2>Checagem da Fibra</h2>

            <label for="message" class="form-label">Sinal do DROP:</label>
            <div class="container_sinal_fibra">
                <input
                    @change="${this._adicionar_sinal_fibra}"
                    style="flex:3"
                    type="number" 
                    placeholder="0.0"
                    id="text_sinal_drop" name="fname" value="" class="form-input">
                <button
                    @click="${this._desabilitar_por_LOS}"
                    style="flex:1"
                    type="button" id="btn_desabilitar" class="form-button">LOS</button>
            </div>
            ${this.container_sinais === true ? html`
                <div
                    style="display:flex; flex-direction: row; gap:1rem;margin-top:1rem;">
                    <div>
                        <label for="message" class="form-label">Pathcord</label>

                        <input
                        @change="${this._adicionar_sinal_fibra}"
                        type="number" 
                        placeholder="0.0"
                        id="text_sinal_pathcord" name="fname" value="" class="form-input">
                    </div>
                    <div>
                        <label for="message" class="form-label">AutoISP</label>

                        <input
                        @change="${this._adicionar_sinal_fibra}"
                        type="number" 
                        placeholder="0.0"
                        id="text_sinal_autoisp" name="fname" value="" class="form-input">
                    </div>
                </div>
                <br>
                <p class="texto_informativo">
                    A foto do sinal de Fibra Foi Anexada?
                </p>
                <div @change="" class="radio-input">
                    <label>
                        <input ?checked="" name="value-radio-anexo-fibra" id="value-1" type="radio" />
                        <span>S i m</span>
                    </label>
                    <label>
                        <input ?checked="" name="value-radio-anexo-fibra" id="value-2" type="radio" />
                        <span>N ã o</span>
                    </label>
                    <span class="selection"></span>
                </div>

                <p class="texto_informativo">
                    Foi realizada a Limpeza dos conectores e emeda de Fibra?
                </p>
                <div @change="" class="radio-input">
                    <label>
                        <input ?checked="" name="value-radio-limpeza-fibra" id="value-1" type="radio" />
                        <span>S i m</span>
                    </label>
                    <label>
                        <input ?checked="" name="value-radio-limpeza-fibra" id="value-2" type="radio" />
                        <span>N ã o</span>
                    </label>
                    <span class="selection"></span>
                </div>
                <br>
                <textarea 
                    id="message" 
                    name="message" 
                    rows="5" 
                    placeholder="Caso tenha alguma observação relacionado a Fibra adicione aqui para omitir no relatório final!"
                    class="form-textarea"></textarea>


                `: ""}
        `;
    }
}

// 2. Em vez de @customElement, use o registro manual
customElements.define('verificacao-fibra', Verificacao_Fibra);