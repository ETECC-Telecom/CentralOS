import { LitElement, html, css, unsafeCSS } from 'lit';
import globalStyle from "./index.css?inline";

import { disparar_notificacao } from '../../../controller/disparar_notificacao';

import { Componente_Grafico_Rosca } from '../../componentes_graficos/componente_grafico_rosca/componente_grafico_rosca';
import { Icone_Plus } from '../../icones/icone_plus';
import { Icone_Concluir_Capacitacao } from '../../icones/icone_concluir_capacitacao';
import { Icone_Nao_Concluir_Capacitacao } from '../../icones/icone_nao_concluir_capacitacao';
import { Icone_Check } from '../../icones/icone_check';
import { Icone_Informacao } from '../../icones/icone_informacao';

export class Componente_Capacitacao_Treino extends LitElement {
    // 1. Em vez de @property, use o objeto static properties
    static properties = {
        ficha:{type:Object},
        lista_capacitacoes: {type:Array},
        relatorio_grafico: {type:Array},
        total_capacitacoes: {type:Number},
        modal_conclusao: {type: Boolean},
        modal_add_capacitacao: {type: Boolean},
        indice_edicao: {type: Number},
    };

    static get styles() {
        return css`${unsafeCSS(globalStyle)}`;
    }

    constructor() {
        super();
        this.ficha = {};
        this.lista_capacitacoes = [];
        this.relatorio_grafico = [0,0]
        this.modelo_relatorio = "[Relatório Inicial - DD/MM/AAAA]\nDescreva como foi a absorção do conteúdo e o desempenho geral durante o curso.\n\n[Atualizações e Aplicação em Campo]\n\nUtilize este espaço para registrar avanços, exemplos de uso da habilidade e acompanhamentos futuros.\n\nExemplo de formato:\n\n- 10/08/2026: O técnico aplicou os conceitos do curso na manutenção preventiva do cliente X com total autonomia.\n\n- 15/09/2026: Demonstrou evolução no diagnóstico de falhas, reduzindo o tempo de atendimento."
        this.relatorio_atual = null;
        this.indice_edicao = null;
        this.modal_conclusao = false
        this.modal_add_capacitacao = false;
    }

    // Executado assim que o componente é renderizado na tela
    firstUpdated() {

    }
    
    connectedCallback() {
        super.connectedCallback(); // ⚠️ Sempre chame o super PRIMEIRO no Lit
        this.icones_confirmacao = [
            html`<icone-check class="destaque_icon_check"></icone-check>`,
            html`<icone-informacao class="destaque_icon_info"></icone-informacao>`,
        ]

        this.lista_capacitacoes = this.ficha?.CAPACITACOES?.retornar_Capacitacoes?.() ?? []
        this.relatorio_grafico = this.ficha?.CAPACITACOES?.exportar_conclusao_geral?.() ?? [0,0]
        
    }
    
    _add_modelo_relatorio = ()=>{
        const CAMPO = this.shadowRoot.getElementById("textbox_ensino");

        if (this.relatorio_atual !== null){
            CAMPO.value = this.relatorio_atual + '\n\n' + this.modelo_relatorio;
        }else{
            CAMPO.value = this.modelo_relatorio;
        }
        
    }

    _exibir_modal_conclusao = (index)=>{
        const INDEX = parseInt(index)
        this.indice_edicao = INDEX;
        
        let relato = this.ficha.CAPACITACOES.retornar_capacitacao(INDEX)
        relato.relatorio === null? this.relatorio_atual = "": this.relatorio_atual = relato.relatorio

        this.modal_conclusao = true;

    }

    _concluir_capacitacao = () => {
        const CAMPO = this.shadowRoot.getElementById("textbox_ensino"); 

        if (CAMPO.value === ""){
            disparar_notificacao("aviso", "O campo não pode estar vazio!")
            return
        }

        const Retorno = this.ficha.CAPACITACOES.Concluir_Capacitacao(this.indice_edicao, CAMPO.value)

        if (Retorno) this.ficha.salvar_data_banco();
        this.relatorio_grafico = this.ficha?.CAPACITACOES?.exportar_conclusao_geral?.() ?? [0,0]
        this.modal_conclusao = false;
        
    }

    _add_nova_capacitacao = () =>{
        const NOME = this.shadowRoot.getElementById("nome_capacitacao");
        const CATEGORIA = this.shadowRoot.getElementById("categoria_capacitacao");
        const RELATORIO = this.shadowRoot.getElementById("textbox_nova_capacitacao");

        if (NOME.value === "" || RELATORIO.value === ""){
            disparar_notificacao("aviso", "Tanto o nome quando descrição devem ser preenchidos!")
            return
        }
        const DATA_ATUAL = Temporal.Now.plainDateISO();
        
        const Retorno = this.ficha.CAPACITACOES.Adicionar_Nova_Capacitacao({
            nome:NOME.value,
            data: DATA_ATUAL,
            relatorio: RELATORIO.value,
            categoria: CATEGORIA.value,
        })

        if (Retorno) this.ficha.salvar_data_banco();
        
        NOME.value= "";
        CATEGORIA.value= "";
        this.relatorio_atual = null;
        this.modal_add_capacitacao = false;
    }

