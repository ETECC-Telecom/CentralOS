import { LitElement, html, css, unsafeCSS } from 'lit';
import globalStyle from "./index.css?inline";
import { Componente_Acoording } from '../../Componente_Acoordion/componente_acoordion';
import { Icone_Check } from '../../icones/icone_check';
import { Icone_Close } from '../../icones/icone_close';
import { Icone_Informacao } from '../../icones/icone_informacao';
import { Icone_Sync } from '../../icones/icone_sync';
import { ProgressBar } from '../../component_Progress_bar/progress_bar';

import { disparar_notificacao } from '../../../controller/disparar_notificacao';

export class Componente_Habilidades_Tecnicas extends LitElement {
    // 1. Em vez de @property, use o objeto static properties
    static properties = {
        ficha:{type:Object},
        progressao: {type:Array},
        categorias: {type:Array},
        elementos: {type: Array},
        index_habilidade_manipulacao: {type: Number},
        tipo_alteracao: {type: Number}, //1 nao ensinado, 2 teórico e 3 prático
        relatorio_atual: {type: String},
        modal_adicao_ensino: {type: Boolean},
        modal_consulta_ensino: {type: Boolean},
        progressao_atual:{type:Array},
    };

    static get styles() {
        return css`${unsafeCSS(globalStyle)}`;
    }

    constructor() {
        super();
        this.ficha = {};
        this.progressao = [0,0,0,0];
        this.categorias = [];
        this.elementos = [];
        this.relatorio_atual = "";
        this.progressao_atual=[0,100];

        //Usado para evitar o if else dentro do render!
        this.icones = {
            1:html`<icone-close style="--icon-color: var(--color_error);"></icone-close>`,
            2:html`<icone-informacao style="--icon-color: var(--color_warning);"></icone-informacao>`,
            3:html`<icone-check style="--icon-color: var(--color_primary);"></icone-check>`,
        }

        this.modal_adicao_ensino = false;
        this.modal_consulta_ensino = false;

        
    }

    // Executado assim que o componente é renderizado na tela
    firstUpdated() {

    }
    connectedCallback() {
        super.connectedCallback(); // ⚠️ Sempre chame o super PRIMEIRO no Lit
        this.categorias = this.ficha?.HABILIDADES?.exportar_categorias?.() ?? [];
        this.elementos = this.ficha?.HABILIDADES?.retornar_Habilidades?.() ?? [];
        this.progressao = this.ficha?.HABILIDADES?.exportar_relatorio_ensino?.() ?? [0,0,0,0];
        
        this.progressao_atual = this.ficha?.HABILIDADES?.exportar_conclusao_atual?.() ?? [0,0];
    }

    _adicionar_ensino = (Index, tipo) => {
        const INDEX = parseInt(Index);
        const TIPO = parseInt(tipo);

        this.index_habilidade_manipulacao = INDEX;
        this.tipo_alteracao = TIPO;

        if (this.tipo_alteracao === 1){ //Não Ensinado
            const Resposta = this.ficha.HABILIDADES.exportar_relatorio_habilidade_nao_ensinado(INDEX)
            if (Resposta){
                this.relatorio_atual = Resposta
            }else{
                this.relatorio_atual = ""
            }
        }else if(this.tipo_alteracao === 2){ //Ensinamento Teórico
            const Resposta = this.ficha.HABILIDADES.exportar_relatorio_habilidade_teorico(INDEX)
            if (Resposta){
                this.relatorio_atual = Resposta
            }else{
                this.relatorio_atual = ""
            }
        }else{ //Ensinamento Pratico
            const Resposta = this.ficha.HABILIDADES.exportar_relatorio_habilidade_pratica(INDEX)
            if (Resposta){
                this.relatorio_atual = Resposta
            }else{
                this.relatorio_atual = ""
            }
        }
        

        this.modal_adicao_ensino = true;
        

    }

    _aplicar_justificativa_ensino = () =>{
        const RELATORIO = this.shadowRoot.getElementById("textbox_ensino");

        if (RELATORIO.value === ""){
            disparar_notificacao("aviso", "O Relatório não pode estar vazio!")
            return
        }

        let Resposta = false;

        if (this.tipo_alteracao === 1){ //Não Ensinado
            Resposta = this.ficha.HABILIDADES.justificar_nao_ensinado(this.index_habilidade_manipulacao, RELATORIO.value)
        }else if(this.tipo_alteracao === 2){ //Ensinamento Teórico
            Resposta = this.ficha.HABILIDADES.justificar_teorico(this.index_habilidade_manipulacao, RELATORIO.value)
        }else{ //Ensinamento Pratico
            Resposta = this.ficha.HABILIDADES.justificar_pratico(this.index_habilidade_manipulacao, RELATORIO.value)
        }  
        this.progressao_atual = this.ficha?.HABILIDADES?.exportar_conclusao_atual?.() ?? [0,0];

        this.ficha.salvar_data_banco();
        this.modal_adicao_ensino = false;
        
    }

