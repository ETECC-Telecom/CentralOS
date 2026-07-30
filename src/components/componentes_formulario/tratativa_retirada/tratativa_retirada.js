import { LitElement, html, css, unsafeCSS } from 'lit';
import globalStyle from "./index.css?inline";

import { Caixa_Texto } from '../caixa_texto/caixa_texto';

export class Tratativa_Retirada extends LitElement {
    // 1. Em vez de @property, use o objeto static properties
    static properties = {
        objeto_os: { type: Object },
        inviabilidade_exibir: { type: Boolean },
        troca_provedor_exibir: { type: Boolean },
        insatisfacao_exibir: { type: Boolean },
        outros_exibir: { type: Boolean },
    };

    static get styles() {
        return css`${unsafeCSS(globalStyle)}`;

    }

    constructor() {
        super();
        this.objeto_os = {}
        this.inviabilidade_exibir = false;
        this.troca_provedor_exibir = false;
        this.insatisfacao_exibir = false;
        this.outros_exibir = false;
    }

    // Executado assim que o componente é renderizado na tela
    firstUpdated() {

    }
    connectedCallback() {
        super.connectedCallback(); // ⚠️ Sempre chame o super PRIMEIRO no Lit

        //Validando os dados para Exibir:
        const Valor = this.objeto_os.OS.motivo_cancelamento.categoria;
        this.EXIBIR_CORRETO(Valor)

    }

    _alterar_motivo_cancelamento = (e) => {
        const Valor = e.target.value;
        this.objeto_os.OS.motivo_cancelamento.categoria = Valor;

        // Regras de negocio para cada opção escolhida:

        this.EXIBIR_CORRETO(Valor)

        this.objeto_os.salvar_os_localstorage();
    }

    //Função para limpar todos os atributos de visualização:
    LIMPAR_ATRIBUTOS = () => {
        this.inviabilidade_exibir = false;
        this.troca_provedor_exibir = false;
        this.insatisfacao_exibir = false;
        this.outros_exibir = false;
    }

    EXIBIR_CORRETO = (Valor) => {
        switch (Valor) {
            case "inviabilidade":
                this.LIMPAR_ATRIBUTOS();
                this.inviabilidade_exibir = true;
                break;
            case "condicao_financeira":
                this.LIMPAR_ATRIBUTOS();
                break;
            case "mudanca_residencia":
                this.LIMPAR_ATRIBUTOS();
                break;
            case "perda_equipamento":
                this.LIMPAR_ATRIBUTOS();
                break;
            case "troca_provedor":
                this.LIMPAR_ATRIBUTOS();
                this.troca_provedor_exibir = true;
                break;
            case "obito_titular":
                this.LIMPAR_ATRIBUTOS();
                break;
            case "insatisfacao":
                this.LIMPAR_ATRIBUTOS();
                this.insatisfacao_exibir = true;
                break;
            case "outros":
                this.LIMPAR_ATRIBUTOS();
                this.outros_exibir = true;
                break;
            default:
                break;
        }
    }

