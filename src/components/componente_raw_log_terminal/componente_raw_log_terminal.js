import { LitElement, html, css, unsafeCSS } from 'lit';
import globalStyle from "./index.css?inline";


export class Componente_Raw_Log_Terminal extends LitElement {
    // 1. Em vez de @property, use o objeto static properties
    static properties = {
        rawlog: { type: String },
    };

    static get styles() {
        return css`${unsafeCSS(globalStyle)}`;
    }

    constructor() {
        super();
        this.rawlog = "";
    }

    // Executado assim que o componente é renderizado na tela
    firstUpdated() {
        this.rolarParaOFinal();
    }
   

    rolarParaOFinal() {
        const body = this.renderRoot.querySelector('.container_raw');
        if (body) {
            // Define o topo da rolagem para a altura total (final do texto)
            body.scrollTop = body.scrollHeight;
        }
    }
    connectedCallback() {
        super.connectedCallback(); // ⚠️ Sempre chame o super PRIMEIRO no Lit

    }

    render() {
        return html`
            <!--Retorno renderizado-->
            <div class="container_raw">
                <p>${this.rawlog}</p>
            </div>
        `;
    }
}

// 2. Em vez de @customElement, use o registro manual
customElements.define('componente-raw-log-terminal', Componente_Raw_Log_Terminal);