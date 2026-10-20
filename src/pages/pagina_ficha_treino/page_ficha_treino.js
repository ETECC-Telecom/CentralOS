import { LitElement, html, css, unsafeCSS } from 'lit';
import globalStyle from "./index.css?inline";
import { Header_Page_OS } from '../../components/header_page_os/header_page_os';
import { Icone_Boas_Praticas } from '../../components/icones/icone_boas_praticas';
import { Icone_Capacitacao } from '../../components/icones/icone_capacitacao';
import { Icone_Habilidade_Tecnica } from '../../components/icones/icone_habilidade_tecnica';
import { Icone_Informacao } from '../../components/icones/icone_informacao';
import { Icone_Soft_Skill } from '../../components/icones/icone_soft_skill';
import { Icone_Notas_Gerais } from '../../components/icones/icone_notas_gerais';


import { Copiar_Clipboard } from '../../controller/Copiar_Clipboard';

// Aba de Informacoes => 1
import { Componente_Informacoes_Ficha } from '../../components/componentes_ficha_treino/componete_informacoes/componete_informacoes';
import { Componente_Progressao_Treino } from '../../components/componentes_ficha_treino/componente_progressao_treino/Componente_Prograssao_Treino';

// Aba de Informacoes => 2
import { Componente_Softskills } from '../../components/componentes_ficha_treino/componente_softskills/Componente_SoftSkills';

// Aba de Informacoes => 3
import { Componente_Habilidades_Tecnicas } from '../../components/componentes_ficha_treino/componente_habilidades_tecnicas/componente_habilidades_tecnicas';

// Aba de Informacoes => 4
import { Componente_Capacitacao_Treino } from '../../components/componentes_ficha_treino/componente_capacitacao/componente_capacitacao';

// Aba de Informacoes => 5
import { Componente_Notas } from '../../components/componentes_ficha_treino/componente_notas/componente_notas';



import { capturar_ficha_ativa_local } from '../../model/Service_Ficha_Treino';
import Controller_Ficha_Treino from '../../controller/ficha_treino/Controller_Ficha_Treino';
import { disparar_notificacao } from '../../controller/disparar_notificacao';

export class Page_Ficha_Treino extends LitElement {
    // 1. Em vez de @property, use o objeto static properties
    static properties = {
        ficha: { type: Object },
        aba: { type: Number },
        modal_finalizar: {type: Boolean},
    };

    static get styles() {
        return css`${unsafeCSS(globalStyle)}`;
    }

    constructor() {
        super();
        this.identificador = 0;
        this.ficha = {};
        this.aba = 1;
        this.modal_finalizar = false;
    }

    // Executado assim que o componente é renderizado na tela
    firstUpdated() {

    }

    async connectedCallback() {
        super.connectedCallback(); // ⚠️ Sempre chame o super PRIMEIRO no Lit
        this.identificador = capturar_ficha_ativa_local();

        const fichaController = new Controller_Ficha_Treino({ identificador: this.identificador });

        // 1. Aguarda os dados virem do IndexedDB
        await fichaController.carregar_ficha_banco();

        // 2. Reatribui utilizando o operador spread ({...}) para mudar a referência do objeto
        // OU chama this.requestUpdate() logo em seguida.
        this.ficha = Object.assign(Object.create(Object.getPrototypeOf(fichaController)), fichaController);

        // 3. Força o Lit a re-renderizar a página com os novos dados
        this.requestUpdate();
    }

    _exportar_relatorio = () => {
        Copiar_Clipboard(this.ficha.expostar_relatorio_md());
    }

    _deletar_ficha = async() => {

        const APROVACAO = this.shadowRoot.querySelector('input[name="status"]:checked');
        const APROVACAO_RELATORIO = this.shadowRoot.getElementById("texto_relatorio_aprovacao");

        if (APROVACAO_RELATORIO.value === ""){
            disparar_notificacao("aviso","O Relatório não pode estar vazio!")
            return
        }

        this.ficha.atualizar_aprovacao(APROVACAO.value)
        this.ficha.atualizar_aprovacao_relatorio(APROVACAO_RELATORIO.value)
        
        this._exportar_relatorio();

        const RETORNO = await this.ficha.deletar_ficha_banco();
        if (RETORNO){
            window.location.href = "/treinamento";
        }
    }

