
//Esse método irá capturar a data e hora atual e formatar para o padrão DD/MM/AAA - HH:MM:SS

export const Obter_Data_Hora_Atual = () => {
  // Obtém a data e hora local atual usando Temporal
  const agora = Temporal.Now.plainDateTimeISO();

  // Extrai e formata os componentes com zeros à esquerda quando necessário
  const dia = String(agora.day).padStart(2, '0');
  const mes = String(agora.month).padStart(2, '0');
  const ano = agora.year;

  const hora = String(agora.hour).padStart(2, '0');
  const minuto = String(agora.minute).padStart(2, '0');
  const segundo = String(agora.second).padStart(2, '0');

  return `${dia}/${mes}/${ano} - ${hora}:${minuto}:${segundo}`;
}

