import { LitElement, html, css } from 'lit';
import { db_ler_todos_scripts } from '../../model/Service_Modelo_Scripts';

export class Drawer_Scripts_Component extends LitElement {
    static properties = {
        aberto: { type: Boolean },
        alvo: { type: Object },
        lista: {type: Array},
        categoria: {type:String},
        cores: {type: Object}
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
        this.aberto = true;
        this.alvo = {};
        this.lista = [];
        this.categoria = "Outro"

        this.cores = {
            "Ping" : "#1E3A8A",
            "Tracert" : "#065F46",
            "Velocidade" : "#991B1B",
            "Fibra" : "#C2410C",
            "Fonte" : "#6D28D9",
            "Troca de Equipamento" : "#BE185D",
            "Site Survey" : "#0F766E",
            "Relato do Cliente" : "#4338CA",
            "Encaminhar Externa" : "#374151",
            "Outros" : "#78350F",
        }
    }

    _fechar = () => {
        this.remove();
    }
    async connectedCallback() {
        super.connectedCallback();
        this.lista = await db_ler_todos_scripts();
    }

    _Adicionar_texto = (e, id) =>{
        
        const campo = this.alvo;
        const textoParaInserir = this.lista[id].descricao;

        
        //2. Pega a posição atual do cursor (início e fim da seleção)
        const inicioSelecao = campo.selectionStart;
        const fimSelecao = campo.selectionEnd;
        const textoCompleto = campo.value;

        // 3. Divide o texto em antes e depois do cursor, e injeta o novo texto no meio
        campo.value =
            textoCompleto.substring(0, inicioSelecao) +
            textoParaInserir +
            textoCompleto.substring(fimSelecao);

        // 4. Move o cursor para logo após o texto inserido
        const novaPosicaoCursor = inicioSelecao + textoParaInserir.length;
        campo.selectionStart = novaPosicaoCursor;
        campo.selectionEnd = novaPosicaoCursor;

        // 5. Devolve o foco visual para o campo
        campo.focus();
        this._fechar();
    }

    render() {
        return html`
      <div 
        class="overlay ${this.aberto ? 'visivel' : ''}" 
        @click="${this._fechar}"
      ></div>

      <div class="drawer-content ${this.aberto ? 'visivel' : ''}">
        <button class="btn-fechar" @click="${this._fechar}">&times;</button>
        
        <h2>Modelos de Scripts</h2>
        <hr>
        <div style="display:flex; flex-direction:column;">


        ${this.lista.map((item, chave) => {
                //Renderizando primeiro os da categoria do text chamado
                
                if(item.categoria === this.categoria){
                    return html`
                        <div @dblclick="${(e)=> this._Adicionar_texto(e, chave)}">
                            <h3 
                                style="user-select: none;"
                                >${item.titulo}</h3>
                            <p
                                style="user-select: none;"
                                >${item.descricao}</p>
                            <span
                                style="background-color: ${this.cores[item.categoria]}; padding: .2rem 1rem; border-radius:1rem; "
                                >${item.categoria}</span>
                        </div>
                    `;
                }
                
            })}

            
            ${this.lista.map((item, chave) => {
                //Renderizando os demais itens
                
                if(item.categoria !== this.categoria){
                    return html`
                        <div @dblclick="${(e)=> this._Adicionar_texto(e, chave)}">
                            <h3 
                                style="user-select: none;"
                                >${item.titulo}</h3>
                            <p
                                style="user-select: none;"
                                >${item.descricao}</p>
                            <span
                                style="background-color: ${this.cores[item.categoria]}; padding: .2rem 1rem; border-radius:1rem; "
                                >${item.categoria}</span>
                        </div>
                    `;
                }
                
            })}

        </div>

      </div>
    `;
    }
}

customElements.define('drawer-scripts', Drawer_Scripts_Component);

export function estourar_drawer(e, categoria) {
    const modalEl = document.createElement('drawer-scripts'); // Cria o elemento
    modalEl.alvo = e;
    modalEl.categoria = categoria;
    document.body.appendChild(modalEl);                  // Injeta na página
}