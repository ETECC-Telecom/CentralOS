import { LitElement, html, css } from 'lit';

export class Modal_Geral extends LitElement {
    static properties = {
        titulo: { type: String },
        texto: { type: String },
    };

    static styles = css`
    :host {
      --modal-bg: #fff;
      --modal-overlay: rgba(0, 0, 0, 0.6);
    }

    .overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: var(--modal-overlay);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 9999;
    }

    .modal {
      background: var(--modal-bg);
      padding: 24px;
      border-radius: 12px;
      box-shadow: 0 10px 25px rgba(0,0,0,0.2);
      max-width: 400px;
      width: 90%;
      text-align: center;
      animation: entra 0.3s ease-out;
    }

    h2 {
      margin-top: 0;
      color: #333;
    }

    p {
      color: #666;
      line-height: 1.5;
    }

    button {
      background: var(--destaque-color);
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 6px;
      cursor: pointer;
      font-weight: bold;
      margin-top: 15px;
    }

    button:hover {
      background: var(--header-color);
    }

    @keyframes entra {
      from { transform: scale(0.8); opacity: 0; }
      to { transform: scale(1); opacity: 1; }
    }
  `;

    fechar() {
        // Remove o componente do DOM ao fechar
        this.remove();
    }

    render() {
        return html`
      <div class="overlay" @click=${this.fechar}>
        <div class="modal" @click=${(e) => e.stopPropagation()}>
          <h2>${this.titulo}</h2>
          <p>${this.texto}</p>
          <button @click=${this.fechar}>Fechar</button>
        </div>
      </div>
    `;
    }
}

// Registra o web component
customElements.define('modal-geral', Modal_Geral);

// --- A FUNÇÃO MÁGICA ---
// Esta é a função que você vai importar para estourar o modal de qualquer lugar
export function estourarModal(titulo, texto) {
    // Cria o elemento do modal
    const modalEl = document.createElement('modal-geral');

    // Passa as propriedades passadas por argumento
    modalEl.titulo = titulo;
    modalEl.texto = texto;

    // Adiciona direto no body da página para centralizar na tela toda
    document.body.appendChild(modalEl);
}