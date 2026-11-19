import { LitElement, html, css, unsafeCSS } from 'lit';
import globalStyle from "./index.css?inline";

import { disparar_notificacao } from '../../../controller/disparar_notificacao';

import { LISTA_INFORMACOES_ANEXADAS } from '../../../data/Lista_Informacoes_Anexadas';

import { Icone_Plus } from '../../icones/icone_plus';
import iniciarDB from '../../../model/db';

export class Componente_Informacoes_Completa extends LitElement {
    // 1. Em vez de @property, use o objeto static properties
    static properties = {
        Ficha:{type:Object},
        Faltou_Informacao:{type:Boolean},
        Lista_Itens:{type:Array},
    };

    static get styles() {
        return css`${unsafeCSS(globalStyle)}`;
    }

    constructor() {
        super();
        this.Faltou_Informacao = true;
        this.Lista_Itens = []
    }

    // Executado assim que o componente é renderizado na tela
    firstUpdated() {

    }
    connectedCallback() {
        super.connectedCallback(); // ⚠️ Sempre chame o super PRIMEIRO no Lit
        this.Lista_Itens = this.Ficha?.INFORMACOES_COMPLETA?.Get_Itens?.() ?? [];
        this.Faltou_Informacao = this.Ficha?.INFORMACOES_COMPLETA?.Get_Info_Necessaria?.() ?? true;
        
    }

    _Set_Item_Lista = (manual=false) =>{

        let valor = null;
        
        if(manual){
            valor = this.shadowRoot.getElementById("texto_informacao_complementar").value
            if (valor === "") {
                disparar_notificacao("aviso", "Você precisa preencher o campo de Texto!")
                return
            }
            this.shadowRoot.getElementById("texto_informacao_complementar").value = "";
        }else{
            valor = this.shadowRoot.getElementById("informacoes_padroes").value
            if (valor === "0") return;
        }

        this.Ficha.INFORMACOES_COMPLETA.Set_Nova_Informacao(valor);
        this.Ficha.Salvar_OS_Banco();
        this.Lista_Itens = [...this.Ficha.INFORMACOES_COMPLETA.Get_Itens()];

    }

    _Remove_Item_Lista = (Index) =>{
        const INDICE = Index;
        
        this.Ficha.INFORMACOES_COMPLETA.Delete_Inforacao(INDICE);
        this.Lista_Itens = [...this.Ficha.INFORMACOES_COMPLETA.Get_Itens()];
    }

    _Set_Visibilidade = (e) =>{
        const VALOR = e.target.value === "true"?true:false;
        
        this.Faltou_Informacao = VALOR
        this.Ficha.INFORMACOES_COMPLETA.Set_Info_Necessaria(VALOR);
        this.Ficha.Salvar_OS_Banco();
        
    }

    _Set_Nome_Operador = (e)=>{
        if (e.target.value === "") {
            this.Ficha.INFORMACOES_COMPLETA.Set_Operador(null);
            return
        }
        
        const NOME = e.target.value;

        this.Ficha.INFORMACOES_COMPLETA.Set_Operador(NOME);
        this.Ficha.Salvar_OS_Banco();
        
    }

    render() {
        return html`
            <!--Retorno renderizado-->
            <h2>Informações Anexadas:</h2>
            <br><hr>
            <div class="callout callout-warning">
                <div class="callout-icon">
                    ⚠️
                </div>
                <div class="callout-content">
                    <h4 class="callout-title">Atenção Necessária</h4>
                    <p>Todas as informações necessárias para realizar a ordem de serviço foram anexadas?</p>
                </div>
            </div>
            <p></p>
            <div class="form-group" style="flex:10">
                    <label for="fname" class="form-label">Todas as Informações foram adicionadas na abertura?</label>
                <div @change="${this._Set_Visibilidade}" class="radio-input">
                    <label>
                        <input ?checked="${this.Faltou_Informacao === true? true:false}" 
                        value="true" 
                        name="value-radio" 
                        id="value-1" 
                        type="radio" />
                        <span>S i m</span>
                    </label>
                    <label>
                        <input ?checked="${this.Faltou_Informacao === true? false:true}" 
                        value="false" 
                        name="value-radio" 
                        id="value-2" 
                        type="radio" />
                        <span>N ã o</span>
                    </label>
                    <span class="selection"></span>
                </div>
            </div>

            <br>
            ${!this.Faltou_Informacao?html`
                <div class="form-group">
                    <label for="fname" class="form-label">Nome do Operador Responsável:</label>
                    <input 
                        @change="${this._Set_Nome_Operador}"
                        placeholder="Nome do operador responsável pela abertura da OS" type="text" id="Operador" name="Operador"
                        .value="${this.Ficha?.INFORMACOES_COMPLETA?.Get_Operador?.()??""}" 
                        class="form-input">
                </div>

                <div class="form-group">
                    <label for="informacoes_padroes" class="form-label">Qual informação faltou?</label>
                    <select 
                        @change="${()=>{this._Set_Item_Lista(false)}}"
                        id="informacoes_padroes" name="informacoes_padroes" class="form-select">
                        <option ?selected="true" value="0">Selecione um Item para Adicionar!</option>
                        ${LISTA_INFORMACOES_ANEXADAS.map(item => {
                            return html`<option ?selected="" value="${item}">${item}</option>`
                        })}
                    </select>
                </div>

                
                <div class="form-group" style="flex:10">
                    <label for="fname" class="form-label">Informação Extra:</label>
                    <div style="display:flex; gap:.5rem; align-items: flex-end;">
                        <input 
                            placeholder="Caso a informação não esteja na lista, informe aqui o que faltou!" 
                            type="text" id="texto_informacao_complementar" name="texto_informacao_complementar"
                            value="" 
                            class="form-input">
                        <button 
                            @click="${()=>{this._Set_Item_Lista(true)}}"
                            style="flex:1"
                            type="button" class="form-button-quadrado"><icone-plus></icone-plus></button>
                    </div>
                </div>             
                
                <hr>
                <br>
                
                ${this.Lista_Itens.length != 0?html`
                    <ul id="lista-textos" class="lista-container">
                        ${this.Lista_Itens.map((item,chave) => {
                            return html`
                            <li class="item-lista">
                                <span class="texto-item">${item}</span>
                                <button 
                                    @click="${()=>{this._Remove_Item_Lista(chave)}}"
                                    class="btn-excluir" aria-label="Excluir item">x</button>
                            </li>`
                        })}
                    </ul>
                `:html`
                    <h3 style="text-align:center">Nenhum item adicionado a lista...</h3>
                `}

                

            `:""}
        `;
    }
}

// 2. Em vez de @customElement, use o registro manual
customElements.define('componente-informacao-completa', Componente_Informacoes_Completa);