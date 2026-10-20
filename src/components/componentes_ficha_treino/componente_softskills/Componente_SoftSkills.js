import { LitElement, html, css, unsafeCSS } from 'lit';
import globalStyle from "./index.css?inline";
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

import { Icone_Estudos } from '../../icones/icone_estudos';
import { Icone_Informacao } from '../../icones/icone_informacao';
import { Icone_Up } from '../../icones/icone_up';
import { Icone_Down } from '../../icones/icone_down';
import { disparar_notificacao } from '../../../controller/disparar_notificacao';
import { Componente_Grafico_Radar } from '../../componentes_graficos/componente_grafico_radar.js/componente_grafico_radar';

export class Componente_Softskills extends LitElement {
    // 1. Em vez de @property, use o objeto static properties
    static properties = {
        ficha:{type:Object},
        lista_softskills: {type:Array},
        modal_consulta: {type:Boolean},
        modal_justificativa: {type:Boolean},
        modal_relatorio: {type:Boolean},
        lista_relatorios: {type:Array},
        nome_softskill: {type:String},
        data_grafico_radar: {type:Object},
    };

    static get styles() {
        return css`${unsafeCSS(globalStyle)}`;
    }

    constructor() {
        super();
        this.ficha = {};
        this.lista_softskills = []
        this.consulta = "";
        this.modal_consulta = false;
        this.modal_justificativa = false;
        this.modal_relatorio = false;
        this.elevar_nivel = true;
        this.index_elemento_mod = null;
        this.lista_relatorios = [];
        this.nome_softskill = "";
    }

    // Executado assim que o componente é renderizado na tela
    firstUpdated() {

    }
    connectedCallback() {
        super.connectedCallback(); // ⚠️ Sempre chame o super PRIMEIRO no Lit

        this.lista_softskills = this.ficha?.SOFTSKILLS?.exportar_objeto_completo() ?? [];
        this.data_grafico_radar = this.ficha?.SOFTSKILLS?.exportar_relatorio_grafico_radar() ?? {};
    }

    _exibir_consulta_softskill = (e) =>{
        const INDEX_SOFTSKILL = parseInt(e);
        
        this.consulta = this.lista_softskills[INDEX_SOFTSKILL].descricao;

        this.modal_consulta = true;
    }
    _abrir_modal_justificativa = (e, mod)=> {
        const INDEX_SOFTSKILL = parseInt(e);

        this.index_elemento_mod = INDEX_SOFTSKILL;
        this.elevar_nivel = mod;
        this.modal_justificativa = true;
    }
    _modificar_nivel = (e) =>{
        const RELATORIO = this.shadowRoot.getElementById("relatorio_alteracao");

        if(RELATORIO.value === ""){
            disparar_notificacao("aviso", "O Relatório não pode estar vazio!")
            return
        }

        if(this.elevar_nivel){
            this.ficha.SOFTSKILLS.elevar_nivel_softskill(this.index_elemento_mod, RELATORIO.value);
        }else{
            this.ficha.SOFTSKILLS.reduzir_nivel_softskill(this.index_elemento_mod, RELATORIO.value);
        }

        console.log(this.ficha?.SOFTSKILLS?.exportar_objeto_completo())

        RELATORIO.value = "";
        
        this.ficha.salvar_data_banco();

        this.modal_justificativa = false;
        this.index_elemento_mod = null;
        
        this.data_grafico_radar = this.ficha?.SOFTSKILLS?.exportar_relatorio_grafico_radar() ?? {};

    }
    
    _abrir_modal_relatorios = (e, nome)=>{
        const INDEX = parseInt(e);

        this.lista_relatorios = this.lista_softskills[INDEX].relatorio;
        this.nome_softskill = nome;

        this.modal_relatorio = true;
        console.log(this.lista_relatorios)
    }

    _abrir_consulta_niveis = () => {
        this.consulta = "<p>O Técnico Treinador deverá observar, ao longo de todo o período de instrução, as habilidades comportamentais do técnico júnior e metrificar seu desempenho com base nos critérios estabelecidos abaixo. A pontuação é simplificada e deve fundamentar-se no julgamento técnico e profissional do treinador.</p><h3>Régua de Proficiência (1 a 4)</h3><p>Para garantir a padronização da avaliação, utilize os seguintes critérios para todas as competências:</p><p><b>Nível 1</b> - Insuficiente: Não demonstra a habilidade ou necessita de supervisão constante e intervenções diretas.</p><p><b>Nível 2</b> - Em Desenvolvimento: Demonstra a habilidade em situações simples, porém apresenta falhas ou insegurança sob pressão.</p><p><b>Nível 3</b> - Proficiente: Atende plenamente às expectativas da função e executa suas tarefas com autonomia.</p><p><b>Nível 4</b> - Referência: Supera as expectativas iniciais, demonstra domínio pleno e serve de exemplo positivo para os demais colaboradores.</p>";

        this.modal_consulta = true;
    }

