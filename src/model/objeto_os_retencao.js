

export const Ordem_Servico_Retencao = {
    config_OS: {
		tipo_os: null, //Completa, Retenção e etc.
		finalizada: false,
		info_encaminhadas: false, //informação copiada/enviada ao cliente
		id: null, //id do banco
		data_criacao: null,
		data_alteracao: null,
		usado_resumo_ia: false,

	},
	info_cliente: {
		nome_cliente: null, //Nome de quem acompanhou a visita;
		nome_cadastro: null, //Nome do Cliente em Cadastro para Mensagens Altomáticas
		parentesco: null, //Titular, Esposa'o, Filho'a, Funcionário, Avó'ô, Tio'a, outro
		parentesco_info: null, //Em caso de outros
		relato_cliente: null, //O problema relatado pelo Cleinte;
		telefone: null
	},
    endereco_info_os: {
		coordenadas: {
			latitude: null,
			longitude: null,
			precisao: 0,
		},
		anexo_fachada: false, //Foto da frente da casa anexada ao mk?
		info_necessaria: true, // ordem de serviço gerada com as informações necessárias
		complemento_info_necessaria: {
			//Usado quando as informações necessárias n foram complementares.
			requerimentos: [], //informações necessárias que faltaram;
			operador: null,
			info_padrao: {
				historico: false,
				comodato: false,
				descricao: false,
				contratacao: false,
			}
		}
	},
    
	informacao_atendimento: {
		foi_atendido: true, 
		local_ocupado: true, // casa/ap está em ocupação pelo titular ou outras pessoas?
		acordo: true, //O cliente aceitou o acordo proposto na ordem de serviço?
		alt_data_vencimento: false, //Houve alteração na data de vencimento?
		nova_data: null, //Qual o dia de vencimento escolhido pelo cliente caso tenha alterado a data de vencimento.
		info: { //Informações negociadas com vizinho, amigo, parente ou outra pessoa além do titular?
			verdadeiro: false, 
			observacao: null, //Qual é o nome e a relação com a pessoa que atendeu no local (ex.: vizinho, amigo, parente)?
		},		
	},

    indicacao: {
		solicitado: false,
		indicado: false, //Cliente passou indicação?
		nome: null, //Nome de contato do indicado!
		contato: null, //Número de contato do indicado!
		encaminhada: false, //Indicação levantada foi encaminhada?
	},

	ajuda_interna: {
		verdadeiro: false,
		setor: "Torre", // Torre, TI, Supervisão
		nome: null, //Quem auxiliou 
	},

	educacao_cliente: {
		// id: { //Id chave do array de informações passadas ao cliente!
		// 	titulo: null, //Informação passada ao cliente
		// }
	},

	atendimento_cliente: {
		// id: { //Id chave do array de informações passadas ao cliente!
		// 	titulo: null, //Informação passada ao cliente
		// }
	},
	complemento_atendimento: [ //Informações Extras passadas ao cliente
		//Chave = ID do Array, Valor = Descrição!
	],

    relato_adicional: null, //Informaçoes adicionais relacionadas a Visita

}