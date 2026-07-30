import { LitElement, html, css, unsafeCSS } from 'lit';
import globalStyle from "./index.css?inline";
import Chart from 'chart.js/auto';

export class Grafico_Velocidade extends LitElement {
    static properties = {
        plano_total: { type: Number },
        velocidade_alcancada: { type: Number },
        restante: { type: Number },
        titulo: { type: String },
    };

    static get styles() {
        return css`${unsafeCSS(globalStyle)}`;
    }
    
    constructor() {
        super();
        this.plano_total = 1000;          // Ajustado um padrão > 0
        this.velocidade_alcancada = 0;
        this.speedChart = null;
        this.titulo = "Não informado"
    }

    firstUpdated() {
        this.initChart();
    }

    // Corrigido: Agora escuta as variáveis corretas registradas em static properties
    updated(changedProperties) {
        if ((changedProperties.has('velocidade_alcancada') || changedProperties.has('plano_total')) && this.speedChart) {
            this.updateChart();
        }
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        if (this.speedChart) {
            this.speedChart.destroy();
        }
    }

    initChart() {
        const canvas = this.renderRoot.querySelector('#gaugeCanvas');
        if (!canvas) return;

        const velocidadeAlcancada = Number(this.velocidade_alcancada) || 0;
        const planoTotal = Number(this.plano_total) || 1000;
        const restante = Math.max(0, planoTotal - velocidadeAlcancada);

        this.speedChart = new Chart(canvas, {
            type: 'doughnut',
            data: {
                labels: ['Alcançado (Mbps)', 'Restante (Mbps)'],
                datasets: [{
                    data: [velocidadeAlcancada, restante],
                    backgroundColor: ['#10b981', '#e2e8f0'],
                    borderWidth: 0,
                    hoverOffset: 4
                }]
            },
            options: {
                responsive: true,
                rotation: -90,      
                circumference: 180, 
                cutout: '75%',
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        callbacks: {
                            label: (context) => ` ${context.label}: ${context.raw} Mbps`
                        }
                    }
                }
            }
        });
    }

    // Corrigido: Uso de this.velocidade_alcancada e this.plano_total
    updateChart() {
        const velocidadeAlcancada = Number(this.velocidade_alcancada) || 0;
        const planoTotal = Number(this.plano_total) || 1000;
        const restante = Math.max(0, planoTotal - velocidadeAlcancada);

        this.speedChart.data.datasets[0].data = [velocidadeAlcancada, restante];
        this.speedChart.update();
    }

    // Corrigido: this.plano_total na interpolação do HTML
    render() {
        return html`
            <div class="gauge-container">
                <canvas id="gaugeCanvas"></canvas>
                <div class="gauge-label">
                    ${this.velocidade_alcancada} <span style="font-size: 0.9rem;">Mbps</span>
                    <div class="gauge-sublabel">${this.titulo}</div>
                </div>
            </div>
        `;
    }
}

customElements.define('grafico-velocidade', Grafico_Velocidade);