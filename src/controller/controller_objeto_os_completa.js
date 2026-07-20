import { disparar_notificacao } from "./disparar_notificacao";
import { Capturar_Nome_Tecnico } from "./capturar_nome_tecnico";
import educacao_cliente from "/src/data/educacao_cliente.json";
import atendimento_cliente from "/src/data/atendimento_cliente.json";

export default class Controller_Objeto_OS_Completa {
    constructor(estrura_os = {}) {
        this.OS = estrura_os;
    }

    //Usado para Salvar a estrutura de OS no local storage
    salvar_os_localstorage() {

        localStorage.setItem('OS', JSON.stringify(this.OS));
        return
    }

    //usado para carregar o objeto que já está carregado no banco;
    carregar_os_localstorage() {
        const OS_SALVA = JSON.parse(localStorage.getItem('OS'));
        this.OS = OS_SALVA;

        return
    }

    // Verificar se a OS está em aberto
    verificar_os_localstorage = () => {
        const OS_SALVA = JSON.parse(localStorage.getItem('OS'));
        if (OS_SALVA === null) {
            return
        }

        return OS_SALVA.config_OS.tipo_os;
    }

    //Carregar a Localização do técnico:
    carregar_latitude_longitude(data = null) {
        if (data === null) {

            disparar_notificacao("erro", "O Valor retornado ao método é Nulo")
            return
        }

        this.OS.endereco_info_os.coordenadas.latitude = data.latitude;
        this.OS.endereco_info_os.coordenadas.longitude = data.longitude;
        this.OS.endereco_info_os.coordenadas.precisao = data.precisao;

        this.salvar_os_localstorage();
    }

    // Função para Exportar a mensagem encaminhada ao Cliente:
    Export_Mensagem_Encaminhada_Cliente = () => {

        let nome_tecnico = Capturar_Nome_Tecnico();

        let corpo = `Boa tarde! 😊\n\nAqui é *${nome_tecnico}* da Etecc Telecom, fui quem realizou o seu atendimento técnico. Para deixar tudo bem organizado e registrado, vou te encaminhar um resumo com os principais pontos que conversamos.\n\nNesse descritivo também incluí algumas orientações técnicas importantes que vão te ajudar bastante no dia a dia.\n\nQualquer dúvida que surgir depois, estamos à disposição 24h pelo *(13) 3421-1999*, combinado? 👍\n\nAvalie seu atendimento em menos de 1 minuto.\n Sua opinião faz toda a diferença!\n\nhttps://forms.gle/MVCCx1YfLhKVsh9i8\n\n`;

        //logica da estrutura da lista de infomações passadas ao cliente:
        let estaVazio = Object.keys(this.OS.educacao_cliente).length === 0;

        if (!estaVazio) {
            let chaves = Object.keys(this.OS.educacao_cliente);
            corpo += "> *Orientações Técnicas:*\n\n"
            chaves.map(chave => {
                corpo += `- ${educacao_cliente[chave].descricao}\n\n`;
            })

        }

        // Adicionando as Informações complementares, casos existam:
        estaVazio = this.OS.complemento_atendimento.length === 0;

        if (!estaVazio) {
            this.OS.complemento_atendimento.map(item => {
                corpo += `- ${item}\n\n`;
            })
        }

        //Estruturando o atendimento ao cliente:
        estaVazio = Object.keys(this.OS.atendimento_cliente).length === 0;

        if (!estaVazio) {
            let chaves = Object.keys(this.OS.atendimento_cliente);
            corpo += "> *Atendimento ao Cliente:*\n\n"
            chaves.map(chave => {
                corpo += `- ${atendimento_cliente[chave].descricao}\n\n`;
            })

        }

        return corpo;

    }


    //Função para Finalizar OS: 
    /*
        Essa função irá encerrar a OS gerando os script de info passadas ao cliente, e script final. A ideia é que, ao ser executada, ela faça algumas verificações
        Consulte a documentação do projeto!
    */

    /*
---------------------------------------------------------------------------------------------------------------------------------------------
        Funções Relacionadas a Exportação do Relatório Completo para Anexo no MK!
---------------------------------------------------------------------------------------------------------------------------------------------
    */
    Finalizar_OS_Simplificado = () => {
        let script = '==========================================================================\n';
        script += '                    ORDEM DE SERVIÇO - COMPLETA\n';
        script += '==========================================================================\n\n';
        //Construindo o Script a partir de suas Funções Construtoras
        //Header do Script:
        script += this.abertura_script_simples();

        //Conferências técnicas:

        script += '\n==========================================================================\n';
        script += '\t\t\tCONFERÊNCIA TÉCNICA\n';
        script += '==========================================================================\n\n';

        script += this.conferencia_tecnica_script_simples();

        //Relatório Final:

        script += this.relatorio_visita_simples();

        // Retornando o script Montado.
        return script;
    }

    abertura_script_simples = () => {
        let corpo;

        //Construindo as coordenadas
        let mapa;
        if (this.OS.endereco_info_os.coordenadas.latitude === null) {
            mapa = "Não foi possível capturar as Coordenadas!"
        } else {
            mapa = `https://www.google.com/maps?q=${this.OS.endereco_info_os.coordenadas.latitude},${this.OS.endereco_info_os.coordenadas.longitude}\nPrecisão.............: ${this.OS.endereco_info_os.coordenadas.precisao} Metros`;
        }

        //contruindo o parentesco
        let parentesco = "";
        if (this.OS.info_cliente.parentesco === "Outro") {
            parentesco = this.OS.info_cliente.parentesco_info === null ? "Parentesco não informado" : this.OS.info_cliente.parentesco_info;
        } else {
            parentesco = this.OS.info_cliente.parentesco;
        }

        //construindo a formatação da data:

        const data_original = this.OS.config_OS.data_criacao;
        // 1. Converte a string para um objeto ZonedDateTime
        const zonedDateTime = Temporal.ZonedDateTime.from(data_original);
        // 2. Transforma de volta em string, ocultando o nome do fuso horário
        const data_formatada = zonedDateTime.toString({ timeZoneName: 'never' });


        //Construindo a Introdução
        corpo = `Criado..............: ${data_formatada}\nCliente.............: ${this.OS.info_cliente.nome_cadastro === null ? "Não Informado" : this.OS.info_cliente.nome_cadastro}\nTelefone............: ${this.OS.info_cliente.telefone === null ? "Não Informado" : this.OS.info_cliente.telefone}\nAcompanhante........: ${this.OS.info_cliente.nome_cliente === null ? "Não Informado!" : this.OS.info_cliente.nome_cliente} (${parentesco === null ? "Não Informado" : parentesco})`;

        //Construindo as informações necessárias:
        let info_necessarias = '';
        if (!this.OS.endereco_info_os.info_necessaria) {
            info_necessarias = `Operador............: ${this.OS.endereco_info_os.complemento_info_necessaria.operador === null ? "Não informado" : this.OS.endereco_info_os.complemento_info_necessaria.operador}\n`;

            info_necessarias += `\nINFORMAÇÕES OMITIDAS:\n--------------------------------------------\n`;
            info_necessarias += `${this.OS.endereco_info_os.complemento_info_necessaria.info_padrao.comodato === true ? "• Informação de Comodato;\n" : ''}`;
            info_necessarias += `${this.OS.endereco_info_os.complemento_info_necessaria.info_padrao.contratacao === true ? "• Data de Contratação;\n" : ''}`;
            info_necessarias += `${this.OS.endereco_info_os.complemento_info_necessaria.info_padrao.descricao === true ? "• Faltou um melhor detalhamento na abertura da OS;\n" : ''}`;
            info_necessarias += `${this.OS.endereco_info_os.complemento_info_necessaria.info_padrao.historico === true ? "• Faltou o Histórico de Quedas;\n" : ''}`

            this.OS.endereco_info_os.complemento_info_necessaria.requerimentos.map(item => {

                info_necessarias += `• ${item};\n`;
            })
            info_necessarias += "\n";


        }

        corpo += `\nInformações anexadas.: ${this.OS.endereco_info_os.info_necessaria === true ? "Sim\n" : "Não"}\n${info_necessarias}`;

        corpo += this.indicacao_Script_simples();
        corpo += this.ajuda_interna_Script_simples();
        corpo += this.encaminhar_externa_Script_simples();

        //Construindo a localização:
        corpo += "\nENDEREÇO\n--------------------------------------------\n";
        corpo += `Coordenada...........: ${mapa}\nFoto da frente.......: ${this.OS.endereco_info_os.anexo_fachada === true ? "Sim" : "Não"}\n`;

        return corpo;
    }

