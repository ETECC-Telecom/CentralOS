import { LitElement, html, css } from 'lit';

export class Drawer_Esquerdo_Ferramentas extends LitElement {
  static properties = {
    aberto: { type: Boolean }
    };

  static styles = css`
    /* Fundo escuro (Overlay) */
    .overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 5000;
      
      /* Controla a exibição com opacidade para efeito fade-in */
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.3s ease, visibility 0.3s ease;
    }

    /* O painel lateral do Drawer */
    .drawer-content {
      position: fixed;
      top: 0;
      /* Começa totalmente escondido para a esquerda fora da tela */
      right: -100%; 
      width: 400px;
      max-width: 95vw; /* Garante que não passe da tela em celulares pequenos */
      height: 100vh;
      background-color: var(--background-color);
      color: var(--text-color);
      box-shadow: 5px 0 15px rgba(0, 0, 0, 0.2);
      z-index: 5001;
      padding: 1.5rem;
      box-sizing: border-box;

      /* Transição suave do movimento de deslizar */
      transition: right 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    /* --- ESTADOS ATIVOS (Quando a propriedade 'aberto' for true) --- */

    .overlay.visivel {
      opacity: 1;
      visibility: visible;
    }

    .drawer-content.visivel {
      right: 0; /* Desliza para a borda esquerda da tela */
    }

    /* Botão de fechar interno básico */
    .btn-fechar {
      background: none;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
      color: inherit;
      position: absolute;
      top: 1rem;
      right: 1rem;
    }
  `;

  constructor() {
    super();
    this.aberto = false;
  }

  render() {
    return html`
      <div 
        class="overlay ${this.aberto ? 'visivel' : ''}" 
        @click="${this._dispararFechar}"
      ></div>

      <div class="drawer-content ${this.aberto ? 'visivel' : ''}">
        <button class="btn-fechar" @click="${this._dispararFechar}">&times;</button>
        
        <slot></slot>
      </div>
    `;
  }

  _dispararFechar() {
    this.aberto = false;
    // Avisa o componente pai (Home) que o estado mudou aqui dentro
    this.dispatchEvent(new CustomEvent('ao-fechar', {
      bubbles: true,
      composed: true
    }));
  }
}

customElements.define('drawer-esquerdo-ferramentas', Drawer_Esquerdo_Ferramentas);