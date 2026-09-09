
export const Formatar_Data = (data) => {
    // 1. Cria o objeto Temporal.PlainDate a partir da string no formato ISO (AAAA-MM-DD)
    const dataIso = Temporal.PlainDate.from(data);

    // 2. Formata para o padrão brasileiro (DD/MM/AAAA)
    const dataFormatada = dataIso.toLocaleString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    });

    return dataFormatada;
}