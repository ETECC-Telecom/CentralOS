
import { db_adicionar_logger } from "../model/Service_Loggers";
import { db_obter_ultimos_logs } from "../model/Service_Loggers";
import { Capturar_Nome_Tecnico } from "./capturar_nome_tecnico";

// 1. Função genérica que envia o erro para seu banco de dados ou backend
export async function registrarLog(dadosDoErro) {

    const agora = Temporal.Now.zonedDateTimeISO();

    const payload = {
        timestamp: agora.toLocaleString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        }).replace(',', ' -'),
        timestampMs: agora.epochMilliseconds,
        url: window.location.href,
        userAgent: navigator.userAgent,
        ...dadosDoErro
    };

    console.error('[LOG GLOBAL]:', payload);

    //Adicionando ao banco de dados:

    await db_adicionar_logger(payload);

}

export async function exportar_logs() {

    //Coletando os ultimos logs do banco, por padrão, os ultimos 20 logs, mas pode ser alterado mandando limite
    const LOGS = await db_obter_ultimos_logs()
    const TECNICO = Capturar_Nome_Tecnico();
    let script = `## LOGS de Erro:\n\n**Técnico**: ${TECNICO}\n\n`;
    //Formatando os LOGS para MARKDOWN para melhor leitura:


    if (LOGS[1].length !== 0) {
        LOGS[1].map((item, index) => {
            script += `### ${index+1} - ${item.tipo}\n- **ID**: ${item.id};\n- **Timestamp**: ${item.timestamp};\n- **URL**: ${item.url};\n- **Agente**: ${item.userAgent};\n- **Fonte**: ${item?.fonte || "Não Informado"}\n- **Contexto**: ${item?.contexto || "Não Informado"}\n\n> ${item?.mensagem || "Não Informado"}\n\n`
        })
    }

    return script;


}