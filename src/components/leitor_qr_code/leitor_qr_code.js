import { LitElement, html, css } from 'lit';
import QrScanner from 'qr-scanner';

export class Leitor_QR_Code extends LitElement {
  static styles = css`
    :host {
      display: block;
      font-family: sans-serif;
    }
    .video-container {
      position: relative;
      width: 100%;
      max-width: 400px;
      margin: 0 auto;
      border-radius: 8px;
      overflow: hidden;
    }
    video {
      width: 100%;
      height: auto;
      display: block;
    }
    .overlay {
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      border: 2px solid rgba(255, 255, 255, 0.5);
      box-shadow: inset 0 0 100px rgba(0,0,0,0.5);
      pointer-events: none;
    }
  `;

  static properties = {
    scannedResult: { type: String }
  };

  constructor() {
    super();
    this.scannedResult = '';
    this.qrScanner = null;
  }

  // Mudamos para async para usar o await
  async firstUpdated() {
    super.firstUpdated();

    // Garante que o Lit terminou de renderizar o template no Shadow DOM
    await this.updateComplete; 

    const videoElem = this.shadowRoot.getElementById('qr-video');
    
    if (!videoElem) {
      console.error("Elemento de vídeo não encontrado no Shadow DOM.");
      return;
    }

    this.qrScanner = new QrScanner(
      videoElem,
      result => this.handleSuccess(result),
      {
        onDecodeError: error => {
          // Ignora erros comuns de busca
        },
        highlightScanRegion: true,
        highlightCodeOutline: true,
      }
    );

    this.qrScanner.start().catch(err => {
      console.error("Erro ao iniciar a câmera:", err);
    });
  }

  disconnectedCallback() {
    if (this.qrScanner) {
      this.qrScanner.destroy();
      this.qrScanner = null;
    }
    super.disconnectedCallback();
  }

  handleSuccess(result) {
    this.scannedResult = result.data;
    this.dispatchEvent(new CustomEvent('qr-scanned', {
      detail: { result: result.data },
      bubbles: true,
      composed: true
    }));

    this.qrScanner.stop();
  }

  render() {
    return html`
      <div class="video-container">
        <video id="qr-video" playsinline muted></video>
        <div class="overlay"></div>
     
      </div>
      
      
      
      
    `;
  }
}

customElements.define('leitor-qr-code', Leitor_QR_Code);