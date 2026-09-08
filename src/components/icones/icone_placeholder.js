import { LitElement, html, css } from 'lit';

export class Icone_Placeholder extends LitElement {
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
            <path d="M622.044 109.343a13.2 13.2 0 0 0-13.23 13.23v48.688l22.895-22.894a3.69 3.69 0 0 1 2.608-1.08 3.69 3.69 0 0 1 2.605 1.08l28.241 28.241 14.792-14.792a3.69 3.69 0 0 1 2.606-1.078 3.69 3.69 0 0 1 2.607 1.078l27.639 27.64a3.687 3.687 0 0 1 0 5.214 3.687 3.687 0 0 1-5.213 0l-25.033-25.032-14.787 14.787-.004.004-.005.005-43.972 43.972h90.855a13.2 13.2 0 0 0 13.229-13.229v-92.604a13.2 13.2 0 0 0-13.23-13.23zm71.163 19.304c8.486 0 15.367 7.077 15.367 15.617s-6.881 15.615-15.367 15.615-15.365-7.076-15.365-15.615 6.88-15.617 15.365-15.617m0 7.372c-4.416 0-7.992 3.607-7.992 8.245s3.576 8.242 7.992 8.242c4.415 0 7.994-3.604 7.994-8.242s-3.579-8.245-7.994-8.245m-58.89 20.169-25.502 25.501v33.488c0 4.836 2.569 9.05 6.422 11.357l44.712-44.712z" style="stroke:none;stroke-width:3.937;stroke-linecap:round;stroke-miterlimit:3.9" transform="translate(-602.2 -102.729)"/>
        </svg>
        `;
    }
}

customElements.define('icon-placeholder', Icone_Placeholder);