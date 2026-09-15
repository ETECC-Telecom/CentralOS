

export const Setar_Nivel_Treino = (valor) => {
    localStorage.setItem("treinador", valor);
}

export const Capturar_Nivel_Treino = () => {
    return localStorage.getItem("treinador");
}

export const Setar_Nivel_Lider = (valor) => {
    localStorage.setItem("lideranca", valor);
}


export const Capturar_Nivel_Lider = () => {
    return localStorage.getItem("lideranca");
}