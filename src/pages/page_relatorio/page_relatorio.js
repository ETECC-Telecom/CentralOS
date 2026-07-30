import { LitElement, html, css, unsafeCSS } from 'lit';
import globalStyle from "./index.css?inline";

import { Header_Page_OS } from '../../components/header_page_os/header_page_os';

import { disparar_notificacao } from '../../controller/disparar_notificacao';

//Componentes de Formulário
import { Grafico_Velocidade } from '../../components/componentes_graficos/grafico_velocidade/grafico_velocidade';
import { Componente_Raw_Log } from '../../components/componente_raw_log/componente_raw_log';
import { Componente_Raw_Log_Terminal } from '../../components/componente_raw_log_terminal/componente_raw_log_terminal';

export class Page_Relatorio extends LitElement {
    // 1. Em vez de @property, use o objeto static properties
    static properties = {
        objeto_relatorio: { type: Object },
        pings: { type: Object },
        tracerts: { type: Object },
        relatorio: {type:Boolean},
    };

    static get styles() {
        return css`${unsafeCSS(globalStyle)}`;
    }

    constructor() {
        super();
        this.objeto_os = {};
        this.pings = {};
        this.tracerts = {};
        this.relatorio = false;
    }

    async connectedCallback() {
        super.connectedCallback(); // ⚠️ Sempre chame o super PRIMEIRO no Lit

        const Relatorio = JSON.parse(localStorage.getItem("OS"));
        if (Relatorio.relatorio_externo !== null) {
            this.relatorio = true;
            this.objeto_os = Relatorio.relatorio_externo;
            console.log(this.objeto_os)
            //Estruturando os dados para Exibição - Velocidade

            this.pings = this.objeto_os.results.ping;
            this.tracerts = this.objeto_os.results.traceroute;
        }

    }

    // Executado assim que o componente é renderizado na tela
    firstUpdated() {
        
    }

    render() {

        return html`
            <!--Retorno renderizado-->
            <header-page-os
                titulo="Relatório da OS"
                retorno="/iniciar_os_completa/continue"
            ></header-page-os>

            <!-- Campo que irá conter os fomulários -->
            
            ${this.relatorio?html`
                <main>
                    <div class="container-pagina">

                        <h2>Relatório do NetScanQR</h2>
                        <div class="content-intro">
                            <p><strong>Hostname:</strong> ${this.objeto_os.host_info.hostname}</p>
                            <p><strong>OS:</strong> ${this.objeto_os.host_info.os}</p>
                            <p><strong>Versão:</strong> ${this.objeto_os.version}</p>
                        </div>

                        <h2>Velocidade</h2>

                        <div class="content-intro">
                            <p><strong>Local:</strong> ${this.objeto_os.results.speedtest.server.location}</p>
                            <p><strong>Servidor:</strong> ${this.objeto_os.results.speedtest.server.name}</p>
                            <p><strong>Ping:</strong> ${this.objeto_os.results.speedtest.data.ping_ms}</p>
                        </div>
                    
                        <div class="container-grafico-velocidade">
                            <grafico-velocidade 
                                .velocidade_alcancada="${this.objeto_os.results.speedtest.data.download_mbps}" 
                                .plano_total="${1000}"
                                titulo="Download">
                            </grafico-velocidade>
                            <grafico-velocidade 
                                .velocidade_alcancada="${this.objeto_os.results.speedtest.data.upload_mbps}" 
                                .plano_total="${1000}"
                                titulo="Upload">
                            </grafico-velocidade>
                        </div>
                        <componente-raw-log
                            .content="${this.objeto_os.results.speedtest.raw_log}"
                        ></componente-raw-log>
                    </div>

                    <div class="container-pagina">
                        <h2>Resumo dos Pings</h2>
                        ${this.pings.map((valor, chave) => {
                return html`
                                <h3>Ping 0${chave + 1}: ${valor.target} ( ${valor.protocol} )</h3>
                                <p><strong>Status:</strong> <span class="${valor.status === "fail" ? "span_falha" : "span_sucesso"}">${valor.status === "fail" ? "Falha" : "Sucesso"}<span></p>
                                    
                                <br>

                                <componente-raw-log-terminal
                                    rawlog="${valor.raw_log}"
                                ></componente-raw-log-terminal>
                                <br>
                                
                            `
            })}
                    </div>

                    <div class="container-pagina">
                        <h2>Resumo dos Tracert</h2>
                        
                        ${this.tracerts.map((valor, chave) => {
                return html`
                                <h3>Tracert 0${chave + 1}: ${valor.target} ( ${valor.protocol} )</h3>
                                <p><strong>Status:</strong> <span class="${valor.status === "fail" ? "span_falha" : "span_sucesso"}">${valor.status === "fail" ? "Falha" : "Sucesso"}<span></p>
                                <p><strong>Saltos:</strong> ${valor.hops.length}</p>
                                    
                                <br>

                                <componente-raw-log-terminal
                                    rawlog="${valor.raw_log}"
                                ></componente-raw-log-terminal>
                                <br>
                                
                            `
            })}
                    </div>

                    

                    

                    <br><br><br>
                </main>
            `:html`
                <h2 class="alerta">Não Existe dados de relatório</h2>
                <p class="alerta-paragraph">Essa página destaca os dados dos testes de estabilidade realizados na casa do cliente usando o NetScanQR. Se você não escaneou os resultados, eles não irão aparecer aqui. Agora se você escaneou esses dados, e ainda está recebendo esse Erro, relate o caso para a liderança.</p>
            `}
            
           
        `;
    }
}

// 2. Em vez de @customElement, use o registro manual
customElements.define('page-relatorio', Page_Relatorio);