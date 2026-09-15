

export const Cadastrar_Power_Mitter = (objeto) => {
    const DATA = JSON.stringify(objeto);
    localStorage.setItem('powermitter', DATA);
}

export const Capturar_Power_Mitter = () =>{
    return JSON.parse(localStorage.getItem('powermitter'));
}