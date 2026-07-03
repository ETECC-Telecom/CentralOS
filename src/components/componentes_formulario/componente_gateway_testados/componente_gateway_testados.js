import { LitElement, html, css, unsafeCSS } from 'lit';
import globalStyle from "./index.css?inline";


export class Componente_Gatewat_Testado extends LitElement {
    // 1. Em vez de @property, use o objeto static properties
    static properties = {
        objeto_os: { type: Object },
        modal_aberto: { type: Boolean },
        objeto_gateway: { type: Object },
        ativo: { type: Object },
        adequado: {type: Boolean},
        outro_dns: {type: Boolean},
    };

    static get styles() {
        return css`${unsafeCSS(globalStyle)}`;
    }

    constructor() {
        super();
        this.objeto_os = {};
        this.modal_aberto = false;
        this.adequado = false;
        this.outro_dns = false;
        this.objeto_gateway = [];
        this.ativo = {};
        let acao = null;
    }

    // Executado assim que o componente é renderizado na tela
    firstUpdated() {

    }
    connectedCallback() {
        super.connectedCallback(); // ⚠️ Sempre chame o super PRIMEIRO no Lit
        this.objeto_gateway = this.objeto_os.OS.conferencia_tecnica.conferencia_router;
        
    }

    _Fechar_Modal = () => {
        this.modal_aberto = false;
    }

    _Abrir_Modal_Novo = (e) =>{
        //Criamos um novo Objeto de Velocidade para adicionar a lista posteriormente!
        this.ativo = {
				router: true, //Informar se é primeiro ponto, segundo.
				empresa: true, //Se o ativo é da empresa ou do cliente.
                local: "Sala",
				dns: 'Google', //Etecc, Google, outros,
				outro_dns:null, //String contendo o outro DNS.
				largura_banda: "20MHz", //20MHz, 40MHz, 20/40MHz
				upnp: true, //Se está ativado ou não
				ipv6: true, //ativado e com protocolo SLAAC,
				acesso_remoto: true, //Se está ativo e configurado
				ativos_anormal: {
					verdadeiro: false, // Se tem ou não ativos acima do normal.
					observacao: 0 // Caso ativos esteja acima do normal, quantos são?
				},
				atividade: { //Tempo de funcionamento do ativo acima do esperado
					verdadeiro: false,
					observacao: 0 // Caso ativos estejaligado a mais de 1 semana!
				},
				firware_router: true, //Se está devidamente atualizado.
				local_equipamento: {
					adequado: true, //Se o local está adequado,
					ciente: false, //Se o cliente ta ciente da necessidade do remanejamento.
					observacao: null //Motivo de ser um local adeguado/não adeguado.
				},
			}
        this.outro_dns = false;
        this.adequado = false;
        this.acao = false;
        this.modal_aberto = true;
    }
    _Abrir_Modal_Editar = (e, chave) =>{
        this.ativo = this.objeto_gateway[chave];
        this.adequado = !this.ativo.local_equipamento.adequado;
        this.outro_dns = this.ativo.dns === "Outro"?true:false;
        this.acao = true;
        this.modal_aberto = true;
    }
    //ativo-local
    _Alterar_Adequacao = (e)=>{
        const Valor = e.target.value === "true"? false:true;
        this.adequado = Valor;
    }

    _Altarar_DNS_Outros = (e) => {
        const Valor = e.target.value;
        this.outro_dns = Valor === "Outro"?true:false;
    }

