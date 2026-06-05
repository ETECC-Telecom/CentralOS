import { LitElement, html, css, unsafeCSS } from 'lit';
import globalStyle from "./card_os.css?inline";

export class Card_OS extends LitElement {
    // 1. Em vez de @property, use o objeto static properties
    static properties = {
        nome: { type: String },
        url_config: { type: String }
    };

    static get styles() {
        return css`${unsafeCSS(globalStyle)}`;
    }

    constructor() {
        super();
        this.url_config = ''
    }

    render() {
        return html`
            <!--Retorno renderizado-->
            <a id="container-card-os" href="">
                <img style="width: 5rem;" src="https://placehold.co/150">
                <div>
                    <h3>Titulo do Card</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie et tortor eu luctus. Aenean faucibus condimentum tincidunt. Suspendisse consectetur molestie dolor. Duis tincidunt eget mauris vel mattis. Pellentesque et venenatis augue. Duis hendrerit dolor ac risus sagittis, non congue nisl ultricies. Aliquam a tempus lorem. </p>
                </div>
            </a>
            
        `;
    }
}

// 2. Em vez de @customElement, use o registro manual
customElements.define('card-os', Card_OS);