import { LitElement, html, css, unsafeCSS } from 'lit';
import globalStyle from "./index.css?inline";


export class Componente_Equipamentos_Local extends LitElement {
    // 1. Em vez de @property, use o objeto static properties
    static properties = {
        objeto_os: { type: Object },
        modal_aberto: { type: Boolean },
        objeto_equipamentos: { type: Object },
        ativo: { type: Object },
        troca: {type:Boolean},
    };

    static get styles() {
        return css`${unsafeCSS(globalStyle)}`;
    }

    constructor() {
        super();
        this.objeto_os = {};
        this.modal_aberto = false;
        this.troca = false;
        this.objeto_equipamentos = [];
        this.ativo = {};
        let acao = null;
    }

    // Executado assim que o componente é renderizado na tela
    firstUpdated() {

    }
    connectedCallback() {
        super.connectedCallback(); // ⚠️ Sempre chame o super PRIMEIRO no Lit
        this.objeto_equipamentos = this.objeto_os.OS.conferencia_tecnica.equipamentos_local.ativos;
        this.troca = this.objeto_os.OS.conferencia_tecnica.equipamentos_local.troca;
    }

    _Check_Troca = (e) =>{
        const Resposta = parseInt(e.target.value) === 1? true: false;
        this.troca = Resposta
        this.objeto_os.OS.conferencia_tecnica.equipamentos_local.troca = Resposta;
        this.objeto_os.salvar_os_localstorage();
    }
    
    _Selecao_Motivo = (e) =>{
        const Selecao = e.target.value 
        this.objeto_os.OS.conferencia_tecnica.equipamentos_local.motivo_troca = Selecao
        this.objeto_os.salvar_os_localstorage();
    }

    _Alterar_Observacao = (e) =>{
        const Texto = e.target.value === ""? null:e.target.value;
        this.objeto_os.OS.conferencia_tecnica.equipamentos_local.observacao = Texto;
        this.objeto_os.salvar_os_localstorage();        
    }

    _Fechar_Modal = () => {
        this.modal_aberto = false;
    }

    _Abrir_Modal_Novo = (e) =>{
        //Criamos um novo Objeto de Velocidade para adicionar a lista posteriormente!
        this.ativo = {
            ativo: "ONT",
            mac: "",
            inserido: false,
        }
        this.acao = false;
        this.modal_aberto = true;
    }
    _Abrir_Modal_Editar = (e, chave) =>{
        this.ativo = this.objeto_equipamentos[chave];
        this.acao = true;
        this.modal_aberto = true;
    }

    _Salvar_data = (e, acao) => {
                
        const troca = this.renderRoot?.querySelector("#troca input[name='ativo-troca']:checked").value;
        const mac_ativo = this.renderRoot?.querySelector("#mac_ativo").value;
        const ativo_local = this.renderRoot?.querySelector("#ativo-local").value;
        
        this.ativo.ativo = ativo_local;
        this.ativo.mac = mac_ativo;
        this.ativo.inserido = troca === "true"?true:false;
        
        if (!acao) {
            this.objeto_equipamentos.push(this.ativo);
            this.ativo = {};
        } 
        this.objeto_os.salvar_os_localstorage();
        this._Fechar_Modal();

    }
    _Deletar_Item = (e, chave) => {
        // Filtra o array mantendo apenas os itens que têm o índice DIFERENTE do que queremos remover
        this.objeto_equipamentos = this.objeto_equipamentos.filter((_, index) => index !== chave);
        this.objeto_os.OS.conferencia_tecnica.equipamentos_local.ativos = this.objeto_equipamentos

        this.objeto_os.salvar_os_localstorage();

        this.objeto_equipamentos = this.objeto_os.OS.conferencia_tecnica.equipamentos_local.ativos;
    }

    _Alterar_Cod_Conexao = (e) =>{
        const Valor = e.target.value === null? null:e.target.value;
        this.objeto_os.OS.conferencia_tecnica.equipamentos_local.cod_conexao = Valor
        this.objeto_os.salvar_os_localstorage();
    }

    _Alterar_pppoe = (e) =>{
        const Valor = e.target.value === null? null:e.target.value;
        this.objeto_os.OS.conferencia_tecnica.equipamentos_local.pppoe = Valor
        this.objeto_os.salvar_os_localstorage();
    }

