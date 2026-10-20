import { db_criar_ficha_treino } from "../../model/Service_Ficha_Treino";
import { db_ler_todas_fichas_treino } from "../../model/Service_Ficha_Treino";
import { db_get_ficha_treino } from "../../model/Service_Ficha_Treino";
import { db_editar_Ficha_Treino } from "../../model/Service_Ficha_Treino";
import { db_delete_item_ficha } from "../../model/Service_Ficha_Treino";

//Objetos da Classe
import Cronograma_Evolucao_Semanal from "./Controller_Ciclo_Treino";
import softskills from "./Controller_Soft_Skills";
import Habilidades_Tecnicas_Ficha from "./Controller_Habilidades_Tecnicas";
import Capacitacao from "./Controller_Capacitacao";
import Controller_Notas from "./Controller_Notas";

import { Formatar_Data } from "../Formatar_data";

import { disparar_notificacao } from "../disparar_notificacao";


export default class Controller_Ficha_Treino {
    constructor({
        nome_tecnico = null,
        nome_treinador = null,
        data_inicio = null,
        data_previsao_termino = null,
        identificador = null
    } = {}) {
        this.id = identificador;
        this.nome_tecnico = nome_tecnico;
        this.nome_treinador = nome_treinador;
        this.data_admisao = null;
        this.data_inicio_treino = data_inicio;
        this.data_previsao_termino = data_previsao_termino;
        this.data_encerramento_treino = null;
        this.aprovacao = null;
        this.relatorio_aprovacao = null;
        this.CICLO = new Cronograma_Evolucao_Semanal();
        this.SOFTSKILLS = new softskills(4);
        this.HABILIDADES = new Habilidades_Tecnicas_Ficha();
        this.CAPACITACOES = new Capacitacao();
        this.NOTAS = new Controller_Notas();
    }


    //Funções Relacionadas a manipulação do Banco

    criar_ficha_banco = async () => {

        //Antes de criar, valida se não passamos do limite de 4 Fichas de Treino.
        const QUANTIDADE = (await db_ler_todas_fichas_treino()).length;

        if (QUANTIDADE >= 4) {
            disparar_notificacao("aviso", "Não é possível criar mais de 4 fichas de treino!")
            return false
        }
        this.CICLO.iniciar_ciclo_treino();
        this.SOFTSKILLS.inicializar_softskills();
        this.HABILIDADES.inicializar();
        this.CAPACITACOES.inicializar();

        const objeto = this.gerar_estrutura_objeto_saida();

        return await db_criar_ficha_treino(objeto);

    }

    carregar_ficha_banco = async () => {
        const ID = this.id;

        const DATA = await db_get_ficha_treino(ID);
        this.reestruturar_objeto_entrada(DATA);

    }

    salvar_data_banco = () => {
        const ID = this.id;
        const objeto = this.gerar_estrutura_objeto_saida();
        console.log(ID, objeto)

        db_editar_Ficha_Treino(ID, objeto);
    }

    deletar_ficha_banco = async () => {
        const ID = this.id;
        const RETORNO = await db_delete_item_ficha(ID);
        return RETORNO;
    }

    //=====================================================================================================
    //                      Função para Manipular os Atributos da Classe
    //=====================================================================================================

    atualizar_nome_tecnico = (nome) => {
        if (nome === "") {
            return
        }

        this.nome_tecnico = nome
    }

    retornar_nome_tecnico = () => {
        return this.nome_tecnico
    }

    atualizar_data_admisao = (data) => {
        if (data === "") {
            return
        }

        this.data_admisao = data
    }

    atualizar_previsao_termino = (data) => {
        if (data === "") {
            return
        }

        this.data_previsao_termino = data
    }

    atualizar_aprovacao = (data) => {
        if (data === "") {
            return
        }
        this.aprovacao = data
    }
    atualizar_aprovacao_relatorio = (data) => {
        if (data === "") {
            return
        }
        this.relatorio_aprovacao = data
    }

    //Funções para estruturar o objeto para salvar no banco

    gerar_estrutura_objeto_saida = () => {

        return {
            nome_tecnico: this.nome_tecnico,
            nome_treinador: this.nome_treinador,
            data_admisao: this.data_admisao,
            data_inicio_treino: this.data_inicio_treino,
            data_previsao_termino: this.data_previsao_termino,
            data_encerramento_treino: this.data_encerramento_treino,
            aprovacao: this.aprovacao,
            relatorio_aprovacao: this.relatorio_aprovacao,
            progressao_geral: this.retornar_conclusao_geral(),
            cronograma_evolucao_semanal: this.CICLO.exportar_json_ciclos(),
            softskills: this.SOFTSKILLS.exportar_JSON(),
            habilidades: this.HABILIDADES.exportar_JSON(),
            capacitacoes: this.CAPACITACOES.exportar_JSON(),
            notas: this.NOTAS.exportar_JSON(),
        }

    }

    reestruturar_objeto_entrada = (data) => {
        const DATA = data;

        //preenchendo atributos da classe:

        this.nome_tecnico = DATA.nome_tecnico;
        this.nome_treinador = DATA.nome_treinador;
        this.data_admisao = DATA.data_admisao;
        this.data_inicio_treino = DATA.data_inicio_treino;
        this.data_previsao_termino = DATA.data_previsao_termino;
        this.data_encerramento_treino = DATA.data_encerramento_treino;
        this.aprovacao = DATA.aprovacao;
        this.relatorio_aprovacao = DATA.relatorio_aprovacao;

        this.CICLO.carregar_json_ciclos(DATA?.cronograma_evolucao_semanal);
        this.SOFTSKILLS.importar_JSON(DATA?.softskills);
        this.HABILIDADES.importar_JSON(DATA?.habilidades);
        this.CAPACITACOES.importar_JSON(DATA?.capacitacoes);
        this.NOTAS.importar_JSON(DATA?.notas);


    }


