import iniciarDB from "./db";
import { disparar_notificacao } from "../controller/disparar_notificacao";

export async function db_adicionar_sinc(payload){
    const db = await iniciarDB();
    
    const idGerado = await db.add('notificacao_sinc', {
        payload: payload,
    });
}

export async function db_ler_todos_sincs() {
    const db = await iniciarDB();
    const payload = await db.getAll('notificacao_sinc');
    return payload;
}

export async function db_delete_item_sync(id) {
    try {
        const db = await iniciarDB();
        await db.delete('notificacao_sinc', parseInt(id));

    } catch (error) {
        disparar_notificacao("erro", `Ocorreu um problema na exclusão, erro:\n${error}`);
        await registrarLog({
            tipo: 'ERRO_EXECUCAO_DELETAR_SYNC_DB',
            mensagem: error?.message || String(error),
            fonte: 'Service_Sync.js',
            linha: null,
            coluna: null,
            stack: error?.stack || null,
            contexto: 'Ocorreu um erro ao tentar deletar um Payload no banco de dados.'
        });
    }
}