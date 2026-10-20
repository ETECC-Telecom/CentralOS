import { CICLOS_PADROES } from "../../data/ciclos_treino_ficha.js";

// Essa classe é responsável por gerir o atributo de ciclo de treino de uma ficha de treino técnico.

export default class Cronograma_Evolucao_Semanal {
    constructor(parameters) {
        this.ciclos = []
    }

    iniciar_ciclo_treino = () =>{
        //Essa função cria os ciclos iniciais da ficha com base no que foi definido na estrututa JSON da BASE.
        const MODELOS_CICLOS = CICLOS_PADROES;

        MODELOS_CICLOS.map((item)=>{
            this.adicionar_novo_ciclo(item.nome, item.descricao);
        })

    }

    exportar_conclusao_atual = () => {
        let total = 0;
        let realizados = 0;

        total = this.ciclos.length;

        for (let ciclos in this.ciclos){
            if (this.ciclos[ciclos].finalizada){
                realizados += 1;
            }
        }

        return [total, realizados];
    }

    adicionar_novo_ciclo = (nome = null,descricao=null) => {
        const NOME = nome ?? "Não Informado";
        const DESCRICAO = descricao ?? "";
        const CICLO = {
            nome: NOME,
			descricao: DESCRICAO, 
			finalizada: false,
			data_conclusao: null,
			relatorios: []
		
        }

        this.ciclos.push(CICLO)
    }

    excluir_ciclo_treino_adicional = (index_ciclo) =>{
        const ID = parseInt(index_ciclo);
        const LIMITE = CICLOS_PADROES.length - 1;

        if (ID <= LIMITE){
            //Filtrando para não excluir os ciclos padrões, pois os três ciclos são padrão e não podem ser deletados. 
            return false;
        }

        //Filtra pelo indice, para saber qual indice será retirado!
        this.ciclos = this.ciclos.filter((_,indice)=>indice !== ID);
        return true;
    }

    adicionar_relatorio_ciclo = (index_ciclo = null, relatorio = null) =>{
        const ID = parseInt(index_ciclo);
        const TOTAL_CICLOS = this.ciclos.length - 1;

        if (index_ciclo === null || relatorio === null) return;

        //Valida se o Indice informado não é maior que o esperado
        if (ID > TOTAL_CICLOS) return;


        this.ciclos[ID].relatorios.push(relatorio)

    }

    remover_relatorio_ciclo = (index_ciclo = null, index_relatorio = null) =>{
        const ID = parseInt(index_ciclo);
        const ID_R = parseInt(index_relatorio);
        const TOTAL_CICLOS = this.ciclos.length - 1;

        if (index_ciclo === null || index_relatorio === null) return;

        //Valida se o Indice informado não é maior que o esperado
        if (ID > TOTAL_CICLOS) return;

        const TOTAL_RELATORIOS = this.ciclos[ID].relatorios.length -1 

        if (ID_R > TOTAL_RELATORIOS) return;


        //Filtra pelo indice, para saber qual indice será retirado!
        this.ciclos[ID].relatorios = this.ciclos[ID].relatorios.filter((_,indice)=>indice !== ID_R);

    }

    exportar_relatorios_ciclo = (index_ciclo = null) =>{
        const ID = parseInt(index_ciclo);
        const TOTAL_CICLOS = this.ciclos.length - 1;

        if (index_ciclo === null) return false;

        //Valida se o Indice informado não é maior que o esperado
        if (ID > TOTAL_CICLOS) return false;


        return this.ciclos[ID].relatorios;

    }

    Finalizar_Ciclo = (index_ciclo = null) => {
        const ID = parseInt(index_ciclo);
        const TOTAL_CICLOS = this.ciclos.length - 1;
        
        if (index_ciclo === null) return;

        //Valida se o Indice informado não é maior que o esperado
        if (ID > TOTAL_CICLOS) return;

        const DATA_ATUAL = Temporal.Now.plainDateISO().toString();

        this.ciclos[ID].finalizada = true;
        this.ciclos[ID].data_conclusao = DATA_ATUAL;
        
    }

    exportar_json_ciclos = () => {
        return JSON.stringify(this.ciclos);
    }

    exportar_ciclos = () => {
        return this.ciclos
    }

    exportar_ciclo = (index) =>{
        const QUANTIDADE = this.ciclos.length -1;
        const INDEX = parseInt(index);

        if (INDEX > QUANTIDADE){
            return false;
        }

        return this.ciclos[INDEX];
    }

    carregar_json_ciclos = (data = null)=> {

        if (data === null) return;

        this.ciclos = JSON.parse(data);

    }
    
    exportar_relatorio_MD = () => {

        if (this.ciclos.length == 0) return "\n## Cronograma da Evolução Semanal\n\n > Não inicializado!"

        let script = "## Cronograma da Evolução Semanal\n\n"
        
        this.ciclos.map(item => {
            
            script += `### ${item.nome} - ${item.finalizada === true?`✅ ${item.data_conclusao}`:"❌"}\n\n`;
            script += `${item.descricao !== null? `> ${item.descricao}\n`:""}`
            
            let relatorios = "#### Relatórios do Ciclo:\n\n"
            
            if (item.relatorios.length !=0){
                item.relatorios.map(relatorio => {
                    relatorios += `- ${relatorio}\n`
                })
                
                script += relatorios;
            }

        })
        
        return script;
    }

}