    //Funções gerais da Classe

    retornar_conclusao_geral = () => {
        //Essa função irá executar funções dos objetos da classe que possuem alguma classificação de conclusão, como os cursos, treinos e etc que aparecem na ficha.
        let total = 1;
        let realizados = 0;


        //Verificações da Classe:
        if (this.data_admisao != null) realizados += 1;

        //Verificando o Ciclo de Treino
        const CICLOS_TREINO = this.CICLO.exportar_conclusao_atual();
        total += CICLOS_TREINO[0]
        realizados += CICLOS_TREINO[1]

        //Verificando as Soft SKills
        const SOFTSKILLS_PROGRESSAO = this.SOFTSKILLS.exportar_conclusao_atual();
        total += SOFTSKILLS_PROGRESSAO[0]
        realizados += SOFTSKILLS_PROGRESSAO[1]

        //Verificando as Habilidades
        const HABILIDADES_PROGRESSAO = this.HABILIDADES.exportar_conclusao_atual();
        total += HABILIDADES_PROGRESSAO[0]
        realizados += HABILIDADES_PROGRESSAO[1]

        //Verificando as Habilidades
        const CAPACITACOES_PROGRESSAO = this.CAPACITACOES.exportar_conclusao_geral();
        total += CAPACITACOES_PROGRESSAO[0]
        realizados += CAPACITACOES_PROGRESSAO[1]

        //Retorna o Valor total de pontos que estão sendo validados, e a quantidade já validada em um array:
        console.log(total, realizados)
        return [total, realizados]

    }

    //=====================================================================================================
    //                      Função para Exportar Relatório
    //=====================================================================================================

    expostar_relatorio_md = () => {
        const DATA = (Temporal.Now.plainDateISO()).toString();

        let script = `# Relatório de Treino - ${Formatar_Data(DATA)}\n\n`;

        // Montando o Cabeçalho
        script += "> [!cite] Ficha técnica\n";
        script += `> **Nome do Técnico**: ${this.nome_tecnico}\n`;
        script += `> **Nome do Treinador**: ${this.nome_treinador}\n`;
        script += `> **Data de Admisão**: ${this.data_admisao != null ? Formatar_Data(this.data_admisao) : "Data Não Informada"}\n`;
        script += `> **Data de inicio**: ${this.data_inicio_treino != null ? Formatar_Data(this.data_inicio_treino) : "Data Não Informada"}\n`;
        script += `> **Data de Previsão de Termino**: ${this.data_previsao_termino != null ? Formatar_Data(this.data_previsao_termino) : "Data Não Informada"}\n`;
        script += `> **Data de Termino**: ${this.data_encerramento_treino != null ? Formatar_Data(this.data_encerramento_treino) : "Data Não Informada"}\n\n`;

        script += this.criar_estrutura_aprovacao()

        script += this.exportar_grafico_conclusao_geral_md();

        //Importando relatório de Treino:
        script += this.CICLO.exportar_relatorio_MD();
        script += this.SOFTSKILLS.exportar_relatorio_MD();
        script += this.HABILIDADES.exportar_relatorio_MD();
        script += this.CAPACITACOES.Exportar_Relatorio_MD_Fiberschool();
        script += this.NOTAS.exportar_relatorio_MD();

        return script;
    }

    criar_estrutura_aprovacao = () => {
        let relatorio = ""

        if (this.aprovacao !== null) {

            const relatorioFormatado = this.relatorio_aprovacao
                .split('\n')
                .map(linha => `> ${linha}`)
                .join('\n');

            relatorio = `> [!${this.aprovacao === "aprovado" ? "success" : "missing"}] ${this.aprovacao === "aprovado" ? "Aprovado!" : "Reprovado!"}\n ${relatorioFormatado}\n\n`
        }

        return relatorio;
    }

    exportar_grafico_conclusao_geral_md = () => {
        const total_progressao = this.retornar_conclusao_geral();
        const CICLOS_TREINO = this.CICLO.exportar_conclusao_atual();
        const SOFTSKILLS_PROGRESSAO = this.SOFTSKILLS.exportar_conclusao_atual();
        const HABILIDADES_PROGRESSAO = this.HABILIDADES.exportar_conclusao_atual();
        const CAPACITACOES_PROGRESSAO = this.CAPACITACOES.exportar_conclusao_geral();

        const DATA = `  - action: "Total"\n    Realizados: ${total_progressao[0]}\n  - action: "Progressão"\n    Realizados: ${total_progressao[1]}\n  - action: "Ciclos Realizados"\n    Realizados: ${CICLOS_TREINO[1]}\n  - action: "Softskills"\n    Realizados: ${SOFTSKILLS_PROGRESSAO[1]}\n  - action: "Habilidades"\n    Realizados: ${HABILIDADES_PROGRESSAO[1]}\n  - action: "Capacitações"\n    Realizados: ${CAPACITACOES_PROGRESSAO[1]}\n`

        return `\n\`\`\`chartsview\n#-----------------#\n#- chart type    -#\n#-----------------#\ntype: Bar\n\n#-----------------#\n#- chart data    -#\n#-----------------#\ndata:\n${DATA}\n#-----------------#\n#- chart options -#\n#-----------------#\noptions:\n  xField: "Realizados"\n  yField: "action"\n  conversionTag: {}\n\`\`\`\n\n`

    }



}