    indicacao_Script_simples = () => {
        let corpo = "INDICAÇÃO\n--------------------------------------------\n";

        corpo += `Solicitada...........: ${this.OS.indicacao.solicitado === false ? "Não" : "Sim"}\n`;

        if (this.OS.indicacao.solicitado === true) {

            corpo += `Cliente indicou......: ${this.OS.indicacao.indicado === true ? "Sim" : "Não"};\n`;
            if (this.OS.indicacao.indicado === true) {
                corpo += `Indicação............: ${this.OS.indicacao.nome === null ? "Nome não informado" : this.OS.indicacao.nome} (${this.OS.indicacao.contato === null ? "Telefone Não Informado" : this.OS.indicacao.contato})\n`
            }
        }

        return corpo;
    }

    ajuda_interna_Script_simples = () => {

        let corpo = "\nAJUDA INTERNA\n--------------------------------------------\n";
        corpo += `Solicitada...........: ${this.OS.ajuda_interna.verdadeiro === true ? "Sim" : "Não"}\n`;

        if (this.OS.ajuda_interna.verdadeiro === true) {
            corpo += `Setor................: ${this.OS.ajuda_interna.setor};\n`
            corpo += `Colaborador..........: ${this.OS.ajuda_interna.nome === null ? "Não Informado!" : this.OS.ajuda_interna.nome};\n`
        }

        return corpo;
    }

    encaminhar_externa_Script_simples = () => {
        let corpo = "\nEQUIPE EXTERNA\n--------------------------------------------\n";

        corpo += `Necessária...........: ${this.OS.conferencia_tecnica.encaminhar_externa.necessidade === true ? "Sim" : "Não"}\n`;
        corpo += "\nObservação:\n"
        if (this.OS.conferencia_tecnica.encaminhar_externa.necessidade === true) {
            corpo += `${this.OS.conferencia_tecnica.encaminhar_externa.observacao === null ? "Técnico não informou o motivo da necessidade!" : this.OS.conferencia_tecnica.encaminhar_externa.observacao}\n`;
        }

        return corpo;
    }

    //Conferencia Técnica

    //Método pai:
    conferencia_tecnica_script_simples = () => {
        let corpo = "";

        corpo += this.conferencia_cabo_upt_simples();
        corpo += this.conferencia_fibra_simples();
        corpo += this.conferencia_fontes_simples();
        corpo += this.conferencia_ativos_simples();
        corpo += this.conferencia_site_survey_simples();
        corpo += this.conferencia_ping_simples();
        corpo += this.conferencia_tracert_simples();
        corpo += this.conferencia_velocidade_simples();
        corpo += this.conferencia_ativos_troca_simples();
        corpo += this.conferencia_ativos_local_simples();

        return corpo;
    }

