import iniciarDB from "./db";
import { disparar_notificacao } from "../controller/disparar_notificacao";
import { registrarLog } from "../controller/logger";


export async function db_criar_ficha_treino(ficha) {
    const db = await iniciarDB();

    try {
        const idGerado = await db.add('ficha_treino', ficha);
        return true;
    } catch (error) {
        disparar_notificacao("erro", `Não consegui Criar/Salvar a a ficha de treino, erro:\n${error}`);
        await registrarLog({
            tipo: 'ERRO_EXECUCAO_CRIAR_FICHA_TREINO',
            mensagem: error?.message || String(error),
            fonte: 'Service_Ficha_TReino.js',
            linha: null,
            coluna: null,
            stack: error?.stack || null,
            contexto: 'Ocorreu um erro ao tentar criar ou salvar a ficha de treino no banco.'
        });
        return false;
    }

}

export async function db_ler_todas_fichas_treino() {
    const db = await iniciarDB();
    const fichas = await db.getAll('ficha_treino');
    return fichas;
}

export async function db_get_ficha_treino(id) {
    try {
        const db = await iniciarDB();
        const FICHA = await db.get('ficha_treino', parseInt(id));
        return FICHA

    } catch (error) {
        disparar_notificacao("erro", `Ocorreu um problema na captura, erro:\n${error}`);
        await registrarLog({
            tipo: 'ERRO_EXECUCAO_CAPTURAR_FICHA_TREINO_DB',
            mensagem: error?.message || String(error),
            fonte: 'Service_Ficha_Treino.js',
            linha: null,
            coluna: null,
            stack: error?.stack || null,
            contexto: 'Ocorreu um erro ao tentar capturar uma ficha no banco de dados.'
        });
    }
}

export async function db_editar_Ficha_Treino(ID, data) {
    const db = await iniciarDB();
    
    try {
        const idGerado = await db.put('ficha_treino', {
            id: parseInt(ID),
            ...data,
        });
        return true;
    } catch (error) {
        disparar_notificacao("erro", `Ficha de Treino não foi adicionada ao banco, erro:\n${error}`);
        await registrarLog({
            tipo: 'ERRO_EXECUCAO_EDITAR_FICHA_TREINO_DB',
            mensagem: error?.message || String(error),
            fonte: 'Service_Ficha_Treino.js',
            linha: null,
            coluna: null,
            stack: error?.stack || null,
            contexto: 'Ocorreu um erro ao tentar editar uma Ficha de Treino no banco de dados.'
        });
        return false;
    }

}

export async function db_delete_item_ficha(id) {
    try {
        const db = await iniciarDB();
        const ID = parseInt(id)
        await db.delete('ficha_treino', ID);
        return true;
    } catch (error) {
        disparar_notificacao("erro", `Ficha de Treino não foi deletada do banco, erro:\n${error}`);
        await registrarLog({
            tipo: 'ERRO_EXECUCAO_EXCLUSAO_FICHA_TREINO_DB',
            mensagem: error?.message || String(error),
            fonte: 'Service_Ficha_Treino.js',
            linha: null,
            coluna: null,
            stack: error?.stack || null,
            contexto: 'Ocorreu um erro ao tentar deletar uma Ficha de Treino no banco de dados.'
        });
        return false;
    }
    
}


export const definir_ficha_ativa_local = (identificador_banco) => {
    localStorage.setItem('ficha_ativa', identificador_banco)
}

export const capturar_ficha_ativa_local = () => {
    return localStorage.getItem('ficha_ativa');
}



// export async function db_delete_item_script(id) {
//     const db = await iniciarDB();
//     await db.delete('modelo_script', id);
// }

// export async function db_editar_script(data) {
//     const db = await iniciarDB()
//     await db.put('modelo_script', data);
// }