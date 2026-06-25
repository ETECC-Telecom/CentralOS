import { LitElement, html, css, unsafeCSS } from 'lit';
import globalStyle from "./index.css?inline";


export class Verificacao_Cabo_UTP extends LitElement {
    // 1. Em vez de @property, use o objeto static properties
    static properties = {
        objeto_os: { type: Object },
        cabos_utp: { type: Array }
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
        this.cabos_utp = this.objeto_os.OS.conferencia_tecnica.cabos_utp;
    }

    _adicionar_cabo_utp(e) {
        const tipo_cabo = e.target.value;
        if (tipo_cabo === "WAN") {
            this.cabos_utp.push({
                cabo: "WAN",
                checagens: [true, true, true],
                anexo_cabos: false,
                observacao: '',
            });
        } else {
            this.cabos_utp.push({
                cabo: '',
                checagens: [true, true, true],
                anexo_cabos: false,
                observacao: '',
            });
        }

        this.objeto_os.salvar_os_localstorage();
        this.requestUpdate()
    }

    _deletar_utp = (e) => {
        const ID_Cabo = e.target.id;

        this.cabos_utp.splice(ID_Cabo, 1);
        this.objeto_os.salvar_os_localstorage();

        this.requestUpdate()
    }

    _alterar_data_utp = (e, id, tipo) => {

        const ID_Elemento = id;
        const Tipo_checagem = tipo;
        const valor = e.target.checked;

        switch (Tipo_checagem) {
            case 'primeiro':
                this.cabos_utp[ID_Elemento].checagens[0] = valor
                break;
            case 'segundo':
                this.cabos_utp[ID_Elemento].checagens[1] = valor
                break;
            case 'terceiro':
                this.cabos_utp[ID_Elemento].checagens[2] = valor
                break;
        }
        this.objeto_os.salvar_os_localstorage();

    }
    _alterar_nome_utp = (e) => {
        const Valor = e.target.value;
        const ID_UTP = e.target.id;
        this.cabos_utp[ID_UTP].cabo = Valor;

        this.objeto_os.salvar_os_localstorage();

    }
    _alterar_relatorio_utp = (e) => {
        const Valor = e.target.value;
        const ID_UTP = e.target.id;

        this.cabos_utp[ID_UTP].observacao = Valor;


        this.objeto_os.salvar_os_localstorage();
    }

    _alterar_anexo = (e, id) => {
        const ID_Cabo = id;
        const Valor = e.target.value === "true"?true:false;
        this.cabos_utp[ID_Cabo].anexo_cabos = Valor;
        this.objeto_os.salvar_os_localstorage();
    }

    render() {
        return html`
            <!--Retorno renderizado-->
            <h2>Verificação dos Cabo UTP<h2>
            <div class="form-group-row" style="margin-top: 10px;">
                <button type="button" class="form-button" value="WAN" @click="${this._adicionar_cabo_utp}">WAN</button>
                <button type="button" class="form-button" value="OUTRO" @click="${this._adicionar_cabo_utp}">Outro</button>
            </div>

            <div class="container_lista_itens">

                ${this.cabos_utp.length !== 0
                ? html`
                    ${this.cabos_utp.map((element, chave) => html`
                        <div class="Container_Item">
                            <div style="display:flex; justify-content: end; margin:.5rem;">
                                <button
                                    @click="${this._deletar_utp}"
                                    id="${chave}" 
                                    type="button" class="botao-close">–</button>
                            </div>
                            <input 
                                ?disabled="${element.cabo === 'WAN' ? true : false}" 
                                type="text" 
                                id="${chave}" 
                                name="fname"
                                placeholder="Qual o objetivo desse cabo?"
                                @change="${this._alterar_nome_utp}"
                                value="${element.cabo}" class="form-input"/>
                            
                            <div class="container_itens_utp">
                                <div class="container_item_utp">
                                    <p>Cabo 100/1000?</p>
                                    <label class="toggle-switch">
                                        <input @change="${(e) => { this._alterar_data_utp(e, chave, "primeiro") }}" 
                                        ?checked="${element.checagens[0]}"
                                        type="checkbox">
                                        <div class="toggle-switch-background">
                                            <div class="toggle-switch-handle"></div>
                                        </div>
                                    </label>
                                </div>
                                <div class="container_item_utp">
                                    <p>Teste no Powermitter?</p>
                                    <label class="toggle-switch">
                                        <input 
                                            @change="${(e) => { this._alterar_data_utp(e, chave, "segundo") }}"
                                            ?checked="${element.checagens[1]}"
                                            type="checkbox">
                                        <div class="toggle-switch-background">
                                            <div class="toggle-switch-handle"></div>
                                        </div>
                                    </label>
                                </div>
                                <div class="container_item_utp">
                                    <p>Teste de Ping?</p>
                                    <label class="toggle-switch">
                                        <input 
                                            @change="${(e) => { this._alterar_data_utp(e, chave, "terceiro") }}"
                                            ?checked="${element.checagens[2]}"
                                            type="checkbox">
                                        <div class="toggle-switch-background">
                                            <div class="toggle-switch-handle"></div>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <br>
                            <textarea
                                id="${chave}"
                                @change="${this._alterar_relatorio_utp}"
                                name="message" 
                                rows="5"
                                class="form-textarea"
                                .value="${element.observacao}"
                                placeholder="Adicione aqui uma observação sobre esse cabo!"></textarea>
                            
                            <label style="margin-top:.5rem" for="fname" class="form-label">Foto do cabo adicionado a OS?</label>
                            
                            <div @change="${(e) => { this._alterar_anexo(e, chave) }}" class="radio-input">
                                <label>
                                    <input ?checked="${element.anexo_cabos === true ? true : false}" value="true" name="Anexo_UTP_${chave}" id="value-1" type="radio" />
                                    <span>S i m</span>
                                </label>
                                <label>
                                    <input ?checked="${element.anexo_cabos === false ? true : false}" value="false" name="Anexo_UTP_${chave}" id="value-2" type="radio" />
                                    <span>N ã o</span>
                                </label>
                                <span class="selection"></span>
                            </div>
                        </div>
                    `)}
                    `
                : html``}
               
            </div>
        `;
    }
}

// 2. Em vez de @customElement, use o registro manual
customElements.define('verificacao-cabo-utp', Verificacao_Cabo_UTP);