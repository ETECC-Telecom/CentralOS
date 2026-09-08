import { disparar_notificacao } from "./disparar_notificacao";
import { registrarLog } from "./logger";

export const CADASTRAR_FORMULARIO_FEEDBACK = async (Url) => {
    const URL = Url;

    try {

        localStorage.setItem("formulario_feedback", URL);
        disparar_notificacao('sucesso', "Formulário cadastrado com sucesso!")

    } catch (error) {
        disparar_notificacao('erro', `Não foi possível salvar a Url no banco!\n${error}`);
        await registrarLog({
            tipo: 'ERRO_EXECUCAO_CADASTRO_FORMULARIO_FEEDBACK',
            mensagem: error?.message || String(error),
            fonte: 'Cadastrar_Formulario.js',
            linha: null,
            coluna: null,
            stack: error?.stack || null,
            contexto: 'Ocorreu um erro ao tentar cadastrar o linkl de formulário de feedback pessoal.'
        });

    }

}