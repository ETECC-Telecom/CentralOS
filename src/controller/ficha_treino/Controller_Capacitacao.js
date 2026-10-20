import { Formatar_Data } from "../Formatar_data";
import { CAPACITACOES } from "../../data/datas_capacitacoes";

export default class Capacitacao {
    constructor(parameters) {
        this.Capacitacao = [];
    }

    inicializar = () => {
        if (this.Capacitacao.length != 0) {
            return
        }

        CAPACITACOES.map(item => this.Capacitacao.push(item))
    }

    retornar_Capacitacoes = () => {
        return this.Capacitacao;
    }

    retornar_capacitacao = (index) => {
        const INDEX = parseInt(index)

        return this.Capacitacao[INDEX]
    }

    exportar_JSON = () => {
        return JSON.stringify(this.Capacitacao);
    }

    importar_JSON = (data) => {
        if (data === undefined) {
            this.Capacitacao = [];
            return
        }
        this.Capacitacao = JSON.parse(data);
    }

    exportar_conclusao_geral = () => {
        let total = this.Capacitacao.length;
        let realizados = 0;

        this.Capacitacao.map(item => {
            if (item.data != null) realizados += 1;
        })

        return [total, realizados];
    }

    sincronizar_estrura_capacitacao = () => {
        const NOVOS_ENSINOS = HABILIDADES;
        const ANTIGOS_ENSINOS = this.Capacitacao;

        const APENAS_NOVOS = NOVOS_ENSINOS.filter(
            novoItem => !ANTIGOS_ENSINOS.some(antigoItem => antigoItem.nome === novoItem.nome)
        );

        if (APENAS_NOVOS.length === 0) return false;

        APENAS_NOVOS.map(item => {
            const ELEMENTO = {
                nome: item.nome,
                data: item.data,
                relatorio: item.relatorio,
                codigo_ci: item.codigo_ci,
                categoria: item.categoria,
                plataforma: item.plataforma,
                local_treino: item.local_treino,
                nota: item.nota,
            }
            this.Capacitacao.push(ELEMENTO)

        })
        return true;

    }

    validar_tamanho_estrutura = (valor = 0) =>{
        const VALOR = parseInt(valor) 
        
        
        const TOTAL = this.Capacitacao.length - 1;

        
        if(VALOR > TOTAL){
            return false; 
        }else{
            return true;
        }
        

    }

    //===============================================================================================================
    //                       Exportações Markdown para Diferentes categorias
    //===============================================================================================================

    Exportar_Relatorio_MD_Fiberschool = () => {
        let script = "## Capacitações\n\n"

        script += "### Capacitações FiberSchool\n\n"

        const CAPACITACOES_FIBER = this.Capacitacao.filter(item => item.categoria === "FiberSchool")

        CAPACITACOES_FIBER.map((item)=>{
            let validacao = `${item.data !== null? "!done":"!question"}`;
            let data = `${item.data !== null? " - Finalizado em: "+item.data:""}`;
            let relatorio = `${item.relatorio !== null? `${item.relatorio}\n\n`: "\n"}` 

            script += `> [${validacao}] ${item.nome} ${data};\n\n`
            script += relatorio;

            //
        })

        const OUTRAS_CAPACITACOES = this.Capacitacao.filter(item => item.categoria !== "FiberSchool")


        script += "### Outras Capacitações\n\n"

        OUTRAS_CAPACITACOES.map((item)=>{
            let validacao = `${item.data !== null? "!done":"!question"}`;
            let data = `${item.data !== null? " - Finalizado em: "+item.data:""}`;
            let relatorio = `${item.relatorio !== null? `${item.relatorio}\n\n`: "\n"}` 

            script += `> [${validacao}] ${item.nome} ${data};\n\n`
            script += relatorio;

            //
        })
      

        return script;
    }

    //===============================================================================================================
    //                       Funções de manipulação do Atributo
    //===============================================================================================================

    Concluir_Capacitacao = (index = null, relatorio = null) =>{
        const INDEX = parseInt(index);


        if(relatorio === null) return false;
       
        //Valida se o tamanho do index é maior que o tamanho do array;
        
        const DATA_ATUAL = Temporal.Now.plainDateISO();

        if (this.Capacitacao[INDEX].data === null){
            this.Capacitacao[INDEX].data = Formatar_Data(DATA_ATUAL);
        }
        
        this.Capacitacao[INDEX].relatorio = relatorio;

        return true

    }

    //Vamos permitir adicionar capacitações extras que o técnico possa aprender durante o treino!
    Adicionar_Nova_Capacitacao = ({
        nome = null, 
        data = null,
        relatorio = null,
        codigo_ci = null,
        categoria = "FiberSchool",
        plataforma = null,
        local_treino = null,
        nota = 0,
    } = {}) =>{  

        if (data !== null) data = Formatar_Data(data);
    
        if (nome === null) return false;

        this.Capacitacao.push({
            nome: nome,
            data: data,
            relatorio: relatorio,
            codigo_ci: codigo_ci,
            categoria: categoria,
            plataforma: plataforma,
            local_treino: local_treino,
            nota: nota,
        })

        return true;

    }

}