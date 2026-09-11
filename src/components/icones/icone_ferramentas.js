import { LitElement, html, css } from 'lit';

export class Icone_Ferramentas extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 132.3 132.3"><path d="m347 109.3-2.5.1c-3.8.4-4.5 4-1.8 6.6l9.8 9.8v11.8h-11.8l-9.8-9.8c-2.7-2.7-6.2-2-6.6 1.8a22.3 22.3 0 0 0 28.3 23.6l46.8 46.8a22.3 22.3 0 0 0 23.6 28.3c3.8-.3 4.5-3.9 1.8-6.6L415 212v-11.8H427l9.7 9.7c2.7 2.7 6.2 2 6.6-1.7a22.3 22.3 0 0 0-28.3-23.7L368 137.7a22.3 22.3 0 0 0-21.2-28.4m88.3 2.2-20.4 10.7-5.2 10a4 4 0 0 0 .5 4.4l-16.9 16.8 6 6 16.8-17a4 4 0 0 0 4.4.5l9.9-5.2 10.8-20.3zm-71.8 62.2-35.8 35.8a4.5 4.5 0 0 0 0 6.3l9 9.2a4.5 4.5 0 0 0 6.4 0L379 189z" style="baseline-shift:baseline;display:inline;overflow:visible;vector-effect:none;fill-opacity:1;stroke-width:1;stroke-miterlimit:3.9;stop-color:#000" transform="translate(-317.6 -102.7)"/></svg>
    `;
  }
}

customElements.define('icon-ferramentas', Icone_Ferramentas);