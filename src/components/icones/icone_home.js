import { LitElement, html, css } from 'lit';

export class Icone_Home extends LitElement {
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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 132.292 132.292">
            <path d="m99.175 133.055-47.684 36.428v51.825a7.08 7.08 0 0 0 7.098 7.098h29.329v-36.428h22.514v36.428h29.329a7.08 7.08 0 0 0 7.098-7.098v-51.824z" style="stroke-width:3.937;stroke-linecap:round;stroke-miterlimit:3.9" transform="translate(-33.033 -102.729)"/><path d="M99.175 109.343a9.3 9.3 0 0 0-5.64 1.909l-52.548 40.145a7.1 7.1 0 0 0-1.331 9.949 6.96 6.96 0 0 0 9.779 1.11l49.74-38.002 49.74 38.001a7.1 7.1 0 0 0 9.95-1.331 6.96 6.96 0 0 0-1.502-9.727l-10.6-8.098v-26.858a7.08 7.08 0 0 0-7.098-7.098h-8.064a7.08 7.08 0 0 0-7.098 7.098v9.851l-19.687-15.04a9.3 9.3 0 0 0-5.641-1.909" style="baseline-shift:baseline;display:inline;overflow:visible;opacity:1;vector-effect:none;stroke-width:1;stroke-miterlimit:3.9;stop-opacity:1" transform="translate(-33.033 -102.729)"/>
        </svg>
        `;
    }
}

customElements.define('icon-home', Icone_Home);