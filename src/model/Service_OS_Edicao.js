
export const SET_ID_OS_em_Edicao = (id = null) =>{
    
    if (id === null) return;

    localStorage.setItem('OS_em_Edicao', id);
}

export const Remove_OS_em_Edicao = () =>{
    
    localStorage.removeItem('OS_em_Edicao');
}

export const GET_OS_em_Edicao = () =>{
    
    const ID = localStorage.getItem('OS_em_Edicao');
    return ID
}