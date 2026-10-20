

export default class Controller_Notas {
    constructor(parameters) {
        this.notas = [];
    }


    retornar_Notas = () => {
        return this.notas;
    }

    retornar_nota = (index=null) =>{
        if (index === null) return false;
        const INDEX = parseInt(index);
        
        return this.notas[INDEX];
    }

    exportar_JSON = () => {
        return JSON.stringify(this.notas);
    }

    importar_JSON = (data) => {
        if (data === undefined) {
            this.notas = [];
            return
        }
        this.notas = JSON.parse(data);
    }

    exportar_relatorio_MD = () => {
        let script = "## Notas do Treinamento\n\n";
        
        if (this.notas.length != 0){
            this.notas.map((item, chave)=>{
                script += `#### Nota Nº 0${chave + 1}\n`;
                script += `${item}\n`;
            })
        }else{
            script += "> [!warning] Nenhuma Nota Registrada!\n"
        }

        return script;
    }

    //===============================================================================================================
    //                       Funções de manipulação do Atributo
    //===============================================================================================================

    add_nova_nota = (relatorio = null) => {

        if (relatorio === null) return false;

        this.notas.push(relatorio);
        return true;

    }

    editar_nota = (index = null, relatorio = null) => {
    
        if (relatorio === null) return false;
        if (index === null) return false;
        
        const INDEX = parseInt(index)

        this.notas[INDEX] = relatorio;
        return true;

    }

    deletar_nota = (index = null) =>{
        if (index === null) return false;
        const INDEX = parseInt(index);

        const novasNotas = this.notas.filter((_, index) => index !== INDEX);

        this.notas = novasNotas;

        return true;
    }

}








