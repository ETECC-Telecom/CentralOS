import { LitElement, html, css, unsafeCSS } from 'lit';
import globalStyle from "./index.css?inline";
import { disparar_notificacao } from '../../controller/disparar_notificacao';

//funções do DB
import { db_adicionar_script } from '../../model/Service_Modelo_Scripts';
import { db_ler_todos_scripts } from '../../model/Service_Modelo_Scripts';
import { db_delete_item_script } from '../../model/Service_Modelo_Scripts';
import { db_editar_script } from '../../model/Service_Modelo_Scripts';

//componentes
import { Menu_Inferior } from '../../components/menu_inferior/menu_inferior';
import { Card_Script } from '../../components/componentes_script_modelo/card_script/card_script';

export class Gerenciar_Scripts extends LitElement {
    // 1. Em vez de @property, use o objeto static properties
    static properties = {
        itens: { type: Object},
        modal: {type: Boolean},
        script_edicao: {type: Object},
        modal_exclusao: {type: Boolean},
        tipo_mudanca: {type: Boolean},
        item_edicao: {type: Boolean},

    };

    static get styles() {
        return css`${unsafeCSS(globalStyle)}`;
    }

    constructor() {
        super();
        this.itens = []
        this.modal = false;
        this.script_edicao = {};
        this.tipo_mudanca = true
        this.item_edicao = {
            categoria:null,
            titulo:null,
            descricao:null
        }

        this.modal_exclusao = false;

        let id_item = '';
    }

    // Executado assim que o componente é renderizado na tela
    firstUpdated() {

    }
    async connectedCallback() {
        super.connectedCallback(); // ⚠️ Sempre chame o super PRIMEIRO no Lit
        const SCRIPTS = await db_ler_todos_scripts(); 
        
        this.itens = SCRIPTS
    }

    _Fechar_Modal = ()=>{
        this.modal = false;
    }
    _Abrir_Modal = () => {
        this.tipo_mudanca = true;
        this.modal = true;
    }
    _Abrir_Modal_Edicao = (e) =>{
        this.tipo_mudanca = false;
        this.id_item = e.detail.id;

        const categoria = e.detail.categoria;
        const titulo = e.detail.titulo;
        const descricao = e.detail.descricao;

        this.item_edicao = {
            categoria:categoria,
            titulo:titulo,
            descricao:descricao
        }
        
        this.modal = true;
        
    }

    async _Salvar_Novo_Script_Banco(e){
        const CATEGORIA = this.renderRoot?.querySelector("#tipo-categoria").value;
        const TITULO = this.renderRoot?.querySelector("#titulo-novo").value;
        const DESCRICAO = this.renderRoot?.querySelector("#message").value;

        //Valida objetos vazios:
        if (TITULO === "" || DESCRICAO === ""){
            disparar_notificacao("erro", "Você precisa preencher os campos de Titulo e Script!")
            return
        }

        db_adicionar_script({
            categoria: CATEGORIA,
            titulo: TITULO,
            descricao: DESCRICAO
        })

     
        this.itens = await db_ler_todos_scripts();
        this.modal = false;

    }

    async _Salvar_Edicao_Script_Banco(e){
        const CATEGORIA = this.renderRoot?.querySelector("#tipo-categoria").value;
        const TITULO = this.renderRoot?.querySelector("#titulo-novo").value;
        const DESCRICAO = this.renderRoot?.querySelector("#message").value;

        //Valida objetos vazios:
        if (TITULO === "" || DESCRICAO === ""){
            disparar_notificacao("erro", "Você precisa preencher os campos de Titulo e Script!")
            return
        }

        db_editar_script({
            id:this.id_item,
            categoria: CATEGORIA,
            titulo: TITULO,
            descricao: DESCRICAO
        })

        this.item_edicao = {
            categoria:null,
            titulo:null,
            descricao:null
        }
     
        this.itens = await db_ler_todos_scripts();
        this.modal = false;

    }

    _Confirmar_Exclusao_Banco = (e)=>{
        this.id_item = e.detail.id;
        this.modal_exclusao = true;
    }

    _Fechar_Modal_Exclusao = ()=>{
        this.modal_exclusao = false;
    }

