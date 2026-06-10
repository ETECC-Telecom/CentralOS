

export const Capturar_Nome_Tecnico = () => {
    
    let Nome = localStorage.getItem('usuario');
    
    if (Nome === null){
        Nome = "Técnico Não Cadastrato"
    }
    return Nome;
}