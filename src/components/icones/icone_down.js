import { LitElement, html, css } from 'lit';

export class Icone_Down extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 132.292 132.292"><path d="M1379.8 228.406a7.28 7.28 0 0 1-5.162-2.145l-9.02-9.02v-.007c0-.004-.014-.01-.015-.014l-40.088-40.087a7.286 7.286 0 0 1 0-10.326l9.02-9.02a7.285 7.285 0 0 1 10.325 0l21.266 21.267V116.34a6.98 6.98 0 0 1 6.996-6.997h13.364a6.98 6.98 0 0 1 6.997 6.997v62.714l21.265-21.266a7.284 7.284 0 0 1 10.325 0l9.02 9.02a7.286 7.286 0 0 1 0 10.325l-40.095 40.095v.001h-.002v.002s-.014.004-.014.007v.002l-9.021 9.02a7.28 7.28 0 0 1-5.163 2.144z" style="stroke-width:10.5833;stroke-linecap:round;stroke-miterlimit:3.9" transform="translate(-1313.658 -102.729)"/></svg>
    `;
  }
}

customElements.define('icone-down', Icone_Down);