    conferencia_cabo_upt_simples = () => {
        let corpo = "CABOS DE REDE\n--------------------------------------------\n";


        if (this.OS.conferencia_tecnica.cabos_utp.length !== 0) {
            this.OS.conferencia_tecnica.cabos_utp.map(item => {
                corpo += `\n[ ${item.cabo} ]\n`;
                corpo += `  • Cabo Giga..........: ${item.checagens[0] === true ? "Sim" : "Não"};\n`
                corpo += `  • Powermitter........: ${item.checagens[1] === true ? "Sim" : "Não"};\n`
                corpo += `  • Ping...............: ${item.checagens[2] === true ? "Sim" : "Não"};\n`
                corpo += `  • Defeito anexado....: ${item.anexo_cabos === true ? "Sim" : "Não"};\n`
                corpo += `  • Observação.........: ${item.observacao === "" ? "Sem observação adicional!" : item.observacao};\n`
            })
        } else {
            corpo += "Técnico não realizou testes em cabos de rede no Local!\n"
        }

        return corpo;
    }
    conferencia_fibra_simples = () => {
        let corpo = "\nFIBRA\n--------------------------------------------\n\n";

        if (this.OS.conferencia_tecnica.fibra.sinal_pto === "LOS") {
            corpo += "O sinal da Fibra na PTO está em LOS!\n"
        } else {
            const limpeza = `${this.OS.conferencia_tecnica.fibra.limpeza === true ? "Realizado a limpeza dos conectores" : "Não realizado a limpeza dos conectores"}`;
            const anexo = `${this.OS.conferencia_tecnica.fibra.anexo_sinal === true ? "foto da medição anexada na OS." : "foto não anexada!"}`

            corpo += `${limpeza}, ${anexo}\n\n`;
            corpo += `  • Sinal PTO............: ${this.OS.conferencia_tecnica.fibra.sinal_pto === null ? "Não Anexado" : "-" + this.OS.conferencia_tecnica.fibra.sinal_pto + " dBm"};\n`;
            corpo += `  • Sinal Patchcord......: ${this.OS.conferencia_tecnica.fibra.sinal_pathcord === null ? "Não Anexado" : "-" + this.OS.conferencia_tecnica.fibra.sinal_pathcord + " dBm"};\n`;
            corpo += `  • Sinal AutoISP........: ${this.OS.conferencia_tecnica.fibra.sinal_autoisp === null ? "Não Anexado" : "-" + this.OS.conferencia_tecnica.fibra.sinal_autoisp + " dBm"};\n`;

        }

        return corpo;
    }
    conferencia_fontes_simples = () => {
        let corpo = "\nFONTES\n--------------------------------------------\n";

        corpo += `  • Mau contato..........: ${this.OS.conferencia_tecnica.fontes.mau_contato === true ? "Não identificado" : "Identificado mau contato no local"};\n`;
        corpo += `  • Amperagem correta....: ${this.OS.conferencia_tecnica.fontes.amperagem === true ? "Correta" : "Incorreta"};\n`;
        corpo += `  • Sinais de mau uso....: ${this.OS.conferencia_tecnica.fontes.uso === true ? "Não encontrados" : "Observado sinais de mau uso"};\n`;

        return corpo;
    }
    conferencia_ativos_simples = () => {
        let corpo = "\nDISPOSITIVOS FINAIS TESTADOS (END DEVICE)\n--------------------------------------------\n\n";

        const objeto = this.OS.conferencia_tecnica.teste_navegacao;

        if (objeto.length != 0) {
            objeto.map(item => {
                corpo += `[ ${item.ativos_cliente === true ? "Ativo do Cliente" : "Ativo da Empresa"} ]\n`;
                corpo += `Observação.........: ${item.tipo_ativo} — ${item.observacao === null ? "Não foram anexado informações adicionais!" : item.observacao};\n\n`;
            })
        } else {
            corpo += "Técnico não realizou testes em nenhum ativo, tanto da empresa quanto do cliente!\n";
        }


        return corpo;
    }
    conferencia_site_survey_simples = () => {
        let corpo = "\nSITE SURVEY\n--------------------------------------------\n\n";

        corpo += `Mapa realizado.......: ${this.OS.conferencia_tecnica.mapa_calor.realizado === true ? "Sim" : "Não"};\n`;
        corpo += `Pontos de sombra.....: ${this.OS.conferencia_tecnica.mapa_calor.pontos_sobra === true ? "Sim" : "Não"};\n`;

        return corpo;
    }
    conferencia_ping_simples = () => {
        let corpo = "\nPING\n--------------------------------------------\n\n";

        const objeto = this.OS.conferencia_tecnica.ping_adicional;

        if (objeto.length !== 0) {
            objeto.map(item => {

                let nome = item.destino === "outro" ? item.outro : item.destino;
                corpo += `Ping ${nome} (${item.tipo}) — Ativo ${item.titulo}\n`;
                corpo += `  Pacotes............: ${item.pacotes[0]} / ${item.pacotes[1]} / ${item.pacotes[2]}\n`
                corpo += `  Latência...........: Min (${item.latencia[0]}) | Méd ${item.latencia[1]} | Máx ${item.latencia[2]}\n\n`
                /*Estrututura
                Ping Google (IPv4) — Ativo da Empresa
                - Pacotes: Enviados (200) — Recebidos (200) — Perdidos (0);
                - Latência: Mínima (5) — Média (1) — Máxima (50);
                */
            })
        } else {
            corpo += "Não foram relatados informações sobre os testes de Ping. Verifique o relatório final ou .Bat\n"
        }

        return corpo
    }
    conferencia_tracert_simples = () => {
        let corpo = "TRACERT\n--------------------------------------------\n\n";
        const objeto = this.OS.conferencia_tecnica.tracert_adicional;

        if (objeto.length !== 0) {
            objeto.map(item => {
                let nome = `${item.url === "outro" ? item.outra_url : item.url}`;
                corpo += `✓ Tracert ${nome} (${item.protocolo}) - Ativo ${item.ativo}\n`;

                //- Tracert Google (IPv4) - Ativo da Empresa;
            })
        } else {
            corpo += "> Não foram relatados informações sobre os testes de Tracert. Verifique o relatório final ou .Bat\n"
        }

        return corpo
    }
    conferencia_velocidade_simples = () => {
        let corpo = "\nVELOCIDADE\n--------------------------------------------\n\n";;
        const objeto = this.OS.conferencia_tecnica.velocidade_adicional;

        if (objeto.length !== 0) {
            objeto.map(item => {

                corpo += `[${item.dono} - ${item.ativo}]\n`;
                corpo += `  Provedor...........: ${item.site}\n`;
                corpo += `  Conexão............: ${item.tipo}\n`;
                corpo += `  Download...........: ${item.down}\n`;
                corpo += `  Upload.............: ${item.up}\n`;
                corpo += `  Ping...............: ${item.ping}\n`;
                corpo += `  Jitter.............: ${item.jitter}\n`;
                corpo += `  URL Consulta.......: ${item.jitter}\n`;

                if (item.url !== null) {
                    corpo += `  URL Consulta.......: ${item.url};\n`;
                } else {
                    corpo += "\n";
                }
                /*Estrutura desejada:
                Teste de Velocidade: Ativo Empresa (Celular)
                - Provedor: SpeedTest;
                - Conexão: Cabo;
                - Velocidade: UP (500) — DOWN (200) — Ping (5) — Jitter (0);
                - URL de Consulta: www.speedteste.com/teste5547825
                */
            })
        } else {
            corpo += "> Não foram relatados informações sobre os testes de velocidade. Verifique o relatório final ou .Bat\n"
        }

        return corpo
    }
    conferencia_ativos_troca_simples = () => {
        let corpo = '==========================================================================\n';
        corpo += '\t\t\EQUIPAMENTOS\n';
        corpo += '==========================================================================\n\n';

        const objeto = this.OS.conferencia_tecnica.equipamentos_local;
        corpo += `Houve troca..........: ${objeto.troca === true ? "Sim" : "Não"}\n`;

        if (objeto.troca === true) {

            let motivo = objeto.motivo_troca;

            switch (motivo) {
                case 'solicitacao_cliente':
                    motivo = "Solicitação do Cliente";
                    break;
                case 'mau_funcionamento':
                    motivo = "Mau Funcionamento";
                    break;
                case 'efeito_placebo':
                    motivo = "Efeito Placebo";
                    break;
                case 'necessidade_tecnica':
                    motivo = "Necessidade Técnica";
                    break;
                case 'solicitacao_sup_interno':
                    motivo = "Solicitação Sup. Interno";
                    break;
                default:
                    motivo = "Não Informado!"
            }

            corpo += `Código Conexão.......: ${objeto.cod_conexao === null ? "Não informado!" : objeto.cod_conexao};\n`;
            corpo += `PPPoE................: ${objeto.pppoe === null ? "Não informado!" : objeto.pppoe};\n`;
            corpo += `Motivo...............: ${motivo};\n\n`;
        }

        corpo += "Equipamentos:\n\n";

        if (objeto.ativos.length !== 0) {
            objeto.ativos.map(item => {
                const servico = item.inserido === true ? "[+] INSERIDO" : "[-] RETIRADO";
                corpo += `${servico}\n  ${item.ativo} ( ${item.mac} );\n\n`;
            });
        } else {
            corpo += "> Não foram anexados ativos do local ou troca!\n"
        }

        return corpo;


        /*Estrutura esperada
            ### Histórico de Equipamentos e Troca

            Houve Troca de Equipamento: Sim 
            - Código de Conexão: 554855;
            - PPPoE do Cliente: leitequente;
            - Motivo da Troca: Solicitação do Cliente 

            **Equipamentos:**
            - Retirado: ONT ( 88.55.44.22.55.44 );
            - Inserido: ONU ( 11.11.11.11.11 );
            - Inserido: Router ( 11.11.11.11.11 );
        */
    }
    conferencia_ativos_local_simples = () => {
        let corpo = '==========================================================================\n';
        corpo += '\t\t\ATIVOS NO LOCAL\n';
        corpo += '==========================================================================\n\n';

        const objeto = this.OS.conferencia_tecnica.conferencia_router;

        if (objeto.length !== 0) {
            objeto.map(item => {
                let primeiro_ponto = item.router === true ? "Primeiro Ponto" : "Segundo Ponto";
                let empresa = item.empresa === true ? "Empresa" : "Cliente";

                let atividade;

                if (item.atividade.verdadeiro === true) {
                    atividade = `Anormal ( ${item.atividade.observacao} Dias )`;
                } else {
                    atividade = `Normal`;
                }

                let conectados;

                if (item.ativos_anormal.verdadeiro === true) {
                    conectados = `Anormal ( ${item.ativos_anormal.observacao} Ativos )`;
                } else {
                    conectados = `Normal`;
                }

                let dns = item.dns === "Outro" ? item.outro_dns : item.dns;


                corpo += `ATIVO ${primeiro_ponto} ( ${empresa} )\n`;
                corpo += `  Local...............: ${item.local}\n`;
                corpo += `  Tempo de atividade..: ${atividade}\n`;
                corpo += `  Ativos conectados...: ${conectados}\n`;
                corpo += `  Firmware............: ${item.firware_router === true ? "Atualizado" : "Desatualizado"}\n`;
                corpo += `  IPv6 SLAAC..........: ${item.ipv6 === true ? "Sim" : "Não"}\n`;
                corpo += `  Rede 2.4 GHz........: ${item.largura_banda === true ? "Sim" : "Não"}\n`;
                corpo += `  DNS.................: ${dns}\n`;
                corpo += `  UPnP................: ${item.upnp === true ? "Sim" : "Não"}\n`;
                corpo += `  Local adequado......: ${item.local_equipamento.adequado === true ? "Sim" : "Não"}\n`;

                if (item.local_equipamento.adequado === false) {
                    corpo += `  Cliente ciente......: ${item.local_equipamento.ciente === true ? "Sim" : "Não"}\n\n`;
                    corpo += `Motivo do Local Inadequado: \n${item.local_equipamento.observacao === null ? "Não informado o motivo!" : item.local_equipamento.observacao}\n\n`;
                } else {
                    corpo += '\n';
                }


            });
        } else {
            corpo += "> O Técnico não anexou a configuração de nenhum ativo!\n";
        }

        return corpo;
        /*Estrutura esperada
        
            ### Conferência Técnica nos Ativos

            #### Ativo Primeiro Ponto (Empresa):
            - Localização: Sala;
            - Tempo Atividade: Anormal (50 dias )/Normal;
            - Ativos Conectados: Anormal ( 150 Ativos )/Normal;
            - Firmware Atualizado: Sim;
            - Protocolo IPv6 em Slaac: Sim;
            - Largura de Banda da rede 2.4: 20MHz;
            - DNS configurado: ETECC;
            - UPnP Habilitado: Sim;
            - Equipamento em local Adequado: Não;
            - Cliente está ciente que ativo não está em um local adequado: Sim;

            **Motivo do Local Inadequado**: Ativo localizado dentro do lixo! 
        */
    }

