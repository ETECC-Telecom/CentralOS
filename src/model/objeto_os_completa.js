
export const Ordem_Servico_Completa = {
	//Atributos de controle da OS
	config_OS: {
		tipo_os: null, //Completa, Retenção e etc.
		finalizada: false,
		info_encaminhadas: false, //informação copiada/enviada ao cliente
		id: null, //id do banco

	},
	info_cliente: {
		nome_cliente: null, //Nome de quem acompanhou a visita;
		parentesco: null, //Titular, Esposa'o, Filho'a, Funcionário, Avó'ô, Tio'a, outro
		parentesco_info: null, //Em caso de outros
		relato_cliente: null //O problema relatado pelo Cleinte;
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
	conferencia_tecnica: {
		cabos_utp: [
			// {
			// 	cabo: null, // Cabo de rede da WAN, ou outros cabos;
			// 	checagens: [false, false, false], // Checagem se o Cabo é Giga/Teste Powermitter e Ping diretamente no cabo.
			// 	anexo_cabos: false, // Foto do cabo de Rede devidamente conectado;
			// 	observacao: null, // Observação adicional quando necessário.
			// }
		],
		fontes: {
			mau_contato: true, //Checagem de mau contato nas fontes;
			amperagem: true, //Checagem se a amperagem da fonte está correta;
			uso: true, // Se está sendo usado corretamente, por exemplo, uso de filtro de linha.
			observacao: null //Observações adicionais relacionadas as fontes do local.
		},

		fibra: {
			sinal_pto: null, //Pode ser um valor float, ou uma string "LOS"
			sinal_pathcord: null, //Pode ser um valor float, ou uma string "LOS"
			sinal_autoisp: null, //Pode ser um valor float, ou uma string "LOS"
			anexo_sinal: true, //anexo do sinal de fibra;
			limpeza: true, //Se foi realizado a limpeza da fibra;
			observacao: null, // informações relacionadas a fibra.
		},
		conferencia_router: [
			{
				router: null, //Informar se é primeiro ponto, segundo ou ativo do cliente.
				dns: null, //Etecc, Google, outros,
				outro_dns:null, //String contendo o outro DNS.
				largura_banda: null, //20MHz, 40MHz, 20/40MHz
				upnp: false, //Se está ativado ou não
				ipv6: false, //ativado e com protocolo SLAAC,
				acesso_remoto: false, //Se está ativo e configurado
				ativos_anormal: {
					verdadeiro: false, // Se tem ou não ativos acima do normal.
					observacao: null // Caso ativos esteja acima do normal, quantos são?
				},
				atividade: { //Tempo de funcionamento do ativo acima do esperado
					verdadeiro: false,
					observacao: null // Caso ativos estejaligado a mais de 1 semana!
				},
				firware_router: false, //Se está devidamente atualizado.
				local_equipamento: {
					adequado: false, //Se o local está adequado,
					ciente: true, //Se o cliente ta ciente da necessidade do remanejamento.
					observacao: null //Motivo de ser um local adeguado/não adeguado.
				},
			}
		],
		teste_navegacao: [
			{
				ativos_cliente: false, // se true, é ativo da empresa,
				tipo_ativo: "celular", //Notebook, TVBox e etc...
				observacao: null, //observação geral do que foi testado!
			},
			{
				ativos_cliente: false, // se true, é ativo da empresa,
				tipo_ativo: "computador", //Notebook, TVBox e etc...
				observacao: null, //observação geral do que foi testado!
			},
			{
				ativos_cliente: true, // se true, é ativo da empresa,
				tipo_ativo: "celular", //Notebook, TVBox e etc...
				observacao: null, //observação geral do que foi testado!
			}
		],
		mapa_calor: {
			realizado: false,
			pontos_sobra: false,
			ponto_adicional:null,
			observacao: null
		},
		ping_adicional: [ //testes além do .bat
						
		],
		observacao_ping: null, // observações relacionadas aos testes gerais, como observações ou motivo de omissão do teste.
		tracert_adicional: [ //testes além do .bat
			
		],
		observacao_tracert: null, // observações relacionadas aos testes gerais, como observações ou motivo de omissão do teste.
		velocidade_adicional: [ //testes além do .bat
			
		],
		observacao_velocidade: null, // observações relacionadas aos testes gerais, como observações ou motivo de omissão do teste.
		encaminhar_externa: {
			necessidade: false, // Sim/Não
			observacao: null, //motivo da necessidade de encaminhar externa.
		},
		troca_equipamento: {
			ativos: [
				{
					ativo: null, // ONT, ONU, Router, Outros...
					mac: null
				}
			],
			trocas: {
				ativos_retirados: [
					{
						ativo: null, // ONT, ONU, Router, Outros...
						mac: null
					}
				],
				ativos_inseridos: [
					{
						ativo: null, // ONT, ONU, Router, Outros...
						mac: null
					}
				],
				outros_ativos: [ // Em caso de ativos já inseridos no local
					{
						ativo: null, // ONT, ONU, Router, Outros...
						mac: null
					}
				],
			}
		},
	},
	ajuda_interna: {
		verdadeiro: false,
		setor: null, // Torre, TI, Supervisão
		nome: null, //Quem auxiliou 
	},
	indicacao: {
		solicitado: false,
		indicado: false, //Cliente passou indicação?
		observacao: null //Numero de contato do indicado!
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
	relatorio_estabilidade: null, //campo para adição do .bat

}

