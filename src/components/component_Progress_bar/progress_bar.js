import { LitElement, html, css } from 'lit';

export class ProgressBar extends LitElement {
    static properties = {
        atual: { type: Number },
        total: { type: Number }
    };

    static styles = css`
    :host {
      display: block;
      width: 100%;
      font-family: system-ui, -apple-system, sans-serif;
    }

    .progress-container {
      position: relative;
      width: 100%;
      height: 28px;
      background-color: #e0e0e0;
      border-radius: .5rem;
      overflow: hidden;
      box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2);
    }

    .progress-fill {
        height: 100%;
  
        /* Gradiente na frente (camada superior), Imagem de padrão atrás (camada inferior) */
        background-image: 
        linear-gradient(90deg, var(--background-color) 0%, var(--destaque-color) 100%),
        var(--pattern-background);

        /* Define o tamanho para cada camada na mesma ordem: auto (gradiente) e 1.5rem (padrão) */
        background-size: auto, 1.5rem;
        background-repeat: no-repeat, repeat;
  
        border-radius: .5rem 0 0 .5rem;
        transition: width 0.3s ease-in-out;
        background-blend-mode: overlay; /* Ou: multiply, screen, soft-light */

    }

    .progress-label {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      font-size: 0.85rem;
      color: #1a1a1a;
      /* Sombra para facilitar a leitura independente da cor da barra */
      text-shadow: 0px 0px 3px rgba(255, 255, 255, 0.8);
      pointer-events: none;
    }
  `;

    constructor() {
        super();
        this.atual = 0;
        this.total = 100;
    }

    // Calcula a porcentagem garantindo limites entre 0% e 100%
    get porcentagem() {
        if (!this.total || this.total <= 0) return 0;
        const calculo = (this.atual / this.total) * 100;
        return Math.min(Math.max(Math.round(calculo), 0), 100);
    }

    render() {
        const pct = this.porcentagem;

        return html`
      <div 
        class="progress-container" 
        role="progressbar" 
        aria-valuenow="${this.atual}" 
        aria-valuemin="0" 
        aria-valuemax="${this.total}"
        aria-label="Progresso: ${pct}%"
      >
        <div class="progress-fill" style="width: ${pct}%;"></div>
        <div class="progress-label">${pct}%</div>
      </div>
    `;
    }
}

customElements.define('progress-bar', ProgressBar);