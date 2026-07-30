import { disparar_notificacao } from "./disparar_notificacao";
import { Capturar_Nome_Tecnico } from "./capturar_nome_tecnico";
import { db_adicionar_OS } from "../model/Service_Ordens_Servico";
import { db_editar_OS } from "../model/Service_Ordens_Servico";

import educacao_cliente from "/src/data/educacao_cliente.json";
import atendimento_cliente from "/src/data/atendimento_cliente.json";

export default class Controller_Objeto_OS_Retencao {
    constructor(estrura_os = {}) {
        this.OS = estrura_os;
    }

    //===============================================================================================================
    //                          Funções Utilitárias:
    //===============================================================================================================
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

    Export_Mensagem_Encaminhada_Cliente = () => {

        let nome_tecnico = Capturar_Nome_Tecnico();
        const URL = localStorage.getItem("formulario_feedback")

        let corpo = `Boa tarde!\n\nAqui é *${nome_tecnico}* da Etecc Telecom, fui quem realizou o seu atendimento técnico. Para deixar tudo bem organizado e registrado, vou te encaminhar um resumo com os principais pontos que conversamos.\n\nNesse descritivo também incluí algumas orientações técnicas importantes que vão te ajudar bastante no dia a dia.\n\nQualquer dúvida que surgir depois, estamos à disposição 24h pelo *(13) 3421-1999*, combinado?\n\nAvalie seu atendimento em menos de 1 minuto.\nSua opinião faz toda a diferença!\n\n${URL}\n\n`;

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

    //===============================================================================================================
    //                          Funções para Alterar Atributos:
    //===============================================================================================================

    alterar_tipo_os = (tipo) => {
        if (this.OS === {} || this.OS === null) {
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

    callback_adicionar_texto_relato_cliente(data) {
        const DATA = data;
        if (DATA !== "") {
            this.OS.info_cliente.relato_cliente = DATA;
        }
    }
    callback_adicionar_texto_checagem_fibra(data) {
        const DATA = data;
        if (DATA !== "") {
            this.OS.conferencia_tecnica.fibra.observacao = DATA;
        }
    }
    callback_adicionar_texto_checagem_fontes(data) {
        const DATA = data;
        if (DATA !== "") {
            this.OS.conferencia_tecnica.fontes.observacao = DATA;
        }
    }
    callback_adicionar_texto_sitesurvey_sombra(data) {
        const DATA = data;
        if (DATA !== "") {
            this.OS.conferencia_tecnica.mapa_calor.ponto_adicional = DATA;
        }
    }

    callback_adicionar_texto_sitesurvey(data) {
        const DATA = data;
        if (DATA !== "") {
            this.OS.conferencia_tecnica.mapa_calor.observacao = DATA;
        }
    }

    callback_adicionar_texto_ping(data) {
        const DATA = data;
        if (DATA !== "") {
            this.OS.conferencia_tecnica.observacao_ping = DATA;
        }
    }
    callback_adicionar_texto_tracert(data) {
        const DATA = data;
        if (DATA !== "") {
            this.OS.conferencia_tecnica.observacao_tracert = DATA;
        }
    }
    callback_adicionar_texto_velocidade(data) {
        const DATA = data;
        if (DATA !== "") {
            this.OS.conferencia_tecnica.observacao_velocidade = DATA;
        }
    }

    callback_adicionar_texto_relatorio(data) {
        const DATA = data;
        if (DATA !== "") {
            this.OS.relato_adicional = DATA;
        }
    }
    callback_adicionar_texto_troca_equipamento(data) {
        const DATA = data;
        if (DATA !== "") {
            this.OS.conferencia_tecnica.equipamentos_local.observacao = DATA;
        }
    }
    callback_adicionar_texto_encaminhar_externa(data) {
        const DATA = data;
        if (DATA !== "") {
            this.OS.conferencia_tecnica.encaminhar_externa.observacao = DATA;
        }
    }
    //===============================================================================================================
    //                          Funções para Manipualção do Banco de Dados:
    //===============================================================================================================
    async salvar_OS_Banco() {
        //Coletando os dados para salvar no banco.
        const cliente = this.OS.info_cliente.nome_cadastro === null ? "Não Informado" : this.OS.info_cliente.nome_cadastro;

        // Cria um objeto contendo apenas a data
        const date = Temporal.PlainDate.from(this.OS.config_OS.data_criacao);
        const data_criacao = date.toString()

        const categoria = this.OS.config_OS.tipo_os;

        //Coloca a OS em estado de finalizada:
        this.OS.config_OS.finalizada = true;

        //Iniciando o Save no Banco de Dados:
        const Resposta = await db_adicionar_OS(this.OS, cliente, data_criacao, categoria);


        return Resposta

    }

    async editar_OS_Banco() {
        //Coletando os dados para salvar no banco.
        const cliente = this.OS.info_cliente.nome_cadastro === null ? "Não Informado" : this.OS.info_cliente.nome_cadastro;

        // Cria um objeto contendo apenas a data
        const date = Temporal.PlainDate.from(this.OS.config_OS.data_criacao);
        const data_criacao = date.toString()

        const categoria = this.OS.config_OS.tipo_os;

        const ID = this.OS.config_OS.id;

        //Iniciando o Save no Banco de Dados:
        const Resposta = await db_editar_OS(this.OS, ID, cliente, data_criacao, categoria);

        return Resposta

    }
    //===============================================================================================================
    //                          Funções Gerar Relatório da OS:
    //===============================================================================================================
    Finalizar_OS_Simplificado = () => {
        let script = '==========================================================================\n';
        script += '                    ORDEM DE SERVIÇO - RETENÇÃO\n';
        script += '==========================================================================\n\n';
        //Construindo o Script a partir de suas Funções Construtoras
        //Header do Script:
        script += this.abertura_script_simples();

        //Conferências técnicas:

        script += '\n==========================================================================\n';
        script += '\t\t\tRELATÓRIO DA VISITA\n';
        script += '==========================================================================\n\n';
        script += this.relatorio_final_Script();

        script += this.relatorio_educacao_cliente_simples();

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
        corpo = `Criado...............: ${data_formatada}\nCliente..............: ${this.OS.info_cliente.nome_cadastro === null ? "Não Informado" : this.OS.info_cliente.nome_cadastro}\nTelefone.............: ${this.OS.info_cliente.telefone === null ? "Não Informado" : this.OS.info_cliente.telefone}\nAcompanhante.........: ${this.OS.info_cliente.nome_cliente === null ? "Não Informado!" : this.OS.info_cliente.nome_cliente} (${parentesco === null ? "Não Informado" : parentesco})`;

        //Construindo as informações necessárias:
        let info_necessarias = '';
        if (!this.OS.endereco_info_os.info_necessaria) {
            info_necessarias = `Operador............: ${this.OS.endereco_info_os.complemento_info_necessaria.operador === null ? "Não informado" : this.OS.endereco_info_os.complemento_info_necessaria.operador}\n`;

            info_necessarias += `\nINFORMAÇÕES OMITIDAS:\n--------------------------------------------\n`;
            info_necessarias += `${this.OS.endereco_info_os.complemento_info_necessaria.info_padrao.comodato === true ? "- Informação de Comodato;\n" : ''}`;
            info_necessarias += `${this.OS.endereco_info_os.complemento_info_necessaria.info_padrao.contratacao === true ? "- Data de Contratação;\n" : ''}`;
            info_necessarias += `${this.OS.endereco_info_os.complemento_info_necessaria.info_padrao.descricao === true ? "- Faltou um melhor detalhamento na abertura da OS;\n" : ''}`;
            info_necessarias += `${this.OS.endereco_info_os.complemento_info_necessaria.info_padrao.historico === true ? "- Faltou o Histórico de Quedas;\n" : ''}`

            this.OS.endereco_info_os.complemento_info_necessaria.requerimentos.map(item => {

                info_necessarias += `- ${item};\n`;
            })
            info_necessarias += "\n";


        }

        corpo += `\nInformações anexadas.: ${this.OS.endereco_info_os.info_necessaria === true ? "Sim\n" : "Não"}\n${info_necessarias}`;

        corpo += this.indicacao_Script_simples();
        corpo += this.ajuda_interna_Script_simples();

        //Construindo a localização:
        corpo += "\nENDEREÇO\n--------------------------------------------\n";
        corpo += `Coordenada...........: ${mapa}\nFoto da frente.......: ${this.OS.endereco_info_os.anexo_fachada === true ? "Sim" : "Não Anexada"}\n`;

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
        corpo += `Solicitada...........: ${this.OS.ajuda_interna.verdadeiro === true ? "Sim" : "Não foi necessário"}\n`;

        if (this.OS.ajuda_interna.verdadeiro === true) {
            corpo += `Setor................: ${this.OS.ajuda_interna.setor};\n`
            corpo += `Colaborador..........: ${this.OS.ajuda_interna.nome === null ? "Não Informado!" : this.OS.ajuda_interna.nome};\n`
        }

        return corpo;
    }

    relatorio_final_Script = () => {
        let corpo = "";
        let nova_data_vencimento = "";
        let nome_vizinho = "";

        if (this.OS.informacao_atendimento.alt_data_vencimento === true) {
            nova_data_vencimento = this.OS.informacao_atendimento.nova_data;
        }

        if (this.OS.informacao_atendimento.info.verdadeiro === true) {
            nome_vizinho = this.OS.info_cliente.nome_cliente;
        }


        corpo += `Cliente atendido...............: ${this.OS.informacao_atendimento.foi_atendido === true ? "SIM" : "NÃO"}\n`;
        corpo += `Imóvel ocupado pelo titular....: ${this.OS.informacao_atendimento.local_ocupado === true ? "SIM" : "NÃO"}\n`;
        corpo += `Acordo aceito..................: ${this.OS.informacao_atendimento.acordo === true ? "SIM" : "NÃO"}\n`;
        corpo += `Alteração do vencimento........: ${this.OS.informacao_atendimento.alt_data_vencimento === true ? `SIM (Dia ${nova_data_vencimento})` : "NÃO"}\n`;
        corpo += `Atendimento por terceiros......: ${this.OS.informacao_atendimento.info.verdadeiro === true ? `SIM - ${nome_vizinho === "" ? "Não informado" : nome_vizinho}` : "NÃO"}\n`;

        if (this.OS.relato_adicional !== null) {
            corpo += `\nRELATÓRIO\n--------------------------------------------\n${this.OS.relato_adicional}`;
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
                informacoes += `    - ${this.OS.educacao_cliente[chave]};\n`
            }
        }

        corpo += '\n\n==========================================================================\n';
        corpo += '\t\t\tEDUCAÇÃO DO CLIENTE\n';
        corpo += '==========================================================================\n\n';
        corpo += `Informações passadas ao cliente:\n${informacoes}`
        //Educação adicional fornecida pelo técnico:

        informacoes = "";
        if (this.OS.complemento_atendimento.length != 0) {
            informacoes += "\nInformação Complementar da Visita!\n";
            this.OS.complemento_atendimento.map(item => {
                informacoes += `    - ${item};\n`;
            })
        } else {
            informacoes = '';
        }

        corpo += informacoes;
        return corpo;
    }


    //===============================================================================================================
    //                          Funções Gerar Relatório da OS em Markdown:
    //===============================================================================================================

    Finalizar_OS_Markdown = () => {
        let script = "";
        // Construindo o Script:

        // Gerando o Header:
        script = "# Ordem de Serviço - Retenção\n---\n";
        script += this.abertura_script_md();

        script += '## CONFERÊNCIA TÉCNICA\n';

        //Finalização
        script += this.relatorio_final_Script_md();

        script += this.Relato_Final_md();

        script += this.relatorio_educacao_cliente_MD();

        // Retornando o script Montado.
        return script;

    }

    abertura_script_md = () => {
        let corpo;

        //Construindo as coordenadas
        let mapa;
        if (this.OS.endereco_info_os.coordenadas.latitude === null) {
            mapa = "Não foi possível capturar as Coordenadas!"
        } else {
            mapa = `https://www.google.com/maps?q=${this.OS.endereco_info_os.coordenadas.latitude},${this.OS.endereco_info_os.coordenadas.longitude}\n- **Precisão**: ${this.OS.endereco_info_os.coordenadas.precisao} Metros`;
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
        corpo = `- **Criado**: ${data_formatada}\n- **Cliente**: ${this.OS.info_cliente.nome_cadastro === null ? "Não Informado" : this.OS.info_cliente.nome_cadastro}\n- **Telefone**: ${this.OS.info_cliente.telefone === null ? "Não Informado" : this.OS.info_cliente.telefone}\n- **Acompanhante**: ${this.OS.info_cliente.nome_cliente === null ? "Não Informado!" : this.OS.info_cliente.nome_cliente} (${parentesco === null ? "Não Informado" : parentesco})`;

        //Construindo as informações necessárias:
        let info_necessarias = '';
        if (!this.OS.endereco_info_os.info_necessaria) {
            info_necessarias = `- **Operador:** ${this.OS.endereco_info_os.complemento_info_necessaria.operador === null ? "Não informado" : this.OS.endereco_info_os.complemento_info_necessaria.operador}\n`;

            info_necessarias += `\n### INFORMAÇÕES OMITIDAS:\n`;
            info_necessarias += `${this.OS.endereco_info_os.complemento_info_necessaria.info_padrao.comodato === true ? "- **Informação de Comodato**;\n" : ''}`;
            info_necessarias += `${this.OS.endereco_info_os.complemento_info_necessaria.info_padrao.contratacao === true ? "- **Data de Contratação**;\n" : ''}`;
            info_necessarias += `${this.OS.endereco_info_os.complemento_info_necessaria.info_padrao.descricao === true ? "- **Faltou um melhor detalhamento na abertura da OS**;\n" : ''}`;
            info_necessarias += `${this.OS.endereco_info_os.complemento_info_necessaria.info_padrao.historico === true ? "- **Faltou o Histórico de Quedas**;\n" : ''}`

            this.OS.endereco_info_os.complemento_info_necessaria.requerimentos.map(item => {

                info_necessarias += `- ${item};\n`;
            })
            info_necessarias += "\n";


        }

        corpo += `\n- **Informações anexadas:** ${this.OS.endereco_info_os.info_necessaria === true ? "Sim\n" : "Não"}\n${info_necessarias}`;

        corpo += this.indicacao_Script_md();
        corpo += this.ajuda_interna_Script_md();

        //Construindo a localização:
        corpo += "\n### ENDEREÇO\n";
        corpo += `- **Coordenada**: ${mapa}\n- **Foto da frente**: ${this.OS.endereco_info_os.anexo_fachada === true ? "Sim" : "Não Anexada"}\n`;

        return corpo;
    }

    indicacao_Script_md = () => {
        let corpo = "### INDICAÇÃO\n";

        corpo += `- **Solicitada**: ${this.OS.indicacao.solicitado === false ? "Não" : "Sim"}\n`;

        if (this.OS.indicacao.solicitado === true) {

            corpo += `- **Cliente indicou**: ${this.OS.indicacao.indicado === true ? "Sim" : "Não"};\n`;
            if (this.OS.indicacao.indicado === true) {
                corpo += `- **Indicação**: ${this.OS.indicacao.nome === null ? "Nome não informado" : this.OS.indicacao.nome} (${this.OS.indicacao.contato === null ? "Telefone Não Informado" : this.OS.indicacao.contato})\n`
            }
        }

        return corpo;
    }

    ajuda_interna_Script_md = () => {

        let corpo = "\n### AJUDA INTERNA\n";
        corpo += `- **Solicitada**: ${this.OS.ajuda_interna.verdadeiro === true ? "Sim" : "Não foi necessário"}\n`;

        if (this.OS.ajuda_interna.verdadeiro === true) {
            corpo += `- **Setor**: ${this.OS.ajuda_interna.setor};\n`
            corpo += `- **Colaborador**: ${this.OS.ajuda_interna.nome === null ? "Não Informado!" : this.OS.ajuda_interna.nome};\n`
        }

        return corpo;
    }

    relatorio_final_Script_md = () => {
        let corpo = "### RELATÓRIO DA VISITA\n\n";
        let nova_data_vencimento = "";
        let nome_vizinho = "";

        if (this.OS.informacao_atendimento.alt_data_vencimento === true) {
            nova_data_vencimento = this.OS.informacao_atendimento.nova_data;
        }

        if (this.OS.informacao_atendimento.info.verdadeiro === true) {
            nome_vizinho = this.OS.info_cliente.nome_cliente;
        }


        corpo += `- **Cliente atendido**: ${this.OS.informacao_atendimento.foi_atendido === true ? "SIM" : "NÃO"}\n`;
        corpo += `- **Imóvel ocupado pelo titular**: ${this.OS.informacao_atendimento.local_ocupado === true ? "SIM" : "NÃO"}\n`;
        corpo += `- **Acordo aceito**: ${this.OS.informacao_atendimento.acordo === true ? "SIM" : "NÃO"}\n`;
        corpo += `- **Alteração do vencimento**: ${this.OS.informacao_atendimento.alt_data_vencimento === true ? `SIM (Dia ${nova_data_vencimento})` : "NÃO"}\n`;
        corpo += `- **Atendimento por terceiros**: ${this.OS.informacao_atendimento.info.verdadeiro === true ? `SIM - ${nome_vizinho === "" ? "Não informado" : nome_vizinho}` : "NÃO"}\n`;

        return corpo;
    }

    Relato_Final_md = () => {
        let corpo = "";
        if (this.OS.relato_adicional === null) {
            return corpo;
        }
        corpo += "\n### RELATÓRIO\n";
        corpo += `${this.OS.relato_adicional}\n`;

        return corpo;
    }

    relatorio_educacao_cliente_MD = () => {
        let corpo = "\n### EDUCAÇÃO DO CLIENTE";

        //No final do Script adicionamos a educação do cliente:
        let informacoes = "";
        if (Object.keys(this.OS.educacao_cliente).length === 0 && this.OS.educacao_cliente.constructor === Object) {
            informacoes = "> O técnico não passou informações adicionais ao Cliente!\n"
        } else {
            for (const chave in this.OS.educacao_cliente) {
                informacoes += ` - ${this.OS.educacao_cliente[chave]};\n`
            }
        }

     
        corpo += `\n#### Informações passadas ao cliente:\n${informacoes}`
        //Educação adicional fornecida pelo técnico:

        informacoes = "";
        if (this.OS.complemento_atendimento.length != 0) {
            informacoes += "\n#### Informação Complementar da Visita!\n";
            this.OS.complemento_atendimento.map(item => {
                informacoes += `- ${item};\n`;
            })
        } else {
            informacoes = '';
        }

        corpo += informacoes;
        return corpo;
    }
}