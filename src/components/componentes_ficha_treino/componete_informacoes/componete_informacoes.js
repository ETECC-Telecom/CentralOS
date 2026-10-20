import { LitElement, html, css, unsafeCSS } from 'lit';
import globalStyle from "./index.css?inline";


import { Formatar_Data } from '../../../controller/Formatar_data';

import { Componente_Caixa_Texto_Edicao } from '../componente_caixa_texto_edicao/componente_caixa_texto_edicao';


export class Componente_Informacoes_Ficha extends LitElement {
    // 1. Em vez de @property, use o objeto static properties
    static properties = {
        objeto_ficha:{type:Object},
    };

    static get styles() {
        return css`${unsafeCSS(globalStyle)}`;
    }

    constructor() {
        super();
        this.objeto_ficha = {}
    }

    // Executado assim que o componente é renderizado na tela
    firstUpdated() {

    }
    connectedCallback() {
        super.connectedCallback(); // ⚠️ Sempre chame o super PRIMEIRO no Lit
        
    }

    render() {
        return html`
            <!--Retorno renderizado-->
            <br>
            <div style="display:flex; flex-direction:column; gap:1rem;">
                <div style="display:flex; flex-direction:row; justify-content: space-between;">
                    <div>
                        <p style="color:var(--color-text-info)">Treinador Responsável:</p>
                        <p style="color:var(--color-text-info)">${this.objeto_ficha.nome_treinador}</p>
                    </div>
                    <div>
                        <p style="color:var(--color-text-info)">Data Inicio:</p>
                        <p style="color:var(--color-text-info)">${Formatar_Data(this.objeto_ficha.data_inicio_treino)}</p>
                    
                    </div>
                </div>
                <componente-caixa-texto-edicao
                    .objeto_ficha=${this.objeto_ficha}
                    .atributo_controle=${this.objeto_ficha?.retornar_nome_tecnico?.()?? ""}
                    .atualizar_atributo=${this.objeto_ficha.atualizar_nome_tecnico}
                    tipo_input="text"
                    placeholder="Nome do Técnico"
                    ></componente-caixa-texto-edicao>
                <componente-caixa-texto-edicao
                    .objeto_ficha=${this.objeto_ficha}
                    .atributo_controle=${this.objeto_ficha.data_admisao}
                    .atualizar_atributo=${this.objeto_ficha.atualizar_data_admisao}
                    tipo_input="date"
                    placeholder="Data Contratação"
                    ></componente-caixa-texto-edicao>
                <componente-caixa-texto-edicao
                    .objeto_ficha=${this.objeto_ficha}
                    .atributo_controle=${this.objeto_ficha.data_previsao_termino}
                    .atualizar_atributo=${this.objeto_ficha.atualizar_previsao_termino}
                    tipo_input="date"
                    placeholder="Data Prevista para Termino"
                    ></componente-caixa-texto-edicao>
            
            </div>
        `;
    }
}

// 2. Em vez de @customElement, use o registro manual
customElements.define('informacoes-ficha', Componente_Informacoes_Ficha);