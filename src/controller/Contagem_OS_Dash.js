import { db_ler_OS_filtro_mensal } from "../model/Service_Ordens_Servico";

export const Contagen_OS_Dash = async () =>{
    const data_atual = Temporal.Now.plainDateISO();
    let dia = 0;
    let semana = 0;
    let mes = 0;

    const OS = await db_ler_OS_filtro_mensal(data_atual.year, data_atual.month);

    //Como a quantidade de OS já é pega por filtro mensal, basta somar o tamanho do retorno a variável Mes:
    mes = OS.length;

    //Agora basta filtrar as OS diárias e semanais.

    OS.filter(item => {
        const data_os = Temporal.PlainDate.from(item.data_criacao);

        //Validando se a Data está no mesmo dia:
        data_os.weekOfYear === data_atual.weekOfYear? semana += 1: "";
        data_os.day === data_atual.day? dia += 1:""; 

    });

    const payload = {
        dia: dia,
        semana: semana,
        mes:mes
    }
    
    //Agora basta adicionar os dados do calculo no banco local~

    localStorage.setItem("dash_os", JSON.stringify(payload))
}