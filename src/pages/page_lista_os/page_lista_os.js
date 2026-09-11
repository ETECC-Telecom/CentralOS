import { LitElement, html, css, unsafeCSS } from 'lit';
import '@lit-labs/virtualizer';
import { marked } from 'marked';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

import globalStyle from "./page_lista_os.css?inline";

import { Header_Page_OS } from '../../components/header_page_os/header_page_os';

import { disparar_notificacao } from '../../controller/disparar_notificacao';
import { db_ler_todos_OS } from '../../model/Service_Ordens_Servico';
import { db_delete_item_os } from '../../model/Service_Ordens_Servico';
import { db_get_item_os } from '../../model/Service_Ordens_Servico';

import { Formatar_Data } from '../../controller/Formatar_data';

import { Card_Lista_OS } from '../../components/card_lista_os/card_lista_os';

import { registrarLog } from '../../controller/logger';


import Controller_Objeto_OS_Completa from '../../controller/controller_objeto_os_completa';
import Controller_Objeto_OS_Los from '../../controller/controller_objeto_os_los';
import Controller_Objeto_OS_Retirada from '../../controller/controller_objeto_os_retirada';
import Controller_Objeto_OS_Retencao from '../../controller/controller_objeto_os_retencao';
import Controller_Objeto_OS_Chip from '../../controller/controller_objeto_os_chip';

//Componentes de Formulário

export class Page_Lista_OS extends LitElement {
    // 1. Em vez de @property, use o objeto static properties
    static properties = {
        nome: { type: String },
        lista_os: { type: Array },
        modal: { type: Boolean },
        id_os: { type: String },
        relatorio: { type: String },
        objeto_os: { type: Object },
        modal_relatorio: { type: Boolean },
    };

    static get styles() {
        return css`${unsafeCSS(globalStyle)}`;
    }

    constructor() {
        super();
        this.modal = false;
        this.id_os = 0;
        this.relatorio = "";
        this.objeto_os = {};
        this.modal_relatorio = false;
        this.data_inicial = Temporal.Now.plainDateISO();
        this.data_final = this.data_inicial;
    }

    async connectedCallback() {
        super.connectedCallback(); // ⚠️ Sempre chame o super PRIMEIRO no Lit
        this.lista_os_original = (await db_ler_todos_OS()).reverse();
        this.lista_os = this.lista_os_original;

    }

    // Executado assim que o componente é renderizado na tela
    firstUpdated() {
    }

    _editar_os = async (e) => {
        const ID = e.detail.id;
        const OS = await db_get_item_os(ID);
        const CATEGORIA = e.detail.categoria;

        switch (CATEGORIA) {
            case 'completa':
                //Adiciona a estrutuar dentro do objeto de controle dela para usar a função de estruturação em markdown
                this.objeto_os = new Controller_Objeto_OS_Completa(OS.objeto);
                break;
            case 'los':
                this.objeto_os = new Controller_Objeto_OS_Los(OS.objeto);
                break;
            case 'retirada':
                this.objeto_os = new Controller_Objeto_OS_Retirada(OS.objeto);
                break;
            case 'retencao':
                this.objeto_os = new Controller_Objeto_OS_Retencao(OS.objeto);
                break;
            case 'chip':
                this.objeto_os = new Controller_Objeto_OS_Chip(OS.objeto);
                break;
            default:
                break;
        }

        //Configura a OS para ser editada
        const Data_Atual = Temporal.Now.zonedDateTimeISO();
        this.objeto_os.OS.config_OS.data_alteracao = Data_Atual.toString();
        this.objeto_os.OS.config_OS.id = ID;

        this.objeto_os.salvar_os_localstorage();

        const TIPO_OS = this.objeto_os.OS.config_OS.tipo_os;
        let URL = "";
        //Redireciona o Usuário para a página da OS:
        switch (TIPO_OS) {

            case "completa":
                URL = "/iniciar_os_completa/editar"
                break;
            case "retencao":
                URL = "/iniciar_os_retencao/editar";
                break;
            case "los":
                URL = "/iniciar_os_los/editar";
                break;
            case "retirada":
                URL = "/iniciar_os_retirada/editar";
                break;
            case "chip":
                URL = "/iniciar_os_chip/editar";
                break;
            default:
                break;
        }
        window.location.href = URL;

    }

