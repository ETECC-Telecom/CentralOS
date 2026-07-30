

export const Ordem_Servico_Retirada = {
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
	
	motivo_cancelamento: {
		categoria: 'outro', //inviabilidade, condicao_financeira, mudanca_residencia, perda_equipamento, troca_provedor, obito_titular, insatisfacao, outros
		inviabilidade_observacao: null,
		troca_provedor_observacao:null,
		insatisfacao_observacao: null,
		outros_observacao: null,
	},

	conferencia_tecnica:{
		comprovante_retirada: false,
		fontes_retiradas: true,
		fotos_anexadas: true,
		equipamentos_local: {
			troca: false,
			pppoe: null,
			cod_conexao: null,
			motivo_troca: "solicitacao_cliente", // motivos de troca da planilha
			observacao: null, //Caso tenha alguma observação extra
			ativos: [
			],
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

    relato_adicional: null, //Informaçoes adicionais relacionadas a Visita

}