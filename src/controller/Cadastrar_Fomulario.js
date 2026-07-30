import { disparar_notificacao } from "./disparar_notificacao";

export const CADASTRAR_FORMULARIO_FEEDBACK = (Url) => {
    const URL = Url;

    try {

        localStorage.setItem("formulario_feedback", URL);
        disparar_notificacao('sucesso', "Formulário cadastrado com sucesso!")

    } catch (erro) {

        disparar_notificacao('erro', `Não foi possível salvar a Url no banco!\n${erro}`)

    }

}