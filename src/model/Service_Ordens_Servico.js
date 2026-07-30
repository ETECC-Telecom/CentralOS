import iniciarDB from "./db";
import { disparar_notificacao } from "../controller/disparar_notificacao";

export async function db_adicionar_OS(OS, cliente, data_criacao, categoria){
    const db = await iniciarDB();

    try {
        const idGerado = await db.add('ordens_servico', {
            categoria: categoria,
            cliente: cliente,
            data_criacao: data_criacao,
            objeto: OS
        });
        disparar_notificacao("sucesso",`Ordem de Serviço Adicionada ao Banco com ID: ${idGerado}`);
        return [true,idGerado];
    } catch (error) {
        disparar_notificacao("erro",`Ordem de Serviço não foi adicionada ao banco, erro:\n${error}`);
        return [false,null];
    }
 
}

export async function db_ler_todos_OS() {
    const db = await iniciarDB();
    const OSs = await db.getAll('ordens_servico');

    // Filtra removendo o campo 'Objeto' de cada item
    const resumoOSs = OSs.map(({ objeto, ...resumo }) => resumo);

    return resumoOSs;
}

export async function db_delete_item_os(id) {
    try {
        const db = await iniciarDB();
        await db.delete('ordens_servico', parseInt(id));
        disparar_notificacao("sucesso",`Ordem de Serviço ${id} deletada com sucesso!`);

    } catch (error) {
        disparar_notificacao("erro",`Ocorreu um problema na exclusão, erro:\n${error}`);
    }
}

export async function db_get_item_os(id) {
    try {
        const db = await iniciarDB();
        const OS = await db.get('ordens_servico', parseInt(id));
        return OS

    } catch (error) {
        disparar_notificacao("erro",`Ocorreu um problema na exclusão, erro:\n${error}`);
    }
}

export async function db_editar_OS(OS, ID, cliente, data_criacao, categoria) {
    const db = await iniciarDB();

    try {
        const idGerado = await db.put('ordens_servico', {
            id: parseInt(ID),
            categoria: categoria,
            cliente: cliente,
            data_criacao: data_criacao,
            objeto: OS
        });
        disparar_notificacao("sucesso",`Ordem de Serviço Salva ao Banco com ID`);
        return [true,idGerado];
    } catch (error) {
        disparar_notificacao("erro",`Ordem de Serviço não foi adicionada ao banco, erro:\n${error}`);
        return [false,null];
    }

}