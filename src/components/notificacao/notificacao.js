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
                right: 0px;
                z-index: 9999;
                display: flex;
                flex-direction: column;
                gap: 10px;
            }

            /* Estilo base do balão de mensagem */
            .toast {
                padding: 15px 20px;
                border-radius: 4px;
                
                font-family: sans-serif;
                
                box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                min-width: 250px;
                animation: deslizar 0.3s ease-out;
            }

            /* Cores por Categoria */
            .toast.sucesso {
                color: #122c00;
                background: rgba(0, 255, 145, 0.44);
                backdrop-filter: blur(4px) saturate(176%);
                -webkit-backdrop-filter: blur(4px) saturate(176%);
                border: 1px solid rgba(255, 255, 255, 0.37);
                border-radius: 19px;
                box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
                }
            .toast.erro { 
                color: #4e0008;
                background: rgba(255, 133, 133, 0.5);
                backdrop-filter: blur(4px) saturate(176%);
                -webkit-backdrop-filter: blur(4px) saturate(176%);
                border: 1px solid rgba(255, 255, 255, 0.37);
                border-radius: 19px;
                box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);    
            }
            .toast.aviso { 
                color: #302400;
                background: rgba(251, 255, 0, 0.44);
                backdrop-filter: blur(4px) saturate(176%);
                -webkit-backdrop-filter: blur(4px) saturate(176%);
                border: 1px solid rgba(255, 255, 255, 0.37);
                border-radius: 19px;
                box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);    
            }
            .toast.info { 
                color: #001417;
                background: rgba(0, 247, 255, 0.44);
                backdrop-filter: blur(4px) saturate(176%);
                -webkit-backdrop-filter: blur(4px) saturate(176%);
                border: 1px solid rgba(255, 255, 255, 0.37);
                border-radius: 19px;
                box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);    
            }

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