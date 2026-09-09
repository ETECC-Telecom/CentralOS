import { LitElement, html, css } from 'lit';

export class Icone_Links extends LitElement {
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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 132.292 132.292"><path d="M194.793 153.314c-17.137 17.137-17.137 45.102 0 62.24 17.138 17.137 45.102 17.136 62.24-.002l5.94-5.94a8.406 8.406 0 0 0 0-11.888 8.406 8.406 0 0 0-11.888 0l-5.94 5.941c-10.758 10.758-27.707 10.759-38.464.001-10.758-10.757-10.758-27.708 0-38.465l5.94-5.94a8.406 8.406 0 0 0 0-11.889 8.406 8.406 0 0 0-11.887 0zm25.176-25.176a8.406 8.406 0 0 0 0 11.888 8.406 8.406 0 0 0 11.887 0l5.942-5.943c10.757-10.757 27.707-10.756 38.464.001 10.758 10.758 10.758 27.706 0 38.463l-5.942 5.942a8.406 8.406 0 0 0 0 11.888 8.406 8.406 0 0 0 11.888 0l5.942-5.942c17.137-17.138 17.137-45.1 0-62.238-17.138-17.137-45.102-17.139-62.24 0zm-3.674 54.025a8.405 8.405 0 0 0 0 11.888 8.405 8.405 0 0 0 11.888 0l38.464-38.465a8.405 8.405 0 0 0 0-11.887 8.405 8.405 0 0 0-11.888 0z" style="baseline-shift:baseline;display:inline;overflow:visible;opacity:1;vector-effect:none;stroke-width:.999997;stroke-linecap:round;stroke-miterlimit:3.9;stop-opacity:1" transform="translate(-175.325 -102.729)"/></svg>
    `;
    }
}

customElements.define('icon-link', Icone_Links);