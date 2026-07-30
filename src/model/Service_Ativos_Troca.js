import iniciarDB from "./db";
import { disparar_notificacao } from "../controller/disparar_notificacao";

export async function db_adicionar_Troca(Ativos){
    const db = await iniciarDB();

    try {
        const idGerado = await db.add('equipamentos_troca', {
            inseridos: Ativos.inseridos,
            retirados: Ativos.retirados,
            data: Ativos.data,
            cod_conexao: Ativos.cod_conexao,
            pppoe: Ativos.pppoe,
            id_os_pai: Ativos.id_os_pai
        });
        disparar_notificacao("sucesso",`Trocas de Ativos Registradas`);
        return true;
    } catch (error) {
        disparar_notificacao("erro",`OrNão consegui Registrar a Troca de ativos, erro:\n${error}`);
        return false;
    }
 
}



// export async function db_ler_todos_scripts() {
//     const db = await iniciarDB();
//     const scripts = await db.getAll('modelo_script');
//     return scripts;
// }

// export async function db_delete_item_script(id) {
//     const db = await iniciarDB();
//     await db.delete('modelo_script', id);
// }

// export async function db_editar_script(data) {
//     const db = await iniciarDB()
//     await db.put('modelo_script', data);
// }