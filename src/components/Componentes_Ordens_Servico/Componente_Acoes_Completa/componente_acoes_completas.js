import { LitElement, html, css, unsafeCSS } from 'lit';
import globalStyle from "./index.css?inline";

import { disparar_notificacao } from '../../../controller/disparar_notificacao';
import { Copiar_Clipboard } from '../../../controller/Copiar_Clipboard';

//Import de icones
import { Icone_Relatorio } from '../../icones/icone_relatorio';

export class Componente_Acoes_Completa extends LitElement {
    // 1. Em vez de @property, use o objeto static properties
    static properties = {
        Ficha: {type:Object},
        Liberar_Export_Simples:{type:Boolean},
        Liberar_Export_MD:{type:Boolean},
    };

    static get styles() {
        return css`${unsafeCSS(globalStyle)}`;
    }

    constructor() {
        super();
        this.Ficha={}
        this.Liberar_Export_Simples = false;
        this.Liberar_Export_MD = false;
    }

    // Executado assim que o componente é renderizado na tela
    firstUpdated() {

    }
    connectedCallback() {
        super.connectedCallback(); // ⚠️ Sempre chame o super PRIMEIRO no Lit

    }

    _copiar_relatorio_simples = ()=>{
        const RELATORIO = this.Ficha.Exportar_OS_Simplificado();
        this.Ficha.Validar_Finalizacao();
        Copiar_Clipboard(RELATORIO)
    }

    _copiar_relatorio_MD = ()=>{
        const RELATORIO = this.Ficha.Exportar_OS_Markdown();
        Copiar_Clipboard(RELATORIO)
    }

    render() {
        return html`
            <!--Retorno renderizado-->

            ${this.Liberar_Export_Simples?html`
                <button 
                    @click="${this._copiar_relatorio_simples}"
                    type="button" class="form-button">
                    <icone-relatorio></icone-relatorio>
                    Gerar Relatório OS</button>
                <br>
            `:""}
            
            ${this.Liberar_Export_MD?html`
                <button 
                    @click="${this._copiar_relatorio_MD}"
                    type="button" class="form-button">
                    <icone-relatorio></icone-relatorio>
                    Gerar Relatório MD</button>
                <br>
            `:""}

            <button 
                @click="${()=>{this.Ficha.Validar_Sincronismo()}}"
                type="button" class="form-button">
                <icone-relatorio></icone-relatorio>
                Validar Sincronismo</button>
            <br>
            
            
        `;
    }
}

// 2. Em vez de @customElement, use o registro manual
customElements.define('componente-acao-completa', Componente_Acoes_Completa);