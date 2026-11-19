import { LitElement, html, css } from 'lit';

export class Icone_Teste_Rede extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 132.3 132.3"><path d="M5355.7 128.2a53.8 53.8 0 0 0-46.5 23.3c-3.6 5.3-4.8 8.6-4.8 8.6s2-3 6.2-7.3a52.3 52.3 0 0 1 52.9-13.6 52 52 0 0 1 32.1 29.6q2.4 6 3.1 12.5c.3 2.5-1.7 4.6-4.2 4.6h-6.4q-1.6.1-.7 1.4c4 5.3 17.9 23.3 17.9 22.2 0 1 13.8-16.9 17.9-22.2q.9-1.3-.7-1.4h-6.4c-2.5 0-4.7-2-5-4.5-.8-5-2-13-3.8-17.2a58 58 0 0 0-51.6-36m-3.7 17.6-4 .1q-7.7.6-14.8 4-.2 0-.3.2-2.2 1-4.2 2.4l-.2.1a40 40 0 0 0-11 11q-1.5 2.2-2.7 4.6a39.7 39.7 0 0 0-4 20.3 40 40 0 0 0 5.3 17.4l.3.5a2 2 0 0 0 2.8.8l5.4-3.1 3.5-2 .5-.3a2 2 0 0 0 .8-2.9l-.6-1a2 2 0 0 0-2.9-.8l-.5.3-3.4 2a32 32 0 0 0-2.9-10.8h4.5a2 2 0 0 0 2.1-2.1v-1.2a2 2 0 0 0-2-2.1h-4.6q.5-5.7 2.9-10.8l3.4 2 .5.2a2 2 0 0 0 2.9-.7l.6-1.1a2 2 0 0 0-.8-2.9l-.5-.3-3.4-2a32 32 0 0 1 8-7.8l1.9 3.4.3.5a2 2 0 0 0 2.8.8l1-.7a2 2 0 0 0 .8-2.8l-.3-.5-2-3.4q5.3-2.4 10.9-3v4.6a2 2 0 0 0 2 2h1.3a2 2 0 0 0 2-2v-4.6q5.7.6 10.9 3l-2 3.4-.3.5a2 2 0 0 0 .8 2.8l1 .7a2 2 0 0 0 3-.8l.2-.5 2-3.5 3.1-5.4a2 2 0 0 0-.8-2.8l-.5-.3a40 40 0 0 0-17.3-5.2v-.1zm10.5 19.9-12 14.2a6 6 0 0 0-4.9 3 6 6 0 0 0 2.2 8.1 6 6 0 0 0 8.1-2.2 6 6 0 0 0 .2-5.6z" style="baseline-shift:baseline;display:inline;overflow:visible;opacity:1;vector-effect:none;stroke-width:1;stroke-linecap:square;stroke-miterlimit:3.9;stop-opacity:1" transform="translate(-5297.8 -102.7)"/></svg>
    `;
  }
}

customElements.define('icone-teste-rede', Icone_Teste_Rede);