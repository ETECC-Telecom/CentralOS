import { LitElement, html, css, unsafeCSS } from 'lit';
import globalStyle from "./index.css?inline";


export class Componente_Raw_Log extends LitElement {
    // 1. Em vez de @property, use o objeto static properties
    static properties = {
        content: { type: Object },
    };

    static get styles() {
        return css`${unsafeCSS(globalStyle)}`;
    }

    constructor() {
        super();
        this.content = {};
    }

    // Executado assim que o componente é renderizado na tela
    firstUpdated() {

    }
    connectedCallback() {
        super.connectedCallback(); // ⚠️ Sempre chame o super PRIMEIRO no Lit
    }

    // Função recursiva que percorre a árvore do objeto
    renderTree(node) {
        // Se não for um objeto/array ou for nulo, apenas exibe o valor final
        if (typeof node !== 'object' || node === null) {
            return html`<span class="value">${String(node)}</span>`;
        }

        // Percorre cada chave do objeto
        return html`
      <div class="tree-node">
        ${Object.entries(node).map(([key, value]) => {
            const isNested = typeof value === 'object' && value !== null;

            return html`
            <div class="leaf">
              <span class="${isNested ? 'object-title' : 'key'}">${key}:</span>
              ${isNested
                    ? this.renderTree(value) // Chamada recursiva para sub-objetos
                    : html` <span class="value">${value}</span>`
                }
            </div>
          `;
        })}
      </div>
    `;
    }

    render() {
        let parsedData = {};

        try {
            // Converte a string JSON para um objeto manipulável
            parsedData = typeof this.content === 'string' ? JSON.parse(this.content) : this.content;
        } catch (e) {
            return html`<p style="color: red;">Erro ao processar o JSON do log.</p>`;
        }

        return html`
      <div class="log-tree">
        ${this.renderTree(parsedData)}
      </div>
    `;
    }

}

// 2. Em vez de @customElement, use o registro manual
customElements.define('componente-raw-log', Componente_Raw_Log);