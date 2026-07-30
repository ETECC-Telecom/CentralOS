import { LitElement, html, css, unsafeCSS } from 'lit';
import globalStyle from "./index.css?inline";
import { disparar_notificacao } from '../../../controller/disparar_notificacao';


export class Componente_Acoes_Simples extends LitElement {
    // 1. Em vez de @property, use o objeto static properties
    static properties = {
        objeto_os: { type: Object },
        exibir_mensagem_whats: {type:Boolean},
    };

    static get styles() {
        return css`${unsafeCSS(globalStyle)}`;
    }

    constructor() {
        super();
        this.objeto_os = {};
        this.exibir_mensagem_whats = false
    }

    // Executado assim que o componente é renderizado na tela
    firstUpdated() {
    }

    connectedCallback() {
        super.connectedCallback(); // ⚠️ Sempre chame o super PRIMEIRO no Lit
    }
    
    _Gerar_Relatorio = (e) => {
        try {
            let Texto = this.objeto_os.Finalizar_OS_Simplificado();

            navigator.clipboard.writeText(Texto)
                .then(() => {

                    disparar_notificacao("sucesso", "Texto copiado com sucesso");

                })
                .catch(err => {
                    disparar_notificacao("erro", "Erro ao copiar o texto:", err)

                });
        } catch (err) {
            disparar_notificacao("erro", err)
        }

    }

    async _Salvar_OS() {

        const ID = this.objeto_os.OS.config_OS.id
        let Retorno = ""
        if (ID === null) {
            Retorno = await this.objeto_os.salvar_OS_Banco();
        } else {
            Retorno = await this.objeto_os.editar_OS_Banco();
        }

        if (Retorno[0]) {
            //Limpamos o objeto OS salvo no local storage:
            try {
                localStorage.setItem("OS", null);
                localStorage.setItem("aba", 'aba1');
                window.location.href = '/';
                return true;
            } catch (erro) {
                disparar_notificacao("erro", `Não consegui Finalizar a OS:\n${erro}`);
            }
        }
    }

    _Encaminhar_Mensagem_Whatsapp = () => {

        //Valida se o Formulário do Técnico está Cadastrado

        const URL = localStorage.getItem("formulario_feedback");
        if (URL === null){
            disparar_notificacao("erro", "Você precisa cadastrar seu Formulário de Feedback antes de encaminhar mensagem ao Cliente!")
            return
        }

        const CONTATO = this.objeto_os.OS.info_cliente.telefone;
        if (CONTATO === null) {
            disparar_notificacao("erro", "Nenhum número de contato foi cadastrado para Envio!")
            return
        }

        const Mensagem = this.objeto_os.Export_Mensagem_Encaminhada_Cliente();
        const textoCodificado = encodeURIComponent(Mensagem);
        
        const urlWhatsapp = `https://wa.me/55${CONTATO}?text=${textoCodificado}`;

        // 4. Abre o WhatsApp em uma nova aba/app
        window.open(urlWhatsapp, '_blank');

        //Salva Alteração
        this.objeto_os.OS.config_OS.info_encaminhadas = true;
        this.objeto_os.salvar_os_localstorage();
    }

