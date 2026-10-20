import { LitElement, html, css } from 'lit';

export class Icone_Salvar extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 132.3 132.3"><path d="M3898.8 228.1a9 9 0 0 1-5.2-5c-.6-1.2-.6-6.3-.6-54.2 0-51.7 0-52.8.7-54.4.9-2 2.9-4 4.7-4.7 1-.3 11-.5 35.4-.5h34l1.4 1.2c1.7 1.4 18.4 21.1 19.3 22.8.6 1 .7 4.4.6 44.8 0 47.9.2 44.7-2.1 47.6s1.2 2.6-45.2 2.7c-23.1 0-42.5 0-43-.3m74.8-29.6c.1-22.9 0-24.8-.5-26-1.4-3.1.6-3-30.8-3-15.5-.1-29 0-29.9.1q-1.7.2-2.8 1.8l-1.2 1.4v50.6h32.6l32.5-.2zm-57 13.8c-1.1-.4-1.2-3.2-.2-4 .5-.5 5.3-.6 24.7-.6 26.5 0 25.3-.1 25.3 2.5 0 2.7 1.2 2.6-25.1 2.6-13.3 0-24.3-.2-24.8-.5m.2-13.7q-1-.5-1-1.8c-.2-2.7-1.7-2.5 25-2.7 26.9 0 25.6-.2 25.6 2.5 0 2.6.7 2.6-25.2 2.6-18.1 0-23.7-.2-24.4-.6m0-13.6q-1-.6-1-2c-.1-1.3 0-1.6.8-2 1.3-.7 48-.8 49-.1q.8.4.8 1.9c0 2.9 1 2.7-25.2 2.7-18.1 0-23.7 0-24.4-.5m46.2-35 1-1 .1-16.8c.1-14 0-16.8-.4-17.3-.4-.3-6.4-.4-23.6-.3h-23v33.9l1 1.3 1 1.3h42.8zm-16.3-4.6a3 3 0 0 1-1.2-1.5c-.1-.6-.2-6.2 0-12.3.1-9.3.2-11.3.7-11.6.3-.2 2.7-.4 5.4-.4 3.9 0 5 0 5.4.6s.6 2.3.6 12.3a60 60 0 0 1-.5 12.3c-.4.6-1.3.7-5 1q-4.6.1-5.4-.4" style="stroke-width:1" transform="translate(-3875 -102.7)"/></svg>
    `;
  }
}

customElements.define('icone-salvar', Icone_Salvar);