    render() {
        return html`
            <!--Retorno renderizado-->
            <header-page-os
                titulo="Ficha do Técnico Junior"
                retorno="/treinamento"
            ></header-page-os>
            
            <!-- Campo que irá conter os elementos -->
            <article style="padding:1rem .5rem">

                <!--ABAS DA PAGINA-->

                ${this.aba === 1 ? html`
                    <h1>Informações</h1>
                    <informacoes-ficha
                        .objeto_ficha=${this.ficha}
                        ></informacoes-ficha>
                        <div class="form-group-button" style="margin-top: 10px;">
                            <button 
                                @click="${this._exportar_relatorio}"
                                type="button" class="form-button-black">Gerar Relatório</button>
                            <button 
                                @click="${()=>this.modal_finalizar = true}"
                                type="button" class="form-button">Finalizar Treino</button>
                        </div>
                        <br>
                        <hr>
                        <componente-progressao-treino
                            .objeto_ficha=${this.ficha}
                            ></componente-progressao-treino>

                    <br><br><br><br>
                    
                `: ""}
                ${this.aba === 2 ? html`
                    <h1>Soft skills</h1>
                    <componente-softskills
                        .ficha=${this.ficha}
                    ></componente-softskills>
                    <br><br><br><br>
                `: ""}
                ${this.aba === 3 ? html`
                    <h1>Habilidades Técnicas</h1>
                    <componente-habilidades-tecnicas
                        .ficha=${this.ficha}
                    ></componente-habilidades-tecnicas>
                    <br><br><br><br>
                `: ""}
                ${this.aba === 4 ? html`
                    <h1>Capacitação</h1>
                    <componente-capacitacao-treino
                        .ficha=${this.ficha}
                    ></componente-capacitacao-treino>
                    <br><br><br><br>
                `: ""}
                ${this.aba === 5 ? html`
                    <h1>Notas Gerais</h1>
                    <componente-notas
                        .ficha=${this.ficha}
                    ></componente-notas>
                    <br><br><br><br>
                `: ""}

            </article>

            <nav>
                <a @click="${() => { this.aba = 1 }}">
                    <icone-informacao style="--icon-size: 2.1rem;"></icone-informacao>
                </a>
                <a @click="${() => { this.aba = 2 }}">
                    <icone-softskill style="--icon-size: 2.1rem;"></icone-softskill>
                </a>
                <a @click="${() => { this.aba = 3 }}">
                    <icone-habilidade-tecnica style="--icon-size: 2.1rem;"></icone-habilidade-tecnica>
                </a>
                <a @click="${() => { this.aba = 4 }}">
                    <icone-capacitacao style="--icon-size: 2.1rem;"></icone-capacitacao>
                </a>
                <a @click="${() => { this.aba = 5 }}">
                    <icone-notasgerais style="--icon-size: 2.1rem;"></icone-notasgerais>
                </a>
            </nav>


            <!----------------- Modal de Confirmacao ------------------------>

            ${this.modal_finalizar? html`
            <div class="container_modal_background">
                <div class="container_modal">
                    <h2 style="color: var(--btn-background-color)">Finalizar Treinamento</h2>
                    <hr>

                    <div class="callout callout-warning">
                        <div class="callout-icon">
                            ⚠️
                        </div>
                        <div class="callout-content">
                            <h4 class="callout-title">Atenção Necessária</h4>
                            <p>A Ficha de Treino só pode ser encerrada como Aprovado/Reprovado após liberação da Supervisão/Liderança do suporte externo Moto!</p>
                        </div>
                    </div>

                    <div class="radio-container">
                        <label class="radio-box aprovado">
                            <input checked type="radio" name="status" value="aprovado">
                            <span>Aprovado</span>
                        </label>
                        
                        <label class="radio-box reprovado">
                            <input type="radio" name="status" value="reprovado">
                            <span>Reprovado</span>
                        </label>
                    </div>
                    
                    <textarea
                        @change=""
                        @input=""
                        placeholder="Descreva detalhadamente os motivos técnicos e comportamentais para a aprovação ou reprovação do técnico Junior..."
                        id="texto_relatorio_aprovacao" name="texto_relatorio_aprovacao" rows="20" cols="" class="form-textarea"
                        .value=""></textarea>

                    <div class="btn_group">
                        <button 
                            @click="${()=>this.modal_finalizar = false}"
                            type="button" style="background-color: var(--btn-background-color); color: var(--btn-background-color-invert)" class="form-button">Cancelar</button>
                        <button 
                            @click="${this._deletar_ficha}"
                            type="button" class="form-button">Salvar</button>                        
                    </div>
                </div>        
            </div>    
            `:``}
        `;
    }
}

// 2. Em vez de @customElement, use o registro manual
customElements.define('page-ficha-treino', Page_Ficha_Treino);