import { LitElement, html, css } from 'lit';

export class Icone_Estrutura extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 132.3 132.3"><g transform="translate(-5724.7 -102.7)"><rect width="119.1" height="36.9" x="5731.3" y="109.3" rx="9.6" ry="9.6" style="stroke:none;stroke-width:1.5875;stroke-linecap:square;stroke-miterlimit:3.9;stroke-dasharray:none"/><rect width="57.4" height="78" x="5731.3" y="150.4" rx="9.6" ry="9.6" style="stroke:none;stroke-width:1.5875;stroke-linecap:square;stroke-miterlimit:3.9;stroke-dasharray:none"/><rect width="57.4" height="36.9" x="5793" y="191.5" rx="9.6" ry="9.6" style="stroke:none;stroke-width:1.5875;stroke-linecap:square;stroke-miterlimit:3.9;stroke-dasharray:none"/><rect width="57.4" height="36.9" x="5793" y="150.4" rx="9.6" ry="9.6" style="stroke:none;stroke-width:1.5875;stroke-linecap:square;stroke-miterlimit:3.9;stroke-dasharray:none"/></g></svg>
    `;
  }
}

customElements.define('icone-estrutura', Icone_Estrutura);