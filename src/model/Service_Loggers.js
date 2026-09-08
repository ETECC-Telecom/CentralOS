import iniciarDB from "./db";
import { disparar_notificacao } from "../controller/disparar_notificacao";

export async function db_adicionar_logger(payload) {
    const db = await iniciarDB();
    const PAYLOAD = JSON.stringify(payload)

    try {
        const idGerado = await db.add('loggers', {
            payload: PAYLOAD
        });
        return [true, idGerado];
    } catch (error) {
        return [false, null];
    }

}

export async function db_obter_ultimos_logs(limite = 20) {
    const db = await iniciarDB();

    try {
        // Tenta buscar diretamente usando a API da biblioteca (se suportado)
        // Ou faz a iteração com o cursor no sentido reverso
        const tx = db.transaction('loggers', 'readonly');
        const store = tx.objectStore('loggers');

        const logs = [];
        // 'prev' garante que o primeiro item lido é o MAIS RECENTE adicionado
        let cursor = await store.openCursor(null, 'prev');

        while (cursor && logs.length < limite) {
            logs.push({
                id: cursor.key,
                ...JSON.parse(cursor.value.payload)
            });
            cursor = await cursor.continue();
        }

        return [true, logs];
    } catch (error) {
        console.error('Erro ao buscar logs mais recentes:', error);
        return [false, []];
    }
}

export async function db_ler_todos_logger() {
    const db = await iniciarDB();
    const OSs = await db.getAll('loggers');

    // Filtra removendo o campo 'Objeto' de cada item
    const resumoOSs = OSs.map(({ objeto, ...resumo }) => resumo);

    return resumoOSs;
}

export async function db_get_item_logger(id) {
    try {
        const db = await iniciarDB();
        const OS = await db.get('loggers', parseInt(id));
        return OS

    } catch (error) {
        disparar_notificacao("erro", `Ocorreu um problema na exclusão, erro:\n${error}`);
    }
}
