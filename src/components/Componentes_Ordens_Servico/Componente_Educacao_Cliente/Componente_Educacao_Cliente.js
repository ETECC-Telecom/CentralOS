import { LitElement, html, css, unsafeCSS } from 'lit';
import globalStyle from "./index.css?inline";

import { LISTA_EDUCACAO_CLIENTE } from '../../../data/Lista_Educacao_Cliente';
import { LISTA_SERVICOS_CLIENTE } from '../../../data/Lista_Educacao_Cliente';

import { Icone_Estudos } from '../../icones/icone_estudos';
import { Caixa_Texto_OS } from '../caixa_texto/caixa_texto';

export class Componente_Educacao_Cliente extends LitElement {
    // 1. Em vez de @property, use o objeto static properties
    static properties = {
        Ficha: {type:Object},
        Informacao_Encaminhada: {type:Boolean}
    };

    static get styles() {
        return css`${unsafeCSS(globalStyle)}`;
    }

    constructor() {
        super();
        this.Ficha = {}
        this.Informacao_Encaminhada = false
    }

    // Executado assim que o componente é renderizado na tela
    firstUpdated() {
        
    }
    connectedCallback() {
        super.connectedCallback(); // ⚠️ Sempre chame o super PRIMEIRO no Lit
        this.Informacao_Encaminhada = this.Ficha?.EDUCACAO_CLIENTE?.Get_Encaminhado?.()??false;
    }

    Adicionar_item_Educacao = (categoria, data) => {
        this.Ficha.EDUCACAO_CLIENTE.Adicionar_Informacao(categoria, data)
    }

    Habilitar_Educacao_Cliente = (id, indice, categoria)=>{
        const ELEMENTO = `Elemento-${id}`;
        const INDICE = parseInt(indice)
        const Container = this.shadowRoot.getElementById(ELEMENTO);

        //Valida se estamos adicionando ou removendo o item da lista:

        if (this.Ficha.EDUCACAO_CLIENTE.Validar_Adicionado(id)){
            //Entra nessa condição se o item existir na lista, então removemos:
            Container.style.backgroundColor = "";
            this.Ficha.EDUCACAO_CLIENTE.Deletar_Informacao(id, categoria)

        }else{
            //Entra nessa condição se o item ainda n existir na lista

            if (categoria === "Educacao"){
            const DATA = LISTA_EDUCACAO_CLIENTE[INDICE];
            this.Adicionar_item_Educacao("Educacao", DATA)
            Container.style.backgroundColor = "var(--destaque-color)";

            }else if (categoria === "Atendimento"){
                const DATA = LISTA_SERVICOS_CLIENTE[INDICE];
                this.Adicionar_item_Educacao("Atendimento", DATA)
                Container.style.backgroundColor = "var(--destaque-color)";
            }else{
                const DATA = LISTA_SERVICOS_CLIENTE[INDICE];
                this.Adicionar_item_Educacao("Complemento", DATA)
                Container.style.backgroundColor = "var(--destaque-color)";
            }
        }

    }

    Set_Infirmacao_Encaminhada = (e) =>{
        const VALOR = e.target.value === "true"? true: false;
        this.Ficha.EDUCACAO_CLIENTE.Set_Encaminhado(VALOR);

        this.Informacao_Encaminhada = !VALOR;

    }


    render() {
        return html`
            <!--Retorno renderizado-->
            <h2>Informações Passadas ao Cliente</h2>
        
            <br>
            
            <ul id="lista-textos" class="lista-container">
                <!-- Exemplo estático de item (remova ou controle via JavaScript) -->
                ${LISTA_EDUCACAO_CLIENTE.map((item, chave)=>{
                    return html`
                        <li style="${this.Ficha?.EDUCACAO_CLIENTE?.Validar_Adicionado?.(item.id) ?? false ? 'background-color: var(--destaque-color)' : ''}"
                            class="item-lista"
                            id="Elemento-${item.id}"
                            @click="${()=>{this.Habilitar_Educacao_Cliente(item.id, chave, "Educacao",)}}">
                            <span class="texto-item">${item.titulo}</span>
                            <button 
                                class="btn-excluir" 
                                aria-label="Excluir item"
                                @click="${(e) => { 
                                    e.stopPropagation(); // Impede que o clique suba para o <li>
                                    console.log("Btn"); 
                                }}">
                                <icone-estudos></icone-estudos>
                            </button>
                        </li>
                    `
                })}
            </ul>
            <br>

            <h2>Atendimento Realizado no Cliente</h2>
          
            <br>
            <ul id="lista-textos" class="lista-container">
                <!-- Exemplo estático de item (remova ou controle via JavaScript) -->
                ${LISTA_SERVICOS_CLIENTE.map((item, chave)=>{
                    return html`
                        <li style="${this.Ficha?.EDUCACAO_CLIENTE?.Validar_Adicionado?.(item.id) ?? false ? 'background-color: var(--destaque-color)' : ''}"
                            class="item-lista"
                            id="Elemento-${item.id}"
                            @click="${()=>{this.Habilitar_Educacao_Cliente(item.id, chave, "Atendimento",)}}">
                            <span class="texto-item">${item.titulo}</span>
                            <button 
                                class="btn-excluir" 
                                aria-label="Excluir item"
                                @click="${(e) => { 
                                    e.stopPropagation(); // Impede que o clique suba para o <li>
                                    console.log("Btn"); 
                                }}">
                                <icone-estudos></icone-estudos>
                            </button>
                        </li>
                    `
                })}
            </ul>
            <br>
            <h2>Informações Extras Encaminhadas?</h2>
            <hr>
            <br>

            <p style="color:var(--color-text-info)">
                O Cliente aceitou receber as informações passadas via WhatsApp?
            </p>
            <br>
            <div @change="${this.Set_Infirmacao_Encaminhada}" class="radio-input">
                <label>
                    <input ?checked="" 
                    value="true" 
                    name="value-radio" 
                    id="value-1" 
                    type="radio" />
                    <span>S i m</span>
                </label>
                <label>
                    <input ?checked="" 
                    value="false" 
                    name="value-radio" 
                    id="value-2" 
                    type="radio" />
                    <span>N ã o</span>
                </label>
                <span class="selection"></span>
            </div>

            <br>
            ${this.Informacao_Encaminhada?html`
                <caixa-texto-os
                    Titulo = "Motivo de não Encaminhar:"
                    .Tamanho = ${5}
                    .Texto = ""
                    .Campo_Texto = ${this.Ficha.EDUCACAO_CLIENTE.Set_Relatorio.bind(this.Ficha)}
                    .Atualizar_BD = ${this.Ficha.Salvar_OS_Banco.bind(this.Ficha)}
                    categoria = "Outros"
                    Placeholder = "Descreva o motivo da decisão do cliente, ou o motivo pelo qual a mensagem não foi encaminhada via WhatsApp!"
                ></caixa-texto-os>    
            `:""}
            
            <h2>Informações Adicionais Passadas ao Cliente</h2>
            <hr><br>

            <p style="color:var(--color-text-info)">
                Caso você tenha passado mais alguma informação ao Cliente que não esteja listada acima, pode adicioná-la manualmente para complementar sua Ordem de Serviço!
            </p>
            
            <textarea
                @change=""
                @input=""
                placeholder=""
                id="" name="" rows="" cols="" class="form-textarea"
                .value=""></textarea>
            
            <button 
                @click=""
                type="button" class="form-button">Adicionar Informação Complementar</button>
        `;
    }
}

// 2. Em vez de @customElement, use o registro manual
customElements.define('componente-educacao-cliente', Componente_Educacao_Cliente);