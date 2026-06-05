import { LitElement, html, css } from 'lit';

export class BotaoTema extends LitElement {
    static properties = {
        isDark: { type: Boolean }
    };

    static styles = css`
    button {
      padding: 0.7rem 1.2rem;
      font-size: 1rem;
      font-weight: bold;
      border: none;
      border-radius: 100rem;
      cursor: pointer;
      
      /* O botão se adapta usando as variáveis do root global! */
      background-color: var(--button-bg);
      color: var(--button-text);
      
      transition: background-color 0.3s ease, color 0.3s ease, transform 0.1s;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
    }

    button:active {
      transform: scale(0.98);
    }
  `;

    constructor() {
        super();
        // Verifica se o body já começou com a classe dark-theme
        this.isDark = document.body.classList.contains('dark-theme');
    }

    render() {
        return html`
      <button @click="${this._alternarTema}">
        ${this.isDark ? html`☀️ Modo Claro` : html`🌙 Modo Escuro`}
      </button>
    `;
    }

    _alternarTema() {
        this.isDark = !this.isDark;

        // Liga/Desliga a classe direto no body da página externa ao Shadow DOM
        document.body.classList.toggle('dark-theme', this.isDark);

        // Opcional: Salvar a preferência do usuário no navegador
        localStorage.setItem('theme', this.isDark ? 'dark' : 'light');
    }
}

customElements.define('botao-tema', BotaoTema);