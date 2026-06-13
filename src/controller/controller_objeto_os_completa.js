import { disparar_notificacao } from "./disparar_notificacao";


export default class Controller_Objeto_OS_Completa {
    constructor(estrura_os = {}) {
        this.OS = estrura_os;
    }

    //Usado para Salvar a estrutura de OS no local storage
    salvar_os_localstorage() {

        localStorage.setItem('OS', JSON.stringify(this.OS));
        return
    }

    //usado para carregar o objeto que já está carregado no banco;
    carregar_os_localstorage() {
        const OS_SALVA = JSON.parse(localStorage.getItem('OS'));
        this.OS = OS_SALVA;

        return
    }

    // Verificar se a OS está em aberto
    verificar_os_localstorage = () => {
        const OS_SALVA = JSON.parse(localStorage.getItem('OS'));
        if (OS_SALVA === null) {
            return
        }

        return OS_SALVA.config_OS.tipo_os;
    }

    //Carregar a Localização do técnico:
    carregar_latitude_longitude(data = null) {
        if (data === null) {

            disparar_notificacao("erro", "O Valor retornado ao método é Nulo")
            return
        }

        this.OS.endereco_info_os.coordenadas.latitude = data.latitude;
        this.OS.endereco_info_os.coordenadas.longitude = data.longitude;
        this.OS.endereco_info_os.coordenadas.precisao = data.precisao;

        this.salvar_os_localstorage();
    }

    //Função para Finalizar OS: 
    /*
        Essa função irá encerrar a OS gerando os script de info passadas ao cliente, e script final. A ideia é que, ao ser executada, ela faça algumas verificações
        Consulte a documentação do projeto!

    */

    //--------------------- Métodos para Alteração dos Atributos ---------------------

    alterar_tipo_os = (tipo) => {
        if (this.OS === {} || this.OS === null) {
            console.log("entrei")
            return
        }
        this.OS.config_OS.tipo_os = tipo;
        this.salvar_os_localstorage();
        disparar_notificacao("sucesso", `O tipo da OS foi definido para ${tipo}`)

    }

    //Altear Campo de Informações do cliente
    alterar_informacoes_cliente = (array_cliente = ['tipo', 'valor']) => {
        // Essa função irá receber um array onde o primeiro parâmetro é o tipo de alteração, e o segundo é o valor
        // Assim consigo com a mesma função alterar atributos de um mesmo contexto. 
        /*
        Atributos que preciso alterar: @info_cliente
        Nome do Cliente => nome_cliente:
        Parentesco => parentesco:
        Descrição de Parentesco => parentesco_info
        Relato do Cliente => relato_cliente
    },
    */  
        switch (array_cliente[0]) {
            case "message":
                this.OS.info_cliente.parentesco_info = array_cliente[1];
                break;
            case "parentesco":
                this.OS.info_cliente.parentesco = array_cliente[1];
                break;
            default:
                return
        }
        this.salvar_os_localstorage();  

    }

}