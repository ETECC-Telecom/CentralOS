import { LitElement, html, css } from 'lit';

export class Icone_Retorno extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 132.3 132.3"><path d="M2214.8 130.3c-6.7 0-13 3-17.4 8.1l-15.9 18.8c-4.7 5.6-4.9 13.9-.5 19.7l16.5 22c4.1 5.3 10.5 8.5 17.3 8.5h65c7.6 0 13.9-6.2 13.9-13.8v-49.5c0-7.5-6.3-13.8-13.9-13.8zm0 12.2h65q1.6.1 1.7 1.6v49.5q-.1 1.6-1.7 1.7h-65c-3 0-5.8-1.4-7.5-3.8l-16.6-22c-1-1.3-1-3.1.2-4.4l15.8-18.9c2-2.3 5-3.7 8-3.7m18 3.2a6 6 0 0 0-4.3 1.8 6 6 0 0 0 0 8.6l13 12.9-13 13a6 6 0 0 0 0 8.5 6 6 0 0 0 8.6 0l13-13 13 13a6 6 0 0 0 8.6 0 6 6 0 0 0 0-8.6l-13-13 13-12.8a6 6 0 0 0 0-8.6 6 6 0 0 0-4.3-1.8 6 6 0 0 0-4.3 1.7l-13 13-13-13a6 6 0 0 0-4.3-1.7" style="baseline-shift:baseline;display:inline;overflow:visible;opacity:1;vector-effect:none;stroke-linecap:round;stroke-miterlimit:3.9;stop-color:#000;stop-opacity:1" transform="translate(-2169.6 -102.7)"/><path d="M2206.8 136.8c-.3.4-.7.8 0 0" style="stroke-width:1;stroke-linecap:round;stroke-miterlimit:3.9" transform="translate(-2167.4 -102.7)"/></svg>
    `;
  }
}

customElements.define('icone-retorno', Icone_Retorno);