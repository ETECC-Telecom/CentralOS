import { LitElement, html, css, unsafeCSS } from 'lit';
import globalStyle from "./header_page_os.css?inline";
import { Capturar_Nome_Tecnico } from '../../controller/capturar_nome_tecnico';



export class Header_Page_OS extends LitElement {
    // 1. Em vez de @property, use o objeto static properties
    static properties = {
        nome: { type: String },
    };

    static get styles() {
        return css`${unsafeCSS(globalStyle)}`;
    }

    constructor() {
        super();
        this.nome_tecnico = Capturar_Nome_Tecnico();
    }


    render() {
        return html`
            <!--Retorno renderizado-->
            <div id="container">
                <div class="coluna" style="flex:1">
                    <a href="/addos" class="btn-icone">
                        <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 143.933 143.933"><path d="M-217.731 788.256c-5.306-30.001-26.797-55.73-55.514-66.458-1.99-.744-3.742-1.352-3.896-1.352-.19 0-.301 4.38-.351 13.867l-.073 13.866-.81 1.016c-1.491 1.875-3.851 2.63-5.939 1.903-.86-.3-56.97-42.087-58.692-43.71-1.266-1.194-1.717-2.21-1.717-3.875 0-1.664.45-2.68 1.717-3.875 1.392-1.314 57.842-43.477 58.588-43.76 2.383-.906 5.806.628 6.704 3.004.183.486.282 4.939.283 12.832l.002 12.088 2.445.892c27.329 9.973 48.46 32.588 56.522 60.49 1.34 4.638 2.518 10.499 3.112 15.479.544 4.563.612 14.799.126 19.05-.396 3.471-1.554 10.25-1.837 10.755-.133.238-.382-.583-.67-2.212z" transform="translate(351.828 -651.095)"/></svg>
                    </a>
                </div>
                <div id="container_texto" class="coluna" style="flex:3">
                    <h3>CentralOS</h3>
                    <h3>Ordem de Serviço Completa</h3>
                    <p>Técnico: <span>${this.nome_tecnico}</span></p>
                </div>
                <div class="coluna" style="flex:1">
                    
                </div>
            </div>
        `;
    }
}

// 2. Em vez de @customElement, use o registro manual
customElements.define('header-page-os', Header_Page_OS);