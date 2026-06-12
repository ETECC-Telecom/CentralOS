import { LitElement, html, css, unsafeCSS } from 'lit';
import globalStyle from "./index.css?inline";
import atendimento_cliente from "/src/data/atendimento_cliente.json";
import { estourarModal } from '../../modal_geral/modal_geral';

export class Atendimento_Feito_Cliente extends LitElement {
    // 1. Em vez de @property, use o objeto static properties
    static properties = {
        objeto_os: {type: Object},
        info_passadas: {type:Object}
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
        this.info_passadas = this.objeto_os.OS.atendimento_cliente;
    }
    _add_info_passada_cliente(e){
        const verificar_checado = e.target.checked;
        const valor = e.target.value;
        const id_info = e.target.id
        
        if (verificar_checado){
            this.info_passadas[id_info] = valor;
            this.objeto_os.salvar_os_localstorage();
        }else{
            delete this.info_passadas[id_info];
            this.objeto_os.salvar_os_localstorage();
        }
        

    }

    _verificar_existencia(id){
        const id_existe = id;
        if (this.info_passadas[id_existe] === undefined){
            return false;
        }else{
            return true
        }
    }

    render() {
        return html`
            <!--Retorno renderizado-->

            <h2>Atendimento Realizado no Cliente</h2>
            <!--Container da Lista de Informações Passadas ao Cliente-->
            <div class="container_info_passadas">
                <div>
                    ${atendimento_cliente.map((item, chave) => html`
                            <div class="form-group-row">
                                <input 
                                    @change="${this._add_info_passada_cliente}"
                                    ?checked="${this._verificar_existencia(chave)}"
                                    type="checkbox" id="${chave}" name="${chave}" value="${item.titulo}" class="form-checkbox">
                                <label for="${chave}" class="form-label-inline">${item.titulo}</label>
                                <a @click="${()=>{estourarModal(item.titulo, item.descricao)}}">
                                    <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 143.933 143.933"><path d="M-325.21 671.982c-5.768-.013-9.701.245-11.469.752l-2.69.772v77.331l10.336-.289c16.239-.454 28.654 1.764 40.503 7.238 2.653 1.226 4.884 2.23 4.957 2.23h.002l.005-.002h.002c.08-.06.293-.833.48-1.768.195-.974.354-17.422.354-36.55 0-28.852-.138-35.11-.809-36.716-.624-1.493-1.626-2.347-4.39-3.743-5.712-2.886-14.363-5.935-21.704-7.65-5.87-1.37-7.995-1.59-15.576-1.605zm90.695 0c-7.58.015-9.706.235-15.575 1.605-7.341 1.715-15.993 4.764-21.705 7.65-2.763 1.395-3.766 2.25-4.39 3.743-.67 1.605-.808 7.864-.808 36.715 0 19.129.159 35.577.354 36.55.187.936.399 1.71.48 1.768l.002.001v.001h.005c.074 0 2.304-1.003 4.957-2.229 11.85-5.474 24.265-7.693 40.503-7.238l10.337.289v-77.331l-2.69-.772c-1.768-.507-5.702-.765-11.47-.752zm-113.222 12.37c-1.506.054-2.572.739-3.265 2.078-.702 1.358-.826 7.628-.826 41.51 0 21.952.155 40.315.344 40.808.456 1.19 1.512 1.138 9.85-.488 16.472-3.211 25.793-3.627 37.381-1.665 6.307 1.068 8.153 1.682 11.894 3.96 4.24 2.582 8.18 3.775 12.497 3.562 4.317.213 8.257-.98 12.497-3.562 3.742-2.278 5.588-2.892 11.894-3.96 11.589-1.962 20.91-1.546 37.381 1.665 8.339 1.626 9.394 1.677 9.85.488.19-.493.345-18.856.345-40.807 0-33.883-.124-40.153-.826-41.51-.693-1.34-1.76-2.024-3.266-2.08a7 7 0 0 0-1.656.154c-1.352.27-1.62.612-1.65 2.093-.019.974-.006 17.381.03 36.461.034 19.08-.082 34.69-.256 34.69-.175 0-2.8-.424-5.833-.944-7.919-1.357-24.287-1.353-30.72.007-6.365 1.345-12.24 3.365-18.125 6.232-4.337 2.113-5.235 2.345-9.062 2.346l-.603-.002-.603.002c-3.827 0-4.725-.233-9.062-2.346-5.886-2.867-11.76-4.887-18.124-6.232-6.434-1.36-22.802-1.363-30.72-.007-3.034.52-5.659.945-5.834.945s-.29-15.611-.255-34.691.048-35.487.029-36.46c-.029-1.482-.298-1.823-1.65-2.094a7 7 0 0 0-1.656-.153z" style="stroke-width:1" transform="translate(351.828 -651.095)"/></svg>
                                </a>
                            </div>
                        `)}

                <div>
            </div>
        `;
    }
}

// 2. Em vez de @customElement, use o registro manual
customElements.define('atendimento-feito-cliente', Atendimento_Feito_Cliente);