    // Função do Relatório da Visita

    relatorio_visita_simples = () => {
        let corpo = '';

        corpo += this.relatorio_educacao_cliente_simples();
        corpo += this.relatorio_bat_simples();

        corpo += '\n\n==========================================================================\n';
        corpo += '\t\t\tRELATÓRIO DA VISITA\n';
        corpo += '==========================================================================\n\n';

        // Verificando se foi gerado resumo da IA:
    if (this.OS.config_OS.usado_resumo_ia){
        corpo += this.OS.relato_adicional;
    }else{
        corpo += this.relato_cliente_simples();
        corpo += this.relatorio_complementar_simples();
        corpo += this.relatorio_sinal_fibra_script_simples();
        corpo += this.relatorio_fontes_script_simples();
        corpo += this.relatorio_site_Survey_script_simples();
        corpo += this.relatorio_ping_scriot_simples();
        corpo += this.relatorio_tracert_scriot_simples();
        corpo += this.relatorio_velocidade_scriot_simples();
        corpo += this.relatorio_troca_ativo_script_simples();
    }
        

        return corpo;
    }
    relato_cliente_simples = () => {
        let corpo = "";
        if (this.OS.info_cliente.relato_cliente !== null) {
            corpo += `RELATO DO CLIENTE:\n\n${this.OS.info_cliente.relato_cliente}\n\n`
        }

        return corpo;
    }
    relatorio_complementar_simples = () => {
        let corpo = "";
        if (!(this.OS.relato_adicional === null)) {
            corpo += `${this.OS.relato_adicional}\n\n`;
        }
        return corpo

    }
    relatorio_sinal_fibra_script_simples = () => {
        let corpo = "";

        if (!(this.OS.conferencia_tecnica.fibra.observacao === null)) {
            corpo += `RELATÓRIO DA FIBRA:\n${this.OS.conferencia_tecnica.fibra.observacao}\n`
        }
        return corpo;
    }

    relatorio_fontes_script_simples = () => {
        let corpo = "";

        if (!(this.OS.conferencia_tecnica.fontes.observacao === null)) {
            corpo += `\nRELATÓRIO DAS FONTES:\n${this.OS.conferencia_tecnica.fontes.observacao}\n`
        }
        return corpo;
    }

    relatorio_ping_scriot_simples = () => {
        let corpo = "";

        if (this.OS.conferencia_tecnica.observacao_ping !== null) {
            corpo = `\nRELATÓRIO DO PING:\n${this.OS.conferencia_tecnica.observacao_ping}\n`;
        }

        return corpo;
    }
    relatorio_tracert_scriot_simples = () => {
        let corpo = "";

        if (this.OS.conferencia_tecnica.observacao_tracert !== null) {
            corpo = `\nRELATÓRIO DO TRACERT:\n${this.OS.conferencia_tecnica.observacao_tracert}\n`;
        }

        return corpo;
    }
    relatorio_velocidade_scriot_simples = () => {
        let corpo = "";

        if (this.OS.conferencia_tecnica.observacao_velocidade !== null) {
            corpo = `\nRELATÓRIO DA VELOCIDADE:\n${this.OS.conferencia_tecnica.observacao_velocidade}\n`;
        }

        return corpo;
    }

    relatorio_troca_ativo_script_simples = () => {
        let corpo = "";

        if (this.OS.conferencia_tecnica.equipamentos_local.observacao !== null) {
            corpo += `\nRELATÓRIO  DOS ROUTERS:\n${this.OS.conferencia_tecnica.equipamentos_local.observacao}\n`
        }

        return corpo;
    }

    relatorio_educacao_cliente_simples = () => {
        let corpo = "";

        //No final do Script adicionamos a educação do cliente:
        let informacoes = "";
        if (Object.keys(this.OS.educacao_cliente).length === 0 && this.OS.educacao_cliente.constructor === Object) {
            informacoes = "> O técnico não passou informações adicionais ao Cliente!\n"
        } else {
            for (const chave in this.OS.educacao_cliente) {
                informacoes += `    • ${this.OS.educacao_cliente[chave]};\n`
            }
        }

        corpo += '==========================================================================\n';
        corpo += '\t\t\tEDUCAÇÃO DO CLIENTE\n';
        corpo += '==========================================================================\n\n';

        corpo += `Informações passadas ao cliente:\n${informacoes}`
        //Educação adicional fornecida pelo técnico:

        informacoes = "";
        if (this.OS.complemento_atendimento.length != 0) {
            informacoes += "\nInformação Complementar da Visita!\n";
            this.OS.complemento_atendimento.map(item => {
                informacoes += `    • ${item};\n`;
            })
        } else {
            informacoes = '';
        }

        corpo += informacoes;
        return corpo;
    }

    relatorio_site_Survey_script_simples = () => {
        let corpo = "\nSITE SURVEY:\n";

        const objeto = this.OS.conferencia_tecnica.mapa_calor;

        if (objeto.observacao !== null) {
            corpo += `${objeto.observacao}\n\n`
        } else {
            corpo += "> O Técnico não relatou informações sobre o Mapa de Calor!\n";
        }

        if (objeto.ponto_adicional !== null) {
            corpo += `${objeto.ponto_adicional}\n`
        } else {
            corpo += "> O Técnico não relatou informações sobre a necessidade de ponto adicional!\n";
        }


        return corpo;
    }
    relatorio_bat_simples = () => {
        let corpo = '\n==========================================================================\n';
        corpo += '\t\t\RELATÓRIO .BAT SIMPLIFICADO\n';
        corpo += '==========================================================================\n\n';
        //Adicionando o .Bat:
        if (!(this.OS.relatorio_estabilidade === null)) {
            corpo += `${this.OS.relatorio_estabilidade}`;
        }

        return corpo;
    }

