import { LitElement, html, css, unsafeCSS } from 'lit';
import globalStyle from "./index.css?inline";

import { Icone_Cadeado } from '../icones/icone_cadeado';
import { Icone_Retorno } from '../icones/icone_retorno';

import { Comparar_PIN } from '../../model/service_PIN';
import { Verificar_Cadastro_PIN } from '../../model/service_PIN';
import { Cadastrar_PIN } from '../../model/service_PIN';

import { disparar_notificacao } from '../../controller/disparar_notificacao';

export class Componente_PIN extends LitElement {
    // 1. Em vez de @property, use o objeto static properties
    static properties = {
        funcao: { type: Function },
        exibir: { type: Boolean },
        pin: { type: Array },
        mensagem: { type: String },
        novo_cadastro: { type: Boolean },
        alterar_cadastro: { type: Boolean },
        liberado_alterar_cadastro: { type: Boolean },
    };

    static get styles() {
        return css`${unsafeCSS(globalStyle)}`;
    }

    constructor() {
        super();
        this.exibir = false;
        this.pin = [];
        this.mensagem = "Digite seu PIN";
        this.novo_cadastro = false;
        this.alterar_cadastro = false;
        this.liberado_alterar_cadastro = false;

    }

    // Executado assim que o componente é renderizado na tela
    firstUpdated() {

    }

    mostrar_pin = () => {
        this.exibir = true;
    }

    connectedCallback() {
        super.connectedCallback(); // ⚠️ Sempre chame o super PRIMEIRO no Lit

        window.addEventListener('disparar-pin', (evento) => {
            const { callback } = evento.detail;
            this.funcao = callback
            this.mostrar_pin();
            this.pin = [];

            if (!Verificar_Cadastro_PIN()) {
                this.novo_cadastro = true;
                this.mensagem = "Cadastre um novo PIN"
            }
            this.alterar_cadastro = false;
            this.liberado_alterar_cadastro = false;
            this.mensagem = "Digite seu PIN";
        });
    }

    _valida_pin = () => {

        const PIN = this.pin.join("");
        const LIBERADO = Comparar_PIN(PIN);

        if (LIBERADO) {
            this.funcao();
            this.exibir = false;
        } else {
            this.exibir = false;
            disparar_notificacao("erro", "PIN Incorreto!")
        }

    }
    _cadastrar_pin = () => {
        const PIN = this.pin.join("");
        Cadastrar_PIN(PIN);

        this.exibir = false;
        this.novo_cadastro = false;
        this.mensagem = "Digite seu PIN"
        disparar_notificacao("sucesso", "Novo PIN cadastrado com sucesso!")
    }

    _iniciar_alterar_PIN = () => {
        this.pin = [];
        this.mensagem = "Digite o PIN Atual"
        this.alterar_cadastro = true;

    }

    _alterar_pin = () => {
       
        const PIN = this.pin.join("");

        console.log(this.alterar_cadastro !== this.liberado_alterar_cadastro)

        if (this.alterar_cadastro !== this.liberado_alterar_cadastro) {

            const LIBERADO = Comparar_PIN(PIN);
            if (LIBERADO) {
                this.mensagem = "Digite o Novo PIN";
                this.liberado_alterar_cadastro = true;
                this.pin = [];
                return;
            } else {
                this.mensagem = html`<span style="color: var(--color_error)">PIN Incorreto, tente novamente</span>`;
                this.pin = [];
                return;
            }
        } else if (this.alterar_cadastro === this.liberado_alterar_cadastro) {
            Cadastrar_PIN(PIN);
            this.exibir = false;
            this.alterar_cadastro = false;
            this.alterar_cadastro = false;
            this.mensagem = "Digite seu PIN"
            disparar_notificacao("sucesso", "Novo PIN cadastrado com sucesso!")
        } else {
            return
        }
    }

