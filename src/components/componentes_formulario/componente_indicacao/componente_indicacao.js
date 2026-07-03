import { LitElement, html, css, unsafeCSS } from 'lit';
import globalStyle from "./index.css?inline";
import { disparar_notificacao } from '../../../controller/disparar_notificacao';

export class Componente_Indicacao extends LitElement {
    // 1. Em vez de @property, use o objeto static properties
    static properties = {
        objeto_os: { type: Object },
        necessario: { type: Boolean },
        indicacao: { type: Object },
    };

    static get styles() {
        return css`${unsafeCSS(globalStyle)}`;
    }

    constructor() {
        super();
        this.objeto_os = {};
        this.indicacao = {};
        this.necessario = false;
    }

    // Executado assim que o componente é renderizado na tela
    firstUpdated() {

    }
    connectedCallback() {
        super.connectedCallback(); // ⚠️ Sempre chame o super PRIMEIRO no Lit
        this.indicacao = this.objeto_os.OS.indicacao;
        this.necessario = this.indicacao.solicitado;
    }

    _Alterar_Necessidade = (e) => {
        const Valor = e.target.value === "true" ? true : false;
        this.necessario = Valor;
        this.indicacao.solicitado = Valor;
        this.objeto_os.salvar_os_localstorage();
    }
    _Alterar_Indicacao_Passada = (e) => {
        const Valor = e.target.value === "true" ? true : false;
        this.indicacao.indicado = Valor;
        this.objeto_os.salvar_os_localstorage();
    }
    _Alterar_indicado = (e) => {
        const Valor = e.target.value === "" ? null : e.target.value;
        this.indicacao.nome = Valor;
        this.objeto_os.salvar_os_localstorage();
    }
    _Alterar_Contato = (e) => {
        const Valor = e.target.value === "" ? null : e.target.value;
        this.indicacao.contato = Valor;
        this.objeto_os.salvar_os_localstorage();
    }

    _Encaminhar_indicacao = (e) => {

        //Tratamento antes de encaminhar:
        const Cliente = this.objeto_os.OS.info_cliente;
        if (Cliente.nome_cadastro === null || Cliente.telefone === null){
            disparar_notificacao('erro', `O Nome de Cadastro ou Telefone devem estar preenchidos!`);
            return
        }

        if (this.indicacao.contato === null || this.indicacao.nome === null){
            disparar_notificacao('erro', `Preencha os dados de indicação!`);
            return
        }

        // 1. Defina o seu texto (use \n para quebras de linha)
        const textoOriginal = `Olá!\n\nCliente ${Cliente.nome_cadastro} me indicou ${this.indicacao.nome}.\n\n*Contato:* ${this.indicacao.contato}`;

        // 2. Codifique o texto para o formato de URL (transforma espaços e quebras de linha)
        const textoCodificado = encodeURIComponent(textoOriginal);

        // 3. Monte a URL do WhatsApp
        // Nota: Para grupos, o WhatsApp não permite enviar direto para um ID de grupo por segurança,
        // então o usuário abrirá o app e escolherá o grupo na lista de contatos.
        const urlWhatsapp = `https://wa.me/?text=${textoCodificado}`;
        
        // 4. Abre o WhatsApp em uma nova aba/app
        window.open(urlWhatsapp, '_blank');

        //Salva Alteração
        this.indicacao.encaminhada = true;
        this.objeto_os.salvar_os_localstorage();
    }

    render() {
        return html`
            <!--Retorno renderizado-->
            <h2>Indicação</h2>
            <br>
            <div class="form-group">
                <span class="form-label">Foi solicitado alguma indicação?</span>
            </div>
            <div style="display:flex;flex-direction:column; gap:.5rem">
                <div @change="${this._Alterar_Necessidade}" class="radio-input" id="ativo-local">
                    <label>
                        <input ?checked="${this.indicacao.solicitado === true ? true : false}" value="true" name="tipo-ativo" id="value-1" type="radio" />
                        <span>S i m</span>
                    </label>
                    <label>
                        <input ?checked="${this.indicacao.solicitado === false ? true : false}" value="false" name="tipo-ativo" id="value-2" type="radio" />
                        <span>N ã o</span>
                    </label>
                    <span class="selection"></span>
                </div>
            </div>
            <br>
            ${this.necessario ? html`
            <div class="form-group">
                <span class="form-label">O cliente passou alguma indicação?</span>
            </div>
            <div style="display:flex;flex-direction:column; gap:.5rem">
                <div @change="${this._Alterar_Indicacao_Passada}" class="radio-input" id="ativo-local">
                    <label>
                        <input ?checked="${this.indicacao.indicado === true ? true : false}" value="true" name="indicacao-passada" id="value-1" type="radio" />
                        <span>S i m</span>
                    </label>
                    <label>
                        <input ?checked="${this.indicacao.indicado === false ? true : false}" value="false" name="indicacao-passada" id="value-2" type="radio" />
                        <span>N ã o</span>
                    </label>
                    <span class="selection"></span>
                </div>
            </div>
            <br>
            <div style="display:flex;gap:1rem;">
                <div class="form-group">
                    <label for="lname" class="form-label">Nome Indicação:</label>
                    <input 
                        @change=${this._Alterar_indicado}
                        type="text" id="lname" name="lname" .value="${this.indicacao.nome}" class="form-input">
                </div>
                <div class="form-group">
                    <label for="lname" class="form-label">Número para Contato:</label>
                    <input 
                        @change=${this._Alterar_Contato}
                        type="text" id="lname" name="lname" .value="${this.indicacao.contato}" class="form-input">
                </div>
            
            </div>

            <div class="form-group" style="margin-top: 10px;">
                <button 
                    @click="${this._Encaminhar_indicacao}"
                    type="button" class="form-button">Encaminhar Indicação</button>
            </div>
            
            `: ''}
        `;
    }
}

// 2. Em vez de @customElement, use o registro manual
customElements.define('componente-indicacao', Componente_Indicacao);