    /*
        Funções Relacionadas a Exportação do Relatório completo no Formato do Markdown!
---------------------------------------------------------------------------------------------------------------------------------------------
    */
    Finalizar_OS_Markdown = () => {
        let script = "";
        // Construindo o Script:

        // Gerando o Header:
        script = "# Ordem de Serviço - Completa\n---\n";
        script += this.abertura_script();

        //Gerando os Relatórios técnicos
        script += "## Conferência Técnica\n\n";
        script += this.conferencia_tecnica_script();

        //Gerando a Finalização
        script += "## Relatório da Visita\n\n";
        script += this.relatorio_script();

        //Adicionando o relato adicional:
        if (!(this.OS.relato_adicional === null)) {
            script += `${this.OS.relato_adicional}\n`;
        }

        //Gerando relatorio da Fibra:
        script += this.relatorio_sinal_fibra_script();

        //Gerando o Rleatorio da Fonte:
        script += this.relatorio_fontes_script();

        // Gerando Relatório Mapa de Calor:

        script += this.relatorio_site_Survey_script();

        script += this.relatorio_ping_scriot();
        script += this.relatorio_tracert_scriot();
        script += this.relatorio_velocidade_scriot();

        //Relatório troca de Ativos:
        script += this.relatorio_troca_ativo_script();

        script += this.relatorio_educacao_cliente();
        //Adicionando o .Bat:
        if (!(this.OS.relatorio_estabilidade === null)) {
            script += `## Relatório .BAT\n\n${this.OS.relatorio_estabilidade}`;
        }

        // Retornando o script Montado.
        return script;

    }

    abertura_script = () => {
        let corpo;

        //Construindo as coordenadas
        let mapa;
        if (this.OS.endereco_info_os.coordenadas.latitude === null) {
            mapa = "Não foi possível capturar as Coordenadas!"
        } else {
            mapa = `https://www.google.com/maps?q=${this.OS.endereco_info_os.coordenadas.latitude},${this.OS.endereco_info_os.coordenadas.longitude}\n**Precissão**: ${this.OS.endereco_info_os.coordenadas.precisao} Metros`;
        }

        //contruindo o parentesco
        let parentesco = "";
        if (this.OS.info_cliente.parentesco === "Outro") {
            parentesco = this.OS.info_cliente.parentesco_info === null ? "Parentesco não informado" : this.OS.info_cliente.parentesco_info;
        } else {
            parentesco = this.OS.info_cliente.parentesco;
        }

        //construindo a formatação da data:

        const data_original = this.OS.config_OS.data_criacao;
        // 1. Converte a string para um objeto ZonedDateTime
        const zonedDateTime = Temporal.ZonedDateTime.from(data_original);
        // 2. Transforma de volta em string, ocultando o nome do fuso horário
        const data_formatada = zonedDateTime.toString({ timeZoneName: 'never' });

        //Construindo a Introdução
        corpo = `- **Criado:** ${data_formatada}\n- **Cliente:** ${this.OS.info_cliente.nome_cadastro === null ? "Não Informado" : this.OS.info_cliente.nome_cadastro}\n- **Telefone Atualizado**: ${this.OS.info_cliente.telefone === null ? "Não Informado" : this.OS.info_cliente.telefone}\n- **Quem Acompanhou:** ${this.OS.info_cliente.nome_cliente === null ? "Não Informado!" : this.OS.info_cliente.nome_cliente} (${parentesco === null ? "Não Informado" : parentesco})`;

        //Construindo as informações necessárias:
        let info_necessarias = '';
        if (!this.OS.endereco_info_os.info_necessaria) {
            info_necessarias = `**Operador**: ${this.OS.endereco_info_os.complemento_info_necessaria.operador === null ? "Não informado" : this.OS.endereco_info_os.complemento_info_necessaria.operador}\n`;

            info_necessarias += `**Informações Omitidas**:\n`;
            info_necessarias += `${this.OS.endereco_info_os.complemento_info_necessaria.info_padrao.comodato === true ? "- Informação de Comodato;\n" : ''}`;
            info_necessarias += `${this.OS.endereco_info_os.complemento_info_necessaria.info_padrao.contratacao === true ? "- Data de Contratação;\n" : ''}`;
            info_necessarias += `${this.OS.endereco_info_os.complemento_info_necessaria.info_padrao.descricao === true ? "- Faltou um melhor detalhamento na abertura da OS;\n" : ''}`;
            info_necessarias += `${this.OS.endereco_info_os.complemento_info_necessaria.info_padrao.historico === true ? "- Faltou o Histórico de Quedas;\n" : ''}`

            this.OS.endereco_info_os.complemento_info_necessaria.requerimentos.map(item => {

                info_necessarias += `- ${item};\n`;
            })
            info_necessarias += "\n";


        }

        corpo += `\n\n**Todas as informações foram anexadas na abertura da OS:** ${this.OS.endereco_info_os.info_necessaria === true ? "Sim" : "Não"}\n${info_necessarias}`;

        corpo += this.indicacao_Script();
        corpo += this.ajuda_interna_Script();
        corpo += this.encaminhar_externa_Script();

        //Construindo a localização:
        corpo += `## Endereço:\n\n **Coordenada de Fechamento:** ${mapa}\n**Foto da Frente Anexada:** ${this.OS.endereco_info_os.anexo_fachada === true ? "Sim" : "Não"}\n`;

        return corpo;
    }

    indicacao_Script = () => {
        let corpo = "";

        corpo = `**Foi solicitado indicação**: ${this.OS.indicacao.solicitado === false ? "Não" : "Sim"}\n`;

        if (this.OS.indicacao.solicitado === true) {

            corpo += `- Cliente Indicou: ${this.OS.indicacao.indicado === true ? "Sim" : "Não"};\n`;
            if (this.OS.indicacao.indicado === true) {
                corpo += `- Indicação: ${this.OS.indicacao.nome === null ? "Nome não informado" : this.OS.indicacao.nome} (${this.OS.indicacao.contato === null ? "Telefone Não Informado" : this.OS.indicacao.contato})\n`
            }
        }

        return corpo;
    }

    ajuda_interna_Script = () => {
        let corpo = `\n**Solicitado Ajuda Interna**: ${this.OS.ajuda_interna.verdadeiro === true ? "Sim" : "Não"}\n`;

        if (this.OS.ajuda_interna.verdadeiro === true) {
            corpo += `- Setor: ${this.OS.ajuda_interna.setor};\n`
            corpo += `- Colaborador: ${this.OS.ajuda_interna.nome === null ? "Não Informado!" : this.OS.ajuda_interna.nome};\n`
        }

        return corpo;
    }

    encaminhar_externa_Script = () => {
        let corpo = `\n**Necessário Encaminhar Equipe Externa**: ${this.OS.conferencia_tecnica.encaminhar_externa.necessidade === true ? "Sim" : "Não"}\n`;

        if (this.OS.conferencia_tecnica.encaminhar_externa.necessidade === true) {
            corpo += `> ${this.OS.conferencia_tecnica.encaminhar_externa.observacao === null ? "Técnico não informou o motivo da necessidade!" : this.OS.conferencia_tecnica.encaminhar_externa.observacao}\n`;
        }

        return corpo;
    }

    conferencia_tecnica_script = () => {
        let corpo = "";

        corpo += this.conferencai_cabo_upt();
        corpo += this.conferencia_fibra();
        corpo += this.conferencia_fontes();
        corpo += this.conferencia_ativos();
        corpo += this.conferencia_site_survey();
        corpo += this.conferencia_ping();
        corpo += this.conferencia_tracert();
        corpo += this.conferencia_velocidade();
        corpo += this.conferencia_ativos_troca();
        corpo += this.conferencia_ativos_local();

        return corpo;
    }

