
import { disparar_notificacao } from "../../disparar_notificacao"
import { obterCoordenadas } from "../../obter_coordenadas_refacto"
import { Formatar_H2 } from "../../../utils/Utils_Formatacao_Texto"
import { Lista_Simples } from "../../../utils/Utils_Formatacao_Texto"

export default class Controller_Coordenadas {
    constructor(parameters) {
        this.latitude = null
        this.longitude = null
        this.precisao = null
        this.Fachada_Anexada = false
        this.Relatorio_Fachada = null
    }

    Definir_Coordenadas = async () =>{
        const COORDENADAS = await obterCoordenadas();

        if (COORDENADAS[0] === false){
            disparar_notificacao("erro", COORDENADAS[1])
            return
        }

        this.latitude = COORDENADAS[1].latitude;
        this.longitude = COORDENADAS[1].longitude;
        this.precisao = COORDENADAS[1].precisao;
        
    }

	Gerar_Localizacao = () =>{

        if (this.latitude === null){
            return "Não foi possível gerar a Localização"
        }

        return `https://www.google.com/maps?q=${this.latitude},${this.longitude}`;

    }

	Set_Fachada_Anexada = (Data) =>{
        this.Fachada_Anexada = !this.Fachada_Anexada;
        return this.Fachada_Anexada;
    }   

    Get_Fachada_Anexada = () =>{
        return this.Fachada_Anexada;
    }
    
    Set_Relatorio_Anexada = (Data) => {
        this.Relatorio_Fachada = Data;
    }

    Get_Relatorio_Anexada = () => {
        return this.Relatorio_Fachada;
    }
	
	Retornar_Objeto_Json = () =>{
        return JSON.stringify({
            latitude: this.latitude,
            longitude: this.longitude,
            precisao: this.precisao,
            Fachada_Anexada: this.Fachada_Anexada,
            Relatorio_Fachada: this.Relatorio_Fachada,
        })
    }

	Importar_Objeto_Json = (Data) =>{
        const DATA = JSON.parse(DATA)
        
        this.latitude = Data.latitude;
        this.longitude = Data.longitude;
        this.precisao = Data.precisao;
        this.Fachada_Anexada = Data.Fachada_Anexada;
        this.Relatorio_Fachada = Data.Relatorio_Fachada;

    }

	Exportar_Estrutura_Simplificado = () =>{
        let Script = "\n"
        
        Script += Formatar_H2("Endereço:");

        Script += `${Lista_Simples("Coordenadas", 25)} ${this.Gerar_Localizacao()}\n`;
        Script += `${Lista_Simples("Precisão", 25)} ${this.precisao === null? "Não Especificado": this.precisao + " Metros"}\n`;
        Script += `${Lista_Simples("Fachada Anexada", 25)} ${this.Fachada_Anexada === true? "Sim": "Não"}\n`;
        
        if(this.Fachada_Anexada === false){
            Script += `${Lista_Simples("Motivo da Omissão", 25)} ${this.Relatorio_Fachada === null?"Técnico não justificou!":this.Relatorio_Fachada}\n`;
        }


        return Script;
    }

	Exportar_Estrutura_Markdown = () =>{
        let Script = ""

        Script += "## Endereço:\n";

        Script += `- **Coordenadas**: ${this.Gerar_Localizacao()}\n`;
        Script += `- **Precisão**: ${this.precisao === null? "Não Especificado": this.precisao + " Metros"}\n`;
        Script += `- **Fachada Anexada**: ${this.Fachada_Anexada === true? "Sim": "Não"}\n`;
        
        if(this.Fachada_Anexada === false){
            Script += `- **Motivo da Omissão**: ${this.Relatorio_Fachada === null?"Técnico não justificou!":this.Relatorio_Fachada}\n`;
        }

        return Script;
    }

	Validar_Finalizacao = () =>{
        
        //Vamos validar se todos os atributos Essências foram validados

        if (this.Fachada_Anexada === false && this.Relatorio_Fachada === null) return [false, "Necessário preencher o motivo de não anexar a fachada em: Tratativa com o Cliente!"]


        return [true, null]
    }

}   