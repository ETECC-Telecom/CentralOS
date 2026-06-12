import { LitElement, html, css, unsafeCSS } from 'lit';
import globalStyle from "./card_continuar_os.css?inline";

export class Card_Continuar_OS extends LitElement {
    // 1. Em vez de @property, use o objeto static properties
    static properties = {
        url_acesso: {type: String},
    };

    static get styles() {
        return css`${unsafeCSS(globalStyle)}`;
    }

    constructor() {
        super();
        this.url_acesso = ""
    }

    render() {
        return html`
            <!--Retorno renderizado-->
            
            <a href="${this.url_acesso}" id="andamento">
                <img src="/icone-os-aberta.webp" class="flex:1"></img>
                <div class="flex:5">
                    <h3>Script em Aberto!</h3>
                    <p>Você possui um Script em aberto. Para continuá-lo, clique no card!</p>
                </div class="flex:1">
                <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 143.933 143.933"><path d="M-281.44 658.296c-3.21 0-6.42 1.23-8.88 3.69a12.53 12.53 0 0 0 0 17.759l30.759 30.759h-70.918a12.53 12.53 0 0 0-12.558 12.557 12.53 12.53 0 0 0 12.558 12.558h70.918l-30.76 30.76a12.53 12.53 0 0 0 0 17.758 12.53 12.53 0 0 0 17.76 0l51.857-51.857c.099-.091.19-.19.285-.285l.043-.043.014-.015q.4-.402.765-.838l.023-.028q.346-.418.656-.865l.06-.09q.28-.412.53-.847l.09-.166q.22-.398.41-.813c.04-.085.074-.17.11-.255.109-.253.214-.507.306-.768.042-.117.075-.236.113-.354.075-.233.15-.466.211-.704.044-.171.076-.344.113-.516l.021-.096c.013-.064.03-.128.042-.192q.03-.146.057-.292c.033-.202.051-.405.075-.607.013-.115.03-.23.04-.344.005-.06.016-.118.02-.177v-.003q.033-.456.033-.92v-.011a13 13 0 0 0-.033-.905c-.005-.062-.016-.124-.021-.186-.01-.116-.027-.23-.04-.346-.023-.2-.041-.401-.074-.6-.016-.1-.039-.198-.058-.297q-.02-.1-.043-.198l-.019-.086c-.036-.171-.068-.344-.112-.514q-.057-.218-.123-.431-.042-.14-.088-.277c-.038-.117-.072-.236-.113-.352a13 13 0 0 0-.307-.771q-.052-.127-.108-.252a13 13 0 0 0-.411-.814l-.091-.167a13 13 0 0 0-.53-.848l-.06-.09a12.5 12.5 0 0 0-1.444-1.732l-.015-.015-.042-.043c-.096-.094-.186-.193-.284-.284l-51.859-51.857a12.52 12.52 0 0 0-8.88-3.689z" style="opacity:1;fill-opacity:1;stroke:none;stroke-width:6.61454;stroke-linecap:round;stroke-miterlimit:3.9" transform="translate(351.828 -651.095)"/></svg>
            </a>
        `;
    }
}

// 2. Em vez de @customElement, use o registro manual
customElements.define('card-continuar-os', Card_Continuar_OS);