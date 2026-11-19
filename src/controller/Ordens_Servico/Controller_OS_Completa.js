
import { SET_ID_OS_em_Edicao } from "../../model/Service_OS_Edicao";
import { Obter_Data_Hora_Atual } from "../Utils_Obter_Data_Hora_Atual";
import { disparar_notificacao } from "../disparar_notificacao";

//Importe dos Controllers
import Controller_Cliente from "./Controllers das OS/Controller_Cliente";
import Controller_Informacoes_Completa from "./Controllers das OS/Controller_Informacoes_Completa";
import Controller_Coordenadas from "./Controllers das OS/Controller_Coordenadas";
import Controller_Educacao_Cliente from "./Controllers das OS/Controller_Educacao_Cliente";

//Formatar Texto
import { Formatar_H1 } from "../../utils/Utils_Formatacao_Texto";
import { Formatar_H2 } from "../../utils/Utils_Formatacao_Texto";
import { Lista_Simples } from "../../utils/Utils_Formatacao_Texto";

export default class Controller_OS_Completa_Ficha {
    constructor({
        ID = null,
        Tipo_OS = null,
    }={}) {
        this.ID = ID;
		this.Tipo_OS = Tipo_OS;
        this.Data_Criacao = null
		this.Finalizada = false
		this.Usado_Resumo_IA = false;
		this.Data_Alteracao = null
		this.Relatorio_Adicional = null
		this.Relatorio_Atraso = null
		this.Relatorio_Externo = null
        this.Tecnico = null
        this.CLIENTE = new Controller_Cliente();
        this.INFORMACOES_COMPLETA = new Controller_Informacoes_Completa();
        this.COORDENADAS = new Controller_Coordenadas();
        this.EDUCACAO_CLIENTE = new Controller_Educacao_Cliente();
    }

    
    Cadastrar_Nova_Ficha_OS = () =>{
        // Essa função é chamada apenas quando estamos criando a OS pela primeira vez, para associá-la ao banco. 
        // Ela valida se não tem nenhuma OS em aberto cadastrada, caso tenha, ele, o banco deleta, e adiciona essa nova OS.
        // Dessa forma, sempre teremos uma unica OS de categoria em aberto cadastrada ao banco.  
    }


    Salvar_OS_Banco = () =>{
        console.log("Executei o Salvamento do Banco")
        const DATA = this.Gerar_Estrutura_Banco()
        console.log(DATA)
    }
    
	Excluir_OS_Banco = () =>{

    }
	Gerar_Estrutura_Banco = () =>{
    
        return {
            ID: this.ID, 
            Tipo_OS: this.Tipo_OS,
            Data_Criacao: this.Data_Criacao,
            Finalizada: this.Finalizada,
            Usado_Resumo_IA: this.Usado_Resumo_IA,
            Data_Alteracao: this.Data_Alteracao,
            Relatorio_Adicional: this.Relatorio_Adicional,
            Relatorio_Atraso: this.Relatorio_Atraso,
            Relatorio_Externo: this.Relatorio_Externo,
            CLIENTE: this.CLIENTE.Retornar_Objeto_Json(),
            INFORMACOES_COMPLETA: this.INFORMACOES_COMPLETA.Retornar_Objeto_Json(),
            COORDENADAS: this.COORDENADAS.Retornar_Objeto_Json(),
            EDUCACAO_CLIENTE: this.EDUCACAO_CLIENTE.Retornar_Objeto_Json(),
        }
    }
	Carregar_Estrutura_Banco = (Data) =>{

        this.ID = Data.ID;
		this.Tipo_OS = Data.Tipo_OS;
        this.Data_Criacao = Data.Data_Criacao;
		this.Finalizada = Data.Finalizada;
		this.Usado_Resumo_IA = Data.Usado_Resumo_IA;
		this.Data_Alteracao = Data.Data_Alteracao;
		this.Relatorio_Adicional = Data.Relatorio_Adicional;
		this.Relatorio_Atraso = Data.Relatorio_Atraso;
		this.Relatorio_Externo = Data.Relatorio_Externo;
        this.CLIENTE.Importar_Objeto_Json(Data.CLIENTE);
        this.INFORMACOES_COMPLETA.Importar_Objeto_Json(Data.INFORMACOES_COMPLETA);
        this.COORDENADAS.Importar_Objeto_Json(Data.COORDENADAS);
        this.EDUCACAO_CLIENTE.Importar_Objeto_Json(Data.EDUCACAO_CLIENTE);

    }


