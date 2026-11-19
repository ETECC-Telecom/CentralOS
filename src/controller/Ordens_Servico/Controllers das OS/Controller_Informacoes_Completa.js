
import { Formatar_H2 } from "../../../utils/Utils_Formatacao_Texto"
import { Lista_Simples } from "../../../utils/Utils_Formatacao_Texto"

export default class Controller_Informacoes_Completa {
    constructor(parameters) {
        this.Info_Necessaria = true
        this.Operador = null
        this.Informacoes_Omitidas = [] 
    }

    Retornar_Objeto_Json = () =>{
        return JSON.stringify({
            Info_Necessaria:this.Info_Necessaria,
            Operador:this.Operador,
            Informacoes_Omitidas:this.Informacoes_Omitidas,
        })
    }
    
	Importar_Objeto_Json = (Data) =>{
        const DATA = JSON.parse(Data)

        this.Info_Necessaria = DATA.Info_Necessaria;
        this.Operador = DATA.Operador;
        this.Informacoes_Omitidas = DATA.Informacoes_Omitidas;

    }
    
	Exportar_Estrutura_Simplificado = () =>{
        let Script = "";

        if(this.Get_Info_Necessaria()){
            return `${Lista_Simples("Informações Necessárias", 25)} Sim\n`  
        }

        Script += `\n${Formatar_H2("Informações Necessárias na Abertura")}`
        
        Script += `${Lista_Simples("Operador", 25)} ${this.Get_Operador()};\n`
        
        Script += "INFORMAÇÕES OMITIDAS:\n"
        
        if (this.Informacoes_Omitidas.length === 0){
            Script += "> Mesmo que tenha marcado a opção, não foram passadas as informações\n"
        }else{
            this.Informacoes_Omitidas.map(item=>{
                Script += `- ${item}\n`;
            })
        }
            

        return Script;
    }
    
	Exportar_Estrutura_Markdown = () =>{
        let Script = "";

        if(this.Get_Info_Necessaria()){
            return `- **Informações Necessárias**: Sim\n`  
        }

        Script += `### Informações Necessárias na Abertura\n\n`

        Script += `- **Operador**: ${this.Get_Operador()};\n`

        Script += "#### INFORMAÇÕES OMITIDAS:\n"

        if (this.Informacoes_Omitidas.length === 0){
            Script += "> Mesmo que tenha marcado a opção, não foram passadas as informações\n"
        }else{
            this.Informacoes_Omitidas.map(item=>{
                Script += `- ${item}\n`;
            })
        }

        return Script;
    }

    Validar_Finalizacao = () => {

        //Vamos validar se todos os atributos Essências foram validados

        if (this.Info_Necessaria === false && this.Operador === null) return [false, 'Necessário preencher o nome do operador que abriu a OS em "Informaçoes Anexadas"!'];

        return [true, null]
    }
    
	Validar_Sincronismo = () =>{

        let Script = "";
        
        if(this.Info_Necessaria === false){
            Script += "## Informações Necessárias\n\n"
            Script += this.Exportar_Estrutura_Markdown();
            return [true, "Info_Necessaria", Script];
        }

        return [false, null, null];
        
    }
    
	Set_Nova_Informacao = (data) =>{
        this.Informacoes_Omitidas.push(data);
    }
    
	Get_Itens = () =>{
        return this.Informacoes_Omitidas;
    }
    
	Delete_Inforacao = (index) =>{
        const INDICE = parseInt(index);
        this.Informacoes_Omitidas.splice(INDICE, 1);
    }

    Set_Info_Necessaria = () =>{
        this.Info_Necessaria = !this.Info_Necessaria;
        return this.Info_Necessaria;
    }

    Get_Info_Necessaria = () =>{
        return this.Info_Necessaria;
    }

    Set_Operador = (Nome) =>{
        this.Operador = Nome;

    }
    
    Get_Operador = () =>{
        return this.Operador;
    }

}