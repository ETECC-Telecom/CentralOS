import { LitElement, html, css, unsafeCSS } from 'lit';
import globalStyle from "./index.css?inline";

import { Header_Page_OS } from '../../../components/header_page_os/header_page_os';

//Icones
import { Icone_Teste_Rede } from '../../../components/icones/icone_teste_rede';
import { Icone_Soft_Skill } from '../../../components/icones/icone_soft_skill';
import { Icone_Concluir_Capacitacao } from '../../../components/icones/icone_concluir_capacitacao';
import { Icone_Concluir_OS } from '../../../components/icones/icome_concluir_OS';

//Controller_OS_Completa
import Controller_OS_Completa_Ficha from '../../../controller/Ordens_Servico/Controller_OS_Completa';

//Componentes
import { Caixa_Texto_OS } from '../../../components/Componentes_Ordens_Servico/caixa_texto/caixa_texto';
import { Componente_Acoes_Completa } from '../../../components/Componentes_Ordens_Servico/Componente_Acoes_Completa/componente_acoes_completas';

import { Componente_Cliente } from '../../../components/Componentes_Ordens_Servico/Componente_Cliente/Componente_Cliente';
import { Componente_Informacoes_Completa } from '../../../components/Componentes_Ordens_Servico/Componente_Infomacao_Completa/Componente_Infomacao_Completa';
import { Componente_Coordenada } from '../../../components/Componentes_Ordens_Servico/Componente_Coordenadas/Componente_Coordenadas';

import { Componente_Educacao_Cliente } from '../../../components/Componentes_Ordens_Servico/Componente_Educacao_Cliente/Componente_Educacao_Cliente';

export class Page_Ordem_Servico_Completa_Remaster extends LitElement {
    // 1. Em vez de @property, use o objeto static properties
    static properties = {
        abaAtiva: { type: String },
    };

    static get styles() {
        return css`${unsafeCSS(globalStyle)}`;
    }

    constructor() {
        super();
        this.abaAtiva = 'aba3';
        this.Ficha = {}
    }

    // Executado assim que o componente é renderizado na tela
    firstUpdated() {

    }
    async connectedCallback() {
        super.connectedCallback(); // ⚠️ Sempre chame o super PRIMEIRO no Lit
        this.Ficha = new Controller_OS_Completa_Ficha();
        this.Ficha.SET_Data_Criacao();
        console.log(this.Ficha.Gerar_Estrutura_Banco());
        await this.Ficha.COORDENADAS.Definir_Coordenadas();
        

    }

    // A função que você pediu: recebe o evento e o nome da aba a ativar
    _alterarAba(evento, nomeAba) {
        evento.preventDefault(); // Caso seja um link ou submit
        this.abaAtiva = nomeAba; // O Lit vai notar a mudança e re-renderizar a tela
        localStorage.setItem('aba', nomeAba);
    }

