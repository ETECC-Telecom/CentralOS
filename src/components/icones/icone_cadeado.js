import { LitElement, html, css } from 'lit';

export class Icone_Cadeado extends LitElement {
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

        <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 132.3 132.3"><path d="M2057.3 228.3a14 14 0 0 1-11.5-10.5c-.2-1-.3-6-.3-26.2v-25l.5-1.6c.5-1.6 1.8-3.9 2.9-5.1 1.8-2.1 4.7-3.8 7.6-4.4 2.4-.5 67.2-.5 69.6 0 5 1 9 4.7 10.5 9.8.4 1.3.4 2.8.4 26.5 0 23.8 0 25.2-.4 26.6q-2.2 7-9.5 9.5c-1.2.4-3 .5-34.8.5zm36-18.6q1.6-.9 2.3-2.5c.3-.7.3-1.9.3-6.5 0-3.2.1-5.7.2-5.7.6 0 2.7-2.3 3.3-3.6a9.2 9.2 0 1 0-13.4 3.3l.6.3v6l.1 6 .7 1c1.4 2 4 2.7 6 1.7m-34.2-61.1c0-9.1 1.3-16.1 4-21.8A29 29 0 0 1 2084 110a47 47 0 0 1 11.4-.5c3.6.2 8.3 1.6 11.5 3.4a31 31 0 0 1 15.2 20.8c.9 3.7 1.4 8.7 1.4 14v2.7h-13.7v-3.7a31 31 0 0 0-2.8-14.6 15 15 0 0 0-10.2-8.5c-1.6-.5-2.4-.6-5.4-.6s-4 .1-5.5.6c-3 .8-4.9 2-6.9 4s-3 3.6-4 6.4a31 31 0 0 0-2 11.5l-.1 4.9h-13.7z" style="stroke-width:.999997" transform="translate(-2025.1 -102.7)"/></svg>

    `;
  }
}

customElements.define('icone-cadeado', Icone_Cadeado);