    _excluir_os = (e) => {
        this.id_os = e.detail.id
        this.modal = true;
    }

    _ver_os = async (e) => {
        const ID = e.detail.id;
        const CATEGORIA = e.detail.categoria;
        const OS = await db_get_item_os(ID);
        switch (CATEGORIA) {
            case 'completa':
                //Adiciona a estrutuar dentro do objeto de controle dela para usar a função de estruturação em markdown
                this.objeto_os = new Controller_Objeto_OS_Completa(OS.objeto);
                break;
            case 'los':
                this.objeto_os = new Controller_Objeto_OS_Los(OS.objeto);
                break;
            case 'retirada':
                this.objeto_os = new Controller_Objeto_OS_Retirada(OS.objeto);
                break;
            case 'retencao':
                this.objeto_os = new Controller_Objeto_OS_Retencao(OS.objeto);
                break;
            case 'chip':
                this.objeto_os = new Controller_Objeto_OS_Chip(OS.objeto);
                break;
            default:
                break;
        }

        //Covnerte o Markdown para HTML para ser renderizado no modal:
        const HTMLParse = await marked.parse(this.objeto_os.Finalizar_OS_Markdown());

        this.relatorio = HTMLParse;
        this.modal_relatorio = true;


    }

    // Controles do modal de relatorio 
    _Fechar_Relatorio = () => {
        this.modal_relatorio = false;
    }

    _Fechar_Modal = () => {
        this.modal = false;
    }

    async _Deletar_OS() {
        await db_delete_item_os(this.id_os);
        this.id_os = 0;
        this.lista_os = await db_ler_todos_OS();
        this._Fechar_Modal();
    }

    _Filtrar_OS_Nome = (e) => {

        const termo = e?.target?.value || '';
        const termoLower = termo.toLowerCase();

        const lista = this.lista_os_original;

        let teste = lista.filter(item =>
            item.cliente && item.cliente.toLowerCase().startsWith(termoLower)
        );

        this.lista_os = teste

    }
    _Filtrar_OS_Categoria = (e) => {

        const termo = e?.target?.value || '';
        const termoLower = termo.toLowerCase();

        if (termoLower === "todas") {
            this.lista_os = this.lista_os_original;
            return
        }

        console.log(termo);
        console.log(this.lista_os_original);

        const lista = this.lista_os_original;

        let teste = lista.filter(item =>
            item.categoria && item.categoria.toLowerCase().startsWith(termoLower)
        );

        this.lista_os = teste

    }

    _Filtrar_OS_Data = (e) => {
        if (e.target.name === "de") {
            this.data_inicial = Temporal.PlainDate.from(e.target.value)
        } else {
            this.data_final = Temporal.PlainDate.from(e.target.value)
        }

        const lista = this.lista_os_original;
        let teste = ""
        // Retornos do compare do Temporal para consulta
        // -1: Se a primeira data for anterior à segunda.
        // 0: Se as duas datas forem iguais.
        // 1: Se a primeira data for posterior à segunda.

        //Filtrando se as Datas forem iguais ou até for menor que de
        if (Temporal.PlainDate.compare(this.data_inicial, this.data_final) === 0 || Temporal.PlainDate.compare(this.data_inicial, this.data_final) === 1) {


        } else {
            //Filtrando a Data dentro de um intervalo de Tempo
            console.log("Até maior que DE")

        }

        teste = lista.filter(item => {
            console.log("Teste")
            if (!item.data_criacao) return false;

            const dataOS = Temporal.PlainDate.from(item.data_criacao);

            // dataOS >= this.data_inicial
            const aposInicio = !this.data_inicial || Temporal.PlainDate.compare(dataOS, this.data_inicial) >= 0;

            // dataOS <= this.data_final
            const antesFim = !this.data_final || Temporal.PlainDate.compare(dataOS, this.data_final) <= 0;
            
            return aposInicio && antesFim;

        });

        this.lista_os = teste
    }

