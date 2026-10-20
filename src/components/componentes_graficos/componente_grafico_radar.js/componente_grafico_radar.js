import { LitElement, html, css } from 'lit';
import Chart from 'chart.js/auto';

export class Componente_Grafico_Radar extends LitElement {
    static properties = {
        chartData: { type: Object },
        chartOptions: { type: Object }
    };

    static get styles() {
        return css`
            :host {
                display: block;
                width: 100%;
                max-width: 600px;
                position: relative;

                /* Variáveis padrão (Tema Claro) */
                --radar-grid-color: rgba(0, 0, 0, 0.2);
                --radar-text-color: #212121;
                --radar-bg-dataset: rgba(235, 54, 54, 0.2);
                --radar-border-dataset: rgb(235, 54, 54);
            }

            /* Tema Escuro quando a classe .dark-theme está ativa no body ou no :host */
            :host-context(body.dark-theme),
            :host(.dark-theme) {
                --radar-grid-color: rgba(255, 255, 255, 0.25);
                --radar-text-color: #ffffff;
                --radar-bg-dataset: rgba(235, 54, 54, 0.4);
                --radar-border-dataset: rgb(235, 54, 54);
            }

            .chart-container {
                position: relative;
                width: 100%;
                height: 100%;
            }
        `;
    }

    constructor() {
        super();
        this.chartInstance = null;
        this.themeObserver = null;

        // Dados de exemplo por defeito
        this.chartData = {
            labels: ['Comunicação', 'Liderança', 'Trabalho em Equipe', 'Resolução de Problemas', 'Criatividade'],
            datasets: [{
                label: 'Habilidades',
                data: [1, 5, 4, 1, 2],
                backgroundColor: 'rgba(235, 54, 54, 0.2)',
                borderColor: 'rgb(235, 54, 54)',
                borderWidth: 2,
                pointBackgroundColor: 'rgb(235, 54, 54)'
            }]
        };

        this.chartOptions = null;
    }

    firstUpdated() {
        this.initChart();
        this.observeThemeChange();
        
    }

    // Leitura correta das variáveis CSS do :host ou do documento
    getThemeColor(variableName, defaultValue = '#ffffff') {
        let color = getComputedStyle(this).getPropertyValue(variableName).trim();
        
        if (!color) {
            color = getComputedStyle(document.body).getPropertyValue(variableName).trim();
        }
        if (!color) {
            color = getComputedStyle(document.documentElement).getPropertyValue(variableName).trim();
        }

        return color || defaultValue;
    }

    // Observa se a classe dark-theme foi alternada no body para atualizar o gráfico
    observeThemeChange() {
        this.themeObserver = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'class') {
                    this.updateChartTheme();
                }
            });
        });

        this.themeObserver.observe(document.body, {
            attributes: true,
            attributeFilter: ['class']
        });
    }

    updateChartTheme() {
        if (!this.chartInstance) return;

        const gridColor = this.getThemeColor('--radar-grid-color', 'rgba(0, 0, 0, 0.2)');
        const textColor = this.getThemeColor('--radar-text-color', '#212121');

        this.chartInstance.options.scales.r.grid.color = gridColor;
        this.chartInstance.options.scales.r.angleLines.color = gridColor;
        this.chartInstance.options.scales.r.pointLabels.color = textColor;
        this.chartInstance.options.scales.r.ticks.color = textColor;

        this.chartInstance.update();
    }

    initChart() {
        const ctx = this.shadowRoot.querySelector('#radarCanvas');
        if (!ctx) return;

        const gridColor = this.getThemeColor('--radar-grid-color', 'rgba(0, 0, 0, 0.2)');
        const textColor = this.getThemeColor('--radar-text-color', '#212121');

        // Configuração gerada dinamicamente com base nas variáveis CSS do :host
        const defaultOptions = {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    suggestedMin: 0,
                    suggestedMax: 5,
                    grid: {
                        color: gridColor
                    },
                    angleLines: {
                        display: true,
                        color: gridColor
                    },
                    pointLabels: {
                        color: textColor,
                        font: {
                            size: 14
                        }
                    },
                    ticks: {
                        color: textColor,
                        backdropColor: 'transparent'
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        };

        this.chartInstance = new Chart(ctx, {
            type: 'radar',
            data: this.chartData,
            options: this.chartOptions || defaultOptions
        });
    }

    updated(changedProperties) {
        if (changedProperties.has('chartData') || changedProperties.has('chartOptions')) {
            if (this.chartInstance) {
                if (this.chartData) this.chartInstance.data = this.chartData;
                if (this.chartOptions) this.chartInstance.options = this.chartOptions;
                this.chartInstance.update();
            }
        }
    }

    disconnectedCallback() {
        if (this.themeObserver) {
            this.themeObserver.disconnect();
        }
        if (this.chartInstance) {
            this.chartInstance.destroy();
            this.chartInstance = null;
        }
        super.disconnectedCallback();
    }

    render() {
        return html`
            <div class="chart-container">
                <canvas id="radarCanvas"></canvas>
            </div>
        `;
    }
}

customElements.define('componente-grafico-radar', Componente_Grafico_Radar);