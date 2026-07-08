import { LitElement, html, css, unsafeCSS } from 'lit';
import globalStyle from "./index.css?inline";
import { estourar_drawer } from '../../drawer_scripts/drawer_scripts_component';

export class Verificar_Fonte extends LitElement {
    // 1. Em vez de @property, use o objeto static properties
    static properties = {
        objeto_os: { type: Object },
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

    _alterar_data_fonte = (e, tipo) => {

        const Tipo_checagem = tipo;
        const valor = e.target.checked;

        switch (Tipo_checagem) {
            case 'primeiro':
                this.objeto_os.OS.conferencia_tecnica.fontes.mau_contato = valor
                break;
            case 'segundo':
                this.objeto_os.OS.conferencia_tecnica.fontes.amperagem = valor
                break;
            case 'terceiro':
                this.objeto_os.OS.conferencia_tecnica.fontes.uso = valor
                break;
        }
        this.objeto_os.salvar_os_localstorage();

    }

    _alterar_relatorio_fonte= (e) => {
        const Valor = e.target.value;
        
        this.objeto_os.OS.conferencia_tecnica.fontes.observacao = Valor;

        this.objeto_os.salvar_os_localstorage();
    }

    

    render() {
        return html`
            <!--Retorno renderizado-->
            <h2>Checagem das Fontes</h2>
            <br>
            <div class="container_checks">
                <div class="container_item_checks">
                    <p style="text-align: center;">Verificado mau Contato</p>
                    <label class="toggle-switch">
                        <input
                        @change="${(e) => { this._alterar_data_fonte(e, "primeiro") }}"
                        ?checked="${this.objeto_os.OS.conferencia_tecnica.fontes.mau_contato}"
                        type="checkbox">
                        <div class="toggle-switch-background">
                            <div class="toggle-switch-handle"></div>
                        </div>
                    </label>
                </div>

                <div class="container_item_checks">
                    <p style="text-align: center;">Verificado amperagem Correta</p>
                    <label class="toggle-switch">
                        <input
                        @change="${(e) => { this._alterar_data_fonte(e, "segundo") }}"
                        ?checked="${this.objeto_os.OS.conferencia_tecnica.fontes.amperagem}"
                        type="checkbox">
                        <div class="toggle-switch-background">
                            <div class="toggle-switch-handle"></div>
                        </div>
                    </label>
                </div>

                <div class="container_item_checks">
                    <p style="text-align: center;">Verificado mau Uso</p>
                    <label class="toggle-switch">
                        <input
                        @change="${(e) => { this._alterar_data_fonte(e, "terceiro") }}"
                        ?checked="${this.objeto_os.OS.conferencia_tecnica.fontes.uso}"
                        type="checkbox">
                        <div class="toggle-switch-background">
                            <div class="toggle-switch-handle"></div>
                        </div>
                    </label>
                </div>
            </div>
            <br>
            <textarea
                @dblclick="${(e) => estourar_drawer(e.target, 'Fonte')}"
                @change="${this._alterar_relatorio_fonte}"
                name="message" 
                style="border-left: 5px solid #ff0000;"
                rows="5"
                class="form-textarea"
                .value="${this.objeto_os.OS.conferencia_tecnica.fontes.observacao}"
                placeholder="Adicione aqui qualquer observação relacionado as Fontes checadas!"></textarea>
            
            
        `;
    }
}

// 2. Em vez de @customElement, use o registro manual
customElements.define('verificar-fonte', Verificar_Fonte);