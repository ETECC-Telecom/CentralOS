import { LitElement, html, css, unsafeCSS } from 'lit';
import globalStyle from "./page_lista_troca.css?inline";

import '@lit-labs/virtualizer';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';


import { Header_Page_OS } from '../../components/header_page_os/header_page_os';
import { db_ler_todos_ativos } from '../../model/Service_Ativos_Troca';
import { Formatar_Data } from '../../controller/Formatar_data';

import { disparar_notificacao } from '../../controller/disparar_notificacao';

import { Icone_Usuario } from '../../components/icones/icone_usuario';
import { Icone_Calendario } from '../../components/icones/icone_calendario';
import { Icone_Links } from '../../components/icones/icone_link';
import { Icone_Graph } from '../../components/icones/icone_graph';
import { Icone_Up } from '../../components/icones/icone_up';
import { Icone_Down } from '../../components/icones/icone_down';

//Componentes de Formulário

export class Page_Lista_Troca extends LitElement {
    // 1. Em vez de @property, use o objeto static properties
    static properties = {
        lista_ativos: { type: Array },
    };

    static get styles() {
        return css`${unsafeCSS(globalStyle)}`;
    }

    constructor() {
        super();
        this.lista_ativos = [];
        this.lista_ativos_original = [];
        this.data_inicial = Temporal.Now.plainDateISO();
        this.data_final = this.data_inicial;
    }

    async connectedCallback() {
        super.connectedCallback(); // ⚠️ Sempre chame o super PRIMEIRO no Lit
        this.lista_ativos_original = (await db_ler_todos_ativos()).reverse();
        this.lista_ativos = this.lista_ativos_original;
        
    }

    _filtrar_data_ativos = (data)=>{
        
        if (data === ""){
            return html`<p>Não Informado</p>`;
        }
        let texto = "";
        const lista = data.split(" ").filter((item) =>{
            if (item === " "){
                return
            }
            texto += `<p>${item}</p>`;
        })
        return html`${unsafeHTML(texto)}`;
    }

    // Executado assim que o componente é renderizado na tela
    firstUpdated() {
    }

    _Filtrar_PPPoE = (e) =>{
        const termo = e?.target?.value || '';
    
        if (termo === ''){
            this.lista_ativos = this.lista_ativos_original;
            return
        }

        const termoLower = termo.toLowerCase();

        const lista = this.lista_ativos_original;

        let teste = lista.filter(item =>
            item.pppoe && item.pppoe.toLowerCase().startsWith(termoLower)
        );

        this.lista_ativos = teste
    }

    _Filtrar_Codigo = (e) =>{
        const termo = e?.target?.value || '';
    
        if (termo === ''){
            this.lista_ativos = this.lista_ativos_original;
            return
        }

        const termoLower = termo.toLowerCase();

        const lista = this.lista_ativos_original;

        let teste = lista.filter(item =>
            item.cod_conexao && item.cod_conexao.toLowerCase().startsWith(termoLower)
        );

        this.lista_ativos = teste
    }

    _Filtrar_MAC = (e) =>{
        const termo = e?.target?.value || '';
    
        if (termo === ''){
            this.lista_ativos = this.lista_ativos_original;
            return
        }

        const termoLower = termo.toLowerCase();

        const lista = this.lista_ativos_original;

        let teste = lista.filter(item => 
            item.inseridos + item.retirados && (item.inseridos + item.retirados).toLowerCase().includes(termoLower)           
        );

        this.lista_ativos = teste
    }

    _Filtrar_OS_Data = (e) => {

        
        if (e.target.name === "de") {
            this.data_inicial = Temporal.PlainDate.from(e.target.value)
        } else {
            this.data_final = Temporal.PlainDate.from(e.target.value)
        }

        const lista = this.lista_ativos_original;
        let teste = ""
        // Retornos do compare do Temporal para consulta
        // -1: Se a primeira data for anterior à segunda.
        // 0: Se as duas datas forem iguais.
        // 1: Se a primeira data for posterior à segunda.

        
        teste = lista.filter(item => {
            if (!item.data) return false;

            const dataOS = Temporal.PlainDate.from(item.data);

            // dataOS >= this.data_inicial
            const aposInicio = !this.data_inicial || Temporal.PlainDate.compare(dataOS, this.data_inicial) >= 0;

            // dataOS <= this.data_final
            const antesFim = !this.data_final || Temporal.PlainDate.compare(dataOS, this.data_final) <= 0;
              
            return aposInicio && antesFim;

        });

        this.lista_ativos = teste
    }

    render() {
        return html`
            <!--Retorno renderizado-->
            <header-page-os
                titulo="Controle de Troca de Ativos"
                retorno="/"
            ></header-page-os>
           
            <!-- Campo que irá conter os fomulários -->
            <main id="container-form">
                <div style="
                box-sizing: border-box;
                margin:.5rem;
                background-color:var(--cards-background);
                padding:1rem;
                border: 2px solid var(--btn-border-color);
                border-radius: 1rem;
                ">
                
                <div style="display:flex; gap:1rem; align-items: flex-end;">
                    <div style="display:flex; flex:3; margin: 1.2rem 0; gap:1rem">
                        <input
                            @input="${this._Filtrar_Codigo}"
                            type="text" id="pesquisa" name="pesquisa" value="" class="form-input"
                            placeholder="Cod. Conexão:">
                        <input
                            @input="${this._Filtrar_PPPoE}"
                            type="text" id="pesquisa" name="pesquisa" value="" class="form-input"
                            placeholder="PPPoE:">
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
                        @input="${this._Filtrar_MAC}"
                        type="text" id="pesquisa" name="pesquisa" value="" class="form-input"
                        placeholder="SN Associado:">
                </div>

            </div>

                <!-- Região de Renderização da Lista de Ativos -->

                <div class="container_lista">

                    <lit-virtualizer
                    .items=${this.lista_ativos}
                    .renderItem=${(item, chave) => html`
                        <div class="card_lista">
                            <header class="card_header">
                                <h3 style="display:flex; align-items: center; gap:0.5rem"><icone-graph></icone-graph> #${chave+1}</h3>
                                <h4 style="display:flex; align-items: center; gap:0.5rem"><icone-calendario></icone-calendario> <span>${Formatar_Data(item.data)}<br><span style="font-size:0.6rem">Data da Ocorrência<span></span></h4>
                            </header>
                            <div class="body-item-lista">
                                <div style="flex:2">
                                    <p style="display:flex; align-items: center; gap:0.5rem"><icon-link></icon-link> <b>Cod. Conexão:</b> ${item?.cod_conexao || "Não Informado"}</p>
                                    <p style="display:flex; align-items: center; gap:0.5rem"><icone-usuario></icone-usuario> <b>PPPoE:</b> ${item?.pppoe || "Não Informado"}</p>
                                </div>
                                <div style="flex:3">
                                    <div style="flex:1">
                                        <h4 style="display:flex; align-items: center; gap:0.5rem" class="tag_retirado"><icone-up style="--icon-size: 1rem;"></icone-up>Retirados</h4>
                                        ${this._filtrar_data_ativos(item.retirados)}
                                    </div>
                                    <div style="flex:1">
                                        <h4 style="display:flex; align-items: center; gap:0.5rem" class="tag_inserido"><icone-down style="--icon-size: 1rem;"></icone-down>Inseridos</h4>
                                        ${this._filtrar_data_ativos(item.inseridos)}
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        `}
                ></lit-virtualizer>
                    
                </div>

                <br><br><br>
            </main>
           
        `;
    }
}

// 2. Em vez de @customElement, use o registro manual
customElements.define('page-lista-troca', Page_Lista_Troca);