    _Salvar_data = (e, acao) => {
                
        const primeiro_ponto = this.renderRoot?.querySelector("#ativo-local input[name='tipo-ativo']:checked").value === "true"?true:false;
        const Ativo_empresa = this.renderRoot?.querySelector("#ativo-empresa").checked;
        const Local_ativo = this.renderRoot?.querySelector("#local-do-ativo").value;
        const Local_adequado = this.renderRoot?.querySelector("#local-adequado input[name='adequado']:checked").value === "true"?true:false;
        const Cliente_ciente = this.renderRoot?.querySelector("#ciente input[name='ciente']:checked")? this.renderRoot?.querySelector("#ciente input[name='ciente']:checked").value === "true"?true:false :false;
        const observacao_local_adequado = this.renderRoot?.querySelector("#obs-local-adequado") === null ? null: this.renderRoot?.querySelector("#obs-local-adequado").value;
        const Tipo_DNS = this.renderRoot?.querySelector("#tipo-dns").value;
        const Outro_DNS = this.renderRoot?.querySelector("#outro-dns") === null? null:this.renderRoot?.querySelector("#outro-dns").value;
        const Largura_Banda = this.renderRoot?.querySelector("#largura-banda input[name='largura-banda']:checked").value;
        const Checagem_upnp = this.renderRoot?.querySelector("#checagem-upnp").checked;
        const Checagem_ipv6 = this.renderRoot?.querySelector("#checagem-ipv6").checked;
        const Checagem_acesso_remoto = this.renderRoot?.querySelector("#checagem-acesso-remoto").checked;
        const Checagem_firware = this.renderRoot?.querySelector("#checagem-firware").checked;
        const Checagem_Ativos_Acima = this.renderRoot?.querySelector("#checagem-ativos-acima").checked;
        const Checagem_Atividade = this.renderRoot?.querySelector("#checagem-atividade").checked;
        const Valor_Ativos_Acima = parseInt(this.renderRoot?.querySelector("#valor-ativos-acima").value);
        const Valor_Atividade = parseInt(this.renderRoot?.querySelector("#valor-atividade").value);
      
        
		this.ativo.router = primeiro_ponto;
		this.ativo.empresa = Ativo_empresa;
        this.ativo.local = Local_ativo;
		this.ativo.dns = Tipo_DNS;
		this.ativo.outro_dns = Outro_DNS;
		this.ativo.largura_banda = Largura_Banda;
		this.ativo.upnp = Checagem_upnp; 
		this.ativo.ipv6 = Checagem_ipv6; 
		this.ativo.acesso_remoto = Checagem_acesso_remoto;
		this.ativo.ativos_anormal.verdadeiro = Checagem_Ativos_Acima; 
		this.ativo.ativos_anormal.observacao = Valor_Ativos_Acima;
        this.ativo.atividade.verdadeiro = Checagem_Atividade;
        this.ativo.atividade.observacao = Valor_Atividade;
		this.ativo.firware_router = Checagem_firware;
		this.ativo.local_equipamento.adequado =  Local_adequado;
		this.ativo.local_equipamento.ciente =  Cliente_ciente; 
		this.ativo.local_equipamento.observacao =  observacao_local_adequado
		
        if (!acao) {
            this.objeto_gateway.push(this.ativo);
            this.ativo = {};
        } 
        this.objeto_os.salvar_os_localstorage();
        this._Fechar_Modal();

    }

    _Deletar_Item = (e, chave) => {
        // Filtra o array mantendo apenas os itens que têm o índice DIFERENTE do que queremos remover
        this.objeto_gateway = this.objeto_gateway.filter((_, index) => index !== chave);
        this.objeto_os.OS.conferencia_tecnica.conferencia_router = this.objeto_gateway

        this.objeto_os.salvar_os_localstorage();

        this.objeto_gateway = this.objeto_os.OS.conferencia_tecnica.conferencia_router;
    }

