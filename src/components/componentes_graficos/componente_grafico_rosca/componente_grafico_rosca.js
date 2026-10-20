import { LitElement, html, css } from 'lit';
import { Chart, DoughnutController, ArcElement, Tooltip, Legend } from 'chart.js';

// Registra os componentes necessários do Chart.js para o gráfico de rosca
Chart.register(DoughnutController, ArcElement, Tooltip, Legend);

export class Componente_Grafico_Rosca extends LitElement {
  static properties = {
    realizado: { type: Number },
    naoRealizado: { type: Number },
  };

  static styles = css`
    :host {
      display: block;
      width: 100%;
      max-width: 300px;
      margin: 0 auto;
    }
    .chart-container {
      position: relative;
      width: 100%;
      aspect-ratio: 1;
    }
    canvas {
      display: block;
      width: 100% !important;
      height: 100% !important;
    }
  `;

  constructor() {
    super();
    this.realizado = 0;
    this.naoRealizado = 0;
    this.chart = null;
  }

  firstUpdated() {
    this.renderChart();
  }

  updated(changedProperties) {
    if (changedProperties.has('realizado') || changedProperties.has('naoRealizado')) {
      if (this.chart) {
        this.updateChartData();
      }
    }
  }

  // Plugin personalizado para desenhar o texto (porcentagem) no centro do Doughnut
  getCenterTextPlugin() {
    const component = this;
    return {
      id: 'centerText',
      beforeDraw(chart) {
        const { width, height, ctx } = chart;
        ctx.restore();
        
        const total = component.realizado + component.naoRealizado;
        const percent = total > 0 ? ((component.realizado / total) * 100).toFixed(1) : 0;
        
        const fontSize = (height / 110).toFixed(2);
        ctx.font = `bold ${fontSize}em sans-serif`;
        ctx.textBaseline = 'middle';
        ctx.fillStyle = '#333333';

        const text = `${percent}%`;
        const textX = Math.round((width - ctx.measureText(text).width) / 2);
        const textY = height / 2;

        ctx.fillText(text, textX, textY);
        ctx.save();
      }
    };
  }

  renderChart() {
    const canvas = this.shadowRoot.getElementById('doughnutCanvas');
    const ctx = canvas.getContext('2d');

    this.chart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Realizado', 'Não Realizado'],
        datasets: [{
          data: [this.realizado, this.naoRealizado],
          backgroundColor: ['#af4c4c', '#E0E0E0'],
          borderWidth: 0,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '80%', // Define a espessura da rosca para deixar espaço no centro
        plugins: {
          legend: {
            position: 'center',
          },
          tooltip: {
            callbacks: {
              label: (context) => {
                const value = context.raw;
                const total = this.realizado + this.naoRealizado;
                const percentage = total > 0 ? ((value / total) * 100).toFixed(1) : 0;
                return ` ${context.label}: ${value} (${percentage}%)`;
              }
            }
          }
        }
      },
      plugins: [this.getCenterTextPlugin()]
    });
  }

  updateChartData() {
    this.chart.data.datasets[0].data = [this.realizado, this.naoRealizado];
    this.chart.update();
  }

  render() {
    return html`
      <div class="chart-container">
        <canvas id="doughnutCanvas"></canvas>
      </div>
    `;
  }
}

customElements.define('componente-grafico-rosca', Componente_Grafico_Rosca);