    _adicionar_digito = (e) => {


        // Verifica se o usuário não está removendo um valor adicionado
        if (e === "r") {
            this.pin = this.pin.slice(0, -1);
            return
        }

        //Verifica se o usuário está encerrando a janela
        if (e === "c") {
            this.exibir = false;
            return
        }

        //Valida se o tamanho do Pin já é igual a 6:

        if (this.pin.length === 6) {
            if (this.novo_cadastro) {
                this._cadastrar_pin();
                return
            }
            if (this.alterar_cadastro) {
                this._alterar_pin();
                return
            }
            this._valida_pin()
            return
        }

        //Adiciona novo digito ao PIN.
        this.pin = [...this.pin, e];

        if (this.pin.length === 6) {
            if (this.novo_cadastro) {
                this._cadastrar_pin();
                return
            }
            if (this.alterar_cadastro) {
                this._alterar_pin();
                return
            }
            this._valida_pin()
            return
        }
    }

    render() {
        return html`
            <!--Retorno renderizado-->
            ${this.exibir ? html`
            <div class="container">
                <div style="display:flex; align-items: center; flex-direction:column; padding: 5rem 0.5rem 0.5rem 1rem; gap:1rem">
                    <icone-cadeado style="--icon-size: 5rem; --icon-color: var(--cards-background)"></icone-cadeado>
                    <h2 style="color: var(--cards-background)">${this.mensagem}</h2>
                    
                    <div style="display:flex; gap:.5rem; height:70px;">
                        ${this.pin.map(item => {
            return html`
                                <div class="pin-digit">
                                    <p>${item}</p>
                                </div>
                            `
        })}
                        
                    </div>
                    <br>
                    <div style="display:flex; flex-direction:column;gap:1.5rem;">                    
                        <div style="display:flex; flex-direction:row; gap:1.5rem;">
                            <p 
                                class="button-pin"
                                @click="${e => this._adicionar_digito(1)}"
                                >1</p>
                            <p 
                                class="button-pin"
                                @click="${e => this._adicionar_digito(2)}"
                                >2</p>
                            <p 
                                class="button-pin"
                                @click="${e => this._adicionar_digito(3)}"
                                >3</p>
                        </div>
                        <div style="display:flex; flex-direction:row; gap:1.5rem;">
                            <p 
                                class="button-pin"
                                @click="${e => this._adicionar_digito(4)}"
                                >4</p>
                            <p 
                                class="button-pin"
                                @click="${e => this._adicionar_digito(5)}"
                                >5</p>
                            <p 
                                class="button-pin"
                                @click="${e => this._adicionar_digito(6)}"
                                >6</p>
                        </div>
                        <div style="display:flex; flex-direction:row; gap:1.5rem;">
                            <p 
                                class="button-pin"
                                @click="${e => this._adicionar_digito(7)}"
                                >7</p>
                            <p 
                                class="button-pin"
                                @click="${e => this._adicionar_digito(8)}"
                                >8</p>
                            <p 
                                class="button-pin"
                                @click="${e => this._adicionar_digito(9)}"
                                >9</p>
                        </div>
                        <div style="display:flex; flex-direction:row; gap:1.5rem;justify-content: center;">
                            <p 
                                class="button-pin"
                                @click="${e => this._adicionar_digito("c")}"
                                >C</p>
                            <p 
                                class="button-pin"
                                @click="${e => this._adicionar_digito(0)}"
                                >0</p>
                            <p 
                                class="button-pin"
                                @click="${e => this._adicionar_digito("r")}"
                                ><icone-retorno style="--icon-size: 2rem;"></icone-retorno></p>                            
                        </div>
                    </div>
                    ${!this.novo_cadastro ? html`
                    <h3 
                        @click="${this._iniciar_alterar_PIN}"
                        class="btn_alterar">Alterar PIN</h3>
                    `: ""}
                <div>        
        
            </div>    
            `: ""}
        `;
    }
}

// 2. Em vez de @customElement, use o registro manual
customElements.define('componente-pin', Componente_PIN);


export const Disparar_PIN = (callback) => {
    window.dispatchEvent(new CustomEvent('disparar-pin', {
        detail: {
            callback: callback,
        }
    }));
}