    render() {
        return html`
            <!--Retorno renderizado-->
            <div class="form-group" style="margin-top: 10px; display: flex; flex-direction: column; gap:.5rem">
                
                <button 
                    @click="${this._Gerar_Relatorio}"
                    style="display:flex; align-items: center; justify-content: center; gap:1rem"
                    type="button" class="form-button">
                    <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="2rem" height="2rem" viewBox="0 0 143.933 143.933"><path d="M-315.673 786.202c-3.581-1.239-6.118-3.5-7.721-6.884l-.946-1.997-.079-46.27-.078-46.271-3.958-.012c-2.177 0-4.526-.138-5.22-.298-3.76-.868-7.07-3.515-8.775-7.02-.97-1.993-1.02-2.25-1.023-5.396-.003-3.214.027-3.365 1.11-5.559 1.363-2.757 3.35-4.709 6.146-6.033l2.01-.952 42.549-.08c47.058-.086 44.224-.194 48.048 1.824 2.296 1.211 5.118 4.033 6.33 6.329 2.006 3.802 1.893.857 1.893 49.603v44.134h17.103l1.017 1.016 1.016 1.017v4.846c0 5.459-.356 7.4-1.894 10.314-1.21 2.295-4.033 5.117-6.328 6.328-3.796 2.003-1.068 1.895-47.585 1.884-39.167-.011-42.221-.046-43.615-.528zm7.129-6.742a6.35 6.35 0 0 0 2.21-2.222c.822-1.397.833-1.48.98-7.791l.15-6.38.976-.871.977-.872h61.593l-.079-44.327-.079-44.327-.74-1.495c-.945-1.908-2.754-3.718-4.65-4.65l-1.487-.732-35.506-.079c-19.529-.044-35.507-.015-35.507.063 0 .08.303.855.673 1.724l.673 1.581.15 53.522.149 53.52.7 1.129c.799 1.283 2.304 2.525 3.541 2.92 1.482.472 3.784.16 5.276-.713zm4.064-31.867c-1.292-1.292-1.236-3.01.143-4.388l1.017-1.017h16.848c16.16.001 16.888.025 17.803.583 1.241.757 1.738 2.366 1.158 3.753-.85 2.034.044 1.942-18.945 1.942h-17.15zm0-19.136c-1.292-1.292-1.236-3.01.143-4.388l1.017-1.017h46.764l1.016 1.017c1.38 1.379 1.435 3.096.143 4.388l-.874.874h-47.335zm0-19.136c-1.292-1.292-1.236-3.01.143-4.389l1.017-1.016h46.764l1.016 1.016c1.38 1.38 1.435 3.097.143 4.389l-.874.874h-47.335zm0-19.136c-1.292-1.292-1.236-3.01.143-4.389l1.017-1.016h46.764l1.016 1.016c1.38 1.38 1.435 3.097.143 4.389l-.874.874h-47.335zm76.419 89.386c1.92-.951 3.71-2.75 4.62-4.642.562-1.169.748-2.132.85-4.41l.13-2.916h-76.551l-.127 4.71c-.107 3.964-.23 4.959-.779 6.29-.358.87-.652 1.645-.652 1.724s15.978.107 35.507.063l35.507-.079zm-96.578-105.28c0-3.996-.015-4.085-.902-5.52-1.302-2.104-3.523-3.242-5.92-3.033-3.18.277-5.468 2.526-5.795 5.692-.146 1.415-.05 1.914.635 3.315 1.457 2.98 3.258 3.767 8.394 3.672l3.588-.066z" style="fill:white;stroke-width:1" transform="translate(351.828 -651.095)"/></svg>
                    <span>Gerar Relatório</span></button>
                
                ${this.exibir_mensagem_whats?html`
                <button 
                    @click="${this._Encaminhar_Mensagem_Whatsapp}"
                    type="button" class="form-button"
                    style="display:flex; align-items: center; justify-content: center; gap:1rem">
                    <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="2rem" height="2rem" viewBox="0 0 143.933 143.933"><path d="M-313.173 785.763c-1.115-.323-3.112-2.13-3.682-3.332-.42-.883-6.28-31.837-6.071-32.061.07-.075 30.222 21.426 32.004 22.822.524.411.523.42-.132.96-1.294 1.068-16.256 10.917-17.313 11.397-1.152.523-3.397.623-4.806.214m49.106-5.103c-.655-.19-1.629-.574-2.164-.852-1.19-.618-38.843-27.967-38.768-28.159.03-.075 16.663-16.492 36.963-36.482s39.648-39.08 42.995-42.422l6.086-6.076-15.478 12.16c-8.513 6.687-30.464 23.949-48.78 38.36l-33.3 26.2-13.663-9.923c-7.514-5.457-14.222-10.463-14.905-11.123-1.79-1.73-2.456-3.378-2.433-6.012.028-3.219 1.36-5.651 3.91-7.136 1.955-1.14 127.454-49.088 128.48-49.088.52 0 1.211.186 1.535.413.696.487 1.38 1.72 1.38 2.484 0 .68-40.304 111.063-41.2 112.835-.941 1.864-2.877 3.644-4.737 4.356-1.919.734-4.345.925-5.92.465" style="fill:white"; transform="translate(351.828 -651.095)"></svg>
                    <span>Encaminhar Whatsapp</span></button>    
                `:""}

                <button 
                    @click="${this._Salvar_OS}"
                    type="button" class="form-button"
                    style="display:flex; align-items: center; justify-content: center; gap:1rem">
                    <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="2rem" height="2rem" viewBox="0 0 143.933 143.933"><path d="M-333.784 790.039c-2.165-.648-4.898-3.234-5.905-5.589-.658-1.537-.795-12.11-.795-61.306 0-40.517.195-59.967.612-61.074.912-2.418 3.969-5.313 6.29-5.958 1.126-.313 3.28-.57 4.79-.572h2.742v48.316l1.343 2.545c.739 1.4 2.45 3.324 3.803 4.277l2.459 1.732h48.876l2.504-1.74c1.463-1.017 3.043-2.807 3.802-4.308 1.286-2.542 1.3-2.82 1.3-26.695V655.54l3.608.022c6.274.022 6.816.458 22.89 18.384 7.998 8.92 14.92 17.126 15.384 18.234.713 1.706.842 8.79.842 46.164 0 29.727-.2 44.68-.613 45.774-.911 2.417-3.968 5.313-6.29 5.958-2.564.712-105.258.689-107.642-.024zm97.765-12.358c2.29-2.073 2.39-3.304 2.22-27.324l-.163-23.207-1.887-1.887-1.887-1.887-39.101-.157c-28.59-.113-39.534.024-40.713.511-.886.367-2.122 1.317-2.746 2.11-1.088 1.383-1.136 2.457-1.136 25.57v24.127l1.773 1.773 1.772 1.772 38.21.149c21.015.08 39.191-.022 40.391-.21 1.2-.196 2.67-.8 3.267-1.34zm-79.639-15.91v-5.205l37.961.148 37.962.149v9.815l-37.962.148-37.96.149zm0-21.358v-5.2h76.256l-.166 5.05-.167 5.053-37.962.148-37.96.149zm.289-32.719c-2.364-1.246-4.254-3.034-5.396-5.102-.843-1.53-.955-4.38-.955-24.25v-22.517l27.28-.15 27.28-.15v22.545c0 20.984-.076 22.694-1.093 24.688-1.35 2.646-2.662 3.86-5.405 5.006-3.195 1.336-39.16 1.274-41.711-.072z" style="fill:white;stroke-width:1" transform="translate(351.828 -651.095)"/></svg>
                    <span>Finalizar Relatório</span></button>

            </div>
           
            
        `;
    }
}

// 2. Em vez de @customElement, use o registro manual
customElements.define('componente-acoes-simples', Componente_Acoes_Simples);