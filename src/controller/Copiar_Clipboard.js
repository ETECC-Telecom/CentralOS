import { registrarLog } from "./logger";
import { disparar_notificacao } from "./disparar_notificacao";

export const Copiar_Clipboard = async (data) => {
    try {
        let Texto = data

        navigator.clipboard.writeText(Texto)
            .then(() => {

                disparar_notificacao("sucesso", "Texto copiado com sucesso");


            })
            .catch(err => {
                disparar_notificacao("erro", "Erro ao copiar o texto:", err)

            });
    } catch (error) {
        disparar_notificacao("erro", error);
        await registrarLog({
            tipo: 'ERRO_EXECUCAO_COPIA_CLIPBOARD',
            mensagem: error?.message || String(error),
            fonte: 'Copiar_Clipboard.js',
            linha: null,
            coluna: null,
            stack: error?.stack || null,
            contexto: 'Ocorreu um erro ao tentar copiar a data para o clipboard.'
        });
    }
}