import { LitElement, html, css, unsafeCSS } from 'lit';
import globalStyle from "./index.css?inline";
import { disparar_notificacao } from '../../../controller/disparar_notificacao';

import { Icone_Deletar } from '../../icones/icone_deletar';
import { Icone_Close } from '../../icones/icone_close';

export class Componente_Notas extends LitElement {
    // 1. Em vez de @property, use o objeto static properties
    static properties = {
        ficha:{type:Object},
        modal_nota:{type:Boolean},
        modal_confirmacao_exclusao:{type:Boolean},
        lista_notas:{type:Array},
    };

    static get styles() {
        return css`${unsafeCSS(globalStyle)}`;
    }

    constructor() {
        super();
        this.ficha = {};
        this.modal_nota = false;
        this.modal_confirmacao_exclusao = false;
        this.nota = "";
        this.index_edicao = 0;
        this.em_edicao = false;
        this.titulo = "";
        this.lista_notas = [];
    }

    // Executado assim que o componente é renderizado na tela
    firstUpdated() {

    }
    connectedCallback() {
        super.connectedCallback(); // ⚠️ Sempre chame o super PRIMEIRO no Lit
        this.lista_notas = this.ficha?.NOTAS?.retornar_Notas?.() ?? [];
    }

    _resumir_relatorio = (relatorio) => {

        if (relatorio.length > 150){
            return relatorio.slice(0, 150)+"...";
        }else{
            return relatorio
        }
    }

    _iniciar_add_nota = ()=>{
        this.em_edicao = false;
        this.nota = "";
        this.titulo = "Adicionar Nota"
        this.modal_nota = true;
    }

    _iniciar_editar_nota = (index) => {
        const INDEX = parseInt(index)

        this.em_edicao = true;
        this.index_edicao = INDEX;
        this.nota = this.ficha.NOTAS.retornar_nota(INDEX);
        this.titulo = `Nota Nº 0${INDEX+1}`
        this.modal_nota = true;
    }

    _salvar_editar_nota= ()=>{
        
        const RELATORIO = this.shadowRoot.getElementById("campo_relatorio");

        if (RELATORIO.value === ""){
            disparar_notificacao("aviso", "O campo não pode estar vazio!")
            return
        }

        let Retorno = null

        if(this.em_edicao){
            Retorno = this.ficha.NOTAS.editar_nota(this.index_edicao,RELATORIO.value);
            this.nota = "";
        }else{
            Retorno = this.ficha.NOTAS.add_nova_nota(RELATORIO.value);
        }
        
        if (Retorno) this.ficha.salvar_data_banco();
        this.modal_nota = false;

    }

    _confirmar_exclusao_nota = (index) =>{
        const INDEX = parseInt(index)

        this.index_edicao = INDEX;
        this.titulo = "Excluir Nota"

        this.modal_confirmacao_exclusao = true
    }

    _excluir_nota = ()=>{
        const Resultado = this.ficha.NOTAS.deletar_nota(this.index_edicao);

        this.lista_notas = this.ficha?.NOTAS?.retornar_Notas?.() ?? [];

        if(Resultado) this.ficha.salvar_data_banco();

        this.modal_confirmacao_exclusao = false;
    }

    render() {
        return html`
            <!--Retorno renderizado-->
            <br>
            <button 
                @click="${this._iniciar_add_nota}"
                type="button" class="form-button">Add Nova Nota</button>
            <br><br><hr>
            <br>
            <div style="display:flex; flex-direction:column; gap: 1rem">
                ${this.lista_notas.length ===0?html`<h2>Nenhuma Nota Cadastrada</h2>`:this.lista_notas.map((item,chave)=>{
                    return html`
                        <div class="container_nota">
                            <p 
                                @click="${()=>this._iniciar_editar_nota(chave)}"
                                style="flex:5">${this._resumir_relatorio(item)}<p>
                            <button 
                                style="flex:1"
                                @click="${()=>this._confirmar_exclusao_nota(chave)}"
                                type="button" class="form-button-nota"><icone-deletar></icone-deletar></button>
                        </div>
                        <hr>
                    `
                })}
                
                
            </div>


            <!----- Modal de Modificacao -----> 
            ${this.modal_nota?html`
            <div class="container_modal_background">
                <div class="container_modal">
                    <h3>${this.titulo}</h3>
                    <hr>
                    <textarea
                        @change=""
                        @input=""
                        placeholder=""
                        id="campo_relatorio" name="campo_relatorio" rows="30" cols="" class="form-textarea"
                        .value="${this.nota}"></textarea>

                    <div class="btn_group">
                        <button 
                            @click="${()=>this.modal_nota = false}"
                            type="button" style="background-color: var(--btn-background-color); color: var(--btn-background-color-invert)" class="form-button">Cancelar</button>
                        <button 
                            @click="${this._salvar_editar_nota}"
                            type="button" class="form-button">Salvar</button>                        
                    </div>
                </div>        
            </div>
            `:""}

            ${this.modal_confirmacao_exclusao?html`
            <div class="container_modal_background">
                <div class="container_modal" style="justify-content: center;">
                    <h3>${this.titulo}</h3>
                    <hr>
                    <h3>Tem certeza que deseja excluir a nota 0${this.index_edicao+1}</h3>

                    <div class="btn_group" ">
                        <button 
                            @click="${()=>this.modal_confirmacao_exclusao = false}"
                            type="button" style="background-color: var(--btn-background-color); color: var(--btn-background-color-invert)" class="form-button">Cancelar</button>
                        <button 
                            @click="${this._excluir_nota}"
                            type="button" class="form-button">Excluir</button>                        
                    </div>
                </div>        
            </div>
            `:""}

        `;
    }
}

// 2. Em vez de @customElement, use o registro manual
customElements.define('componente-notas', Componente_Notas);