    async _Deletar_Script_Banco(e,chave){
        const ID = chave
        db_delete_item_script(ID);
        disparar_notificacao("sucesso", "O Script foi removido da Lista")
        this.itens = await db_ler_todos_scripts();
        this._Fechar_Modal_Exclusao();
    }


    
    render() {
        return html`
            <!--Retorno renderizado-->
            <header class="header-superior">
                <img class="logo" src="letter-logo.svg" alt="letter-logo">         
            </header>
            <br>
            <h2>Scripts Modelos</h2>
            
            <div class="form-group" style="margin-top: 10px; align-items: end;">
                <button 
                    @click="${this._Abrir_Modal}"
                    class="button-add"
                    type="button" class="form-button">+</button>
            </div>


            <h3>Ping</h3>
            <hr>

            <div class="container-scripts">
                ${this.itens.map((item,chave)=>{
                    if (item.categoria === "Ping"){
                    return html`
                    <card-script
                        .objeto="${item}"
                        @delete_item="${this._Confirmar_Exclusao_Banco}"
                        @editar_item="${this._Abrir_Modal_Edicao}"
                    ></card-script>
                    `
                    }
                })}
            </div>

            <h3>Tracert</h3>
            <hr>

            <div class="container-scripts">
                ${this.itens.map((item,chave)=>{
                    if (item.categoria === "Tracert"){
                    return html`
                    <card-script
                        .objeto="${item}"
                        @delete_item="${this._Confirmar_Exclusao_Banco}"
                        @editar_item="${this._Abrir_Modal_Edicao}"
                    ></card-script>
                    `
                    }
                })}
            </div>

            <h3>Velocidade</h3>
            <hr>
            
            <div class="container-scripts">
                ${this.itens.map((item,chave)=>{
                    if (item.categoria === "Velocidade"){
                    return html`
                    <card-script
                        .objeto="${item}"
                        @delete_item="${this._Confirmar_Exclusao_Banco}"
                        @editar_item="${this._Abrir_Modal_Edicao}"
                    ></card-script>
                    `
                    }
                })}
            </div>


            <h3>Fibra</h3>
            <hr>
            
            <div class="container-scripts">
                ${this.itens.map((item,chave)=>{
                    if (item.categoria === "Fibra"){
                    return html`
                    <card-script
                        .objeto="${item}"
                        @delete_item="${this._Confirmar_Exclusao_Banco}"
                        @editar_item="${this._Abrir_Modal_Edicao}"
                    ></card-script>
                    `
                    }
                })}
            </div>


            <h3>Fonte</h3>
            <hr>
            
            <div class="container-scripts">
                ${this.itens.map((item,chave)=>{
                    if (item.categoria === "Fonte"){
                    return html`
                    <card-script
                        .objeto="${item}"
                        @delete_item="${this._Confirmar_Exclusao_Banco}"
                        @editar_item="${this._Abrir_Modal_Edicao}"
                    ></card-script>
                    `
                    }
                })}
            </div>


            <h3>Troca de Equipamento</h3>
            <hr>
            
            <div class="container-scripts">
                ${this.itens.map((item,chave)=>{
                    if (item.categoria === "Troca de Equipamento"){
                    return html`
                    <card-script
                        .objeto="${item}"
                        @delete_item="${this._Confirmar_Exclusao_Banco}"
                        @editar_item="${this._Abrir_Modal_Edicao}"
                    ></card-script>
                    `
                    }
                })}
            </div>


            <h3>Site Survey</h3>
            <hr>
            
            <div class="container-scripts">
                ${this.itens.map((item,chave)=>{
                    if (item.categoria === "Site Survey"){
                    return html`
                    <card-script
                        .objeto="${item}"
                        @delete_item="${this._Confirmar_Exclusao_Banco}"
                        @editar_item="${this._Abrir_Modal_Edicao}"
                    ></card-script>
                    `
                    }
                })}
            </div>


            <h3>Relato do Cliente</h3>
            <hr>
            
            <div class="container-scripts">
                ${this.itens.map((item,chave)=>{
                    if (item.categoria === "Relato do Cliente"){
                    return html`
                    <card-script
                        .objeto="${item}"
                        @delete_item="${this._Confirmar_Exclusao_Banco}"
                        @editar_item="${this._Abrir_Modal_Edicao}"
                    ></card-script>
                    `
                    }
                })}
            </div>


            <h3>Encaminhar Externa</h3>
            <hr>
            
            <div class="container-scripts">
                ${this.itens.map((item,chave)=>{
                    if (item.categoria === "Encaminhar Externa"){
                    return html`
                    <card-script
                        .objeto="${item}"
                        @delete_item="${this._Confirmar_Exclusao_Banco}"
                        @editar_item="${this._Abrir_Modal_Edicao}"
                    ></card-script>
                    `
                    }
                })}
            </div>


            <h3>Outros</h3>
            <hr>
            
            <div class="container-scripts">
                ${this.itens.map((item,chave)=>{
                    if (item.categoria === "Outros"){
                    return html`
                    <card-script
                        .objeto="${item}"
                        @delete_item="${this._Confirmar_Exclusao_Banco}"
                        @editar_item="${this._Abrir_Modal_Edicao}"
                    ></card-script>
                    `
                    }
                })}
            </div>

            ${this.modal? html`
                <div
                    class="modal-backdrop"
                    @click=${this._Fechar_Modal}
                >
                    <div
                        class="modal-content"
                        
                        @click=${(e) => e.stopPropagation()}
                    >
                        <h3>Adicionar Novo Script</h3>
                        <br>
                        
                        <div class="container_scroll">

                            <div class="form-group">
                                <label for="tipo-categoria" class="form-label">Categoria do Script</label>
                                <select 
                                    @change=""
                                    id="tipo-categoria" name="tipo-categoria" class="form-select">
                                    <option ?selected="${this.item_edicao.categoria === "Ping"?true:false}" value="Ping">Ping</option>
                                    <option ?selected="${this.item_edicao.categoria === "Tracert"?true:false}" value="Tracert">Tracert</option>
                                    <option ?selected="${this.item_edicao.categoria === "Velocidade"?true:false}" value="Velocidade">Velocidade</option>
                                    <option ?selected="${this.item_edicao.categoria === "Fibra"?true:false}" value="Fibra">Fibra</option>
                                    <option ?selected="${this.item_edicao.categoria === "Fonte"?true:false}" value="Fonte">Fonte</option>
                                    <option ?selected="${this.item_edicao.categoria === "Troca de Equipamento"?true:false}" value="Troca de Equipamento">Troca de Equipamento</option>
                                    <option ?selected="${this.item_edicao.categoria === "Site Survey"?true:false}" value="Site Survey">Site Survey</option>
                                    <option ?selected="${this.item_edicao.categoria === "Relato do Cliente"?true:false}" value="Relato do Cliente">Relato do Cliente</option>
                                    <option ?selected="${this.item_edicao.categoria === "Encaminhar Externa"?true:false}" value="Encaminhar Externa">Encaminhar Externa</option>
                                    <option ?selected="${this.item_edicao.categoria === "Outros"?true:false}" value="Outros">Outros</option>
                                    
                                </select>
                            </div>

                            <div class="form-group">
                                <label for="titulo-novo" class="form-label">Título</label>
                                <input 
                                    placeholder="Forneça um titulo para seu Script"
                                    type="text" 
                                    @change=""
                                    id="titulo-novo" name="titulo-novo" 
                                    .value="${this.item_edicao.titulo}" class="form-input">
                            </div>

                            <div class="form-group">
                                <label for="message" class="form-label">Script</label>
                                <textarea
                                    @change=""
                                    placeholder="Elabore a estrutura de seu script padrão!"
                                    id="message" name="message" rows="10" cols="30" class="form-textarea"
                                    .value="${this.item_edicao.descricao}"></textarea>
                            </div>

                        </div>
                        
                        <div class="form-group" style="margin-top: 10px; display: flex; flex-direction: row; gap:.5rem">
                            ${this.tipo_mudanca?html`
                                <button 
                                    @click="${this._Salvar_Novo_Script_Banco}"
                                    style="background-color: var(--btn-background-color); color: var(--text-color);"
                                    type="button" class="form-button")">Salvar</button>
                            `:html`
                                <button 
                                    @click="${(e) => this._Salvar_Edicao_Script_Banco(e, this.id_item)}"
                                    style="background-color: var(--btn-background-color); color: var(--text-color);"
                                    type="button" class="form-button")">Editar</button>
                            `}
                            
                            <button 
                                @click="${this._Fechar_Modal}"
                                type="button" class="form-button")">Fechar</button>
                        </div>

