import { LitElement, html, css } from 'lit';

export class Icone_Seta_Down extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 132.3 132.3"><path d="M4801 203.2h-12.3a7 7 0 0 1-4.6-1.9l-7.3-7.2-39.6-39.7a6.6 6.6 0 0 1 0-9.3l8.7-8.6a7 7 0 0 1 4.6-2 7 7 0 0 1 4.7 2l27 27 12.6 12.6 12.7-12.7 27-27a7 7 0 0 1 4.6-1.8 7 7 0 0 1 4.7 1.9l8.6 8.6a6.6 6.6 0 0 1 0 9.3l-39.6 39.7-7.2 7.1v.1a7 7 0 0 1-4.7 1.9" style="baseline-shift:baseline;display:inline;overflow:visible;vector-effect:none;stroke-width:1;stroke-miterlimit:3.9;" transform="translate(-4728.7 -102.7)"/></svg>
    `;
  }
}

customElements.define('icone-seta-down', Icone_Seta_Down);