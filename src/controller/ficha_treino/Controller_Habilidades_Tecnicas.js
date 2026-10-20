import { HABILIDADES } from "../../data/habilidades_tecnicas_ficha";
import { Formatar_Data } from "../Formatar_data";

export default class Habilidades_Tecnicas_Ficha {
    constructor(parameters) {
        this.habilidades = [];
    }

    //Inicia a estrutura na geração da ficha
    inicializar = () => {
        if (this.habilidades.length != 0) {
            return
        }

        HABILIDADES.map(item => {
            this.habilidades.push(
                {
                    nome: item.nome,
                    categoria: item.categoria, // Categoria cadastrada ao qual a competência pertence;
                    link: item.link,
                    obrigatorio: item.obrigatorio,
                    ensino: [
                        false,
                        false,
                        false
                    ],
                    relatorio_evolutivo: {
                        nao_ensinado: {
                            relatorio: null,
                            data: null,
                        },
                        teorico: {
                            relatorio: null,
                            data: null,
                        },
                        pratico: {
                            relatorio: null,
                            data: null,
                        },
                    },
                })
        })
    }

    retornar_Habilidades = () => {
        return this.habilidades;
    }

    exportar_JSON = () => {
        return JSON.stringify(this.habilidades);
    }

    importar_JSON = (data) => {
        if (data === undefined) {
            this.habilidades = [];
            return
        }
        this.habilidades = JSON.parse(data);
    }

    exportar_relatorio_MD = () => {
        let script = "## Relatório de Habilidades Técnicas\n\n";

        const resultadoAgrupado = this.habilidades.reduce((acc, item) => {
            // 1. Extrai a categoria do objeto atual
            const categoria = item.categoria;

            // 2. Se a chave da categoria ainda não existir no objeto acumulador, cria um array vazio
            if (!acc[categoria]) {
                acc[categoria] = [];
            }

            // 3. Adiciona o objeto no array da respectiva categoria
            acc[categoria].push(item);

            return acc;
        }, {});

        for (const chave in resultadoAgrupado) {

            script += `### ${chave}\n`;

            const ELEMENTOS = resultadoAgrupado[chave]
            ELEMENTOS.map((item, index) => {

                //Inicia validando qual o Ensinamento mais relevante e anexa a legenda para colocar no titulo
                let legenda = "";
                let destaque = "";
                if (item.ensino[2]) {
                    legenda = `🎓 (${item.relatorio_evolutivo.pratico.data})`
                    destaque = "- [p] ";
                } else if (item.ensino[1]) {
                    legenda = `📖 (${item.relatorio_evolutivo.teorico.data})`
                    destaque = "- [!] "

                } else {
                    legenda = `❌ (${item.relatorio_evolutivo.nao_ensinado.data !== null ? item.relatorio_evolutivo.nao_ensinado.data : "Não Abordado"})`
                    destaque = "- [d] "
                }
                //Gera o título
                script += `\n ${destaque} **${item.nome}** - ${legenda}\n`

                //Imprime os relatórios de cada típo quando cabivel:

                if (item.ensino[2]) {
                    script += `${item.relatorio_evolutivo.pratico.relatorio !== null ? "    - **Ensinamento Prático:** " + item.relatorio_evolutivo.pratico.relatorio + "\n" : ''}`
                }
                if (item.ensino[1]) {
                    script += `${item.relatorio_evolutivo.teorico.relatorio !== null ? "    - **Ensinamento Teórico:** " + item.relatorio_evolutivo.teorico.relatorio + "\n" : ''}`
                }
                if (item.ensino[0] && (!item.ensino[2] || !item.ensino[1])) {
                    script += `${item.relatorio_evolutivo.nao_ensinado.relatorio !== null ? "    - **Não foi Ensinado:** " + item.relatorio_evolutivo.nao_ensinado.relatorio + "\n" : ''}`
                }


            })

        }

        return script;
    }

    exportar_conclusao_atual = () => {
        let total = this.habilidades.length;
        let realizados = 0;

        this.habilidades.map(item => {
            if (item.ensino[2]) realizados += 1;
        })

        return [total, realizados];
    }

    //Função que retorna um array com o total de itens, quais não foram realizados, quais teve um teorico e quais foram ensinados na prática.
    exportar_relatorio_ensino = () => {
        let total = this.habilidades.length;
        let nao_encinado = 0;
        let teorico = 0;
        let pratico = 0;

        this.habilidades.map(item => {
            if (item.ensino[2]) {
                pratico += 1;
            } else if (item.ensino[1]) {
                teorico += 1;
            } else {
                nao_encinado += 1;
            }

        })

        return [total, nao_encinado, teorico, pratico]

    }

