import { LitElement, html, css, unsafeCSS } from 'lit';
import globalStyle from "./index.css?inline";

import { Icone_Check } from '../../icones/icone_check';
import { Icone_Editar } from '../../icones/icone_editar';
import { Icone_Deletar } from '../../icones/icone_deletar';
import { Icone_Close } from '../../icones/icone_close';

import { disparar_notificacao } from '../../../controller/disparar_notificacao';


export class Componente_Progressao_Treino extends LitElement {
    // 1. Em vez de @property, use o objeto static properties
    static properties = {
        objeto_ficha: {type: Object},
        modal_novo_ciclo: {type: Boolean},
        modal_delete_ciclo: {type: Boolean},
        modal_edicao_ciclo: {type: Boolean},
        modal_finalizar_ciclo: {type: Boolean},
        index_modificacao: {type:Number},
        nome_ciclo_exclusao: {type: String},
        lista_relatorio: {type: Array},

    };

    static get styles() {
        return css`${unsafeCSS(globalStyle)}`;
    }

    constructor() {
        super();
        this.objeto_ficha = {};
        this.modal_novo_ciclo = false;
        this.modal_delete_ciclo = false;
        this.modal_edicao_ciclo = false;
        this.modal_finalizar_ciclo = false;
        this.index_modificacao = 0;
        this.nome_ciclo_exclusao = "";
        this.lista_relatorio = [];
    }

    // Executado assim que o componente é renderizado na tela
    firstUpdated() {

    }
    connectedCallback() {
        super.connectedCallback(); // ⚠️ Sempre chame o super PRIMEIRO no Lit

    }

    _adicionar_novo_ciclo_ui = () => {
        const NOME = this.shadowRoot.getElementById("nome-ciclo").value;
        const DESCRICAO = this.shadowRoot.getElementById("descricao-ciclo").value;

        //Filtrando valores fazios:

        if(!NOME || !DESCRICAO){
            disparar_notificacao('aviso', 'Nome ou Descrição não podem estar vazios!')
            return
        }

        this.objeto_ficha.CICLO.adicionar_novo_ciclo(NOME, DESCRICAO);

        this.objeto_ficha.salvar_data_banco();
        
        this.shadowRoot.getElementById("nome-ciclo").value = "";
        this.shadowRoot.getElementById("descricao-ciclo").value = "";

        this.modal_novo_ciclo = false;
    }

    _executar_exclusao_ciclo = (ID) =>{
        
        const CICLO = this.objeto_ficha.CICLO.exportar_ciclo(ID);

        if (!CICLO){
            disparar_notificacao("aviso", "Ciclo Não pode ser Deletado!")
            return
        }

        this.nome_ciclo_exclusao = CICLO.nome;
        this.index_modificacao = ID;
        

        this.modal_delete_ciclo = true
    }

    _excluir_ciclo = () =>{
        const RETORNO = this.objeto_ficha.CICLO.excluir_ciclo_treino_adicional(this.index_modificacao);
        console.log(RETORNO)

        if(!RETORNO){
            disparar_notificacao("aviso", "Não consegui remover o ciclo!")
            return
        }

        this.objeto_ficha.salvar_data_banco();

        this.nome_ciclo_exclusao = "";
        this.index_modificacao = 0;
        this.modal_delete_ciclo = false;
    }

    _executar_edicao_ciclo = (ID) =>{
        this.index_modificacao = ID;
        this.nome_ciclo_exclusao = this.objeto_ficha.CICLO.exportar_ciclo(ID).nome;
        this.lista_relatorio = this.objeto_ficha.CICLO.exportar_relatorios_ciclo(ID);
        this.modal_edicao_ciclo = true;
    }

