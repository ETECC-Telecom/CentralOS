
import { Formatar_H2 } from "../../../utils/Utils_Formatacao_Texto"
import { Lista_Simples } from "../../../utils/Utils_Formatacao_Texto"

export default class Controller_Cliente {
    constructor(parameters) {
        this.Nome_Cliente = null
        this.Nome_Cadastro = null
        this.Telefone = null
        this.Parentesco = "Titular"
        this.Parentesco_info = null
        this.Relato_cliente = null
    }

    Retornar_Objeto_Json = () => {
        return JSON.stringify({
            Nome_Cliente: this.Nome_Cliente,
            Nome_Cadastro: this.Nome_Cadastro,
            Telefone: this.Telefone,
            Parentesco: this.Parentesco,
            Parentesco_info: this.Parentesco_info,
            Relato_cliente: this.Relato_cliente,
        })
    }
    Importar_Objeto_Json = (Objeto) => {
        const Data = JSON.parse(Objeto)

        this.Nome_Cliente = Data.Nome_Cliente;
        this.Nome_Cadastro = Data.Nome_Cadastro;
        this.Telefone = Data.Telefone;
        this.Parentesco = Data.Parentesco;
        this.Parentesco_info = Data.Parentesco_info;
        this.Relato_cliente = Data.Relato_cliente;
    }

    Exportar_Estrutura_Simplificado = () => {
        let Script = ""
        Script += `${Lista_Simples("Cliente", 25)} ${this.Get_Nome_Cadastro()[1]}\n`;
        Script += `${Lista_Simples("Telefone", 25)} ${this.Get_Telefone()[1]}\n`;
        Script += `${Lista_Simples("Acompanhante", 25)} ${this.Get_Nome_Cliente()[1]} (${this.Get_Parentesco()[1]})\n`;

        return Script;
    }

    Exportar_Estrutura_Markdown = () => {
        let Script = ""
        Script += `- **Cliente**: ${this.Get_Nome_Cadastro()[1]}\n`;
        Script += `- **Telefone**: ${this.Get_Telefone()[1]}\n`;
        Script += `- **Acompanhante**: ${this.Get_Nome_Cliente()[1]} (${this.Get_Parentesco()[1]})\n`;

        return Script
    }

    Exportar_Relatorio_Simplificado = () => {
        let Script = ""
        return Script += `${Formatar_H2("Relato do Cliente:")}${this.Get_Relato_cliente()[1]}`

    }

    Exportar_Relatorio_Markdown = () => {
        let Script = ""
        return Script += `### RELATO DO CLIENTE:\n${this.Get_Relato_cliente()[1]}\n`

    }
    Validar_Finalizacao = () => {

        //Vamos validar se todos os atributos Essências foram validados

        if (this.Nome_Cliente === null) return [false, "Necessário preencher o nome do Cliente na Tratativa!"];

        if (this.Nome_Cadastro === null) return [false, "Necessário preencher o Cadastro do Cliente na Tratativa!"];

        if (this.Telefone === null) return [false, "Necessário preencher o Telefone do Cliente na Tratativa!"];

        if (this.Parentesco === null) return [false, "Necessário preencher o Parentesco do Acompanhante na Tratativa!"];

        if (this.Parentesco === "Outros" && this.Parentesco_info === null) return [false, "Necessário preencher o complemento do Parentesco na Tratativa!"]

        if (this.Relato_cliente === null) return [false, "Necessário preencher o Relato do Cliente na Tratativa!"];

        return [true, null]
    }


    Set_Nome_Cliente = (Data = null) => {

        this.Nome_Cliente = Data
    }
    Get_Nome_Cliente = () => {
        if (this.Nome_Cliente === null) {
            return [false, "Nome do Cliente não informado"]
        } else {
            return [true, this.Nome_Cliente]
        }
    }
    Set_Nome_Cadastro = (Data = null) => {
        this.Nome_Cadastro = Data
    }
    Get_Nome_Cadastro = () => {
        if (this.Nome_Cadastro === null) {
            return [false, "Nome do Cadastro não informado"]
        } else {
            return [true, this.Nome_Cadastro]
        }
    }
    Set_Telefone = (Data = null) => {

        this.Telefone = Data
    }
    Get_Telefone = () => {
        if (this.Telefone === null) {
            return [false, "Telefone do Cadastro não informado"]
        } else {
            return [true, this.Telefone]
        }
    }
    Set_Parentesco = (Data = null) => {
        console.log('Vou setar esse aqui:', Data)
        this.Parentesco = Data
    }
    Get_Parentesco = (retorno_parentesco = false) => {

        if (!retorno_parentesco) {
            if (this.Parentesco === null) {
                return [false, "Parentesco Não Informado"]
            } else {
                if (this.Parentesco === "Outros") {
                    return [true, this.Get_Parentesco_info()[1]]
                } else {
                    return [true, this.Parentesco]
                }

            }
        }else{
            //Serve para retornar apenas o valor do atributo Parentesco, para controle
            return [true, this.Parentesco]
        }
    }
    Set_Parentesco_info = (Data = null) => {

        this.Parentesco_info = Data
    }

    Get_Parentesco_info = () => {

        if (this.Parentesco_info === null || this.Parentesco_info === undefined) {
            return [false, "Não foi relatado informações adicionais de parentesco"]
        } else {
            return [true, this.Parentesco_info]
        }
    }

    Set_Relato_cliente = (Data = null) => {

        this.Relato_cliente = Data
    }
    Get_Relato_cliente = () => {
        if (this.Relato_cliente === null) {
            return [false, "Técnico não preencheu o Relato do Cliente!"]
        } else {
            return [true, this.Relato_cliente]
        }
    }
}