    conferencai_cabo_upt = () => {
        let corpo = "### Cabos de Rede\n";


        if (this.OS.conferencia_tecnica.cabos_utp.length !== 0) {
            this.OS.conferencia_tecnica.cabos_utp.map(item => {
                corpo += `**${item.cabo}**\n`;
                corpo += `- Cabo Giga: ${item.checagens[0] === true ? "Sim" : "Não"};\n`
                corpo += `- Teste no Powermitter: ${item.checagens[1] === true ? "Sim" : "Não"};\n`
                corpo += `- Teste de Ping: ${item.checagens[2] === true ? "Sim" : "Não"};\n`
                corpo += `- Anexo do Defeito: ${item.anexo_cabos === true ? "Sim" : "Não"};\n`
                corpo += `- Observação: ${item.observacao === "" ? "Sem observação adicional!" : item.observacao};\n`
            })
        } else {
            corpo += "> Técnico não realizou testes em cabos de rede no Local!\n"
        }

        return corpo;
    }

    conferencia_fibra = () => {
        let corpo = "### Fibra\n";

        if (this.OS.conferencia_tecnica.fibra.sinal_pto === "LOS") {
            corpo += "> O sinal da Fibra na PTO está em LOS!\n"
        } else {
            const limpeza = `${this.OS.conferencia_tecnica.fibra.limpeza === true ? "Realizado a limpeza dos conectores" : "Não realizado a limpeza dos conectores"}`;
            const anexo = `${this.OS.conferencia_tecnica.fibra.anexo_sinal === true ? "foto em anexo." : "foto não anexada!"}`

            corpo += `${limpeza}, ${anexo}\n`;
            corpo += `- Sinal na PTO: ${this.OS.conferencia_tecnica.fibra.sinal_pto === null ? "Não Anexado" : "-" + this.OS.conferencia_tecnica.fibra.sinal_pto + " dBm"};\n`;
            corpo += `- Sinal no Pathcord: ${this.OS.conferencia_tecnica.fibra.sinal_pathcord === null ? "Não Anexado" : "-" + this.OS.conferencia_tecnica.fibra.sinal_pathcord + " dBm"};\n`;
            corpo += `- Sinal AutoISP: ${this.OS.conferencia_tecnica.fibra.sinal_autoisp === null ? "Não Anexado" : "-" + this.OS.conferencia_tecnica.fibra.sinal_autoisp + " dBm"};\n`;

        }

        return corpo;
    }

    conferencia_fontes = () => {
        let corpo = "### Fontes\n";
        corpo += `Verificado mau contato na fonte: ${this.OS.conferencia_tecnica.fontes.mau_contato === true ? "Não identificado" : "Identificado mau contato no local"};\n`;
        corpo += `Validado amperagens corretas das fontes: ${this.OS.conferencia_tecnica.fontes.amperagem === true ? "Sim" : "Não"};\n`;
        corpo += `Verificado algum sinal de mau uso: ${this.OS.conferencia_tecnica.fontes.uso === true ? "Não encontrado" : "Foi observado sinais de mau uso"};\n`;

        return corpo;
    }

    conferencia_ativos = () => {
        let corpo = "### Ativos Testados no Local\n";
        const objeto = this.OS.conferencia_tecnica.teste_navegacao;

        if (objeto.length != 0) {
            objeto.map(item => {
                corpo += `${item.ativos_cliente === true ? "Ativo do Cliente" : "Ativo da Empresa"}\n`;
                corpo += `- ${item.tipo_ativo} — ${item.observacao === null ? "Não foram anexado informações adicionais!" : item.observacao};\n\n`;
            })
        } else {
            corpo += "> Técnico não realizou testes em nenhum ativo, tanto da empresa quanto do cliente!\n";
        }


        return corpo;
    }

    conferencia_site_survey = () => {
        let corpo = "### Site Survey (Mapa de Calor)\n\n";

        corpo += `Realizado mapa de calor no Local: ${this.OS.conferencia_tecnica.mapa_calor.realizado === true ? "Sim" : "Não"};\n`;
        corpo += `Foi identificado pontos de Sombra: ${this.OS.conferencia_tecnica.mapa_calor.pontos_sobra === true ? "Sim" : "Não"};\n`;

        return corpo;
    }

    conferencia_ping = () => {
        let corpo = "### Ping\n\n";
        const objeto = this.OS.conferencia_tecnica.ping_adicional;

        if (objeto.length !== 0) {
            objeto.map(item => {

                let nome = item.destino === "outro" ? item.outro : item.destino;
                corpo += `Ping ${nome} (${item.tipo}) — Ativo ${item.titulo}\n`;
                corpo += `- Pacotes: Enviados (${item.pacotes[0]}) — Recebidos (${item.pacotes[1]}) — Perdidos (${item.pacotes[2]});\n`
                corpo += `- Latência: Mínima (${item.latencia[0]}) — Média (${item.latencia[1]}) — Máxima (${item.latencia[2]});\n\n`
                /*Estrututura
                Ping Google (IPv4) — Ativo da Empresa
                - Pacotes: Enviados (200) — Recebidos (200) — Perdidos (0);
                - Latência: Mínima (5) — Média (1) — Máxima (50);
                */
            })
        } else {
            corpo += "> Não foram relatados informações sobre os testes de Ping. Verifique o relatório final ou .Bat\n"
        }

        return corpo
    }

    conferencia_tracert = () => {
        let corpo = "### Tracert\n\n";
        const objeto = this.OS.conferencia_tecnica.tracert_adicional;

        if (objeto.length !== 0) {
            objeto.map(item => {
                let nome = `${item.url === "outro" ? item.outra_url : item.url}`;
                corpo += `- Tracert ${nome} (${item.protocolo}) - Ativo ${item.ativo};\n`;

                //- Tracert Google (IPv4) - Ativo da Empresa;
            })
        } else {
            corpo += "> Não foram relatados informações sobre os testes de Tracert. Verifique o relatório final ou .Bat\n"
        }

        return corpo
    }

    conferencia_velocidade = () => {
        let corpo = "### Velocidade\n\n";
        const objeto = this.OS.conferencia_tecnica.velocidade_adicional;

        if (objeto.length !== 0) {
            objeto.map(item => {

                corpo += `Teste de Velocidade: Ativo ${item.dono} (${item.ativo})\n`;
                corpo += `- Provedor: ${item.site};\n`;
                corpo += `- Conexão: ${item.tipo};\n`;
                corpo += `- Velocidade: UP (${item.up}) — DOWN (${item.down}) — Ping (${item.ping}) — Jitter (${item.jitter});\n`;

                if (item.url !== null) {
                    corpo += `- URL de Consulta: ${item.url};\n`;
                } else {
                    corpo += "\n";
                }
                /*Estrutura desejada:
                Teste de Velocidade: Ativo Empresa (Celular)
                - Provedor: SpeedTest;
                - Conexão: Cabo;
                - Velocidade: UP (500) — DOWN (200) — Ping (5) — Jitter (0);
                - URL de Consulta: www.speedteste.com/teste5547825
                */
            })
        } else {
            corpo += "> Não foram relatados informações sobre os testes de velocidade. Verifique o relatório final ou .Bat\n"
        }

        return corpo
    }

