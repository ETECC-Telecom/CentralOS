import { disparar_notificacao } from "./disparar_notificacao";
import { registrarLog } from "./logger";
/*
Serviço resposnável pela gestão da chave da API usada pela IA de analise
*/

const CAMPO = "CHAVE_API"

export const CADASTRAR_CHAVE_API = async (chave) => {
    const chave_api = chave;

    try {

        localStorage.setItem(CAMPO, chave_api);
        disparar_notificacao('sucesso', "Chave salva com sucesso!")

    } catch (error) {

        disparar_notificacao('erro', `Não foi possível salvar a chave no banco!\n${error}`)

        await registrarLog({
            tipo: 'ERRO_EXECUCAO_CADASTRAR_CHAVE_API',
            mensagem: error?.message || String(error),
            fonte: 'controle_API_IA.js',
            linha: null,
            coluna: null,
            stack: error?.stack || null,
            contexto: 'Ocorreu um erro ao tentar cadastrar a chave da API no localstorage.'
        });

    }

}

export const CAPTURAR_CHAVE_API = async () => {

    try {
        const chave = localStorage.getItem(CAMPO);
        return chave
    } catch (erro) {
        disparar_notificacao('erro', `Erro ao ler a chave da API!\n${erro}`)
        
         await registrarLog({
            tipo: 'ERRO_EXECUCAO_CAPTURAR_CHAVE_API',
            mensagem: error?.message || String(error),
            fonte: 'controle_API_IA.js',
            linha: null,
            coluna: null,
            stack: error?.stack || null,
            contexto: 'Ocorreu um erro ao tentar capturar a chave da API no localstorage.'
        });
        
        return false;
    }

}