    render() {
        return html`
            <!--Retorno renderizado-->
            <br>
            <h2>Troca de Equipamento</h2>

            <p style="margin-bottom: 1rem;">Houve Troca de Equipamento?</p>
            
            <div 
                @change="${this._Check_Troca}"
                id="teste" class="radio-input">
                <label>
                    <input ?checked="${this.objeto_os.OS.conferencia_tecnica.equipamentos_local.troca === true? true: false}" value="1" name="checagem_troca" id="value-1" type="radio" />
                    <span>S i m</span>
                </label>
                <label>
                    <input ?checked="${this.objeto_os.OS.conferencia_tecnica.equipamentos_local.troca === false? true: false}" value="0" name="checagem_troca" id="value-2" type="radio" />
                    <span>N ã o</span>
                </label>
                <span class="selection"></span>
            </div>

            ${this.troca?html`
            <br>
            <div style="display:flex; gap:1rem;">
                <div class="form-group">
                    <label for="cod_conexao" class="form-label">Código Conexão:</label>
                    <input 
                        @change="${this._Alterar_Cod_Conexao}"
                        type="number" id="cod_conexao" name="cod_conexao" .value="${this.objeto_os.OS.conferencia_tecnica.equipamentos_local.cod_conexao}" class="form-input">
                </div>
                <div class="form-group">
                    <label for="pppoe_cliente" class="form-label">PPPoE:</label>
                    <input 
                        @change="${this._Alterar_pppoe}"
                        type="text" id="pppoe_cliente" name="pppoe_cliente" .value="${this.objeto_os.OS.conferencia_tecnica.equipamentos_local.pppoe}" class="form-input">
                </div>
            </div>
            <div class="form-group">
                <label for="ativo" class="form-label">Selecione Motivo da Troca:</label>
                <select 
                    @change="${this._Selecao_Motivo}"
                    id="ativo" name="ativo" class="form-select">
                    <option ?selected="${this.objeto_os.OS.conferencia_tecnica.equipamentos_local.motivo_troca === "solicitacao_cliente"? true:false}" value="solicitacao_cliente">Solicitação do Cliente</option>
                    <option ?selected="${this.objeto_os.OS.conferencia_tecnica.equipamentos_local.motivo_troca === "mau_funcionamento"? true:false}" value="mau_funcionamento">Mau Funcionamento</option>
                    <option ?selected="${this.objeto_os.OS.conferencia_tecnica.equipamentos_local.motivo_troca === "efeito_placebo"? true:false}" value="efeito_placebo">Efeito Placebo</option>
                    <option ?selected="${this.objeto_os.OS.conferencia_tecnica.equipamentos_local.motivo_troca === "necessidade_tecnica"? true:false}" value="necessidade_tecnica">Necessidade Técnica</option>
                    <option ?selected="${this.objeto_os.OS.conferencia_tecnica.equipamentos_local.motivo_troca === "solicitacao_sup_interno"? true:false}" value="solicitacao_sup_interno">Solicitação Sup. Interno</option>
                </select>
            </div>

            <div class="form-group">
                <label for="message" class="form-label">Relatório:</label>
                <textarea
                    @change="${this._Alterar_Observacao}"
                    .value="${this.objeto_os.OS.conferencia_tecnica.equipamentos_local.observacao}"
                    style="border-left: 5px solid #ff0000;"
                    id="message" 
                    name="message" 
                    rows="3" class="form-textarea"></textarea>
            </div>
            
                `:""}
            <div class="form-group" style="margin-top: 10px;">
                <button 
                    @click="${this._Abrir_Modal_Novo}"
                    type="button" class="form-button">Add Equipamentos</button>
            </div>
            <br>

            <div class="container-equipamentos">

                ${this.objeto_equipamentos.map((item, chave)=>html`
                <div
                    class="container-equipamentos-item">
                    <div 
                        @click="${(e)=> this._Abrir_Modal_Editar(e, chave)}"
                        style="display:flex; gap:0.4rem; Flex-direction:column">
                        <p><span class="${item.inserido===true?'destaque-local':'destaque-troca'}">${item.inserido===true?'LOCAL':'TROCA'}</span> ${item.ativo} - ${item.mac}</p>
                    </div>
                    <button
                        @click="${(e)=>this._Deletar_Item(e, chave)}"
                        type="button" class="botao-close">–</button>
                </div>
                <hr>
                `)}
            </div>

            <!--Modal de Configuracao do Ping-->

            ${this.modal_aberto ? html`
                <div
                    class="modal-backdrop"
                    @click=${this._Fechar_Modal}
                >
                    <div
                        class="modal-content"
                        
                        @click=${(e) => e.stopPropagation()}
                    >
                        <h3>Editar Equipamento - Troca</h3>
                        <br>
                        <br>
                        <div @change="" class="radio-input" id="troca">
                            <label>
                                <input ?checked="${this.ativo.inserido === false?true:false}" value="false" name="ativo-troca" id="value-1" type="radio" />
                                <span>R e t i r a d o</span>
                            </label>
                            <label>
                                <input ?checked="${this.ativo.inserido === true?true:false}" value="true" name="ativo-troca" id="value-2" type="radio" />
                                <span>I n s e r i d o</span>
                            </label>
                            <span class="selection"></span>
                        </div>
                        <br>
                        <div class="form-group">
                            <label for="mac_ativo" class="form-label">MAC do Equipamento</label>
                            <input type="text" id="mac_ativo" name="mac_ativo" .value="${this.ativo.mac}" class="form-input">
                        </div>

                        <div class="form-group">
                            <label for="ativo-local" class="form-label">Selecione o Ativo Testado:</label>
                            <select 
                                @change=""
                                id="ativo-local" name="ativo-local" class="form-select">
                                <option ?selected="${this.ativo.ativo === "ONT"? true:false}" value="ONT">ONT</option>
                                <option ?selected="${this.ativo.ativo === "Router"? true:false}" value="Router">Router</option>
                                <option ?selected="${this.ativo.ativo === "ONU"? true:false}" value="ONU">ONU</option>
                                <option ?selected="${this.ativo.ativo === "Switch Giga"? true:false}" value="Switch Giga">Switch Giga</option>
                                <option ?selected="${this.ativo.ativo === "Switch Fast"? true:false}" value="Switch Fast">Switch Fast</option>
                            </select>
                        </div>                      
                       
                        
                        <div class="form-group" style="margin-top: 10px; display: flex; flex-direction: row; gap:.5rem">
                            <button 
                                @click="${(e)=>this._Salvar_data(e, this.acao)}"
                                style="background-color: var(--btn-background-color); color: var(--text-color);"
                                type="button" class="form-button")">Salvar</button>
                            <button 
                                @click="${this._Fechar_Modal}"
                                type="button" class="form-button")">Fechar</button>
                        </div>

                    </div>
                </div>
            ` : ''}
        `;
    }
}

// 2. Em vez de @customElement, use o registro manual
customElements.define('componente-equipamentos-local', Componente_Equipamentos_Local);