import { LitElement, html, css, unsafeCSS } from 'lit';
import globalStyle from "./index.css?inline";


export class Navegacao extends LitElement {
    // 1. Em vez de @property, use o objeto static properties
    static properties = {
        objeto_os: { type: Object },
        modal_aberto: { type: Boolean },
        ativo: { type: Object },
        lista_ativos: { type: Array },
    };

    static get styles() {
        return css`${unsafeCSS(globalStyle)}`;
    }

    constructor() {
        super();
        this.objeto_os = {};
        this.modal_aberto = false;
        this.ativo = {}
        this.lista_ativos = []
    }

    // Executado assim que o componente é renderizado na tela
    firstUpdated() {

    }

    connectedCallback() {
        super.connectedCallback(); // ⚠️ Sempre chame o super PRIMEIRO no Lit
        this.lista_ativos = this.objeto_os.OS.conferencia_tecnica.teste_navegacao
    }

    // Recebe o item clicado diretamente por parâmetro
    _Abrir_Modal_Edicao = (index) => {

        this.ativo = { id: index, edicao: true, ...this.lista_ativos[index] }
        this.modal_aberto = true;      // Altera o estado para abrir o modal
    }

    _Abrir_Modal_Criacao = () => {
        this.ativo = {
            edicao: false,
            ativos_cliente: true,
            tipo_ativo: "outros",
            observacao: null,
        }
        this.modal_aberto = true;
    }

    _Fechar_Modal = (e) => {
        this.modal_aberto = false;
        this.ativo = {}
    }

    _Salvar_Edicao_Modal(e, comando) {
        if (comando) {
            const categoria = this.renderRoot?.querySelector('#cat_ativos').value;
            const valor = this.renderRoot?.querySelector('#valor_checks input[name="tipo"]:checked').value;
            const descricao = this.renderRoot?.querySelector('#message').value;

            //Verifica se é ativo da empresa ou cliente:
            const ativo_empresa = categoria === "cliente" ? true : false;

            //Adiciona novo elemento já criado! 
            this.lista_ativos[this.ativo.id] = {
                ativos_cliente: ativo_empresa,
                tipo_ativo: valor,
                observacao: descricao
            }

            this.objeto_os.salvar_os_localstorage();

        } else {
            const categoria = this.renderRoot?.querySelector('#cat_ativos').value;
            const valor = this.renderRoot?.querySelector('#valor_checks input[name="tipo"]:checked').value;
            const descricao = this.renderRoot?.querySelector('#message').value;

            //Verifica se é ativo da empresa ou cliente:
            const ativo_empresa = categoria === "cliente" ? true : false;

            this.lista_ativos.push({
                ativos_cliente: ativo_empresa,
                tipo_ativo: valor,
                observacao: descricao
            });

            this.objeto_os.salvar_os_localstorage();
        }

        this._Fechar_Modal();
    }

    _Deletar_item_Lista = (e, indexed) => {
        
        // Filtra o array mantendo apenas os itens que têm o índice DIFERENTE do que queremos remover
        this.lista_ativos = this.lista_ativos.filter((_, index) => index !== indexed);
        this.objeto_os.OS.conferencia_tecnica.teste_navegacao = this.lista_ativos
        this.objeto_os.salvar_os_localstorage();
        this.lista_ativos = this.objeto_os.OS.conferencia_tecnica.teste_navegacao;
    }


