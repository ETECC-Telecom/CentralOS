import { registrarLog } from "./logger";


export const Cadastrar_Usuario = (usuario) => {
    //alert(usuario)
    localStorage.setItem('usuario', usuario)
}

export const Capturar_Usuario = async () => {
    try {
        const USUARIO = localStorage.getItem('usuario')
        return USUARIO;
    } catch (error) {
        return "Não consegui retorar o usuário"
        await registrarLog({
            tipo: 'ERRO_EXECUCAO_CAPTURAR_USUARIO',
            mensagem: error?.message || String(error),
            fonte: 'cadastrar_usuario.js',
            linha: null,
            coluna: null,
            stack: error?.stack || null,
            contexto: 'Ocorreu um erro ao tentar retornar o usuário do localstorage.'
        });
    }
}

export const Cadastrar_Chave_Api = (chave) => {
    localStorage.setItem('CHAVE_API', chave)
}

export const Capturar_Chave_Api = async () => {
    try {
        const CHAVE = localStorage.getItem('CHAVE_API')
        return CHAVE;
    } catch (error) {
        return "Não consegui retorar a chave"
        await registrarLog({
            tipo: 'ERRO_EXECUCAO_CAPTURAR_CHAVE_API',
            mensagem: error?.message || String(error),
            fonte: 'cadastrar_usuario.js',
            linha: null,
            coluna: null,
            stack: error?.stack || null,
            contexto: 'Ocorreu um erro ao tentar retornar a chave da api do localstorage.'
        });
    }
}

export const Cadastrar_Link_Feedback = (link) => {
    localStorage.setItem('formulario_feedback', link)
}

export const Capturar_Link_Feedback = async () => {
    try {
        const LINK = localStorage.getItem('formulario_feedback')
        return LINK;
    } catch (error) {
        return "Não consegui retorar o link"

        await registrarLog({
            tipo: 'ERRO_EXECUCAO_CAPTURAR_LINK_FEEDBACK',
            mensagem: error?.message || String(error),
            fonte: 'cadastrar_usuario.js',
            linha: null,
            coluna: null,
            stack: error?.stack || null,
            contexto: 'Ocorreu um erro ao tentar retornar o Link de feedback do técnico do localstorage.'
        });

    }
}
