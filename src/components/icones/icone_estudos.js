import { LitElement, html, css } from 'lit';

export class Icone_Estudos extends LitElement {
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
        <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 132.3 132.3"><path d="M4472.7 126.6q-7.2 0-9.5.6l-2.2.7v64l8.5-.3a71 71 0 0 1 37.7 7.8l.3-1.4c.2-.8.3-14.4.3-30.3 0-23.8 0-29-.6-30.3s-1.4-2-3.7-3.1c-4.7-2.4-11.8-5-18-6.4a44 44 0 0 0-12.8-1.3m75 0c-6.2 0-8 .2-12.9 1.3-6 1.5-13.2 4-18 6.4-2.2 1.1-3 1.8-3.5 3-.6 1.4-.7 6.6-.7 30.4 0 15.9.1 29.5.3 30.3q.2 1.3.4 1.4l4-1.8c9.9-4.5 20.2-6.4 33.6-6l8.5.3v-64l-2.2-.7q-2.2-.6-9.5-.6m-93.6 10.3a3 3 0 0 0-2.7 1.7c-.6 1.1-.7 6.3-.7 34.3 0 18.2.1 33.4.3 33.8.4 1 1.2 1 8.1-.4a78 78 0 0 1 31-1.4c5.2.9 6.7 1.4 9.8 3.3q5.1 3 10.3 3t10.4-3c3-2 4.6-2.4 9.8-3.3a78 78 0 0 1 31 1.4c6.8 1.3 7.7 1.4 8 .4.2-.4.4-15.6.4-33.8 0-28-.2-33.2-.7-34.3a3 3 0 0 0-2.7-1.7h-1.4c-1.1.3-1.3.6-1.4 1.8V169c0 15.8 0 28.7-.2 28.7l-4.8-.8a96 96 0 0 0-25.4 0 64 64 0 0 0-15 5.1c-3.6 1.8-4.3 2-7.5 2h-1c-3.1 0-3.9-.2-7.5-2q-7.1-3.4-15-5.1a96 96 0 0 0-30.2.8c-.1 0-.2-13-.2-28.7v-30.2q.2-1.6-1.4-1.7-.8-.2-1.3-.1" style="stroke-width:1" transform="translate(-4444 -102.7)"/></svg>
    `;
  }
}

customElements.define('icone-estudos', Icone_Estudos);