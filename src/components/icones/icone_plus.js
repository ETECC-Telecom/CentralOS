import { LitElement, html, css } from 'lit';

export class Icone_Plus extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 132.3 132.3"><path d="M4930.7 109.3c-3.7 0-6.6 3-6.6 6.6v40.3h-40.3a6.6 6.6 0 0 0-6.5 6.6V175c0 3.6 3 6.6 6.5 6.6h40.3v40.2a6.6 6.6 0 0 0 6.6 6.6h12.2c3.6 0 6.6-3 6.6-6.6v-40.2h40.2a6.6 6.6 0 0 0 6.6-6.6v-12.2c0-3.7-3-6.6-6.6-6.6h-40.2v-40.3a6.6 6.6 0 0 0-6.6-6.6z" style="baseline-shift:baseline;display:inline;overflow:visible;vector-effect:none;stroke-width:1;stroke-miterlimit:3.9" transform="translate(-4871 -102.7)"/></svg>
    `;
  }
}

customElements.define('icone-plus', Icone_Plus);