    render() {
        return html`
            <!--Retorno renderizado-->
            <header-page-os
                titulo="Orden de Serviço Completa"
                retorno="/"
            ></header-page-os>
            
            <!-- Campo que irá conter os elementos -->
            <main id="container-form">
                
                ${this.abaAtiva === 'aba1' ? html`
                    <div class="container-item">
                        <h1>Tratativa Inicial com Cliente</h1>
                        <hr><br>
                        
                        <componente-cliente
                            .Ficha=${this.Ficha}
                            ></componente-cliente>
                        <br>

                        <componente-coordenada
                            .Ficha=${this.Ficha}
                            ></componente-coordenada>
                        <br>

                        <componente-informacao-completa
                            .Ficha=${this.Ficha}
                            ></componente-informacao-completa>

                        <br><br><br>
                       
                    </div>
                ` : ''}
 

                ${this.abaAtiva === 'aba2' ? html`
                    <div class="container-item">
                        <h1>Conferência Técnica Completa</h1>
                        <hr>
                        
                        <br><br><br><br>

                    </div>
                ` : ''}

                ${this.abaAtiva === 'aba3' ? html`
                    <div class="container-item">
                        <h1>Educação do Cliente</h1>
                        <hr>
                        <componente-educacao-cliente
                            .Ficha=${this.Ficha}
                            ></componente-educacao-cliente>

                        <br><br><br><br><br>
                    </div>
                ` : ''}

                ${this.abaAtiva === 'aba4' ? html`
                    <div class="container-item">
                        <h1>Finalização do Script</h1>
                        <hr>
                        <caixa-texto-os
                            Titulo = "Relatorio Adicional do Atendimento"
                            .Tamanho = ${10}
                            .Texto = ${this.Ficha.GET_Relatorio_Adicional()}
                            .Campo_Texto = ${this.Ficha.SET_Relatorio_Adicional.bind(this.Ficha)}
                            .Atualizar_BD = ${this.Ficha.Salvar_OS_Banco.bind(this.Ficha)}
                            categoria = "Outros"
                            Placeholder = "Adicione aqui qualquer complemento do atendimento"
                        ></caixa-texto-os>
                        <br>

                        <caixa-texto-os
                            Titulo = "Relatorio de Atraso"
                            .Tamanho = ${5}
                            .Texto = ${this.Ficha.GET_Relatorio_Atraso()}
                            .Campo_Texto = ${this.Ficha.SET_Relatorio_Atraso.bind(this.Ficha)}
                            .Atualizar_BD = ${this.Ficha.Salvar_OS_Banco.bind(this.Ficha)}
                            categoria = "Outros"
                            Placeholder = "Caso o atendimento tenha gerado algum atraso ao técnico, por favor, registre o motivo nessa campo de texto!"
                        ></caixa-texto-os>

                        <br>

                        <caixa-texto-os
                            Titulo = "Relatorio de Teste Externo (.BAT)"
                            .Tamanho = ${5}
                            .Texto = ${this.Ficha.GET_Relatorio_Externo()}
                            .Campo_Texto = ${this.Ficha.SET_Relatorio_Externo.bind(this.Ficha)}
                            .Atualizar_BD = ${this.Ficha.Salvar_OS_Banco.bind(this.Ficha)}
                            categoria = "Outros"
                            Placeholder = "Se o teste foi realizado pelo arquivo .bat, vincule o RELATÓRIO RESUMIDO nesse campo de texto!"
                        ></caixa-texto-os>

                        <hr>
                        <componente-acao-completa
                            .Ficha=${this.Ficha}
                            .Liberar_Export_Simples=${true}
                            .Liberar_Export_MD=${true}
                        ></componente-acao-completa>
                        <br><br><br>
                    </div>
                ` : ''}
                    <br><br><br>
            </main>
            <nav>
                <a 
                    class="${this.abaAtiva === 'aba1' ? 'ativo' : ''}"
                    @click="${(e) => this._alterarAba(e, 'aba1')}">
                    <icone-softskill></icone-softskill>
                    <br>
                    <p>TRATATIVA</p>
                </a>
                <a 
                    class="${this.abaAtiva === 'aba2' ? 'ativo' : ''}"
                    @click="${(e) => this._alterarAba(e, 'aba2')}">
                    <icone-teste-rede></icone-teste-rede>
                    <br>
                    <p>TESTES</p>
                </a>
                <a 
                    class="${this.abaAtiva === 'aba3' ? 'ativo' : ''}"
                    @click="${(e) => this._alterarAba(e, 'aba3')}">
                    <icone-concluir-capacitacao></icone-concluir-capacitacao>
                    <br>
                    <p>EDUCAÇÃO</p>
                </a>
                <a 
                    class="${this.abaAtiva === 'aba4' ? 'ativo' : ''}"
                    @click="${(e) => this._alterarAba(e, 'aba4')}">
                    <icone-concluir-os></icone-concluir-os>
                    <br>
                    <p>ENCERRAR</p>
                </a>

                
            </nav>
        `;
    }
}

// 2. Em vez de @customElement, use o registro manual
customElements.define('page-os-completa-remaster', Page_Ordem_Servico_Completa_Remaster);