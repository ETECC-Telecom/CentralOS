import { LitElement, html, css } from 'lit';

export class Icone_Check extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 132.3 132.3"><path d="M1623 173.4v19.3" style="baseline-shift:baseline;display:inline;overflow:visible;vector-effect:none;stroke-miterlimit:3.9;stop-color:#000" transform="translate(-1598.2 -102.7)"/><path d="m1704 123-55.7 55.8a6.6 6.6 0 0 1-9.3 0l-14.3-14.3a6.6 6.6 0 0 0-9.3 0l-8.6 8.7a6.6 6.6 0 0 0 0 9.3l32.2 32.2a6.6 6.6 0 0 0 9.3 0L1722 141a6.6 6.6 0 0 0 0-9.3l-8.7-8.7a6.6 6.6 0 0 0-9.3 0" style="baseline-shift:baseline;display:inline;overflow:visible;vector-effect:none;stroke-width:1;stroke-miterlimit:3.9;stop-color:#000" transform="translate(-1598.2 -102.7)"/></svg>
    `;
  }
}

customElements.define('icone-check', Icone_Check);