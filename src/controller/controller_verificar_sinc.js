import { Capturar_Nome_Tecnico } from "./capturar_nome_tecnico";
import { db_adicionar_sinc } from "../model/Service_Sync";

export const Verificar_Salvar_Sync = async (data) => {

    const Informacoes_Extras = data.complemento_atendimento;
    const Informacoes_Anexadas = data.endereco_info_os;
    const Cliente = data.info_cliente.nome_cadastro;
    
    //Validando se temos alguma informação extra ou se falta de informacao:
    if(Informacoes_Extras.length === 0 && Informacoes_Anexadas.info_necessaria){
        return
    }

    //Formatacao da data
    const zdt = Temporal.ZonedDateTime.from(data.config_OS.data_criacao);
    const Data = zdt.toLocaleString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });

    const Tecnico = Capturar_Nome_Tecnico();
    let script = "# Ocorrências de OS's\n\n";

    //Construindo o Script:

    script += `> **TÉCNICIO:** ${Tecnico};\n`;
    script += `> **CLIENTE:** ${Cliente}\n`;
    script += `> **DATA:** ${Data}\n\n`;

    //Construindo as Informaçoes passadas ao cliente!
    script += "## Informações adicionais ao Cliente\n\n"
    if (Informacoes_Extras.length !== 0) {
        Informacoes_Extras.map(item => script += `- ${item}\n`);
    } else {
        script += "> Não foram anexadas Informações adicionais passadas ao cliente"
    }
    script += "\n"
    //Construindo as informações ausentes
    script += "## Informações necessárias\n\n";

    if (!Informacoes_Anexadas.info_necessaria) {
        let lista = Informacoes_Anexadas.complemento_info_necessaria.info_padrao
        script += `**Operador:** ${Informacoes_Anexadas.complemento_info_necessaria.operador}\n\n${lista.comodato === false ? "" : "- Informação de comodato não relatado\n"}${lista.contratacao === false ? "" : "- Informação da data de contratação não informado\n"}${lista.descricao === false ? "" : "- Descrição da OS omitida ou infima\n"}${lista.historico === false ? "" : "- Histórico de Quedas omitido\n"}\n`;

        script += 'LISTA COMPLEMENTAR\n\n'

        let lista_complemento = Informacoes_Anexadas.complemento_info_necessaria.requerimentos;
        lista_complemento.map(item => script += `- ${item}\n`);

    } else {
        script += "> Não tivemos relatório referente a Informações necessárias na abertura da OS!"
    }

    //Construindo o Payload

    const Payload = {
        tecnico: Tecnico,
        data: Data,
        relatorio: script
    }   

    await db_adicionar_sinc(Payload);
    

}