    render() {
        return html`
            <!--Retorno renderizado-->
            <header-page-os
                titulo="OS Finalizadas"
                retorno="/"
            ></header-page-os>
            <!-- Campo de Pesquisa de OS's -->

            <div style="
                box-sizing: border-box;
                margin:.5rem;
                background-color:var(--cards-background);
                padding:1rem;
                border: 2px solid var(--btn-border-color);
                border-radius: 1rem;
                ">
                
                <div style="display:flex; gap:1rem; align-items: flex-end;">
                    <div style="flex:3">
                        <div class="form-group">
                            <select 
                                @change="${this._Filtrar_OS_Categoria}"
                                id="ativo" name="ativo" class="form-select">
                                <option ?selected="" value="todas">Todas</option>
                                <option ?selected="" value="completa">Completa</option>
                                <option ?selected="" value="retencao">Retenção</option>
                                <option ?selected="" value="los">Externa (LOS)</option>
                                <option ?selected="" value="retirada">Retirada</option>
                                <option ?selected="" value="chip">CHIP</option>
                            </select>
                        </div>
                    </div>
                    <div style="flex:1; display:flex; text-align:center; gap:1rem">
                        <div class="form-group">
                            <label class="form-label">De</label>
                            <div class="date-button">
                                <input type="date"
                                    name="de"
                                    @change=${this._Filtrar_OS_Data}                                    
                                    id="data">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Até</label>
                            <div class="date-button">
                                <input type="date"
                                    name="ate"
                                    @change=${this._Filtrar_OS_Data}
                                    id="data">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="form-group">
                    <label for="pesquisa" class="form-label"></label>
                    <input
                        @input="${this._Filtrar_OS_Nome}"
                        type="text" id="pesquisa" name="pesquisa" value="" class="form-input"
                        placeholder="Insira o nome do cliente:">
                </div>

            </div>

            <!-- Campo que irá conter os fomulários -->

            <main id="container-form">
                <lit-virtualizer
                    .items=${this.lista_os}
                    .renderItem=${(item) => html`
                            <card-lista_os
                                @ver-os="${this._ver_os}"
                                @excluir-os="${this._excluir_os}"
                                @editar-os="${this._editar_os}"
                                nome = "${item.cliente}"
                                categoria = "${item.categoria}"
                                data = "${Formatar_Data(item.data_criacao)}"
                                id = "${item.id}"
                            ></card-lista_os>
                        `}
                ></lit-virtualizer>
   
                <br><br><br>
            </main>

            <!-- ---------------------------------------Modal de Confirmaçao-------------------------------------------- -->

            ${this.modal ? html`
                <div
                    class="modal-backdrop"
                    @click=${this._Fechar_Modal}
                >
                    <div
                        class="modal-content"
                        
                        @click=${(e) => e.stopPropagation()}
                    >
                        <h3>Excluir OS</h3>
                        
                        <div class="form-group">
                            <label for="jitter" class="form-label">Você tem certeza que deseja excluir essa OS?</label>
                        </div>
                        <br>
                        
                        <div class="form-group" style="margin-top: 10px; display: flex; flex-direction: row; gap:.5rem">
                            <button 
                                @click="${this._Deletar_OS}"
                                style="background-color: var(--btn-background-color); color: var(--text-color);"
                                type="button" class="form-button")">Sim</button>
                            <button 
                                @click="${this._Fechar_Modal}"
                                type="button" class="form-button")">Não</button>
                        </div>

                    </div>
                </div>
            ` : ''}

            <!-- --------------------------------------- Modal de Relatorio -------------------------------------------- -->

            ${this.modal_relatorio ? html`
                <div
                    class="modal-backdrop"
                    @click=${this._Fechar_Relatorio}
                >
                    <div
                        class="modal-content"
                        
                        @click=${(e) => e.stopPropagation()}
                    >
                        <div style="
                            overflow: auto;
                            height: 75vh;
                        ">
                        ${unsafeHTML(this.relatorio)}
                        </div>
                        
                        <div class="form-group" style="margin-top: 10px; display: flex; flex-direction: row; gap:.5rem">
                            <button 
                                @click="${this._Fechar_Relatorio}"
                                style="background-color: var(--btn-background-color); color: var(--text-color);"
                                type="button" class="form-button")">Fechar</button>
                        </div>

                    </div>
                </div>
            ` : ''}
           
        `;
    }
}

// 2. Em vez de @customElement, use o registro manual
customElements.define('page-lista-os', Page_Lista_OS);