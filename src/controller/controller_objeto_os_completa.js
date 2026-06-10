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


}