    render() {
        return html`
            <!--Retorno renderizado-->
            <br>
            <h2>Teste de Navegação</h2>
            <div class="form-group" style="margin-top: 10px;">
                <button 
                    @click="${this._Abrir_Modal_Criacao}"
                    type="button" class="form-button">Add Ativo</button>
            </div>
            <br>
            <div class="container-ativos">

                ${this.lista_ativos.map((ativo, index) => html`
                    <div class="container-ativo" style="cursor: pointer;">
                        <a
                            @click=${() => this._Abrir_Modal_Edicao(index)}
                            ><span class="container-tipo">${ativo.ativos_cliente === true ? "Ativo do Cliente" : "Ativo da Empresa"}</span> - ${ativo.tipo_ativo}</a>
                        <button 
                            @click="${(e) => { this._Deletar_item_Lista(e, index) }}"
                            type="button" class="botao-close">–</button>
                    </div>
                `)}
                
            <div>
            
            

            <!-- Modal de Edição dos itens listados-->
            ${this.modal_aberto ? html`
                <div class="modal-backdrop" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 999;" @click=${this._Fechar_Modal}>
                    
                    <div class="modal-content" @click=${(e) => e.stopPropagation()}>
                        <h3>Editar Ativo</h3>
                        <hr>
                        <br>
                        <div class="form-group">
                            <label for="cat_ativos" class="form-label">Selecione a Categoria:</label>
                            <select id="cat_ativos" name="cat_ativos" class="form-select">
                                <option ?selected="${this.ativo.ativos_cliente === true ? true : false}" value="cliente">Cliente</option>
                                <option ?selected="${this.ativo.ativos_cliente === false ? true : false}" value="empresa">Empresa</option>
                            </select>
                        </div>
                        
                        <div id="valor_checks" class="form-group">
                            <span class="form-label">Selecione o Tipo de Ativo:</span>
                            <div style="display:flex; justify-content: space-evenly; gap:1rem;">
                                <div class="container_modal_lista">
                                    <div class="form-group-row">
                                        <input ?checked="${this.ativo.tipo_ativo === 'celular' ? true : false}" type="radio" id="celular" name="tipo" value="celular" class="form-radio">
                                        <label for="celular" class="form-label-inline">Celular</label>
                                    </div>
                                    <div class="form-group-row">
                                        <input ?checked="${this.ativo.tipo_ativo === 'tv' ? true : false}" type="radio" id="tv" name="tipo" value="tv" class="form-radio">
                                        <label for="tv" class="form-label-inline">TV</label>
                                    </div>
                                    <div class="form-group-row">
                                        <input ?checked="${this.ativo.tipo_ativo === 'tvbox' ? true : false}" type="radio" id="tvbox" name="tipo" value="tvbox" class="form-radio">
                                        <label for="tvbox" class="form-label-inline">TVBox</label>
                                    </div>
                                </div>
                                <div class="container_modal_lista">
                                    <div class="form-group-row">
                                        <input ?checked="${this.ativo.tipo_ativo === 'computador' ? true : false}" type="radio" id="computador" name="tipo" value="computador" class="form-radio">
                                        <label for="computador" class="form-label-inline">Computador</label>
                                    </div>
                                    <div class="form-group-row">
                                        <input ?checked="${this.ativo.tipo_ativo === 'videogame' ? true : false}" type="radio" id="videogame" name="tipo" value="videogame" class="form-radio">
                                        <label for="videogame" class="form-label-inline">Video Game</label>
                                    </div>
                                    <div class="form-group-row">
                                        <input ?checked="${this.ativo.tipo_ativo === 'outros' ? true : false}" type="radio" id="outros" name="tipo" value="outros" class="form-radio">
                                        <label for="outros" class="form-label-inline">Outros</label>
                                    </div>
                                </div>
                            </div>
 
                        </div>
                        
                        <div class="form-group">
                            <label for="message" class="form-label">Observação</label>
                            <textarea
                                style="border-left: 5px solid #ff0000;" 
                                id="message" 
                                name="message" 
                                rows="5"
                                .value="${this.ativo.observacao}"
                                class="form-textarea"></textarea>
                        </div>
                        <div class="form-group" style="margin-top: 10px; display:flex; flex-direction: row; gap:.5rem">
                            <button 
                                style="background-color: var(--btn-background-color); color:var(--btn-text-background-color);"
                                type="button" class="form-button"
                                @click="${(e) => { this._Salvar_Edicao_Modal(e, this.ativo.edicao) }}"
                                >Salvar</button>
                            <button type="button" class="form-button" @click=${this._Fechar_Modal}>Fechar</button>
                        </div>
                    </div>
                </div>
            ` : ''}

        `;
    }
}

// 2. Em vez de @customElement, use o registro manual
customElements.define('navegacao-teste', Navegacao);