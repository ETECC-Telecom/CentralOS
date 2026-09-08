import { LitElement, html, css } from 'lit';

export class Icone_Links extends LitElement {
    static styles = css`
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: var(--icon-size, 24px);
      height: var(--icon-size, 24px);
      color: var(--icon-color, currentColor);
    }
    svg {
      width: 100%;
      height: 100%;
      fill: currentColor;
    }
  `;

    render() {
        return html`
      
    `;
    }
}

customElements.define('icon-link', Icone_Links);