    render() {
        return html`
            <!--Retorno renderizado-->
            <br>
            <h2>Gateways Testados</h2>
            <div class="form-group" style="margin-top: 10px;">
                <button 
                    @click="${this._Abrir_Modal_Novo}"
                    type="button" class="form-button">Add Equipamento</button>
            </div>
            <div class="container-gateways">
                ${this.objeto_gateway.map((item, chave)=>html`
                <div 
                    class="container-gateway">
                    <div 
                        @click="${(e)=>this._Abrir_Modal_Editar(e, chave)}"
                        style="flex:1">
                        <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 143.933 143.933"><path d="M-336.297 790.77a6 6 0 0 1-.751-.092c-.312-.07-1.06-.697-1.272-1.067-.102-.179-.164-1.42-.206-4.158l-.06-3.903-.723-.203c-3.333-.94-6.136-3.435-7.442-6.628-.798-1.95-.75-1.095-.75-13.372v-11.143l.346-1.024c1.357-4.022 4.076-6.611 8.13-7.742.878-.245 1.225-.26 7.454-.3l6.534-.044.032-23.273.032-23.273.31-.798c.456-1.168.894-1.855 1.68-2.63 1.58-1.554 3.975-2.254 6.166-1.801 2.326.482 4.486 2.548 5.091 4.872.163.624.185 3.455.185 23.813v23.105h39.54l-.622-.693c-5.374-5.989-8.362-12.556-9.305-20.45-.122-1.016-.158-4.3-.158-14.094 0-12.72 0-12.772.251-13.252.152-.289.47-.617.796-.82.519-.322.642-.342 2.7-.449 2.664-.137 4.052-.283 6.372-.667 6.259-1.036 12.973-3.51 18.311-6.75 2.494-1.512 2.528-1.527 3.292-1.468.612.047.897.181 2.732 1.29 7.59 4.583 15.945 7.138 24.816 7.588 1.193.06 2.331.173 2.53.25.48.184.876.566 1.156 1.112.221.43.23.897.23 12.96 0 7.902-.048 12.997-.128 13.828-.756 7.794-3.904 14.926-9.101 20.621l-.907.994h3.131c3.603 0 4.563.101 6.193.654 3.852 1.306 6.74 4.683 7.43 8.689.108.62.134 3.594.103 11.498-.04 10.422-.047 10.679-.293 11.444-.626 1.95-1.432 3.382-2.623 4.662q-2.24 2.41-5.119 3.24l-.915.263-.06 3.899c-.041 2.644-.106 3.976-.201 4.14-.179.307-.746.834-1.087 1.009-.188.096-3.016.135-9.913.135-9.232 0-9.67-.01-10.097-.228-.552-.282-.806-.556-1.045-1.128-.153-.366-.185-1.078-.185-4.061v-3.618h-72.281v3.618c0 3.8-.042 4.14-.577 4.732-.584.646-.206.62-10.085.685-5.035.033-9.372.046-9.637.028zm15.841-6.702c0-1.909-.026-2.225-.19-2.288-.105-.04-3.082-.074-6.616-.074s-6.511.033-6.616.074c-.164.063-.19.38-.19 2.288v2.216h13.612zm94.809 0c0-1.909-.026-2.225-.19-2.288-.105-.04-3.082-.074-6.616-.074s-6.512.033-6.616.074c-.165.063-.19.38-.19 2.288v2.216h13.612zm4.424-7.16c2.021-.758 3.609-2.37 4.282-4.348.269-.791.269-.807.304-10.67.024-6.913-.006-10.123-.101-10.69-.212-1.269-.937-2.635-1.898-3.579-.873-.857-2.15-1.579-3.212-1.815-.391-.086-2.594-.131-6.365-.13l-5.766.006-1.575 1.167a58 58 0 0 1-12.671 7.082c-2.149.861-2.356.865-4.315.08-4.798-1.925-9.241-4.413-13.192-7.387l-1.241-.934h-35.204c-38.76 0-35.704-.062-37.31.748-1.057.533-2.236 1.717-2.807 2.818-.84 1.62-.82 1.31-.783 12.488.033 10.019.034 10.027.303 10.818.314.925 1.008 2.044 1.67 2.697.934.919 2.439 1.704 3.662 1.91.166.027 26.214.044 57.885.037l57.584-.015zm-107.763-8.938c-1.261-.33-2.005-.77-3.045-1.802-1.654-1.64-2.32-3.724-1.906-5.973.463-2.525 2.42-4.627 4.929-5.295.863-.23 2.534-.227 3.426.005 2.286.596 4.228 2.543 4.826 4.84.228.874.229 2.551.002 3.404a6.69 6.69 0 0 1-3.572 4.323c-1.61.773-3.03.925-4.66.498zm18.07 0c-.484-.127-1.162-.38-1.506-.563-.804-.428-2.341-1.965-2.768-2.768-.416-.781-.808-2.292-.808-3.108 0-3.069 2.121-5.848 5.06-6.63.864-.23 2.535-.228 3.428.004 1.106.289 2.095.876 3.03 1.8 1.368 1.353 1.975 2.817 1.973 4.757-.003 1.875-.63 3.406-1.926 4.705-1.746 1.748-4.144 2.415-6.483 1.803zm18.087.005c-.476-.125-1.045-.319-1.265-.432-4.204-2.156-5.107-7.63-1.796-10.893 1.32-1.3 2.845-1.924 4.713-1.926 1.935-.005 3.396.602 4.767 1.973s1.976 2.832 1.973 4.767c-.003 1.89-.624 3.41-1.93 4.715-1.726 1.726-4.155 2.4-6.462 1.796m18.8.01c-.745-.338-1.166-.965-1.229-1.83-.03-.412.012-.862.098-1.07.18-.433.971-1.174 1.353-1.267.15-.036 10.74-.051 23.534-.033l23.26.033.455.348c.52.397.906 1.145.906 1.76 0 .883-.712 1.873-1.549 2.153-.3.1-6.544.136-23.37.134-22.166-.005-22.98-.01-23.458-.228m-41.972-49.674c-.003-21.858-.012-22.818-.224-23.285-.774-1.705-3.139-1.79-4.018-.146l-.273.512-.031 22.86-.032 22.858h4.58zm61.976 13.526c.33-.16 3.881-3.633 10.93-10.691 9.537-9.55 10.454-10.5 10.583-10.991.404-1.532-.626-2.897-2.187-2.897-.521 0-.77.073-1.194.347-.295.19-4.704 4.527-9.8 9.637-5.094 5.11-9.295 9.291-9.334 9.291s-2.321-2.246-5.072-4.992-5.154-5.05-5.34-5.12c-.528-.198-1.426-.152-1.889.096-.63.338-1.103.993-1.174 1.627-.144 1.277-.44.913 6.091 7.469 4.034 4.05 6.141 6.08 6.466 6.231.625.293 1.308.29 1.92-.007zm-76.093-44.93c-1.208-.389-1.876-1.87-1.378-3.053.236-.562 1.774-1.968 3.163-2.893 2.058-1.37 4.105-2.225 6.605-2.758 1.625-.346 4.985-.374 6.693-.056 2.34.437 4.905 1.481 6.857 2.79 1.14.766 2.696 2.121 2.999 2.614a2.246 2.246 0 0 1-.996 3.242c-.983.447-1.724.24-2.874-.805-3.674-3.335-8.752-4.439-13.455-2.925-1.605.517-3.57 1.654-4.758 2.754-.331.307-.777.678-.99.825-.43.297-1.358.429-1.866.265m30.624-7.96c-.563-.097-.676-.17-1.705-1.1-4.288-3.875-8.896-5.988-14.431-6.617-1.796-.204-5.24-.084-6.994.244-4.825.903-9.086 3.026-12.543 6.248-1.086 1.013-1.482 1.226-2.274 1.226-1.56 0-2.553-1.322-2.117-2.821.154-.531.333-.778 1.061-1.469 4.444-4.212 9.876-6.845 16.03-7.769 2.223-.334 6.102-.361 8.095-.057 5.653.863 10.407 2.904 14.516 6.23 1.667 1.35 2.723 2.424 2.894 2.941.313.949-.077 2.114-.884 2.64-.377.246-1.157.39-1.648.305m-46.742-8.085c-.385-.153-.937-.675-1.155-1.093-.197-.376-.225-1.384-.051-1.84.163-.429 1.04-1.346 2.47-2.581 6.107-5.274 12.973-8.437 20.962-9.656 2.137-.326 7.022-.455 9.305-.245 9.264.85 17.959 4.804 24.565 11.173.78.752 1.01 1.055 1.125 1.482.398 1.477-.654 2.895-2.149 2.895-.773 0-1.173-.237-2.531-1.497-1.635-1.516-2.906-2.53-4.551-3.629-9.785-6.535-22.276-7.885-33.167-3.584-4.104 1.62-8.314 4.272-11.39 7.175-.662.626-1.378 1.227-1.59 1.336-.424.219-1.371.252-1.843.064" style="fill:var(--text-color);stroke-width:.999998" transform="translate(351.828 -651.095)"/></svg>
                    </div>
                    <div style="flex:7">
                        <div class="container-item-gateway">
                            <h4
                                @click="${(e)=>this._Abrir_Modal_Editar(e, chave)}"
                            >Ponto ${item.router?"1":"2"}: ${item.local} (${item.empresa?"Empresa":"Cliente"})</h4>
                            <button
                                @click="${(e)=>this._Deletar_Item(e, chave)}"
                                type="button" class="botao-close">–</button>
                        </div>
                        
                        <p
                            @click="${(e)=>this._Abrir_Modal_Editar(e, chave)}"
                        >DNS: ${item.dns} | ${item.largura_banda}</p>
                    </div>
                </div>    
                `)}
            
            </div>

            <!--Modal de Configuracao do Ping-->

            ${this.modal_aberto ? html`
                <div
                    class="modal-backdrop"
                    @click=${this._Fechar_Modal}
                >
                    <div
                        class="modal-content"
                        
                        @click=${(e) => e.stopPropagation()}
                    >
                        <h3>Editar Gateway</h3>
                        <br>
                        
                        <div class="container_scroll">
                            <div style="display:flex;flex-direction:column; gap:.5rem">
                                <label for="ativo-local" class="form-label">Tipo de Ponto:</label>
                            
                                <div @change="" class="radio-input" id="ativo-local">
                                    <label>
                                        <input ?checked="${this.ativo.router === true?true:false}" value="true" name="tipo-ativo" id="value-1" type="radio" />
                                        <span>P r i m e i r o</span>
                                    </label>
                                    <label>
                                        <input ?checked="${this.ativo.router === false?true:false}" value="false" name="tipo-ativo" id="value-2" type="radio" />
                                        <span>S e g u n d o</span>
                                    </label>
                                    <span class="selection"></span>
                                </div>
                            </div>
                            <br>
                            <div class="container_item_utp">
                                <p>Propriedade da Empresa?</p>
                                <label class="toggle-switch">
                                    <input @change=""
                                    id="ativo-empresa"
                                    ?checked="${this.ativo.empresa}"
                                    type="checkbox">
                                    <div class="toggle-switch-background">
                                        <div class="toggle-switch-handle"></div>
                                    </div>
                                </label>
                            </div>

                            <div style="display:flex;flex-direction:column; gap:.5rem">
                                <label for="ativo-local" class="form-label">Local do Equipamento:</label>
                                <input 
                                    type="text" 
                                    placeholder="Qual local está esse equipamento?"
                                    id="local-do-ativo" name="local-do-ativo" .value="${this.ativo.local}" class="form-input">
                                <p>O local é adequado?</p>
                                <div @change="${this._Alterar_Adequacao}" class="radio-input" id="local-adequado">
                                    <label>
                                        <input ?checked="${this.ativo.local_equipamento.adequado === true ? true:false}" value="true" name="adequado" id="value-1" type="radio" />
                                        <span>A d e q u a d o</span>
                                    </label>
                                    <label>
                                        <input ?checked="${this.ativo.local_equipamento.adequado === false ? true:false}" value="false" name="adequado" id="value-2" type="radio" />
                                        <span>I n a d e q u a d o</span>
                                    </label>
                                    <span class="selection"></span>
                                </div>
                                ${this.adequado?html`
                                    <p>Cliente Ciente da necessidade de Remanejamento?</p>
                                    <div @change="" class="radio-input" id="ciente">
                                        <label>
                                            <input ?checked="${this.ativo.local_equipamento.ciente === true?true:false}" value="true" name="ciente" id="value-1" type="radio" />
                                            <span>S i m</span>
                                        </label>
                                        <label>
                                            <input ?checked="${this.ativo.local_equipamento.ciente === false?true:false}" value="false" name="ciente" id="value-2" type="radio" />
                                            <span>N ã o</span>
                                        </label>
                                        <span class="selection"></span>
                                    </div>
                                    <input 
                                        type="text" 
                                        placeholder="Porque é um local inadequado?"
                                        id="obs-local-adequado" name="obs-local-adequado" .value="${this.ativo.local_equipamento.observacao}" class="form-input">
                                    `:''}
                            </div>
                            <br>
                            <h3>Configurações de Rede</h3>
                            <br>
                            <div style="display:flex; flex-direction: column; gap:.5rem;">
                                <div style="display:flex; flex-direction: row; gap:.5rem;">
                                    <div style="flex:1">
                                        <h4>DNS:</h4>
                                    </div>
                                    <div style="flex:3">
                                        <select 
                                            @change="${this._Altarar_DNS_Outros}"
                                            id="tipo-dns" name="tipo-dns" class="form-select">
                                            <option ?selected="${this.ativo.dns === "Google"? true:false}" value="Google">Google</option>
                                            <option ?selected="${this.ativo.dns === "ETECC"? true:false}" value="ETECC">ETECC</option>
                                            <option ?selected="${this.ativo.dns === "Outro"? true:false}" value="Outro">Outro</option>
                                        </select>
                
                                        ${this.outro_dns?html`
                                        <input
                                            style="margin-top:.5rem;"
                                            type="text" 
                                            placeholder="Qual o DNS configurado?"
                                            id="outro-dns" name="outro-dns" .value="${this.ativo.outro_dns}" class="form-input">
                                            `:''}

                                    </div>
                                </div>
                                <div style="display:flex; flex-direction: row; gap:.5rem;">
                                    <div style="flex:1">
                                        <h4>Largura de Banda:</h4>
                                    </div>
                                    <div style="flex:3">
                                        <div id="largura-banda"style="display:flex; flex-direction: row; gap:.5rem;">
                                        
                                            <div class="form-group-row">
                                                <input ?checked="${this.ativo.largura_banda === "20MHz"?true:false}" type="radio" id="html" name="largura-banda" value="20MHz" class="form-radio">
                                                <label for="html" class="form-label-inline">20MHz</label>
                                            </div>
                                            
                                            <div class="form-group-row">
                                                <input ?checked="${this.ativo.largura_banda === "40MHz"?true:false}" type="radio" id="css" name="largura-banda" value="40MHz" class="form-radio">
                                                <label for="css" class="form-label-inline">40MHz</label>
                                            </div>
                                            
                                            <div class="form-group-row">
                                                <input ?checked="${this.ativo.largura_banda === "20/40MHz"?true:false}" type="radio" id="javascript" name="largura-banda" value="20/40MHz" class="form-radio">
                                                <label for="javascript" class="form-label-inline">20/40MHz</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div style="display:flex; flex-direction: row; gap:.5rem;">
                                    <div style="flex:1">
                                        <h4>Protocolos (UPNP, IPv6):</h4>
                                    </div>
                                    <div style="flex:3">
                                        <div style="display:flex; flex-direction: row; gap:.5rem;">
                                            <div style="display: flex; flex-direction: row; gap: 1rem; align-items: center;  justify-content: flex-start;">
                                                <p>UPnP Ativo</p>
                                                <label class="toggle-switch">
                                                    <input @change=""
                                                    id="checagem-upnp" 
                                                    ?checked="${this.ativo.upnp}"
                                                    type="checkbox">
                                                    <div class="toggle-switch-background">
                                                        <div class="toggle-switch-handle"></div>
                                                    </div>
                                                </label>
                                            </div>
                                            <div style="display: flex; flex-direction: row; gap: 1rem; align-items: center;  justify-content: flex-start;">
                                                <p>IPv6 SLAAC</p>
                                                <label class="toggle-switch">
                                                    <input @change=""
                                                    id="checagem-ipv6" 
                                                    ?checked="${this.ativo.ipv6}"
                                                    type="checkbox">
                                                    <div class="toggle-switch-background">
                                                        <div class="toggle-switch-handle"></div>
                                                    </div>
                                                </label>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div style="display:flex; flex-direction: row; gap:.5rem;">
                                    <div style="flex:1">
                                        <h4>Acesso Remoto:</h4>
                                    </div>
                                    <div style="flex:3">
                                        <div style="display:flex; flex-direction: row; gap:.5rem;">
                                            <div style="display: flex; flex-direction: row; gap: 1rem;">
                                                <p>Configurado</p>
                                                <label class="toggle-switch">
                                                    <input @change=""
                                                    id="checagem-acesso-remoto" 
                                                    ?checked="${this.ativo.acesso_remoto}"
                                                    type="checkbox">
                                                    <div class="toggle-switch-background">
                                                        <div class="toggle-switch-handle"></div>
                                                    </div>
                                                </label>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div style="display:flex; flex-direction: row; gap:.5rem;">
                                    <div style="flex:1">
                                        <h4>Firmware:</h4>
                                    </div>
                                    <div style="flex:3">
                                        <div style="display:flex; flex-direction: row; gap:.5rem;">
                                            <div style="display: flex; flex-direction: row; gap: 1rem;">
                                                <p>Devidamente Atualizado</p>
                                                <label class="toggle-switch">
                                                    <input @change=""
                                                    id="checagem-firware"
                                                    ?checked="${this.ativo.firware_router}"
                                                    type="checkbox">
                                                    <div class="toggle-switch-background">
                                                        <div class="toggle-switch-handle"></div>
                                                    </div>
                                                </label>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                        
                            </div>
                            <br>
                            <h3>Diagnóstico</h3>
                            <br>

                            <div style="display:flex; flex-direction: column; gap:.5rem;">
                                <div style="display:flex; flex-direction: row; gap:.5rem;">
                                    <div style="flex:1">
                                        <h4>Ativos:</h4>
                                    </div>
                                    <div style="flex:3"> 
                                        <div style="display: flex; flex-direction: row; gap: 1rem;">
                                            <div  style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
                                                <p>Acima do Normal</p>
                                                <label class="toggle-switch">
                                                    <input @change=""
                                                    id="checagem-ativos-acima" 
                                                    ?checked="${this.ativo.ativos_anormal.verdadeiro}"
                                                    type="checkbox">
                                                    <div class="toggle-switch-background">
                                                        <div class="toggle-switch-handle"></div>
                                                    </div>
                                                </label>
                                            </div>
                                            <input
                                                style="margin-top:.5rem; flex:1"
                                                type="number" 
                                                placeholder="Qtd"
                                                id="valor-ativos-acima" name="valor-ativos-acima" .value="${this.ativo.ativos_anormal.observacao}" class="form-input">
                                        </div>         
                                        
                                    </div>
                                </div>

                                <div style="display:flex; flex-direction: row; gap:.5rem;">
                                    <div style="flex:1">
                                        <h4>Tempo Atividade:</h4>
                                    </div>
                                    <div style="flex:3"> 
                                        <div style="display: flex; flex-direction: row; gap: 1rem;">
                                            <div  style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
                                                <p>Acima do normal?</p>
                                                <label class="toggle-switch">
                                                    <input @change=""
                                                    id="checagem-atividade"
                                                    ?checked="${this.ativo.atividade.verdadeiro}"
                                                    type="checkbox">
                                                    <div class="toggle-switch-background">
                                                        <div class="toggle-switch-handle"></div>
                                                    </div>
                                                </label>
                                            </div>
                                            <input
                                                style="margin-top:.5rem; flex:1"
                                                type="number" 
                                                placeholder="Dias"
                                                id="valor-atividade" name="valor-atividade" .value="${this.ativo.atividade.observacao}" class="form-input">
                                        </div>         
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="form-group" style="margin-top: 10px; display: flex; flex-direction: row; gap:.5rem">
                            <button 
                                @click="${(e)=>this._Salvar_data(e, this.acao)}"
                                style="background-color: var(--btn-background-color); color: var(--text-color);"
                                type="button" class="form-button")">Salvar</button>
                            <button 
                                @click="${this._Fechar_Modal}"
                                type="button" class="form-button")">Fechar</button>
                        </div>

                    </div>
                </div>
            ` : ''}
            

        `;
    }
}

// 2. Em vez de @customElement, use o registro manual
customElements.define('gateway-test', Componente_Gatewat_Testado);