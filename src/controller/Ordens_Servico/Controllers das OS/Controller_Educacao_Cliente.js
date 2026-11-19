

export default class Controller_Educacao_Cliente {
    constructor(parameters) {
        this.Educacao = [];
		this.Atendimento = [];
		this.Complemento = [];
        this.IDs_Registrados = new Set();
		this.Encaminhado = false;
		this.Relatorio = null;
    }

    Retornar_Objeto_Json = () =>{
        return JSON.stringify({
            Educacao: this.Educacao,
            Atendimento: this.Atendimento,
            Complemento: this.Complemento,
            IDs_Registrados: this.IDs_Registrados,
            Encaminhado: this.Encaminhado,
            Relatorio: this.Relatorio,
        })
    }

	Importar_Objeto_Json = (Data) =>{
        const DATA = JSON.parse(Data);

        this.Educacao = DATA.Educacao;
        this.Atendimento = DATA.Atendimento;
        this.Complemento = DATA.Complemento;
        this.IDs_Registrados = DATA.IDs_Registrados;
        this.Encaminhado = DATA.Encaminhado;
        this.Relatorio = DATA.Relatorio;

    }

	Exportar_Estrutura_Simplificado = () =>{
        
    }

	Exportar_Estrutura_Markdown = () =>{
        
    }

	Exportar_Relatorio_Simplificado = () =>{
        
    }

	Exportar_Relatorio_Markdown = () =>{
        
    }

	Validar_Finalizacao = () =>{
        
    }

	Validar_Sincronismo = () =>{
        
    }

	Adicionar_Informacao = (categoria, data) => {
        //Vamos primeiro validar aonde iremos adicionar esse item?
        if (categoria === "Educacao" && !this.Validar_Adicionado(data.id)){
            this.IDs_Registrados.add(data.id);
            this.Educacao.push(data);
            console.log(this.IDs_Registrados, this.Educacao)
            
        }else if(categoria === "Atendimento" && !this.Validar_Adicionado(data.id)){
            this.IDs_Registrados.add(data.id);
            this.Atendimento.push(data);
            console.log(this.IDs_Registrados, this.Atendimento)
            
        }else{
            if (this.Validar_Adicionado(data.id) === true) return;

            this.Complemento.push(data);
            console.log(this.Complemento)
            
        }
    }

    Validar_Adicionado = (id) =>{
        return this.IDs_Registrados.has(id);
    }



	Deletar_Informacao = (id, categoria) =>{
        
        if(categoria === "Educacao"){
            this.Educacao = this.Educacao.filter(item => item.id !== id)
        }else if(categoria === "Atendimento"){
            this.Atendimento = this.Atendimento.filter(item => item.id !== id)
        }else{

        }
        
        this.IDs_Registrados.delete(id);
        
    }

	Verificar_Existe = (id) =>{
        
    }

    Get_Relatorio(){

    }

    Set_Relatorio(){

    }

    Set_Encaminhado = (Valor)=>{
        const VALOR = Valor === 'true'? true:false;
        this.Encaminhado = VALOR;
    }

    Get_Encaminhado = ()=>{
        return this.Encaminhado;
    }


}