    _adicionar_novo_relatorio = (ID) => {
        const IDENTIFICADOR = parseInt(ID);
        const RELATORIO = this.shadowRoot.getElementById("descricao-relatorio-ciclo");

        if(!RELATORIO.value){
            disparar_notificacao("aviso", "O campo de Texto não pode estar vazio!")
            return
        }
        console.log(RELATORIO.value)
        this.objeto_ficha.CICLO.adicionar_relatorio_ciclo(IDENTIFICADOR, RELATORIO.value);

        this.lista_relatorio = [...this.objeto_ficha.CICLO.exportar_relatorios_ciclo(IDENTIFICADOR)]
        
        RELATORIO.value = "";
        this.objeto_ficha.salvar_data_banco();
    }

    _remover_novo_relatorio = (ID, ID_RELATORIO) => {
        const IDENTIFICADOR = parseInt(ID);
        const IDENTIFICADOR_RELATORIO = parseInt(ID_RELATORIO);

        this.objeto_ficha.CICLO.remover_relatorio_ciclo(IDENTIFICADOR, IDENTIFICADOR_RELATORIO);

        this.lista_relatorio = [...this.objeto_ficha.CICLO.exportar_relatorios_ciclo(IDENTIFICADOR)]
        
        this.objeto_ficha.salvar_data_banco();
    }

    _iniciar_modal_encerramento_ciclo = (ID)=> {
        const IDENTIFICADOR = parseInt(ID);
        this.index_modificacao = IDENTIFICADOR;
        this.modal_finalizar_ciclo = true;
        
    }
    _finalizar_ciclo_treino = () => {
        
        this.objeto_ficha.CICLO.Finalizar_Ciclo(this.index_modificacao);
        this.objeto_ficha.salvar_data_banco();
        this.modal_finalizar_ciclo = false;
        this.requestUpdate();

    }