    conferencia_ativos_troca = () => {
        let corpo = "### Histórico de Equipamentos e Troca\n\n";

        const objeto = this.OS.conferencia_tecnica.equipamentos_local;
        corpo += `Houve Troca de Equipamento: ${objeto.troca === true ? "Sim" : "Não"}\n`;

        if (objeto.troca === true) {

            let motivo = objeto.motivo_troca;

            switch (motivo) {
                case 'solicitacao_cliente':
                    motivo = "Solicitação do Cliente";
                    break;
                case 'mau_funcionamento':
                    motivo = "Mau Funcionamento";
                    break;
                case 'efeito_placebo':
                    motivo = "Efeito Placebo";
                    break;
                case 'necessidade_tecnica':
                    motivo = "Necessidade Técnica";
                    break;
                case 'solicitacao_sup_interno':
                    motivo = "Solicitação Sup. Interno";
                    break;
                default:
                    motivo = "Não Informado!"
            }

            corpo += `Código de Conexão: ${objeto.cod_conexao === null ? "Não informado!" : objeto.cod_conexao};\n`;
            corpo += `PPPoE do Cliente: ${objeto.pppoe === null ? "Não informado!" : objeto.pppoe};\n`;
            corpo += `Motivo da Troca: ${motivo};\n\n`;
        }

        corpo += "**Equipamentos:**\n\n";

        if (objeto.ativos.length !== 0) {
            objeto.ativos.map(item => {
                const servico = item.inserido === true ? "INSERIDO" : "RETIRADO";
                corpo += `- ${servico}: ${item.ativo} ( ${item.mac} );\n`;
            });
        } else {
            corpo += "> Não foram anexados ativos do local ou troca!\n"
        }

        return corpo;


        /*Estrutura esperada
            ### Histórico de Equipamentos e Troca

            Houve Troca de Equipamento: Sim 
            - Código de Conexão: 554855;
            - PPPoE do Cliente: leitequente;
            - Motivo da Troca: Solicitação do Cliente 

            **Equipamentos:**
            - Retirado: ONT ( 88.55.44.22.55.44 );
            - Inserido: ONU ( 11.11.11.11.11 );
            - Inserido: Router ( 11.11.11.11.11 );
        */
    }

    conferencia_ativos_local = () => {
        let corpo = "### Conferência Técnica nos Ativos\n\n";

        const objeto = this.OS.conferencia_tecnica.conferencia_router;

        if (objeto.length !== 0) {
            objeto.map(item => {
                let primeiro_ponto = item.router === true ? "Primeiro Ponto" : "Segundo Ponto";
                let empresa = item.empresa === true ? "Empresa" : "Cliente";

                let atividade;

                if (item.atividade.verdadeiro === true) {
                    atividade = `Anormal ( ${item.atividade.observacao} Dias )`;
                } else {
                    atividade = `Normal`;
                }

                let conectados;

                if (item.ativos_anormal.verdadeiro === true) {
                    conectados = `Anormal ( ${item.ativos_anormal.observacao} Ativos )`;
                } else {
                    conectados = `Normal`;
                }

                let dns = item.dns === "Outro" ? item.outro_dns : item.dns;


                corpo += `#### Ativo ${primeiro_ponto} (${empresa})\n`;
                corpo += `Localização: ${item.local}\n`;
                corpo += `Tempo Atividade: ${atividade}\n`;
                corpo += `Ativos Conectados: ${conectados}\n`;
                corpo += `Firmware Atualizado: ${item.firware_router === true ? "Sim" : "Não"}\n`;
                corpo += `Protocolo IPv6 em Slaac: ${item.ipv6 === true ? "Sim" : "Não"}\n`;
                corpo += `Largura de Banda da rede 2.4: ${item.largura_banda === true ? "Sim" : "Não"}\n`;
                corpo += `DNS configurado: ${dns}\n`;
                corpo += `UPnP Habilitado: ${item.upnp === true ? "Sim" : "Não"}\n`;
                corpo += `Equipamento em local Adequado: ${item.local_equipamento.adequado === true ? "Sim" : "Não"}\n`;

                if (item.local_equipamento.adequado === false) {
                    corpo += `Cliente está ciente que ativo não está em um local adequado: ${item.local_equipamento.ciente === true ? "Sim" : "Não"}\n\n`;
                    corpo += `**Motivo do Local Inadequado**: ${item.local_equipamento.observacao === null ? "Não informado o motivo!" : item.local_equipamento.observacao}\n`;
                }


            });
        } else {
            corpo += "> O Técnico não anexou a configuração de nenhum ativo!\n";
        }

        return corpo;
        /*Estrutura esperada
        
            ### Conferência Técnica nos Ativos

            #### Ativo Primeiro Ponto (Empresa):
            - Localização: Sala;
            - Tempo Atividade: Anormal (50 dias )/Normal;
            - Ativos Conectados: Anormal ( 150 Ativos )/Normal;
            - Firmware Atualizado: Sim;
            - Protocolo IPv6 em Slaac: Sim;
            - Largura de Banda da rede 2.4: 20MHz;
            - DNS configurado: ETECC;
            - UPnP Habilitado: Sim;
            - Equipamento em local Adequado: Não;
            - Cliente está ciente que ativo não está em um local adequado: Sim;

            **Motivo do Local Inadequado**: Ativo localizado dentro do lixo! 
        */
    }


    relatorio_script = () => {
        let corpo = "";

        if (this.OS.info_cliente.relato_cliente !== null) {
            corpo += `### Relato do Cliente no Local:\n\n${this.OS.info_cliente.relato_cliente}\n`
        }

        return corpo;
    }

    relatorio_sinal_fibra_script = () => {
        let corpo = "";

        if (!(this.OS.conferencia_tecnica.fibra.observacao === null)) {
            corpo += `**Relatório da Fibra:**\n${this.OS.conferencia_tecnica.fibra.observacao}\n`
        }
        return corpo;
    }

    relatorio_fontes_script = () => {
        let corpo = "";

        if (!(this.OS.conferencia_tecnica.fontes.observacao === null)) {
            corpo += `\n**Relatório das Fontes:**\n${this.OS.conferencia_tecnica.fontes.observacao}\n`
        }
        return corpo;
    }

    relatorio_ping_scriot = () => {
        let corpo = "";

        if (this.OS.conferencia_tecnica.observacao_ping !== null) {
            corpo = `\n**Relatório do Ping:**\n${this.OS.conferencia_tecnica.observacao_ping}\n`;
        }

        return corpo;
    }
    relatorio_tracert_scriot = () => {
        let corpo = "";

        if (this.OS.conferencia_tecnica.observacao_tracert !== null) {
            corpo = `\n**Relatório do Tracert:**\n${this.OS.conferencia_tecnica.observacao_tracert}\n`;
        }

        return corpo;
    }
    relatorio_velocidade_scriot = () => {
        let corpo = "";

        if (this.OS.conferencia_tecnica.observacao_velocidade !== null) {
            corpo = `\n**Relatório da Velocidade:**\n${this.OS.conferencia_tecnica.observacao_velocidade}\n`;
        }

        return corpo;
    }

    relatorio_troca_ativo_script = () => {
        let corpo = "";

        if (this.OS.conferencia_tecnica.equipamentos_local.observacao !== null) {
            corpo += `\n**Relatório sobre os Routers no Local:**\n${this.OS.conferencia_tecnica.equipamentos_local.observacao}\n`
        }

        return corpo;
    }

