

export const Ordem_Servico_Los = {
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
    conferencias_tecnicas: {
		rompimento_externo: false, //Foi identificado se existe algum rompimento externo:
		fibra_padrao: true, //A fibra interna está nos padrões:
		pto: true, //A PTO está instalada Corretamente?
		cordao_obtico: true, //Verificou o patch cord (se está dobrado ou quebrado):
		limpeza: true, //Realizou a limpeza do leitor óptico da ONU e do conector:
		checagem: true, //Verificou se o causador do LOS não seria o próprio equipamento:
		anexos: true, //Todas as fotos das verificações solicitadas acima foram anexadas no MK:
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