    render() {
        return html`
            <!--Retorno renderizado-->
            <h3>Motivo do Cancelamento</h3>
            <br>

            <!-- From Uiverse.io by Na3ar-17 --> 
            <div @change="${this._alterar_motivo_cancelamento}" class="radio-input">
                <label class="label">
                    <input
                    type="radio"
                    id="value-1"
                    ?checked="${this.objeto_os.OS.motivo_cancelamento.categoria === 'inviabilidade'}"
                    name="value-radio"
                    value="inviabilidade"
                    />
                    <p class="text">Inviabilidade Técnica</p>
                </label>
                
                <label class="label">
                    <input
                    type="radio"
                    id="value-1"
                    ?checked="${this.objeto_os.OS.motivo_cancelamento.categoria === 'condicao_financeira'}"
                    name="value-radio"
                    value="condicao_financeira"
                    />
                    <p class="text">Condições Financeiras</p>
                </label>

                <label class="label">
                    <input
                    type="radio"
                    id="value-1"
                    ?checked="${this.objeto_os.OS.motivo_cancelamento.categoria === 'mudanca_residencia'}"
                    name="value-radio"
                    value="mudanca_residencia"
                    />
                    <p class="text">Mudança de Endereço</p>
                </label>

                <label class="label">
                    <input
                    type="radio"
                    id="value-1"
                    ?checked="${this.objeto_os.OS.motivo_cancelamento.categoria === 'perda_equipamento'}"
                    name="value-radio"
                    value="perda_equipamento"
                    />
                    <p class="text">Perda de Equipamento</p>
                </label>

                <label class="label">
                    <input
                    type="radio"
                    id="value-1"
                    ?checked="${this.objeto_os.OS.motivo_cancelamento.categoria === 'troca_provedor'}"
                    name="value-radio"
                    value="troca_provedor"
                    />
                    <p class="text">Troca de Provedor</p>
                </label>

                <label class="label">
                    <input
                    type="radio"
                    id="value-1"
                    ?checked="${this.objeto_os.OS.motivo_cancelamento.categoria === 'obito_titular'}"
                    name="value-radio"
                    value="obito_titular"
                    />
                    <p class="text">Óbito do Titular</p>
                </label>

                <label class="label">
                    <input
                    type="radio"
                    id="value-1"
                    ?checked="${this.objeto_os.OS.motivo_cancelamento.categoria === 'insatisfacao'}"
                    name="value-radio"
                    value="insatisfacao"
                    />
                    <p class="text">Insatisfação Técnica</p>
                </label>

                <label class="label">
                    <input
                    type="radio"
                    id="value-1"
                    ?checked="${this.objeto_os.OS.motivo_cancelamento.categoria === 'outros'}"
                    name="value-radio"
                    value="outros"
                    />
                    <p class="text">Outro Motivo</p>
                </label>
            
            </div>
            <br>

            <!-- Regras de Exibição de acordo com a opção Escolhida -->

            ${this.inviabilidade_exibir? html`
                <caixa-texto
                    Titulo = "Motivo da Inviabilidade:"
                    .Tamanho = ${5}
                    .Texto = ${this.objeto_os.OS.motivo_cancelamento.inviabilidade_observacao}
                    .Campo_Texto = ${this.objeto_os.callback_adicionar_texto_inviabilidade.bind(this.objeto_os)}
                    .Atualizar_BD = ${this.objeto_os.salvar_os_localstorage.bind(this.objeto_os)}
                    .Categoria = "retencao"
                    Placeholder = "Explique o real motivo da inviabilidade!"
                ></caixa-texto>
            `:""}

            ${this.troca_provedor_exibir? html`
                <caixa-texto
                    Titulo = "Como foi identificado esse motivo:"
                    .Tamanho = ${5}
                    .Texto = ${this.objeto_os.OS.motivo_cancelamento.troca_provedor_observacao}
                    .Campo_Texto = ${this.objeto_os.callback_adicionar_texto_troca_provedor.bind(this.objeto_os)}
                    .Atualizar_BD = ${this.objeto_os.salvar_os_localstorage.bind(this.objeto_os)}
                    .Categoria = "retencao"
                    Placeholder = "Exe.: Informado pelo próprio Cliente ou Identificado o Drop de outra Operadora!"
                ></caixa-texto>
                
            `:""}
            
            ${this.insatisfacao_exibir? html`
                <caixa-texto
                    Titulo = "Qual o motivo da Insatisfação:"
                    .Tamanho = ${5}
                    .Texto = ${this.objeto_os.OS.motivo_cancelamento.insatisfacao_observacao}
                    .Campo_Texto = ${this.objeto_os.callback_adicionar_texto_insatisfacao_observacao.bind(this.objeto_os)}
                    .Atualizar_BD = ${this.objeto_os.salvar_os_localstorage.bind(this.objeto_os)}
                    .Categoria = "retencao"
                    Placeholder = "Antes de Tudo, informe se o cliente:\n• O Cliente Já Recebeu Visita Técnica?\n• As expectativas dele foram atendidas?\n Descreva o relato do cliente na página inicial de Tratativa em 'Relato do Cliente'"
                ></caixa-texto>
                
            `:""}
            ${this.outros_exibir? html`
                <caixa-texto
                    Titulo = "Qual o motivo do Cancelamento:"
                    .Tamanho = ${5}
                    .Texto = ${this.objeto_os.OS.motivo_cancelamento.outros_observacao}
                    .Campo_Texto = ${this.objeto_os.callback_adicionar_texto_outros_observacao.bind(this.objeto_os)}
                    .Atualizar_BD = ${this.objeto_os.salvar_os_localstorage.bind(this.objeto_os)}
                    .Categoria = "retencao"
                    Placeholder = "Informe qual o real motivo do cancelamento..."
                ></caixa-texto>
                
            `:""}

        `;
    }
}

// 2. Em vez de @customElement, use o registro manual
customElements.define('tratativa-retirada', Tratativa_Retirada);