    // Retorna um valor entre 1 a 3 informando se a habilidade não foi ensinada "1", se foi passado o teórico "2" ou se foi ensinado na prática "3"
    exportar_nivel_habilidade = (index) => {
        const INDEX = parseInt(index)

        const habilidade = this.habilidades[INDEX];

        let RETORNO = 0;

        if (habilidade.ensino[2]) {
            RETORNO = 3;
        } else if (habilidade.ensino[1]) {
            RETORNO = 2;
        } else {
            RETORNO = 1;
        }
        return RETORNO;
    }

    exportar_categorias = () => {
        const categoriasUnicas = [...new Set(this.habilidades.map(h => h.categoria))];
        return categoriasUnicas
    }

    exportar_relatorio_habilidade_pratica = (index) => {
        const INDEX = parseInt(index)

        const habilidade = this.habilidades[INDEX];

        const relatorio = habilidade.relatorio_evolutivo.pratico.relatorio;

        if (relatorio === null) return null;

        return relatorio
        
    }

    exportar_relatorio_habilidade_teorico = (index) => {
        const INDEX = parseInt(index)

        const habilidade = this.habilidades[INDEX];

        const relatorio = habilidade.relatorio_evolutivo.teorico.relatorio;

        if (relatorio === null) return null;

        return relatorio
        
    }

    exportar_relatorio_habilidade_nao_ensinado = (index) => {
        const INDEX = parseInt(index)

        const habilidade = this.habilidades[INDEX];

        const relatorio = habilidade.relatorio_evolutivo.nao_ensinado.relatorio;

        if (relatorio === null) return null;

        return relatorio
        
    }

    sincronizar_estrura_habilidades = ()=>{
        const NOVAS_HABILIDADES = HABILIDADES;
        const ANTIGAS_HABILIDADES = this.habilidades;

        const APENAS_NOVOS = NOVAS_HABILIDADES.filter(
            novoItem => !ANTIGAS_HABILIDADES.some(antigoItem => antigoItem.nome === novoItem.nome)
        );

        if (APENAS_NOVOS.length === 0) return false;

        APENAS_NOVOS.map(item => {
            const ELEMENTO = {
                    nome: item.nome,
                    categoria: item.categoria, // Categoria cadastrada ao qual a competência pertence;
                    link: item.link,
                    ensino: [
                        false,
                        false,
                        false
                    ],
                    relatorio_evolutivo: {
                        nao_ensinado: {
                            relatorio: null,
                            data: null,
                        },
                        teorico: {
                            relatorio: null,
                            data: null,
                        },
                        pratico: {
                            relatorio: null,
                            data: null,
                        },
                    },
                }
            this.habilidades.push(ELEMENTO)

        })
        return true;
        
    }
    //===============================================================================================================
    //                       Funções de manipulação do Atributo
    //===============================================================================================================

    justificar_nao_ensinado = (id = null, relatorio = null) => {
        const RELATORIO = relatorio;
        const INDEX = parseInt(id);

        if (INDEX > this.habilidades.length - 1) return false;

        if (RELATORIO === null) return false;

        const DATA_ATUAL = Temporal.Now.plainDateISO();

        this.habilidades[INDEX].ensino[0] = true;
        this.habilidades[INDEX].relatorio_evolutivo.nao_ensinado.relatorio = RELATORIO;
        this.habilidades[INDEX].relatorio_evolutivo.nao_ensinado.data = Formatar_Data(DATA_ATUAL);

        return true

    }

    justificar_teorico = (id = null, relatorio = null) => {
        const RELATORIO = relatorio;
        const INDEX = parseInt(id);

        if (INDEX > this.habilidades.length - 1) return false;

        if (RELATORIO === null) return false;

        const DATA_ATUAL = Temporal.Now.plainDateISO();

        this.habilidades[INDEX].ensino[1] = true;
        this.habilidades[INDEX].relatorio_evolutivo.teorico.relatorio = RELATORIO;
        this.habilidades[INDEX].relatorio_evolutivo.teorico.data = Formatar_Data(DATA_ATUAL);

        return true

    }

    justificar_pratico = (id = null, relatorio = null) => {
        const RELATORIO = relatorio;
        const INDEX = parseInt(id);

        if (INDEX > this.habilidades.length - 1) return false;

        if (RELATORIO === null) return false;

        const DATA_ATUAL = Temporal.Now.plainDateISO();

        this.habilidades[INDEX].ensino[2] = true;
        this.habilidades[INDEX].relatorio_evolutivo.pratico.relatorio = RELATORIO;
        this.habilidades[INDEX].relatorio_evolutivo.pratico.data = Formatar_Data(DATA_ATUAL);

        return true

    }
}

