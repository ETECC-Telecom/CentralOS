import { LitElement, html, css, unsafeCSS } from 'lit';
import globalStyle from "./index.css?inline";
import modalStyle from "./container_modal.css?inline";
import { Header_Page_OS } from '../../components/header_page_os/header_page_os';
import { Menu_Inferior } from '../../components/menu_inferior/menu_inferior';
import { ProgressBar } from '../../components/component_Progress_bar/progress_bar';

import Controller_Ficha_Treino from '../../controller/ficha_treino/Controller_Ficha_Treino';
import { disparar_notificacao } from '../../controller/disparar_notificacao';
import { Capturar_Nome_Tecnico } from '../../controller/capturar_nome_tecnico';
import { db_ler_todas_fichas_treino } from '../../model/Service_Ficha_Treino';
import { Formatar_Data } from '../../controller/Formatar_data';
import { definir_ficha_ativa_local } from '../../model/Service_Ficha_Treino';

export class Page_Treinamento extends LitElement {
    // 1. Em vez de @property, use o objeto static properties
    static properties = {
        exibir_cadastro: { type: Boolean },
        lista_fichas: {type: Array},
    };

    static get styles() {
        return [
            css`${unsafeCSS(globalStyle)}`,
            css`${unsafeCSS(modalStyle)}`
        ];
    }

    constructor() {
        super();
        this.exibir_cadastro = false;
        this.lista_fichas = [];
    }

    // Executado assim que o componente é renderizado na tela
    firstUpdated() {

    }
    async connectedCallback() {
        super.connectedCallback(); // ⚠️ Sempre chame o super PRIMEIRO no Lit

        //Captura todas as fichas cadastradas:

        const FICHAS = await db_ler_todas_fichas_treino();
        this.lista_fichas = FICHAS
        console.log(FICHAS)
    }

    _fechar_modal = () => {
        this.exibir_cadastro = false;
    }
    _abrir_modal = () => {
        this.exibir_cadastro = true;
    }

    _iniciar_nova_ficha = async () =>{
        const NOME = this.shadowRoot.getElementById("nome_tecnico")?.value || false;
        const NOME_TREINADOR = Capturar_Nome_Tecnico();

        //Valida se o nome do técnico não está vazio
        if (NOME === false){
            disparar_notificacao('erro', 'Você precisa digitar um nome válido');
            return
        }

        // 1. Captura a data de hoje (apenas a parte da data: ano, mês e dia)
        const DATA = Temporal.Now.plainDateISO();

        // 2. Calcula a data daqui a 3 semanas
        const DATA_TERMINO = DATA.add({ weeks: 4 });

        
        const NOVA_FICHA = new Controller_Ficha_Treino({
            nome_tecnico: NOME,
            nome_treinador: NOME_TREINADOR,
            data_inicio: DATA.toString(),
            data_previsao_termino: DATA_TERMINO.toString()
        }); 

        const Validado = await NOVA_FICHA.criar_ficha_banco();
        
        if (Validado){
            const FICHAS = await db_ler_todas_fichas_treino();
            this.lista_fichas = FICHAS
            this.shadowRoot.getElementById("nome_tecnico").value = "";
            this.exibir_cadastro = false;
        }
    }

    _abrir_ficha_treino = (Identificador_ficha)=>{
        definir_ficha_ativa_local(Identificador_ficha)
        window.location.href = "/ficha_treino"
    }

    render() {
        return html`
            <!--Retorno renderizado-->
            <header-page-os
                titulo="Página do Treinador"
                retorno="/"
            ></header-page-os>
            
            <!-- Campo que irá conter os elementos -->
            <article style="padding:.5rem;">
                <br>
                <div class="form-group" style="margin-top: 10px;">
                    <button 
                        @click="${this._abrir_modal}"
                        type="button" class="form-button">Novo Treino</button>
                </div>
                <hr>

                <div style="display:flex; flex-direction:column; gap:1rem; padding-top:1rem;">

                    ${this.lista_fichas.length != 0? html`
                        ${this.lista_fichas.map(element => html`
                            <div class="container_ficha">
                                
                                <div 
                                    @click="${() => {this._abrir_ficha_treino(element.id)}}"
                                    style="display: flex; flex-direction: column; gap:.5rem;">
                                    <h3>${element.nome_tecnico}</h3>
                                    <h4>Data de Inicio:</h4>
                                    <p>Iniciado em: ${Formatar_Data(element.data_inicio_treino)}</p>    
                                    <h4>Indicador de Progresso:</h4>
                                    <progress-bar atual="${element.progressao_geral[1]}" total="${element.progressao_geral[0]}"></progress-bar>
                                </div>
                                
                            </div>    
                        `)}
                        
                    `:html`
                        <h2>Nenhuma Ficha técnica identificada</h2>
                    `}

                </div>
                <br><br><br>

            </article>

            <menu-inferior></menu-inferior>

            <!-- Modal Inicial para inicio da Ficha de Treino -->

            ${this.exibir_cadastro ? html`
            <div class="container_modal">
                <div class="container">
                    <h2>Nova Ficha de Treino</h2>
                    <br>
                    <p>Preencha o fomulário a baixo para iniciar uma nova ficha de treino!</p>
                    <br>
                    <div class="form-group">
                        <label for="fname" class="form-label">Nome do Técnico:</label>
                        <input 
                            @change=""
                            placeholder="Nome do Técnico Junior" type="text" id="nome_tecnico" name="nome_tecnico"
                            value="" 
                            class="form-input">
                    </div>
                    <div class="form-group-button" style="margin-top: 10px;">
                        <button 
                            @click="${this._fechar_modal}"
                            type="button" class="form-button-black">Cancelar</button>
                        <button 
                            @click="${this._iniciar_nova_ficha}"
                            type="button" class="form-button">Criar</button>
                        
                    </div>
                </div>
            </div>
            `: ""}

        `;
    }
}

// 2. Em vez de @customElement, use o registro manual
customElements.define('page-treinamento', Page_Treinamento);