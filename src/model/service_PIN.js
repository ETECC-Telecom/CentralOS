

export const Cadastrar_PIN = (pin) =>{
    localStorage.setItem('pin', pin)
}

export const Consultar_PIN = () => {
    return localStorage.getItem("pin");
}

export const Comparar_PIN = (pin) => {
    const PIN = localStorage.getItem("pin");

    return PIN === pin;
}

export const Verificar_Cadastro_PIN = () =>{
    const EXISTE = localStorage.getItem("pin")
    if (EXISTE !== null){
        return true;
    }else{
        return false;
    }
}