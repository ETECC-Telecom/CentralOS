
export const VERSAO = "0.0.6";
export const DATA_ATUALIZACAO = "15/09/2026"
export const HASH = "0a3f5b11cb1a343e3184590ed685a389b51ae7fa16e08b96bdee7fd6bc4da1aa";
export const CHARGELOG = [

    //Molde do Changelog
    // {
    //         versao:"0.0.1",
    //         data:"31 Julho, 2026",
    //         logs:[
    //             {
    //                 tipo: 1, //1 = Novidades / Features, 2 = Melhorias e 3 = Correções (Bug Fixes)
    //                 descricao: "Finalizado e lançado a primeira versão do aplicativo para testes em campo"
    //             },
    //         ]
    //     },
    {
            versao:"0.0.6",
            data:"22 Setembro, 2026",
            logs:[
                {
                    tipo: 3, //1 = Novidades / Features, 2 = Melhorias e 3 = Correções (Bug Fixes)
                    descricao: "Corrigido erro do TemporalDate ao tentar gerar o relatório final da O.S"
                },
            ]
        },
    {
        versao: "0.0.5",
        data: "15 Setembro, 2026",
        logs: [
            {
                tipo: 1, //1 = Novidades / Features, 2 = Melhorias e 3 = Correções (Bug Fixes)
                descricao: "Ajustado retorno do sinal de fibra, omitindo os mesmos no script final quando não é informado."
            },
            {
                tipo: 1, //1 = Novidades / Features, 2 = Melhorias e 3 = Correções (Bug Fixes)
                descricao: "Novo formulário de cadastro e controle de calibragem do Power Mitter para registro automática na baixa da OS;"
            },
            {
                tipo: 1, //1 = Novidades / Features, 2 = Melhorias e 3 = Correções (Bug Fixes)
                descricao: "Adicionado nova regra para mensagem encaminhada ao Cliente, do qual, na aba educação do cliente, o técnico pode justificar o motivo de não enviar via Whatsapp."
            },
            {
                tipo: 1, //1 = Novidades / Features, 2 = Melhorias e 3 = Correções (Bug Fixes)
                descricao: "Adicionado campo de relato de atraso para auxilio na auditoria de ofensores, com função de sincronismo implementado;"
            },
            {
                tipo: 1, //1 = Novidades / Features, 2 = Melhorias e 3 = Correções (Bug Fixes)
                descricao: "Adicionado função de reconhecimento automático de manha/tarde para encaminhar mensagem ao cliente;"
            },
            {
                tipo: 2, //1 = Novidades / Features, 2 = Melhorias e 3 = Correções (Bug Fixes)
                descricao: "Corrigido o Bug da lista de troca de ativos;"
            },
            {
                tipo: 3, //1 = Novidades / Features, 2 = Melhorias e 3 = Correções (Bug Fixes)
                descricao: "Correção do bug de Script padrão, no qual precisava digitar algo adicional após inserir o script para validar. Agora essa validação é automática;"
            },
        ]
    },
    {
        versao: "0.0.4",
        data: "11 Setembro, 2026",
        logs: [
            {
                tipo: 1, //1 = Novidades / Features, 2 = Melhorias e 3 = Correções (Bug Fixes)
                descricao: "Adicionado a Função de sincronismo de dados de Informações ausentes e Informações adicionais passadas ao cliente;"
            },
            {
                tipo: 1, //1 = Novidades / Features, 2 = Melhorias e 3 = Correções (Bug Fixes)
                descricao: "Adicionado contagem das Ordens de serviço realizadas no dia, semana e mês;"
            },
            {
                tipo: 2, //1 = Novidades / Features, 2 = Melhorias e 3 = Correções (Bug Fixes)
                descricao: "Reformulado mensagem de encerramento para conferência de cabos de rede no local;"
            },
        ]
    },
    {

        versao: "0.0.3",
        data: "09 Setembro, 2026",
        logs: [
            {
                tipo: 1, //1 = Novidades / Features, 2 = Melhorias e 3 = Correções (Bug Fixes)
                descricao: "Adicionado pagina de Lista de Trocas para mostrar todos os ativos que foram trocados na casa dos clientes caso tenha sido marcado na OS como positivo. Além disso, sistema de filtro e busca funcionando corretamente;"
            },
            {
                tipo: 2, //1 = Novidades / Features, 2 = Melhorias e 3 = Correções (Bug Fixes)
                descricao: "Adicionado novo mecanismo de filtro na lista de OS realizadas por Categoria, Nome e Data;"
            },
            {
                tipo: 2, //1 = Novidades / Features, 2 = Melhorias e 3 = Correções (Bug Fixes)
                descricao: "Adicionado lista de OS do mais recente para o mais antigo;"
            },

        ]
    },
    {
        versao: "0.0.2",
        data: "05 Setembro, 2026",
        logs: [
            {
                tipo: 1, //1 = Novidades / Features, 2 = Melhorias e 3 = Correções (Bug Fixes)
                descricao: "Adicionado novo sistema de LOG;"
            },
            {
                tipo: 1, //1 = Novidades / Features, 2 = Melhorias e 3 = Correções (Bug Fixes)
                descricao: "Adicionado página de sobre para verificar informações básicas do App;"
            },
            {
                tipo: 1, //1 = Novidades / Features, 2 = Melhorias e 3 = Correções (Bug Fixes)
                descricao: "Adicionado página de configuração para cadastro de recursos do App;"
            },
            {
                tipo: 3, //1 = Novidades / Features, 2 = Melhorias e 3 = Correções (Bug Fixes)
                descricao: "Correção do bug na barra de rolagem nos modelos de Scripts;"
            },
            {
                tipo: 3, //1 = Novidades / Features, 2 = Melhorias e 3 = Correções (Bug Fixes)
                descricao: "Correção do bug no uso da IA;"
            },
        ]
    },
    {
        versao: "0.0.1",
        data: "31 Julho, 2026",
        logs: [
            {
                tipo: 1, //1 = Novidades / Features, 2 = Melhorias e 3 = Correções (Bug Fixes)
                descricao: "Finalizado e lançado a primeira versão do aplicativo para testes em campo"
            },
        ]
    },
]