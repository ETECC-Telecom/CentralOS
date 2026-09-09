import { LitElement, html, css } from 'lit';

export class Icone_Up extends LitElement {
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
      <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 132.292 132.292"><path d="M1237.508 109.343a7.28 7.28 0 0 0-5.162 2.145l-9.02 9.02v.008c0 .004-.014.01-.015.013l-40.088 40.087a7.286 7.286 0 0 0 0 10.326l9.02 9.02a7.285 7.285 0 0 0 10.325 0l21.266-21.266v62.714a6.98 6.98 0 0 0 6.997 6.996h13.363a6.98 6.98 0 0 0 6.997-6.996v-62.715l21.266 21.267a7.284 7.284 0 0 0 10.324 0l9.02-9.02a7.286 7.286 0 0 0 0-10.326l-40.095-40.094v-.002h-.001v-.001c0-.001-.015-.004-.015-.007v-.002l-9.02-9.02a7.28 7.28 0 0 0-5.163-2.145z" style="stroke-width:10.5833;stroke-linecap:round;stroke-miterlimit:3.9" transform="translate(-1171.367 -102.729)"/></svg>
    `;
  }
}

customElements.define('icone-up', Icone_Up);