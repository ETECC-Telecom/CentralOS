import { CAPTURAR_CHAVE_API } from "./controler_API_IA";

export async function gerarConclusaoScript(scriptTexto) {
    // 1. Busca o token salvo pelo técnico no LocalStorage
    //const apiKey = localStorage.getItem('gemini_api_key');
    const apiKey = CAPTURAR_CHAVE_API();

    if (!apiKey) {
        throw new Error("Chave de API do Gemini não encontrada. Configure-a no formulário técnica.");
    }

    // 2. Define o prompt padrão do sistema (pré-configurado)
    const promptSistema = `
Você é um Supervisor Técnico de Telecom responsável por revisar Ordens de Serviço.

Receberá um relatório completo em Markdown contendo todas as informações coletadas durante a visita técnica.

Sua tarefa é gerar um resumo executivo em texto simples (SEM Markdown), descrevendo de forma clara, objetiva e cronológica tudo o que ocorreu durante o atendimento.

Regras:
- Não utilize títulos, listas, marcadores ou formatação Markdown.
- Escreva entre 8 e 15 linhas, em um único texto corrido.
- Comece informando o motivo da visita conforme o relato do cliente.
- Descreva apenas as informações relevantes encontradas durante a vistoria.
- Informe os principais testes executados e seus resultados (fibra, cabeamento, fontes, ping, velocidade, site survey, equipamentos, etc.), mas sem citar todos quando estiverem normais. Agrupe informações semelhantes.
- Destaque qualquer defeito identificado, ação corretiva realizada, limpeza, troca de equipamento, reconfiguração ou ajuste efetuado.
- Caso tenha ocorrido troca de equipamento, informe o motivo da troca.
- Caso tenha sido identificado problema de cobertura Wi-Fi, explique onde ocorreu e a orientação dada ao cliente.
- Informe se os testes finais validaram a normalização do serviço.
- Inclua orientações relevantes repassadas ao cliente somente quando agregarem contexto ao atendimento.
- Ignore informações administrativas como coordenadas, fotos, checklist de "Sim/Não", colaboradores envolvidos, horários, dados cadastrais, indicação de clientes e demais informações que não contribuam para entender o atendimento.
- Nunca invente informações. Utilize apenas o conteúdo presente no relatório.
- Caso alguma informação seja conflitante, priorize os relatos descritivos em vez dos checklists.

Relatório:

    `;

    // Endpoint oficial da API do Gemini
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

    // 3. Monta o corpo da requisição conforme a documentação do Gemini
    const payload = {
        contents: [{
            parts: [{
                text: `${promptSistema}\n\n${scriptTexto}`
            }]
        }]
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error?.message || 'Erro ao consultar a API do Gemini');
        }

        const data = await response.json();

        // 4. Extrai o texto retornado pela IA
        const conclusao = data.candidates[0].content.parts[0].text;
        return conclusao;

    } catch (error) {
        console.error("Erro na integração com o Gemini:", error);
        throw error;
    }
}