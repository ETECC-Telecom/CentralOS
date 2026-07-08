import iniciarDB from "./db";
import { disparar_notificacao } from "../controller/disparar_notificacao";

export async function db_adicionar_script(script){
    const db = await iniciarDB();

    const idGerado = await db.add('modelo_script', {
        categoria: script.categoria,
        titulo: script.titulo,
        descricao: script.descricao
    });

    disparar_notificacao("sucesso","Novo script adicionado com sucesso!");
}


export async function db_ler_todos_scripts() {
    const db = await iniciarDB();
    const scripts = await db.getAll('modelo_script');
    return scripts;
}

export async function db_delete_item_script(id) {
    const db = await iniciarDB();
    await db.delete('modelo_script', id);
}

export async function db_editar_script(data) {
    const db = await iniciarDB()
    await db.put('modelo_script', data);
}