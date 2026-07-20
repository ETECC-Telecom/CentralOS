import { LitElement, html, css, unsafeCSS } from 'lit';
import globalStyle from "./index.css?inline";
import { estourar_drawer } from '../../drawer_scripts/drawer_scripts_component';
import { Caixa_Texto } from '../caixa_texto/caixa_texto';

export class Componente_Info_Extra extends LitElement {
    // 1. Em vez de @property, use o objeto static properties
    static properties = {
        objeto_os: { type: Object},
        relatorio_ext: {type: String},
        relatorio_bat: {type: String},
    };

    static get styles() {
        return css`${unsafeCSS(globalStyle)}`;
    }

    constructor() {
        super();
        this.objeto_os = {};
        this.relatorio_ext = null;
        this.relatorio_bat = null;
    }

    // Executado assim que o componente é renderizado na tela
    firstUpdated() {

    }
    connectedCallback() {
        super.connectedCallback(); // ⚠️ Sempre chame o super PRIMEIRO no Lit

    }

    _Alterar_Relatorio_Extra = (e) =>{
        const Texto = e.target.value === ""? null:e.target.value;
        this.objeto_os.OS.relato_adicional = Texto;
        this.objeto_os.salvar_os_localstorage();
    }

    _Alterar_Relatorio_Bat = (e) =>{
        const Texto = e.target.value === ""? null:e.target.value;
        this.objeto_os.OS.relatorio_estabilidade = Texto;
        this.objeto_os.salvar_os_localstorage();
    }

    render() {
        return html`
            <!--Retorno renderizado-->
            <br>
            <h2>Informações Adicionais da Visita</h2>
            <br>
            <div class="form-group">
                <caixa-texto
                    Titulo = "Relato Adicional:"
                    .Tamanho = ${20}
                    .Texto = ${this.objeto_os.OS.relato_adicional}
                    .Campo_Texto = ${this.objeto_os.callback_adicionar_texto_relatorio.bind(this.objeto_os)}
                    .Atualizar_BD = ${this.objeto_os.salvar_os_localstorage.bind(this.objeto_os)}
                    .Categoria = "Outros"
                    Placeholder = "Caso você tenha alguma obsevação adicional relacionada a visita, descreva nesse campo!"
                ></caixa-texto>

            </div>
            <br>
            <div class="form-group">
                <label for="message" class="form-label">Relatório .BAT</label>
                <textarea
                    @change="${this._Alterar_Relatorio_Bat}"
                    .value="${this.objeto_os.OS.relatorio_estabilidade}"
                    name="message" rows="10" class="form-textarea"></textarea>
            </div>
        `;
    }
}

// 2. Em vez de @customElement, use o registro manual
customElements.define('componente-info-extra', Componente_Info_Extra);