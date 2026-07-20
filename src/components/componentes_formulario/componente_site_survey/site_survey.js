import { LitElement, html, css, unsafeCSS } from 'lit';
import globalStyle from "./index.css?inline";
import { estourar_drawer } from '../../drawer_scripts/drawer_scripts_component';
import { Caixa_Texto } from '../caixa_texto/caixa_texto';

export class Site_Survey extends LitElement {
    // 1. Em vez de @property, use o objeto static properties
    static properties = {
        objeto_os: { type: Object },
        estado_obs_extra: {type: Boolean},
        data_site: {type: Object},
    };

    static get styles() {
        return css`${unsafeCSS(globalStyle)}`;
    }

    constructor() {
        super();
        this.objeto_os = {};
        this.data_site = {};
        this.estado_obs_extra = false;
    }

    // Executado assim que o componente é renderizado na tela
    firstUpdated() {

    }
    connectedCallback() {
        super.connectedCallback(); // ⚠️ Sempre chame o super PRIMEIRO no Lit
        this.data_site = this.objeto_os.OS.conferencia_tecnica.mapa_calor;
        this.estado_obs_extra = this.data_site.pontos_sobra;
    }

    _Alterar_Ponto_Sombra = (e)=>{
        const valor = e.target.value === "true"? true:false;
        this.estado_obs_extra = valor;
        this.data_site.pontos_sobra = valor;

        this.objeto_os.salvar_os_localstorage();
    }
    _Alterar_checagem_mapa = (e)=>{
        const valor = e.target.value === "true"? true:false;
        this.data_site.realizado = valor;

        this.objeto_os.salvar_os_localstorage();
    }


    render() {
        return html`
            <!--Retorno renderizado-->
            <br>
            <h2>Site Survey</h2>
            <div style="display:flex; gap:.5rem; align-items: end;">
               <div style="flex:1;">
                    <p style="margin-top:.5rem; text-align:center;" for="fname" class="form-label">Realizado Mapa de Calor?</p>
                    <br>
                    <div @change="${this._Alterar_checagem_mapa}" class="radio-input">
                        <label>
                            <input ?checked="${this.data_site.realizado === true?true:false}" value="true" name="wifi-survey" id="value-1" type="radio" />
                            <span>S i m</span>
                        </label>
                        <label>
                            <input ?checked="${this.data_site.realizado === false?true:false}" value="false" name="wifi-survey" id="value-2" type="radio" />
                            <span>N ã o</span>
                        </label>
                        <span class="selection"></span>
                    </div>
                </div>

                <div style="flex:1;">
                    <p style="margin-top:.5rem; text-align:center" for="fname" class="form-label">Detectado pontos de sombra no local?</p>
                    <br>
                    <div @change="${this._Alterar_Ponto_Sombra}" class="radio-input">
                        <label>
                            <input ?checked="${this.data_site.pontos_sobra === true?true:false}" value="true" name="wifi-survey-shadow" id="value-1" type="radio" />
                            <span>S i m</span>
                        </label>
                        <label>
                            <input ?checked="${this.data_site.pontos_sobra === false?true:false}" value="false" name="wifi-survey-shadow" id="value-2" type="radio" />
                            <span>N ã o</span>
                        </label>
                        <span class="selection"></span>
                    </div>
                </div>
            </div>
            <br>

            ${this.estado_obs_extra? html`
            <div class="form-group">
                <caixa-texto
                Titulo = "Em caso de Pontos de Sombra"
                    .Tamanho = ${5}
                    .Texto = ${this.objeto_os.OS.conferencia_tecnica.mapa_calor.ponto_adicional}
                    .Campo_Texto = ${this.objeto_os.callback_adicionar_texto_sitesurvey_sombra.bind(this.objeto_os)}
                    .Atualizar_BD = ${this.objeto_os.salvar_os_localstorage.bind(this.objeto_os)}
                    .Categoria = "Site Survey"
                    Placeholder = "Explique se é viável um segundo ponto no local!"
                ></caixa-texto>
            </div>
                `:""}
            
            <div class="form-group">
                <caixa-texto
                    Titulo = "Observação do Site Survey"
                    .Tamanho = ${5}
                    .Texto = ${this.objeto_os.OS.conferencia_tecnica.mapa_calor.observacao}
                    .Campo_Texto = ${this.objeto_os.callback_adicionar_texto_sitesurvey.bind(this.objeto_os)}
                    .Atualizar_BD = ${this.objeto_os.salvar_os_localstorage.bind(this.objeto_os)}
                    .Categoria = "Site Survey"
                    Placeholder = "Faça uma explicação sobre esse mapa de Calor!"
                ></caixa-texto>
               
            </div>  
        `;
    }
}

// 2. Em vez de @customElement, use o registro manual
customElements.define('site-survey', Site_Survey);