    _sincronizar_novos_atributos = ()=>{
        const retorno = this.ficha.HABILIDADES.sincronizar_estrura_habilidades();

        if(retorno){
            disparar_notificacao("sucesso", "Novos atributos sincronizados com sucesso")
        }else{
            disparar_notificacao("aviso", "Não conseguimos sincronizar novos atributos")
        }
        this.ficha.salvar_data_banco();
    }

    render() {
        return html`
            <!--Retorno renderizado-->

            <!-- Progressão Técncio -->     
            <br>
            <progress-bar atual="${this.progressao_atual[1]}" total="${this.progressao_atual[0]}"></progress-bar>
            <br>
            <div class="Card_progressao">
                <p style="flex:1">Prático: ${this.progressao[3]}</p>
                <p style="flex:1">Teórico: ${this.progressao[2]}</p>
                <p style="flex:1">Não Ensinados: ${this.progressao[1]}</p>
            </div>
            <br>
            <button 
                @click="${this._sincronizar_novos_atributos}"
                type="button"
                style="display:flex; gap: .5rem; align-items: center; justify-content:center"
                class="form-button"><icone-sync></icone-sync> Sincronizar Novos Atributos</button>

            <br>
            <hr>
            
            ${this.categorias.length != 0? html`
                ${this.categorias.map((item, chave)=>{
                    return html`
                       <componente-acoording title="${item}">
                            ${this.elementos.map((habilidade, chave)=>{
                                if(habilidade.categoria === item){
                                    return html`
                                        <div class="container_habilidades ${habilidade.obrigatorio? 'destaque_obrigatoriedade':''}">
                                            
                                            <span class="container_titulo_habilidade">
                                                ${this.icones[this.ficha.HABILIDADES.exportar_nivel_habilidade(chave)]}
                                                </icone-check><h4>${habilidade.nome}</h4>
                                            </span>

                                            <div class="container_btn_acao">
                                                <span
                                                    @click="${()=>{this._adicionar_ensino(chave, 1)}}"
                                                    style="flex:1; background-color:var(--color_error); border-color: var(--border_color_error);" class="btn_acao">Não Ensinado</span>
                                                <span
                                                    @click="${()=>{this._adicionar_ensino(chave, 2)}}"
                                                    style="flex:1; background-color:var(--color_warning); border-color: var(--border_color_warning);" class="btn_acao">Teórico</span>
                                                <span
                                                    @click="${()=>{this._adicionar_ensino(chave, 3)}}"
                                                    style="flex:1; background-color:var(--color_primary); border-color: var(--border_color_primary);" class="btn_acao">Prático</span>
                                            </div>
                                        </div>
                                        <br>
                                        <hr style="border: 1px solid #29303b;">
                                        <br>
                                    `
                                }
                            })}
                            
                        </componente-acoording>
                    `
                })}        
            `:html`<br><h2>Nenhuma categoria carregada!</h2>`}
            

            <!------------- Modais do componente -----------------------> 

            <!--- Modal de adição de conhecimento ----->
            ${this.modal_adicao_ensino?html`
                <div class="container_modal_background">
                    <div class="container_modal">
                        <h2 style="color:var(--background-color)">Justifique o que foi ensinado!</h2>
                        <hr>
                        <textarea
                            placeholder="Descreva o motivo pelo qual a habilidade não foi ensinada, foi abordada apenas na teoria ou foi praticada com o técnico. Informe o contexto e, se aplicável, o que falta para concluir o treinamento."
                            id="textbox_ensino" name="textbox_ensino" rows="30" cols="" class="form-textarea"
                            .value="${this.relatorio_atual}"></textarea>
                        
                        <div class="btn_group">
                            <button 
                                @click="${()=>{this.modal_adicao_ensino = false}}"
                                type="button" style="background-color: var(--btn-background-color); color: var(--btn-background-color-invert)" class="form-button">Cancelar</button>
                            <button 
                                @click="${this._aplicar_justificativa_ensino}"
                                type="button" class="form-button">Salvar</button>                        
                        </div>
                    </div>        
                </div>`
            :''}



        `;
    }
}

// 2. Em vez de @customElement, use o registro manual
customElements.define('componente-habilidades-tecnicas', Componente_Habilidades_Tecnicas);