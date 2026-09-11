import { disparar_notificacao } from "./disparar_notificacao";
import { db_delete_item_sync } from "../model/Service_Sync";

export const Enviar_Sync_Planilha = async (data, callback_animacao, callback_reload) => {

    const URL_DO_ENDPOINT = "https://script.google.com/macros/s/AKfycbw-JcMic5_NV_eGNUT35YK_W8I73KgU6AkBH0C9kyvAkSbfguwWVyhYcKe3Iba8baXeWw/exec";

    const DATA = data;

    const TOTAL = DATA.length;
    let CONCLUIDO = 0;

    //Enviando a Planilha:
    DATA.filter((item, chave) => {
        
        fetch(URL_DO_ENDPOINT, {
            method: "POST",
            // O Apps Script exige "text/plain" para evitar problemas de CORS preflight (OPTIONS request)
            headers: {
                "Content-Type": "text/plain;charset=utf-8"
            },
            body: JSON.stringify(item.payload)
        })
            .then(response => response.json())
            .then(data => {
                CONCLUIDO += 1;
                disparar_notificacao("sucesso", `ITEM ENVIADO (${CONCLUIDO}/${TOTAL})`)
                if (CONCLUIDO === TOTAL){
                    callback_animacao();
                    callback_reload();
                }
                db_delete_item_sync(item.id)

            })
            .catch(error => {
                callback_animacao();
                disparar_notificacao("erro", `Item não enviado\n${error}`)
                console.error("Erro ao enviar:", error);
            });
    })

}