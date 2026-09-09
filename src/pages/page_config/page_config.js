import { LitElement, html, css, unsafeCSS } from 'lit';
import globalStyle from "./index.css?inline";
import { disparar_notificacao } from '../../controller/disparar_notificacao';

import { Header_Page_OS } from '../../components/header_page_os/header_page_os';
import { Menu_Inferior } from '../../components/menu_inferior/menu_inferior';

import { Capturar_Usuario } from '../../controller/cadastrar_usuario';
import { Capturar_Chave_Api } from '../../controller/cadastrar_usuario';
import { Capturar_Link_Feedback } from '../../controller/cadastrar_usuario';

import { Cadastrar_Usuario } from '../../controller/cadastrar_usuario';
import { Cadastrar_Link_Feedback } from '../../controller/cadastrar_usuario';
import { Cadastrar_Chave_Api } from '../../controller/cadastrar_usuario';

import { exportar_logs } from '../../controller/logger';

export class Page_Config extends LitElement {
    // 1. Em vez de @property, use o objeto static properties
    static properties = {
        tecnico: { type: String },
        formulario: { type: String },
        API: { type: String },
    };

    static get styles() {
        return css`${unsafeCSS(globalStyle)}`;
    }

    constructor() {
        super();
        this.tecnico = "Nome não Informado";
        this.formulario = "";
        this.API = "";

    }

    // Executado assim que o componente é renderizado na tela
    firstUpdated() {

    }
    async connectedCallback() {
        super.connectedCallback(); // ⚠️ Sempre chame o super PRIMEIRO no Lit
        this.tecnico = await Capturar_Usuario();
        this.formulario = await Capturar_Link_Feedback();
        this.API = await Capturar_Chave_Api();
    }

    _atualizar_nome = (e) => {
        const FORMULARIO = this.renderRoot?.querySelector('#ftecnico');
        if (FORMULARIO.value !== "") {
            this.tecnico = FORMULARIO.value;
            Cadastrar_Usuario(FORMULARIO.value);
            disparar_notificacao("sucesso", "Novo nome cadastrado em sistema!")
        } else {
            disparar_notificacao("erro", "O Nome não pode estar vazio!")
        }
    }

    _atualizar_API = (e) => {
        const FORMULARIO = this.renderRoot?.querySelector('#fapi');
        if (FORMULARIO.value !== "") {
            this.API = FORMULARIO.value;
            Cadastrar_Chave_Api(FORMULARIO.value);
            disparar_notificacao("sucesso", "Nova chave cadastrado em sistema!")
        } else {
            disparar_notificacao("erro", "A chave não pode estar vazio!")
        }
    }

    _atualizar_formulario = (e) => {
        const FORMULARIO = this.renderRoot?.querySelector('#fformulario');
        if (FORMULARIO.value !== "") {
            this.formulario = FORMULARIO.value;
            Cadastrar_Link_Feedback(FORMULARIO.value);
            disparar_notificacao("sucesso", "Novo link cadastrado em sistema!")
        } else {
            disparar_notificacao("erro", "O link não pode estar vazio!")
        }
    }

    _exportar_log = async (e) =>{
        
        
        //GErar O Relatório
        try {
            const SCRIPT = await exportar_logs()

            navigator.clipboard.writeText(SCRIPT)
                .then(() => {

                    disparar_notificacao("sucesso", "Texto copiado com sucesso");

                })
                .catch(err => {
                    disparar_notificacao("erro", "Erro ao copiar o texto de Registro de LOG, informar o supervisor responsável:\n", err)

                });
        } catch (err) {
            disparar_notificacao("Erro ao tentar copiar o LOG para o clipboard!\n\n", err)
            
        }

    }

