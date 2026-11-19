import { LitElement, html, css, unsafeCSS } from 'lit';
import globalStyle from "./index.css?inline";
import modalStyle from "./container_modal.css?inline";
import { Header_Page_OS } from '../../components/header_page_os/header_page_os';
import { Menu_Inferior } from '../../components/menu_inferior/menu_inferior';
import { ProgressBar } from '../../components/component_Progress_bar/progress_bar';

import { Copiar_Clipboard } from '../../controller/Copiar_Clipboard';
import { Exportar_Data_Json } from '../../controller/Exportar_Data_Json';

import Controller_Ficha_Treino from '../../controller/ficha_treino/Controller_Ficha_Treino';
import { disparar_notificacao } from '../../controller/disparar_notificacao';
import { Capturar_Nome_Tecnico } from '../../controller/capturar_nome_tecnico';
import { db_ler_todas_fichas_treino } from '../../model/Service_Ficha_Treino';
import { Formatar_Data } from '../../controller/Formatar_data';
import { definir_ficha_ativa_local } from '../../model/Service_Ficha_Treino';
import { db_criar_ficha_treino } from '../../model/Service_Ficha_Treino';

export class Page_Treinamento extends LitElement {
    // 1. Em vez de @property, use o objeto static properties
    static properties = {
        exibir_cadastro: { type: Boolean },
        exibir_import: { type: Boolean },
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
        this.exibir_import = false;
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
        console.log("Aqui entra os Dados de Todas as Fichas", FICHAS)
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

    _exportar_ficha_atual = async (id)=>{
        console.log(id)
        const NOVA_FICHA = new Controller_Ficha_Treino({identificador:id})
        await NOVA_FICHA.carregar_ficha_banco()

        const CORPO = JSON.stringify(NOVA_FICHA.gerar_estrutura_objeto_saida())
        Exportar_Data_Json(CORPO);
    }

    _importar_ficha_treino = async () =>{

        // 1. Pega o input de arquivo pelo ID
        const inputFile = this.shadowRoot.getElementById('input-arquivo-json');
        
        // 2. Verifica se o usuário selecionou algum arquivo
        if (!inputFile || inputFile.files.length === 0) {
            disparar_notificacao("aviso", "Por favor, selecione um arquivo JSON!")
            return;
        }

        const arquivo = inputFile.files[0];

        try {
            // 3. Lê o conteúdo do arquivo como texto de forma assíncrona
            const textoArquivo = await arquivo.text();

            // 4. Converte o texto JSON em um Objeto JavaScript
            const dadosObjeto = JSON.parse(textoArquivo);

            //associamos o novo treinador na estrutura:
            const Treinador = Capturar_Nome_Tecnico();

            dadosObjeto.nome_treinador = Treinador;

            await db_criar_ficha_treino(dadosObjeto)
            
            disparar_notificacao("sucesso","Ficha importada com sucesso!");
            this.exibir_import = false;
            
            window.location.reload();
            return

        } catch (error) {
            console.error("Erro ao ler o arquivo JSON:", error);
            disparar_notificacao("aviso", "O arquivo selecionado não é um JSON válido ou está corrompido.")

        }
        // const DATA = this.shadowRoot.getElementById("text-area-json-ficha").value;

        // if (DATA === ""){
        //     disparar_notificacao("aviso", "O campo não pode estar vazio!")
        //     return
        // }
        // // Valida se o Json importado está de fato corretamente estruturado
        // try {
        //     
        //     const FICHA = JSON.parse(DATA);

        //     FICHA.nome_treinador = Treinador;
            
        //     await db_criar_ficha_treino(FICHA)
        //     this.exibir_import = false
        //     

        // } catch (error) {
        //     disparar_notificacao("erro", "A estrutura JSON deve ser valida!")
        //     console.log(error)
        //     return
        // }
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
                <div class="form-group" style="margin-top: 10px; gap:1rem;">
                    <button 
                        @click="${this._abrir_modal}"
                        type="button" class="form-button">Novo Treino</button>
                    <button 
                        @click="${()=>{this.exibir_import = true}}"
                        type="button" class="form-button">Importar Ficha</button>
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
                                    <button 
                                        @click="${e => { 
                                            e.stopPropagation(); 
                                            this._exportar_ficha_atual(element.id); 
                                        }}"
                                        type="button" class="form-button">Exportar Ficha</button>
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

            ${this.exibir_import ? html`
            <div class="container_modal">
                <div class="container">
                    <h2>Importar Ficha de Treino</h2>
                    <br>
                    <p>Selecione o arquivo <strong>.json</strong> salvo no seu dispositivo:</p>
                    <br>
                    <div class="form-group">
                        <label for="input-arquivo-json" class="form-label">ARQUIVO JSON:</label>
                        <input 
                            type="file" 
                            id="input-arquivo-json" 
                            accept=".json,application/json" 
                            class="form-input" 
                        />
                    </div>
                    <div class="form-group-button" style="margin-top: 10px;">
                        <button 
                            @click="${() => {this.exibir_import = false}}"
                            type="button" class="form-button-black">Cancelar</button>
                        <button 
                            @click="${this._importar_ficha_treino}"
                            type="button" class="form-button">Salvar</button>
                    </div>
                </div>
            </div>
            `: ""}

        `;
    }
}

// 2. Em vez de @customElement, use o registro manual
customElements.define('page-treinamento', Page_Treinamento);