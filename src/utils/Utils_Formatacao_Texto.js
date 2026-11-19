
// Métodos usados para a formatação de saída de dados de relatórios, seja ele simplificado ou markdown


export const Formatar_H1 = (Titulo) => {

    const Titulo_Formatado = Titulo.toUpperCase();
    const Tamanho = Titulo_Formatado.length;
    const Qtd_Divisores = 74;
    let Script = `${"=".repeat(Qtd_Divisores)}\n`

    if (Tamanho >= 69) {
        let resultado = Titulo_Formatado.slice(0, 69) + "..."
        Script += ` ${resultado} \n`
    } else {
        let Espaco = " ".repeat((Qtd_Divisores - Tamanho) / 2);

        Script += `${Espaco}${Titulo_Formatado}\n`

    }
    Script += `${"=".repeat(Qtd_Divisores)}\n\n`

    return Script
}

export const Formatar_H2 = (Titulo) => {
    const Titulo_Formatado = Titulo.toUpperCase();
    const Tamanho = Titulo_Formatado.length;
    const Qtd_Divisores = 74;
    let Script = ""

    if (Tamanho >= 69) {
        let resultado = Titulo_Formatado.slice(0, 69) + "..."
        Script += `${resultado}\n`
    } else {

        Script += `${Titulo_Formatado}\n`

    }
    Script += `${"_".repeat(Qtd_Divisores)}\n\n`

    return Script
}

export const Lista_Simples = (titulo, Comprimento_Lista) => {
    const Tamanho_Lista = parseInt(Comprimento_Lista);
    const Titulo = titulo;
    const Tamanho_Titulo = Titulo.length;

    let Script = "";

    if (Tamanho_Titulo >= Tamanho_Lista) {
        let resultado = Titulo.slice(0, Tamanho_Lista-1) + ".:"
        Script += `${resultado}`;
    }else{
        const COMPLEMENTO = Tamanho_Lista - Tamanho_Titulo;
        Script += `${Titulo+".".repeat(COMPLEMENTO)}:`
    }

    return Script

}