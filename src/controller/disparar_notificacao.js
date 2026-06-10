
export const disparar_notificacao = (tipo, mensagem) => {
    window.dispatchEvent(new CustomEvent('disparar-alerta', {
        detail: {
            categoria: tipo,
            mensagem: mensagem
        }
    }));
}

