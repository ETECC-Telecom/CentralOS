import { LitElement, html, css, unsafeCSS } from 'lit';
import { ref, createRef } from 'lit/directives/ref.js';
import globalStyle from "./index.css?inline";

import { Icone_Check } from '../icones/icone_check';
import { Icone_Sync } from '../icones/icone_sync';

import { db_ler_todos_sincs } from '../../model/Service_Sync';

import { Enviar_Sync_Planilha } from '../../controller/Enviar_Sync_Planilha';

export class Botao_Sinc extends LitElement {
    // 1. Em vez de @property, use o objeto static properties
    static properties = {
        itens: { Type: Array },
    };

    static get styles() {
        return css`${unsafeCSS(globalStyle)}`;
    }

    constructor() {
        super();
        //Itens que serão retornados do banco
        this.itens = [];

        // 1. Cria a referência vazia
        this.svgRef = createRef();
    }

    // Executado assim que o componente é renderizado na tela
    firstUpdated() {
        
    }
    async connectedCallback() {
        super.connectedCallback(); // ⚠️ Sempre chame o super PRIMEIRO no Lit
        this.itens = await db_ler_todos_sincs()

    }

     _Add_animacao = ()=>{
        const svg = this.svgRef.value;
        if (svg) {
            svg.classList.toggle('svg-spin-pulse');
        }
    }
    _Remover_animacao = () =>{
        const svg = this.svgRef.value;
        if (svg) {
            svg.classList.remove('svg-spin-pulse');
        }
    }

    _Revalidar_Banco = ()=>{
        this.itens = []
    }

    Enviar_data_Planilha = async () => {
        this._Add_animacao();
        await Enviar_Sync_Planilha(this.itens, this._Remover_animacao, this._Revalidar_Banco)
        
    }

    render() {
        return html`
            <!--Retorno renderizado-->
            ${this.itens.length > 0 ? html`
                <div class="item-sync-aberto">
                    <a @click="${this.Enviar_data_Planilha}" style="margin-right:.4rem;">Em Aberto</a>
                    <icone-sync ${ref(this.svgRef)}></icone-sync>
                </div>
            `: html`
                <div class="item-sync-sucesso">
                    <p style="margin-right:.4rem;">Sincronizado</p>
                    <icone-check></icone-check>
                </div>
            `}
            
        `;
    }
}

// 2. Em vez de @customElement, use o registro manual
customElements.define('btn-sinc', Botao_Sinc);