    relatorio_educacao_cliente = () => {
        let corpo = "";

        //No final do Script adicionamos a educação do cliente:
        let informacoes = "";
        if (Object.keys(this.OS.educacao_cliente).length === 0 && this.OS.educacao_cliente.constructor === Object) {
            informacoes = "> O técnico não passou informações adicionais ao Cliente!\n"
        } else {
            for (const chave in this.OS.educacao_cliente) {
                informacoes += `- ${this.OS.educacao_cliente[chave]};\n`
            }
        }

        corpo += `### Educação do Cliente:\n\n**Informações passadas ao cliente**:\n${informacoes}`
        //Educação adicional fornecida pelo técnico:

        informacoes = "";
        if (this.OS.complemento_atendimento.length != 0) {
            informacoes += "\n**Informação Complementar da Visita!**\n";
            this.OS.complemento_atendimento.map(item => {
                informacoes += `- ${item};\n`;
            })
        } else {
            informacoes = '';
        }

        corpo += informacoes;
        return corpo;
    }

    relatorio_site_Survey_script = () => {
        let corpo = "\n**Relatório do Site Survey (Mapa de Calor)**:\n";

        const objeto = this.OS.conferencia_tecnica.mapa_calor;

        if (objeto.observacao !== null) {
            corpo += `${objeto.observacao}\n\n`
        } else {
            corpo += "> O Técnico não relatou informações sobre o Mapa de Calor!\n";
        }

        if (objeto.ponto_adicional !== null) {
            corpo += `${objeto.ponto_adicional}\n`
        } else {
            corpo += "> O Técnico não relatou informações sobre a necessidade de ponto adicional!\n";
        }


        return corpo;
    }

    //--------------------- Métodos para Alteração dos Atributos ---------------------

    alterar_tipo_os = (tipo) => {
        if (this.OS === {} || this.OS === null) {
            console.log("entrei")
            return
        }
        this.OS.config_OS.tipo_os = tipo;
        this.salvar_os_localstorage();
        disparar_notificacao("sucesso", `O tipo da OS foi definido para ${tipo}`)

    }

    //Altear Campo de Informações do cliente
    alterar_informacoes_cliente = (array_cliente = ['tipo', 'valor']) => {
        // Essa função irá receber um array onde o primeiro parâmetro é o tipo de alteração, e o segundo é o valor
        // Assim consigo com a mesma função alterar atributos de um mesmo contexto. 
        /*
        Atributos que preciso alterar: @info_cliente
        Nome do Cliente => nome_cliente:
        Parentesco => parentesco:
        Descrição de Parentesco => parentesco_info
        Relato do Cliente => relato_cliente
    },
    */
        switch (array_cliente[0]) {
            case "message":
                this.OS.info_cliente.parentesco_info = array_cliente[1];
                break;
            case "parentesco":
                this.OS.info_cliente.parentesco = array_cliente[1];
                break;
            default:
                return
        }
        this.salvar_os_localstorage();

    }

    // Método usado para carregar os dados json

    adicionar_ping = (ping_estruturado) => {
        this.OS.conferencia_tecnica.ping_adicional.push(ping_estruturado)
    }

    adicionar_tracert = (tracert_estruturado) => {
        this.OS.conferencia_tecnica.tracert_adicional.push(tracert_estruturado)
    }

    adicionar_velocidade = (velocidade_estruturado) => {

        const ITEM = {
            ativo: "notebook",
            dono: "empresa",
            down: velocidade_estruturado.data.download_mbps,
            up: velocidade_estruturado.data.upload_mbps,
            ping: parseInt(velocidade_estruturado.data.ping_ms),
            jitter: 0,
            site: 'SpeedTest',
            tipo: "cabo",
            url: velocidade_estruturado.share_url,
        }
        console.log(ITEM)
        this.OS.conferencia_tecnica.velocidade_adicional.push(ITEM)
    }

    async Carregar_dados_Externos(url_requisicao) {
        let data = {}
        const REQUISICAO = url_requisicao;

        // Iniciar realizando a requisicao a partir da URL enviada!
        try {
            // Faz a requisição para a URL recebida
            const resposta = await fetch(REQUISICAO);

            // Verifica se a requisição foi bem-sucedida (status 200-299)
            if (!resposta.ok) {
                throw new Error(`Erro na requisição: ${resposta.status}`);
                disparar_notificacao('erro', `Erro na requisição: ${resposta.status}`)
            }

            // Converte a resposta para JSON e armazena na sua variável
            data = await resposta.json();


        } catch (erro) {
            // Trata eventuais erros de rede ou de conversão
            console.error("Ops, algo deu errado:", erro);
            disparar_notificacao("erro", `Ops, algo deu errado: ${erro}`)
        }

        //Iniar a construlçao dos dados
        // Adicionando os dados no objeto OS:
        this.OS.relatorio_externo = data; //Para uso futuro;

        //Adicionando os Pings Recebidos
        const PINGS = data.results.ping;

        PINGS.map((item, chave) => {

            this.adicionar_ping({
                destino: item.target,
                latencia: [item.latency_ms.min, item.latency_ms.avg, item.latency_ms.max],
                outro: "",
                pacotes: [item.packets_sent, item.packets_received, item.packets_lost],
                tipo: item.protocol,
                titulo: `HOST ${data.host_info.hostname}`
            })

        })

        //Adicionando os Tracerts Recebidos
        const TRACERT = data.results.traceroute;

        TRACERT.map((item, chave) => {


            this.adicionar_tracert({
                ativo: `HOST ${data.host_info.hostname}`,
                outra_url: item.target,
                protocolo: item.protocol,
                url: "outro"
            })

        })

        //Adicionando a Velocidade Recebidos
        const VELOCIDADE = data.results.speedtest;

        if (VELOCIDADE.status === "success") {
            this.adicionar_velocidade(VELOCIDADE)

        }
        this.salvar_os_localstorage();
    }

    callback_adicionar_texto_relato_cliente(data){
        const DATA = data;
        if (DATA !== ""){
            this.OS.info_cliente.relato_cliente = DATA;
        }
    }
    callback_adicionar_texto_checagem_fibra(data){
        const DATA = data;
        if (DATA !== ""){
            this.OS.conferencia_tecnica.fibra.observacao = DATA;
        }
    }
    callback_adicionar_texto_checagem_fontes(data){
        const DATA = data;
        if (DATA !== ""){
            this.OS.conferencia_tecnica.fontes.observacao = DATA;
        }
    }
    callback_adicionar_texto_sitesurvey_sombra(data){
        const DATA = data;
        if (DATA !== ""){
            this.OS.conferencia_tecnica.mapa_calor.ponto_adicional = DATA;
        }
    }

    callback_adicionar_texto_sitesurvey(data){
        const DATA = data;
        if (DATA !== ""){
            this.OS.conferencia_tecnica.mapa_calor.observacao = DATA;
        }
    }

    callback_adicionar_texto_ping(data){
        const DATA = data;
        if (DATA !== ""){
            this.OS.conferencia_tecnica.observacao_ping = DATA;
        }
    }
    callback_adicionar_texto_tracert(data){
        const DATA = data;
        if (DATA !== ""){
            this.OS.conferencia_tecnica.observacao_tracert = DATA;
        }
    }
    callback_adicionar_texto_velocidade(data){
        const DATA = data;
        if (DATA !== ""){
            this.OS.conferencia_tecnica.observacao_velocidade = DATA;
        }
    }

    callback_adicionar_texto_relatorio(data){
        const DATA = data;
        if (DATA !== ""){
            this.OS.relato_adicional = DATA;
        }
    }
    callback_adicionar_texto_troca_equipamento(data){
        const DATA = data;
        if (DATA !== ""){
            this.OS.conferencia_tecnica.equipamentos_local.observacao = DATA;
        }
    }
    callback_adicionar_texto_encaminhar_externa(data){
        const DATA = data;
        if (DATA !== ""){
            this.OS.conferencia_tecnica.encaminhar_externa.observacao = DATA;
        }
    }

}