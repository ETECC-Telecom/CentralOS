import { SOFTSKILLS } from "../../data/data_soft_skills_ficha";
import { Formatar_Data } from "../Formatar_data";

export default class softskills {
    constructor(limite_nivel = 4) {
        this.softskills = [];
        this.limite_nivel = limite_nivel;
        
    }


    //Inicia a estrutura de Softskills na geração da ficha
    inicializar_softskills = () => {
        if(this.softskills.length === 0){
            this.softskills = SOFTSKILLS;
        }
    }

    retornar_softskills = () => {
        return this.softskills;
    }

    exportar_JSON = () => {
        return JSON.stringify(this.softskills);
    }

    importar_JSON = (data) => {
        this.softskills = JSON.parse(data)
    }

    exportar_relatorio_MD = () => {
        let script = "## Relatório de Softs kills\n";

        script += this.exportar_relatorio_grafico_radar_md(); 

        for (let i in this.softskills){

            script += `### ${this.softskills[i].nome} (**Nível**: ${this.softskills[i].nivel_atual})\n#### Relatórios:\n\n`;
            
            if (this.softskills[i].relatorio.length !== 0){
                for (let relatorio in this.softskills[i].relatorio){
                    const relatorio_unico = this.softskills[i].relatorio[relatorio]
                    script += `> [!${relatorio_unico.elevado?"tip":"danger"}] ${relatorio_unico.titulo}\n>${relatorio_unico.descricao}\n\n`;
                }
            }else{
                script += `> [!warning] Nenhum Relatório Anexado!\n`
            }

        }

        return script;

    }

    exportar_conclusao_atual = () => {
        let total = 0;
        let realizados = 0;

        total = this.softskills.length;

        for (let skill in this.softskills){
            if (this.softskills[skill].nivel_atual > 0){
                realizados += 1;
            }
        }

        return [total, realizados];
    }

    exportar_objeto_completo = () =>{
        return this.softskills;
    }

    exportar_relatorio_grafico_radar = ()=> {
        const labels = [];
        const niveis = [];

        for(let chave in this.softskills){
            labels.push(this.softskills[chave].nome.slice(0, 15)+"...");
            niveis.push(this.softskills[chave].nivel_atual)
        }
        return {
            labels: labels,
            datasets: [{
                label: 'Habilidades',
                data: niveis,
                backgroundColor: 'rgba(235, 54, 54, 0.2)',
                borderColor: 'rgb(235, 54, 54)',
                borderWidth: 2,
                pointBackgroundColor: 'rgb(235, 54, 54)'
            }]
        };
    }

    exportar_relatorio_grafico_radar_md = () => {
        let estrutura_final = "";

        for(let chave in this.softskills){
            estrutura_final += `- item: "${this.softskills[chave].nome}"\n  user: "Nível"\n  score: ${this.softskills[chave].nivel_atual}\n`
            //labels.push(this.softskills[chave].nome.slice(0, 15)+"...");
        }

        return `\`\`\`chartsview\n#-----------------#\n#- chart type    -#\n#-----------------#\ntype: Radar\n\n#-----------------#\n#- chart data    -#\n#-----------------#\ndata:\n${estrutura_final}\n#-----------------#\n#- chart options -#\n#-----------------#\noptions:\n  xField: "item"\n  yField: "score"\n  seriesField: "user"\n  meta:\n    score:\n      alias: "Score"\n      min: 0\n      max: 5\n      nice: true\n  xAxis:\n    line: null\n    tickLine: null\n  yAxis:\n    label: false\n    grid:\n      alternateColor: "rgba(0, 0, 0, 0.04)"\n  point: {}\n  area: {}\n\`\`\`\n`
    }

    //===============================================================================================================
    //                       Funções de manipulação do Atributo
    //===============================================================================================================

    elevar_nivel_softskill = (INDEX_SOFTSKILL = null, RELATORIO = null) => {
        
        if (!INDEX_SOFTSKILL === null || !RELATORIO) return false
        
        const INDEX = parseInt(INDEX_SOFTSKILL);
        const TAMANHO_TOTAL = this.softskills.length - 1;

        if(INDEX > TAMANHO_TOTAL) return false;
        
        if(this.softskills[INDEX].nivel_atual >= 0 && this.softskills[INDEX].nivel_atual < this.limite_nivel){

            const DATA_ATUAL = Temporal.Now.plainDateISO();


            this.softskills[INDEX].nivel_atual += 1;
            this.softskills[INDEX].relatorio.push({
                titulo: `(+${this.softskills[INDEX].nivel_atual}) ${Formatar_Data(DATA_ATUAL)}`,
                elevado: true,
                descricao: RELATORIO,
            })
        
            return true
        }else{
            return false
        }

    }

    reduzir_nivel_softskill = (INDEX_SOFTSKILL = null, RELATORIO = null) => {
        
        if (!INDEX_SOFTSKILL === null || !RELATORIO) return false
    
        const INDEX = parseInt(INDEX_SOFTSKILL);
        const TAMANHO_TOTAL = this.softskills.length - 1;

        if(INDEX > TAMANHO_TOTAL) return false;
        
        if(this.softskills[INDEX].nivel_atual > 1 && this.softskills[INDEX].nivel_atual <= this.limite_nivel){

            const DATA_ATUAL = Temporal.Now.plainDateISO();


            this.softskills[INDEX].nivel_atual -= 1;
            this.softskills[INDEX].relatorio.push({
                titulo: `(-${this.softskills[INDEX].nivel_atual}) ${Formatar_Data(DATA_ATUAL)}`,
                elevado: false,
                descricao: RELATORIO,
            })
        
            return true
        }else{
            return false
        }

    }
    

}