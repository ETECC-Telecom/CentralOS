import { LitElement, html, css, unsafeCSS } from 'lit';
import globalStyle from "./index.css?inline";

import { LISTA_PARENTESCO } from '../../../data/Lista_de_Parentesco';

import { Caixa_Texto_OS } from '../caixa_texto/caixa_texto';

export class Componente_Cliente extends LitElement {
    // 1. Em vez de @property, use o objeto static properties
    static properties = {
        Ficha:{type:Object},
        outro_parentesco:{type:Boolean},
    };

    static get styles() {
        return css`${unsafeCSS(globalStyle)}`;
    }

    constructor() {
        super();
        this.Ficha = {}
        this.outro_parentesco = false
    }

    // Executado assim que o componente é renderizado na tela
    firstUpdated() {

    }
    connectedCallback() {
        super.connectedCallback(); // ⚠️ Sempre chame o super PRIMEIRO no Lit
        
        //Valida se o Parentesco atual é igual a Outros para exibir a caixa de texto
        const Validar_Outros = this.Ficha.CLIENTE.Get_Parentesco(true)[1];
        if (Validar_Outros === "Outros") this.outro_parentesco = true;
    }

    _Set_Nome_Cliente = () =>{
        const Nome = this.shadowRoot.getElementById("Nome_Cliente");
        
        if (Nome.value.length === 0){
            this.Ficha.CLIENTE.Set_Nome_Cliente(null)
            this.Ficha.Salvar_OS_Banco();
            return
        }else{
            this.Ficha.CLIENTE.Set_Nome_Cliente(Nome.value)
            this.Ficha.Salvar_OS_Banco();
        }
    }
    _Get_Nome_Cliente = () => {
        const NOME = this.Ficha?.CLIENTE?.Get_Nome_Cliente()??[false, ""];

        if (NOME[0]){
            return NOME[1];
        }else{
            return ""
        }
    }

    _Get_Relato_Cliente = () => {
        const RELATO = this.Ficha?.CLIENTE?.Get_Relato_cliente()??[false, ""];

        if (RELATO[0]){
            return RELATO[1];
        }else{
            return ""
        }
    }

    _Set_Parentesco_Cliente = () => {
        const PARENTESCO = this.shadowRoot.getElementById("parentesco");

        if (PARENTESCO.value === "Outros"){
            this.outro_parentesco = true;
        }else{
            this.outro_parentesco = false;
        }

        this.Ficha.CLIENTE.Set_Parentesco(PARENTESCO.value)
        this.Ficha.Salvar_OS_Banco();
        
    }

    //Usado para definir qual valor entra como padrão no Select de Parentesco
    _Valida_Parentesco_Atual = (Parentesco) =>{
        const PARENTESCO = this.Ficha?.CLIENTE?.Get_Parentesco?.(true) ?? [true, "Titular"]
        
        if (PARENTESCO[1] === Parentesco){
            return true
        }else{
            false
        }
    }

    _Set_Cadastro_Cliente = () =>{
        const Nome = this.shadowRoot.getElementById("Nome_Cadastro");
        
        if (Nome.value.length === 0){
            this.Ficha.CLIENTE.Set_Nome_Cadastro(null)
            this.Ficha.Salvar_OS_Banco();
            return
        }else{
            this.Ficha.CLIENTE.Set_Nome_Cadastro(Nome.value)
            this.Ficha.Salvar_OS_Banco();
        }
    }
    _Get_Cadastro_Cliente = () => {
        const NOME = this.Ficha?.CLIENTE?.Get_Nome_Cadastro()??[false, ""];

        if (NOME[0]){
            return NOME[1];
        }else{
            return ""
        }
    }

    _Set_Telefone_Cliente = () =>{
        const Nome = this.shadowRoot.getElementById("Telefone");
        
        if (Nome.value.length === 0){
            this.Ficha.CLIENTE.Set_Telefone(null)
            this.Ficha.Salvar_OS_Banco();
            return
        }else{
            this.Ficha.CLIENTE.Set_Telefone(Nome.value)
            this.Ficha.Salvar_OS_Banco();
        }
    }
    _Get_Telefone_Cliente = () => {
        const NOME = this.Ficha?.CLIENTE?.Get_Telefone()??[false, ""];

        if (NOME[0]){
            return NOME[1];
        }else{
            return ""
        }
    }