    render() {
        return html`
            <!--Retorno renderizado-->
            <div
                style="display:flex; justify-content:center; align-items:center; gap:5rem">
                <componente-grafico-rosca
                    style="width: 120px; max-width: 100%;"
                    realizado = ${this.relatorio_grafico[1]}
                    naoRealizado = ${this.relatorio_grafico[0] - this.relatorio_grafico[1]}
                ></componente-grafico-rosca>
                <h2
                    style="margin: 0; text-align: center;"> ${this.relatorio_grafico[1]}/${this.relatorio_grafico[0]} Concluídos</h2>
            </div>
            <br>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom:.5rem">
                <h3>Capacitações</h3>
                <button 
                    @click="${()=>this.modal_add_capacitacao = true}"
                    class="button_plus"><icone-plus></icone-plus></button>
            </div>
            <hr>

            <div style="display: flex; flex-direction: column; gap:1rem;">

                ${this.lista_capacitacoes.map((item, chave)=>{
                    
                    const ICONE = item.data === null? this.icones_confirmacao[1]: this.icones_confirmacao[0];
                    const DATA_CONCLUSAO = item.data === null? "Não Concluído": item.data;

                    return html`
                    <div class="container_capacitacao">
                        <div 
                            class="container_titulo">
                            <div class="container_titulo_legenda">
                                ${ICONE}
                                <h3>${item.nome}</h3>
                            </div>
                            <div>
                                <button 
                                    @click="${()=>this._exibir_modal_conclusao(chave)}"
                                    class="button_concluir_capacitacao"><icone-concluir-capacitacao style="--icon-size: 32px;"></icone-concluir-capacitacao></button>
                            </div>
                        </div>
                        <p><b>Concluído em</b>: ${DATA_CONCLUSAO}</p>
                    </div>
                    `
                })}
                

                
            </div>

            <!---- Modal Concluir Capacitação ----->
            
            ${this.modal_conclusao?html`
                <div class="container_modal_background">
                    <div class="container_modal">
                        <h2 style="color:var(--background-color)">Relatorio de Conclusão</h2>
                        <p>O conteúdo estudado pelo técnico foi devidamente absorvido?</p>
                        <p>Você já o observou aplicando essa habilidade na prática/em campo? Descreva brevemente um exemplo de situação ou o nível de domínio demonstrado.</p>
                            <hr>
                            <textarea
                                placeholder="Sempre adicione novas atualizações no final do texto mantendo o formato - DD/MM/AAAA - Acompanhamento: [Descrição da observação] para manter o histórico de evolução do técnico."
                                id="textbox_ensino" name="textbox_ensino" rows="25" cols="" class="form-textarea"
                                .value="${this.relatorio_atual}"></textarea>
                            
                            <div class="btn_group">
                                <button 
                                    @click="${this._add_modelo_relatorio}"
                                    type="button" style="background-color: var(--btn-background-color); color: var(--btn-background-color-invert)" class="form-button">Add Modelo</button>
                                <button 
                                    @click="${()=>this.modal_conclusao = false}"
                                    type="button" style="background-color: var(--btn-background-color); color: var(--btn-background-color-invert)" class="form-button">Cancelar</button>
                                <button 
                                    @click="${this._concluir_capacitacao}"
                                    type="button" class="form-button">Salvar</button>                        
                            </div>
                    </div>        
                </div>
            `:""}

            ${this.modal_add_capacitacao?html`
                <div class="container_modal_background">
                    <div class="container_modal">
                        <h2 style="color:var(--background-color)">Adicionar nova Capacitação</h2>
                        
                            <hr>
                            <div class="form-group">
                                <label for="fname" class="form-label">Nome da Capacitação</label>
                                <input 
                                    @change=""
                                    placeholder="" type="text" id="nome_capacitacao" name="nome_capacitacao"
                                    value="" 
                                    class="form-input">
                            </div>

                            <div class="form-group">
                                <label for="parentesco" class="form-label">Selecione a Categoria:</label>
                                <select 
                                    @change=""
                                    id="categoria_capacitacao" name="categoria_capacitacao" class="form-select">
                                    <option ?selected="true" value="FiberSchool">FiberSchool</option>
                                    <option ?selected="" value="Capacitacao">Capacitação</option>
                                    <option ?selected="" value="Treinamento">Treinamento</option>
                                    <option ?selected="" value="Reciclagem">Reciclagem</option>
                                </select>
                            </div>

                            <textarea
                                placeholder="Sempre adicione novas atualizações no final do texto mantendo o formato - DD/MM/AAAA - Acompanhamento: [Descrição da observação] para manter o histórico de evolução do técnico."
                                id="textbox_nova_capacitacao" name="textbox_nova_capacitacao" rows="15" cols="" class="form-textarea"
                                .value="${this.relatorio_atual}"></textarea>
                            
                            <div class="btn_group">
                               
                                <button 
                                    @click="${()=>this.modal_add_capacitacao = false}"
                                    type="button" style="background-color: var(--btn-background-color); color: var(--btn-background-color-invert)" class="form-button">Cancelar</button>
                                <button 
                                    @click="${this._add_nova_capacitacao}"
                                    type="button" class="form-button">Salvar</button>                        
                            </div>
                    </div>        
                </div>
            `:""}
            


        `;
    }
}

// 2. Em vez de @customElement, use o registro manual
customElements.define('componente-capacitacao-treino', Componente_Capacitacao_Treino);