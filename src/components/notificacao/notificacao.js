import { LitElement, html, css } from 'lit';

export class Notificacao extends LitElement {
    static properties = {
        // Array que vai guardar as notificações ativas
        notificacoes: { type: Array }
    };

    static get styles() {
        return css`
            /* Container fixo no canto superior direito */
            .toast-container {
                position: fixed;
                top: 20px;
                right: 20px;
                z-index: 9999;
                display: flex;
                flex-direction: column;
                gap: 10px;
            }

            /* Estilo base do balão de mensagem */
            .toast {
                padding: 15px 20px;
                border-radius: 4px;
                color: white;
                font-family: sans-serif;
                font-weight: bold;
                box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                min-width: 250px;
                animation: deslizar 0.3s ease-out;
            }

            /* Cores por Categoria */
            .toast.sucesso { background-color: #28a745; }
            .toast.erro { background-color: #dc3545; }
            .toast.aviso { background-color: #ffc107; color: #212529; }
            .toast.info { background-color: #17a2b8; }

            /* Animação para surgir da direita */
            @keyframes deslizar {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
        `;
    }

    constructor() {
        super();
        this.notificacoes = []; // Começa sem nenhuma mensagem
    }

    // A função que você pediu: recebe categoria (ex: 'sucesso', 'erro') e a mensagem
    mostrarNotificacao(categoria, mensagem) {
        const id = Date.now(); // ID único para conseguir remover depois

        const novaNotificacao = { id, categoria, mensagem };

        // Atualiza o array criando uma nova referência para o Lit perceber a mudança
        this.notificacoes = [...this.notificacoes, novaNotificacao];

        // Remove automaticamente a mensagem após 4 segundos (4000ms)
        setTimeout(() => {
            this.notificacoes = this.notificacoes.filter(notif => notif.id !== id);
        }, 4000);
    }

    connectedCallback() {
        super.connectedCallback();

        // Ele fica ouvindo o documento inteiro atrás desse evento
        window.addEventListener('disparar-alerta', (evento) => {
            const { categoria, mensagem } = evento.detail;

            // Chama a função que você já criou para colocar no array!
            this.mostrarNotificacao(categoria, mensagem);
        });
    }

    render() {
        return html`
            <div class="toast-container">
                ${this.notificacoes.map(notif => html`
                    <div class="toast ${notif.categoria}">
                        ${notif.mensagem}
                    </div>
                `)}
            </div>

        `;
    }
}

customElements.define('componente-notificacao', Notificacao);