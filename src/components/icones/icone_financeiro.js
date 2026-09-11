import { LitElement, html, css } from 'lit';

export class Icone_Financeiro extends LitElement {
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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 132.3 132.3"><path d="M526 109.3c-7.4 0-15 3-20.7 8.7L492 131.3h3c5.6 0 11 2.3 14.8 6.2l13.8 14a3.3 3.3 0 0 0 4.9 0l13.8-14c3.9-4 9.2-6.2 14.8-6.2h3L546.9 118a29 29 0 0 0-20.7-8.7m-41.4 29.4-9.5 9.5a29 29 0 0 0 0 41.4l9.5 9.4H495q5.6 0 9.6-4l13.8-14a11 11 0 0 1 15.3 0l13.8 14q4 4 9.6 4h10.4l9.5-9.4a29 29 0 0 0 0-41.4l-9.5-9.5h-10.4q-5.6.1-9.6 4l-13.8 14a11 11 0 0 1-15.3 0l-13.8-14c-2.5-2.5-6-4-9.6-4zm41.5 46.5q-1.5 0-2.5 1l-13.8 14c-3.9 4-9.2 6.2-14.8 6.2h-3l13.3 13.4a29 29 0 0 0 41.5 0l13.4-13.4h-3c-5.7 0-11-2.2-15-6.2l-13.7-14q-1.1-1-2.4-1" style="stroke-width:3.937;stroke-linecap:round;stroke-miterlimit:3.9" transform="translate(-460 -102.7)"/></svg>
    `;
    }
}

customElements.define('icon-financeiro', Icone_Financeiro);