	Exportar_OS_Simplificado = () =>{
        let Script = ""
        
        //Gerando o Cabeçalho
        Script += Formatar_H1("Ordem de Serviço - Completa")

        Script += `${Lista_Simples("Criado", 25)} ${this.GET_Data_Criacao()}\n`
        Script += this.CLIENTE.Exportar_Estrutura_Simplificado();

        Script += this.INFORMACOES_COMPLETA.Exportar_Estrutura_Simplificado();

        Script += this.COORDENADAS.Exportar_Estrutura_Simplificado();
        
        // Teste de Rede

        Script += Formatar_H1("Testes de Rede")

        //Final da OS, gerando os Relatórios:

        Script += Formatar_H1("Relatório Final")
        
        //Gernado o Relato do Cliente:
        Script += this.CLIENTE.Exportar_Relatorio_Simplificado();
        //Gerando os Testes de Rede:

        //GErando os Relatórios Finais:

        Script += `${this.Relatorio_Adicional != null? `${Formatar_H2("Relatório Adicional:")} ${this.Relatorio_Adicional}`:""}`
        Script += `${this.Relatorio_Atraso != null? `${Formatar_H2("Relatório de Atraso:")} ${this.Relatorio_Atraso}`:""}`
        Script += `${this.Relatorio_Externo != null? `${Formatar_H2("Relatório Externo:")} ${this.Relatorio_Externo}`:""}`

        return Script
    }
	Exportar_OS_Markdown = () =>{
        let Script = ""

        //Gerando o Cabeçalho
        Script += "# ORDEM DE SERVIÇO - COMPLETA\n\n"

        Script += `- **Criado**: ${this.GET_Data_Criacao()};\n`;

        Script += this.CLIENTE.Exportar_Estrutura_Markdown();

        Script += this.INFORMACOES_COMPLETA.Exportar_Estrutura_Markdown();

        Script += this.COORDENADAS.Exportar_Estrutura_Markdown();

        //Final da OS, gerando os Relatórios:

        Script += "## RELATÓRIO FINAL\n"

        //Gernado o Relato do Cliente:
        Script += this.CLIENTE.Exportar_Relatorio_Markdown();
        //Gerando os Testes de Rede:

        //GErando os Relatórios Finais:

        Script += `${this.Relatorio_Adicional != null? `### RELATÓRIO ADICIONAL:\n${this.Relatorio_Adicional}`:""}`
        Script += `${this.Relatorio_Atraso != null? `### RELATÓRIO DE ATRASO:\n${this.Relatorio_Atraso}`:""}`
        Script += `${this.Relatorio_Externo != null? `### RELATÓRIO EXTERNO:\n${this.Relatorio_Externo}`:""}`


        return Script
    }

	Validar_Finalizacao = () =>{
        
        //Validando a Finalização de todos os itens do script:

        //Validando a Tratativa com Cliente:
        const cliente = this.CLIENTE.Validar_Finalizacao();
        if(!cliente[0]){
            disparar_notificacao("aviso", cliente[1])
            return
        }

        //Validando as Informações necessárias:
        const informacao_necessaria = this.INFORMACOES_COMPLETA.Validar_Finalizacao()
        if(!informacao_necessaria[0]){
            disparar_notificacao("aviso", informacao_necessaria[1])
            return
        }

        //Validando as Informações necessárias:
        const coordenada = this.COORDENADAS.Validar_Finalizacao()
        if(!coordenada[0]){
            disparar_notificacao("aviso", coordenada[1])
            return
        }

        return [true, null]

        
    }

	Validar_Sincronismo = () =>{
        console.log("Validando Sinc")

        let Categorias = []
        let Qdt_Sincs = 0; //Se maior que zero, valida a necessidade de sincronismo.
        let Script = "# Relatório de Sincronismo\n\n";

        Script += `**Data**: ${this.Data_Criacao}\n`;
        Script += `**Cliente**: ${this.CLIENTE.Get_Nome_Cadastro()[1]}\n`;
        Script += `**Técnico**: ${this.GET_Tecnico()}\n`;
        

        //Validando Informações de Abertura de OS:
        const ABERTURA_OS = this.INFORMACOES_COMPLETA.Validar_Sincronismo();
        if (ABERTURA_OS[0] === true){
            Categorias.push(ABERTURA_OS[1]);
            Qdt_Sincs += 1;
            Script += ABERTURA_OS[2]
        }

        //Informações Adicionais passadas ao Cliete:
        //..


        console.log(Categorias, Qdt_Sincs)
        console.log(Script)


        //Validar se teve informações de Sinc para salvar no banco de Sinc:

        //...

    }
	
	SET_OS_EDICAO = () =>{
        SET_ID_OS_em_Edicao(this.ID);
    }

	Gerar_Resumo_IA = () =>{

    }

	SINC_PING = () =>{

    }

	SINC_TRACERT = () =>{

    }

	SINC_VELOCIDADE = () =>{

    }
	
	GET_ID = () =>{
        return this.ID;
    }

	SET_Usado_Resumo_IA = () =>{
        this.Usado_Resumo_IA = !this.Usado_Resumo_IA;
    }

	GET_Usado_Resumo_IA = () =>{
        return this.Usado_Resumo_IA;
    }

	SET_Relatorio_Adicional = (Relatorio) =>{
                
        this.Relatorio_Adicional = Relatorio;

        return [true, null]

    }
	GET_Relatorio_Adicional = () =>{
        return this.Relatorio_Adicional;
    }

	SET_Relatorio_Atraso = (Relatorio) =>{
        
        this.Relatorio_Atraso = Relatorio;

        return [true, null]
    }
	GET_Relatorio_Atraso = () =>{
        return this.Relatorio_Atraso
    }

	SET_Relatorio_Externo = (Relatorio) =>{
        
        this.Relatorio_Externo = Relatorio;

        return [true, null]
    }
	GET_Relatorio_Externo = () =>{
        return this.Relatorio_Externo
    }

    SET_Data_Criacao = () =>{
        this.Data_Criacao = Obter_Data_Hora_Atual()
        return this.Data_Criacao;
    }

    GET_Data_Criacao = () =>{

        if (this.Data_Criacao === null){
            return "Data e Hora não Informados"
        }else{
            return this.Data_Criacao;
        }
        
    }

    SET_Tecnico = (Nome) => {
        const NOME = Nome === ""? null: Nome;
        this.Tecnico = Nome;
    }

    GET_Tecnico = () => {
        return this.Tecnico === null?"Técnico não Informado":this.Tecnico;
    }




}