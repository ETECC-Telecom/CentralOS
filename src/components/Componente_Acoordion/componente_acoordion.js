import { LitElement, html, css, unsafeCSS } from 'lit';
import globalStyle from "./index.css?inline";

import { Icone_Seta_Up } from '../icones/icone_seta_up';
import { Icone_Seta_Down } from '../icones/icone_seta_down';

export class Componente_Acoording extends LitElement {
    // 1. Declaramos o estado reativo do accordion
    static properties = {
        title: { type: String },
        isOpen: { type: Boolean, reflect: true }
    };

    static get styles() {
        return [
            css`${unsafeCSS(globalStyle)}`,
        ];
    }

    constructor() {
        super();
        this.title = "Section 1";
        this.isOpen = false;
    }

    // Função para alternar o estado aberto/fechado
    _toggle() {
        this.isOpen = !this.isOpen;
    }

    render() {
        return html`
            <button 
                class="accordion ${this.isOpen ? 'active' : ''}" 
                @click="${this._toggle}"
            >
                <span>${this.title}</span>
                ${this.isOpen?html`<icone-seta-down></icone-seta-down>`:html`<icone-seta-up></icone-seta-up>`}
                
            </button>
            <div class="panel ${this.isOpen ? 'open' : ''}">
                <slot></slot>
            </div>
        `;
    }
}

customElements.define('componente-acoording', Componente_Acoording);