import { disparar_notificacao } from "./disparar_notificacao";
/*
Serviço resposnável pela gestão da chave da API usada pela IA de analise
*/

const CAMPO = "CHAVE_API"

export const CADASTRAR_CHAVE_API = (chave) => {
    const chave_api = chave;

    try {

        localStorage.setItem(CAMPO, chave_api);
        disparar_notificacao('sucesso', "Chave salva com sucesso!")

    } catch (erro) {

        disparar_notificacao('erro', `Não foi possível salvar a chave no banco!\n${erro}`)

    }

}

export const CAPTURAR_CHAVE_API = () => {

    try {
        const chave = localStorage.getItem(CAMPO);
        return chave
    } catch (erro) {
        disparar_notificacao('erro', `Erro ao ler a chave da API!\n${erro}`)
        return false;
    }

}