    render() {
        return html`
            <!--Retorno renderizado-->
            <!-- Gráfico da Softskills -->

            <div style="display:flex; justify-content:center;">
                <componente-grafico-radar
                    .chartData = "${this.data_grafico_radar}"
                    ></componente-grafico-radar>
            </div>

            <div style="display:flex; align-items: center;">
                <h3 style="flex:8">Visão Geral</h3>
                <button
                    style="flex:1; padding:.5rem; width:40px; height:40px; margin:.5rem"
                    @click="${this._abrir_consulta_niveis}"
                    type="button" class="form-button"><icone-estudos></icone-estudos></button>
            </div>

            <hr><br>
            <h3>Lista de Soft Skills<h3>
            <div style="display:flex, flex-direction: row; gap:1rem">
                ${this.lista_softskills.length > 0?html`
                    ${this.lista_softskills.map((item, chave)=> {
                        return html`
                            <div class="container_softskill">
                                <div class="softskill_titulo">
                                    
                                    <h5>${item.nome}</h5>
                                    <div class="grupo_btn_titulo">
                                        <button 
                                        @click="${()=>{this._abrir_modal_relatorios(chave, item.nome)}}"
                                        type="button" class="form-button"><icone-informacao></icone-informacao></button>

                                        <button 
                                        @click="${()=>this._exibir_consulta_softskill(chave)}"
                                        type="button" class="form-button"><icone-estudos></icone-estudos></button>
                                    </div>
                                </div>
                                <div style="display:flex; justify-content: space-between; align-items: center;">
                                    <span>
                                        <p>Nível Atual: ${item.nivel_atual}/4</p>
                                    </span>
                                    <div class="grupo_btn_nivel">
                                        <button 
                                        @click="${()=>this._abrir_modal_justificativa(chave, true)}"
                                        style="background-color: var(--color_sucess)"
                                        type="button" class="form-button"><icone-up style="--icon-size: 1rem;"></icone-up></button>

                                        <button 
                                        @click="${()=>this._abrir_modal_justificativa(chave, false)}"
                                        type="button" class="form-button"><icone-down style="--icon-size: 1rem;"></icone-down></button>
                                    </div>
                                </div>
                            <hr>
                            </div>
                        `;
                    })}
                `:html`<h3>Não existe nenhuma Softskill Cadastrada!</h3>`}
                
            </div>

            <!------------------- MODAIS ----------------->

            ${this.modal_consulta?html`
                <div 
                    @click="${()=>this.modal_consulta = false}"
                    class="container_modal_background">
                    <div class="container_modal">
                        <h2>Consulta da SoftSkill</h2>
                        <hr>
                        ${unsafeHTML(this.consulta)}
                    </div>
                </div>    
            `:""}

            ${this.modal_justificativa?html`
                <div 
                    class="container_modal_background">
                    <div class="container_modal_2">
                        <h2>Justificativa</h2>
                        <p style="color:var(--text-color)">Forneça uma justificativa que motive essa alteração de nível!</p>
                        <p style="color:var(--text-color)">
                            Porém atente-se, pois o preenchimento das soft skills devem seguir alguns protocolos. Preencher com “<i>Boa comunicação</i>” é fraco, genérico e pouco útil para nosso processo. O ideal é relatar a soft skill como <b>evidência comportamental + contexto + impacto</b>.
                        </p>
                        <textarea
                            @change=""
                            @input=""
                            placeholder=""
                            id="relatorio_alteracao" name="relatorio_alteracao" rows="" cols="" class="form-textarea"
                            .value=""></textarea>

                        <div class="form-group-button" style="margin-top: 10px;">
                            <button
                                style="background-color:var(--btn-background-color-invert); color:var(--btn-background-color)" 
                                @click="${()=>this.modal_justificativa = false}"
                                type="button" class="form-button">Cancelar</button>
                            <button 
                                @click="${this._modificar_nivel}"
                                type="button" class="form-button">Salvar</button>
                        </div>
                    </div>
                </div>    
            `:""}
            

            <!------------- Modal RElatorios ---------------->

            ${this.modal_relatorio?html`
                <div 
                    @click="${()=>this.modal_relatorio = false}"
                    class="container_modal_background">
                    <div class="container_modal">
                        <h3>Relatórios da Soft skill (${this.nome_softskill})</h3>
                        <hr>
                        <div style="display:flex; flex-direction: column;">
                            ${this.lista_relatorios.map(relatorio => {
                                return html`
                                    <div>
                                        <h4 style="${relatorio.elevado?'color: var(--color_sucess);':'color:var(--color_error);'}">${relatorio.titulo}</h4><br>
                                        <p>${relatorio.descricao}</p>
                                        <br>
                                    <div>
                                `;
                            })}
                        </div>
                    </div>        
                </div>            
            `:""}


        `;
    }
}

// 2. Em vez de @customElement, use o registro manual
customElements.define('componente-softskills', Componente_Softskills);