    render() {
        return html`
            <!--Retorno renderizado-->
            <br>
            <h2 >Ciclos de Treino</h2>
            <br>
            <button 
                @click="${()=>this.modal_novo_ciclo = true}"
                type="button" class="form-button">Add Novo Ciclo</button>
                <br><br>

                <div class="Container_Ciclos">
                    ${this.objeto_ficha?.CICLO?.exportar_ciclos?.().map((item, chave) => {
                        return html`

                            <div 
                                class="container_ciclo" 
                                style="${item.finalizada?"opacity:60%; pointer-events: none; user-select: none;":""}">
                                <div class="header_ciclo">
                                    <h4 style="flex:6">${item.nome}</h4>
                                    <div class="grupo_btn_ciclo" style="flex:1">
                                        <button 
                                            @click="${()=>{this._executar_edicao_ciclo(chave)}}"
                                            type="button" class="form-button"><icone-editar></icone-editar></button>
                                        <button 
                                            @click="${()=>this._iniciar_modal_encerramento_ciclo(chave)}"
                                            type="button" class="form-button"><icone-check></icone-check></button>
                                        ${chave > 2? html`
                                            <button 
                                                @click="${()=>{this._executar_exclusao_ciclo(chave)}}"
                                                type="button" class="form-button"><icone-deletar></icone-deletar></button>    
                                        `:""}
                                    </div>
                                </div>
                                <div>
                                    <p style="color:var(--color-text-info)">
                                        ${item.descricao}
                                    </p>
                                </div>
                            </div>
                        `
                    }) ?? ""}
                                   
                </div>
            

            <!-- Modais de Configuração -->
            
            <!-- Modal para criação de um novo ciclo -->

            ${this.modal_novo_ciclo?html`
            
                <div class="container_modal_background">
                    <div class="container_modal">
                        <h3>Criar novo Ciclo</h3>
                        <div class="form-group">
                            <label for="fname" class="form-label">Nome do Ciclo</label>
                            <input 
                                @change=""
                                placeholder="Qual o nome desse novo ciclo de treino" type="text" id="nome-ciclo" name="nome-ciclo"
                                value="" 
                                class="form-input">
                        </div>

                        <textarea
                            @change=""
                            @input=""
                            placeholder="Descreva qual o objetivo desse novo ciclo de treino"
                            id="descricao-ciclo" name="descricao-ciclo" rows="" cols="" class="form-textarea"
                            .value=""></textarea>

                        <div style="display:flex; gap:1rem;">
                            <button 
                                @click="${() => {this.modal_novo_ciclo = false}}"
                                type="button" class="form-button-negativ">Cancelar</button>
                            <button 
                                @click="${this._adicionar_novo_ciclo_ui}"
                                type="button" class="form-button">Adicionar</button>
                        </div>
                    </div>
                </div>

            `:""}

            <!-- Modal de Confirmação de Exclusão -->
            ${this.modal_delete_ciclo?html`

                <div class="container_modal_background">
                    <div class="container_modal">
                        <h3>Deletar Ciclo</h3>
                        <p>Tem certeza que deseja deletar o ciclo: ${this.nome_ciclo_exclusao}</p>
                        
                        <div style="display:flex; gap:1rem;">
                            <button 
                                @click="${() => {this.modal_delete_ciclo = false}}"
                                type="button" class="form-button-negativ">Cancelar</button>
                            <button 
                                @click="${() => {this._excluir_ciclo()}}"
                                type="button" class="form-button">Deletar</button>
                        </div>
                    </div>
                </div>

            `:""}

            <!-- Modal de Edição do Ciclo -->
            ${this.modal_edicao_ciclo?html`

                <div class="container_modal_background_relatorio">
                    <div class="container_modal_relatorio">
                        
                        <div style="display:flex; flex-direction:row; gap:1;">
                            <h3 style="flex:6">Relatórios do Ciclo</h3>
                            <button 
                                style="flex:1; width:30px; height:30px; padding:0; display:flex; align-items:center; justify-content:center;"
                                @click="${()=>{this.modal_edicao_ciclo = false}}"
                                type="button" class="form-button"><icone-close></icone-close></button>
                        </div>

                        <p>Ciclo: ${this.nome_ciclo_exclusao}</p>
                        <textarea
                            @change=""
                            @input=""
                            placeholder="Descreva qual o objetivo desse novo ciclo de treino"
                            id="descricao-relatorio-ciclo" name="descricao-relatorio-ciclo" rows="10" cols="" class="form-textarea"
                            .value=""></textarea>
                        <div style="display:flex; gap:1rem;">
                            <button 
                                @click="${()=>{this._adicionar_novo_relatorio(this.index_modificacao)}}"
                                type="button" class="form-button">Adicionar novo Relatório</button>
                        </div>
                        
                        <ul>
                            ${this.lista_relatorio.map((item, chave)=>{
                                
                                return html`
                                <li>
                                    <div style="display:flex; gap:1;">
                                        <p style="flex:11">
                                            ${item}
                                        </p>
                                        <button
                                            style="flex:1; width:30px; height:30px; padding:0; display:flex; align-items:center; justify-content:center;"
                                            @click="${()=>{this._remover_novo_relatorio(this.index_modificacao ,chave)}}"
                                            type="button" class="form-button"><icone-deletar></icone-deletar></button>
                                    </div>
                                </li>
                                `;
                            })}
                        </ul>
                        <br><br><br>

                    </div>
                </div>

            `:""}
            
            <!-- Modal de confirmação Deletar Ciclo -->
            ${this.modal_finalizar_ciclo? html`
                <div class="container_modal_background">
                    <div class="container_modal">
                        <h2>Concluir o Ciclo</h2>
                        <h4>Tem certeza que deseja finalizar o Ciclo?</h4>
                        <div style="display:flex; flex-direction:row; gap:1rem;">
                            <button
                                style="background-color: var(--btn-background-color-invert); color: var(--btn-background-color)" 
                                @click="${()=>{this.modal_finalizar_ciclo = false}}"
                                type="button" class="form-button">Cancelar</button>
                            <button 
                                @click="${this._finalizar_ciclo_treino}"
                                type="button" class="form-button">Finalizar</button>
                        </div>
                    </div>        
                </div>    
            `:''}

            
        `;
    }
}

// 2. Em vez de @customElement, use o registro manual
customElements.define('componente-progressao-treino', Componente_Progressao_Treino);