    _Set_Outro_Parentesco = () =>{
        const Nome = this.shadowRoot.getElementById("Outro_Parentesco");
        
        if (Nome.value.length === 0){
            this.Ficha.CLIENTE.Set_Parentesco_info(null)
            this.Ficha.Salvar_OS_Banco();
            return
        }else{
            this.Ficha.CLIENTE.Set_Parentesco_info(Nome.value)
            this.Ficha.Salvar_OS_Banco();
        }
    }
    _Get_Outro_Parentesco = () => {
        const NOME = this.Ficha?.CLIENTE?.Get_Parentesco_info()??[false, ""];

        if (NOME[0]){
            return NOME[1];
        }else{
            return ""
        }
    }

    render() {
        return html`
            <!--Retorno renderizado-->
            <div class="form-group">
                <label for="fname" class="form-label">Nome do Cliente/Acompanhante:</label>
                <input 
                    @change="${this._Set_Nome_Cliente}"
                    placeholder="" type="text" id="Nome_Cliente" name="Nome_Cliente"
                    value="${this._Get_Nome_Cliente()}" 
                    class="form-input">
            </div>

            <div class="form-group">
                <label for="parentesco" class="form-label">Qual o Parentesco?</label>
                <select 
                    @change="${this._Set_Parentesco_Cliente}"
                    id="parentesco" name="parentesco" class="form-select">
                    ${LISTA_PARENTESCO.map((item, indice) =>{
                        return html`<option ?selected="${this._Valida_Parentesco_Atual(item)}" value="${item}">${item}</option>`
                    })}
                    
                </select>
            </div>
            ${this.outro_parentesco?html`
                <div class="form-group">
                    <label for="fname" class="form-label">Parentesco em caso de "Outros"</label>
                    <input 
                        @change="${this._Set_Outro_Parentesco}"
                        placeholder="" type="text" id="Outro_Parentesco" name="Outro_Parentesco"
                        value="${this._Get_Outro_Parentesco()}" 
                        class="form-input">
                </div>
            `:""}

            <div class="callout callout-warning">
                <div class="callout-icon">
                    ⚠️
                </div>
                <div class="callout-content">
                    <h4 class="callout-title">Atenção Necessária</h4>
                    <p>O Cadastro do Cliente deve ser preenchido para o Resgistro e Geração de Mensagens altomáticas!</p>
                </div>
            </div>
        
            <div style="display:flex; gap:.5rem;">
                <div class="form-group">
                    <label for="fname" class="form-label">Cadastro do Cliente:</label>
                    <input 
                        @change="${this._Set_Cadastro_Cliente}"
                        placeholder="" type="text" id="Nome_Cadastro" name="Nome_Cadastro"
                        value="${this._Get_Cadastro_Cliente()}" 
                        class="form-input">
                </div>

                <div class="form-group">
                    <label for="fname" class="form-label">Telefone:</label>
                    <input 
                        @change="${this._Set_Telefone_Cliente}"
                        placeholder="" type="text" id="Telefone" name="Telefone"
                        value="${this._Get_Telefone_Cliente()}" 
                        class="form-input">
                </div>
            </div>

            <caixa-texto-os
                Titulo = "Relato do Cliente"
                .Tamanho = ${10}
                .Texto = ${this._Get_Relato_Cliente()}
                .Campo_Texto = ${this.Ficha.CLIENTE.Set_Relato_cliente.bind(this.Ficha)}
                .Atualizar_BD = ${this.Ficha.Salvar_OS_Banco.bind(this.Ficha)}
                categoria = "Relato do Cliente"
                Placeholder = "Adicione aqui qualquer complemento do atendimento"
            ></caixa-texto-os>
        `;
    }
}

// 2. Em vez de @customElement, use o registro manual
customElements.define('componente-cliente', Componente_Cliente);