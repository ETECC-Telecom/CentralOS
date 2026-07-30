import { LitElement, html, css, unsafeCSS } from 'lit';
import globalStyle from "./card_os.css?inline";

export class Card_OS extends LitElement {
    // 1. Em vez de @property, use o objeto static properties
    static properties = {
        nome: { type: String },
        url_config: { type: String },
        titulo: { type: String },
        descricao: { type: String },
        icone: { type: Object },
        cor_borda: { type: String },
        link: { type: String },
        modal: {type:Boolean}
    };

    static get styles() {
        return css`${unsafeCSS(globalStyle)}`;
    }

    constructor() {
        super();
        this.url_config = ''
        this.titulo = "valor padrão"
        this.descricao = "valor padrão"
        this.icone = "valor padrão"
        this.link = "/"
        this.modal = false;

    }

    _Fechar_Modal = () =>{
        this.modal = false;
    }

    Verificar_Nova_OS = (e) => {
        const OS_Aberta = localStorage.getItem("OS") === "null"?false:true;
        
        if (OS_Aberta){
            this.modal = true;
            return
        }else{
            this._Iniciar_Nova_OS();
        }
    }

    _Iniciar_Nova_OS = (e)=>{
        window.location.href = this.link;
    }

    render() {
        return html`
            <!--Retorno renderizado-->
            <a
                @click="${this.Verificar_Nova_OS}"
                id="container-card-os" 
                 
                style="border-color: ${this.cor_borda};">
                ${this.icone}
                <div>
                    <h3>${this.titulo}</h3>
                    <p>${this.descricao}</p>
                </div>
            </a>

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
                        <h3>Nova OS</h3>
                        
                        <div class="form-group">
                            <label for="jitter" class="form-label">Você já possui uma OS em aberto, tem certeza que deseja iniciar uma nova OS?</label>
                        </div>
                        <br>
                        
                        <div class="form-group" style="margin-top: 10px; display: flex; flex-direction: row; gap:.5rem">
                            <button 
                                @click="${this._Iniciar_Nova_OS}"
                                style="background-color: var(--btn-background-color); color: var(--text-color);"
                                type="button" class="form-button")">Sim</button>
                            <button 
                                @click="${this._Fechar_Modal}"
                                type="button" class="form-button")">Não</button>
                        </div>

                    </div>
                </div>
            ` : ''}
        `;
    }
}

// 2. Em vez de @customElement, use o registro manual
customElements.define('card-os', Card_OS);