                    </div>
                </div>    
            `:""}

            <!-- Modal Exclusão -->

            ${this.modal_exclusao? html`
                <div
                    class="modal-backdrop"
                    @click=${this._Fechar_Modal_Exclusao}
                >
                    <div
                        class="modal-content"
                        
                        @click=${(e) => e.stopPropagation()}
                    >
                        <h3>Excluir Script!</h3>
                        <br>
                        
                        <div class="container_scroll">

                            <div class="form-group">
                                <label for="tipo-categoria" class="form-label">Tem certeza que deseja excluir o script?</label>
                            </div>

                        </div>
                        
                        <div class="form-group" style="margin-top: 10px; display: flex; flex-direction: row; gap:.5rem">
                            <button 
                                @click="${(e)=> this._Deletar_Script_Banco(e, this.id_item)}"
                                style="background-color: var(--btn-background-color); color: var(--text-color);"
                                type="button" class="form-button")">Sim</button>
                            <button 
                                @click="${this._Fechar_Modal_Exclusao}"
                                type="button" class="form-button")">Não</button>
                        </div>

                    </div>
                </div>    
            `:""}


            <menu-inferior></menu-inferior>
        `;
    }
}

// 2. Em vez de @customElement, use o registro manual
customElements.define('gerenciar-script', Gerenciar_Scripts);