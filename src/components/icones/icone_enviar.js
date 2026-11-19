import { LitElement, html, css } from 'lit';

export class Icone_Enviar extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 132.3 132.3"><path d="M5616.8 211.5a3 3 0 0 1-1.5-1 87 87 0 0 1-.5-15.4v-15l-11.3-6.7c-6.2-3.7-11.6-7-12-7.4a8 8 0 0 1 .3-11.9l2-1.3c.8-.4 103.3-26.3 105.3-26.6h2.2q4.2.8 6.1 4.6a6 6 0 0 1 .7 3.4 6 6 0 0 1-.6 3.2c-1.2 2.6-40 65.4-41 66.5a8 8 0 0 1-8 2.2q-1.4-.5-10-5.7a60 60 0 0 0-9-5l-20.1 15.6c-.8.5-2 .8-2.6.5m61.8-45.2 18.2-29.7-95.5 24c-.2.1 18.4 11.5 18.8 11.5l19.8-7.5c10.7-4.2 19.8-7.6 20-7.6q1.2.2.9 1.1c-.1.3-6 5.5-13.1 11.6l-12.9 11.3c.3.3 25.1 15.1 25.3 15s8.5-13.4 18.5-29.7" style="stroke-width:1" transform="translate(-5582.4 -102.7)"/></svg>
    `;
  }
}

customElements.define('icone-enviar', Icone_Enviar);