    render() {
        return html`
            <!--Retorno renderizado-->
            <header-page-os
                titulo="Configurações"
                retorno="/"
            ></header-page-os>
            <main>
                <br>
                <h2>${this.tecnico}</h2>
                <h3>Técnico</h3>
                <hr>
                <br>
                <h3>Dados da Conta</h3>
                <div class="container">
                    <div class="form-group;">
                        <label for="ftecnico" class="form-label">Nome do Usuário:</label>
                        <div style="display:flex;gap:.5rem; align-items: center;">
                            <input 
                                style="flex:8"
                                placeholder="${this.tecnico}" type="text" id="ftecnico" name="ftecnico" 
                                .value="" class="form-input">
                            <button 
                                @click="${this._atualizar_nome}"
                                style="flex:1;"
                                type="button" class="form-button")">
                                    <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="1.5rem" height="1.5rem" viewBox="0 0 143.933 143.933"><path d="M-333.784 790.039c-2.165-.648-4.898-3.234-5.905-5.589-.658-1.537-.795-12.11-.795-61.306 0-40.517.195-59.967.612-61.074.912-2.418 3.969-5.313 6.29-5.958 1.126-.313 3.28-.57 4.79-.572h2.742v48.316l1.343 2.545c.739 1.4 2.45 3.324 3.803 4.277l2.459 1.732h48.876l2.504-1.74c1.463-1.017 3.043-2.807 3.802-4.308 1.286-2.542 1.3-2.82 1.3-26.695V655.54l3.608.022c6.274.022 6.816.458 22.89 18.384 7.998 8.92 14.92 17.126 15.384 18.234.713 1.706.842 8.79.842 46.164 0 29.727-.2 44.68-.613 45.774-.911 2.417-3.968 5.313-6.29 5.958-2.564.712-105.258.689-107.642-.024zm97.765-12.358c2.29-2.073 2.39-3.304 2.22-27.324l-.163-23.207-1.887-1.887-1.887-1.887-39.101-.157c-28.59-.113-39.534.024-40.713.511-.886.367-2.122 1.317-2.746 2.11-1.088 1.383-1.136 2.457-1.136 25.57v24.127l1.773 1.773 1.772 1.772 38.21.149c21.015.08 39.191-.022 40.391-.21 1.2-.196 2.67-.8 3.267-1.34zm-79.639-15.91v-5.205l37.961.148 37.962.149v9.815l-37.962.148-37.96.149zm0-21.358v-5.2h76.256l-.166 5.05-.167 5.053-37.962.148-37.96.149zm.289-32.719c-2.364-1.246-4.254-3.034-5.396-5.102-.843-1.53-.955-4.38-.955-24.25v-22.517l27.28-.15 27.28-.15v22.545c0 20.984-.076 22.694-1.093 24.688-1.35 2.646-2.662 3.86-5.405 5.006-3.195 1.336-39.16 1.274-41.711-.072z" style="fill:white;stroke-width:1" transform="translate(351.828 -651.095)"/></svg>
                                </button>
                        </div>
                        <p>Esse nome será exibido no sistema do CentralOS</p>
                    </div>
                </div>

                <div class="container">
                    <div class="form-group;">
                        <label for="fapi" class="form-label">Chave da IA (API Key):</label>
                        <div style="display:flex;gap:.5rem; align-items: center;">
                            <input 
                                style="flex:8"
                                placeholder="${this.API}" type="text" id="fapi" name="fapi" 
                                .value="" class="form-input">
                            <button 
                                @click="${this._atualizar_API}"
                                style="flex:1;"
                                type="button" class="form-button")">
                                    <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="1.5rem" height="1.5rem" viewBox="0 0 143.933 143.933"><path d="M-333.784 790.039c-2.165-.648-4.898-3.234-5.905-5.589-.658-1.537-.795-12.11-.795-61.306 0-40.517.195-59.967.612-61.074.912-2.418 3.969-5.313 6.29-5.958 1.126-.313 3.28-.57 4.79-.572h2.742v48.316l1.343 2.545c.739 1.4 2.45 3.324 3.803 4.277l2.459 1.732h48.876l2.504-1.74c1.463-1.017 3.043-2.807 3.802-4.308 1.286-2.542 1.3-2.82 1.3-26.695V655.54l3.608.022c6.274.022 6.816.458 22.89 18.384 7.998 8.92 14.92 17.126 15.384 18.234.713 1.706.842 8.79.842 46.164 0 29.727-.2 44.68-.613 45.774-.911 2.417-3.968 5.313-6.29 5.958-2.564.712-105.258.689-107.642-.024zm97.765-12.358c2.29-2.073 2.39-3.304 2.22-27.324l-.163-23.207-1.887-1.887-1.887-1.887-39.101-.157c-28.59-.113-39.534.024-40.713.511-.886.367-2.122 1.317-2.746 2.11-1.088 1.383-1.136 2.457-1.136 25.57v24.127l1.773 1.773 1.772 1.772 38.21.149c21.015.08 39.191-.022 40.391-.21 1.2-.196 2.67-.8 3.267-1.34zm-79.639-15.91v-5.205l37.961.148 37.962.149v9.815l-37.962.148-37.96.149zm0-21.358v-5.2h76.256l-.166 5.05-.167 5.053-37.962.148-37.96.149zm.289-32.719c-2.364-1.246-4.254-3.034-5.396-5.102-.843-1.53-.955-4.38-.955-24.25v-22.517l27.28-.15 27.28-.15v22.545c0 20.984-.076 22.694-1.093 24.688-1.35 2.646-2.662 3.86-5.405 5.006-3.195 1.336-39.16 1.274-41.711-.072z" style="fill:white;stroke-width:1" transform="translate(351.828 -651.095)"/></svg>
                                </button>
                        </div>
                        <p>Insira sua chave de integração para usar os recursos da IA.</p>
                    </div>
                </div>

                <div class="container">
                    <div class="form-group;">
                        <label for="fformulario" class="form-label">URL do Formulário de Pesquisa:</label>
                        <div style="display:flex;gap:.5rem; align-items: center;">
                            <input 
                                style="flex:8"
                                placeholder="${this.formulario}" type="text" id="fformulario" name="fformulario" 
                                .value="" class="form-input">
                            <button 
                                @click="${this._atualizar_formulario}"
                                style="flex:1;"
                                type="button" class="form-button")">
                                    <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="1.5rem" height="1.5rem" viewBox="0 0 143.933 143.933"><path d="M-333.784 790.039c-2.165-.648-4.898-3.234-5.905-5.589-.658-1.537-.795-12.11-.795-61.306 0-40.517.195-59.967.612-61.074.912-2.418 3.969-5.313 6.29-5.958 1.126-.313 3.28-.57 4.79-.572h2.742v48.316l1.343 2.545c.739 1.4 2.45 3.324 3.803 4.277l2.459 1.732h48.876l2.504-1.74c1.463-1.017 3.043-2.807 3.802-4.308 1.286-2.542 1.3-2.82 1.3-26.695V655.54l3.608.022c6.274.022 6.816.458 22.89 18.384 7.998 8.92 14.92 17.126 15.384 18.234.713 1.706.842 8.79.842 46.164 0 29.727-.2 44.68-.613 45.774-.911 2.417-3.968 5.313-6.29 5.958-2.564.712-105.258.689-107.642-.024zm97.765-12.358c2.29-2.073 2.39-3.304 2.22-27.324l-.163-23.207-1.887-1.887-1.887-1.887-39.101-.157c-28.59-.113-39.534.024-40.713.511-.886.367-2.122 1.317-2.746 2.11-1.088 1.383-1.136 2.457-1.136 25.57v24.127l1.773 1.773 1.772 1.772 38.21.149c21.015.08 39.191-.022 40.391-.21 1.2-.196 2.67-.8 3.267-1.34zm-79.639-15.91v-5.205l37.961.148 37.962.149v9.815l-37.962.148-37.96.149zm0-21.358v-5.2h76.256l-.166 5.05-.167 5.053-37.962.148-37.96.149zm.289-32.719c-2.364-1.246-4.254-3.034-5.396-5.102-.843-1.53-.955-4.38-.955-24.25v-22.517l27.28-.15 27.28-.15v22.545c0 20.984-.076 22.694-1.093 24.688-1.35 2.646-2.662 3.86-5.405 5.006-3.195 1.336-39.16 1.274-41.711-.072z" style="fill:white;stroke-width:1" transform="translate(351.828 -651.095)"/></svg>
                                </button>
                        </div>
                        <p>Link para o formulário de Feedback dos clientes.</p>
                    </div>
                    
                </div>

                <div class="container">
                    <div class="form-group;">
                        <label for="formulario" class="form-label">LOGS de ERROS:</label>
                        <br><br>
                        <div style="display:flex;gap:.5rem; align-items: center;">
                            <button 
                                @click="${this._exportar_log}"
                                style="flex:1;"
                                type="button" class="form-button")">
                                Exportar LOGs
                            </button>
                        </div>
                        <br>
                        <p>Botão para exportar os ultimos logs de erro registrados em sistema.</p>
                    </div>
                    
                </div>

                
            <br><br><br><br>
            </main>
            <menu-inferior></menu-inferior>
        `;
    }
}

// 2. Em vez de @customElement, use o registro manual
customElements.define('page-config', Page_Config);