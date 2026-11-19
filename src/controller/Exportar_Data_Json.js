

export const Exportar_Data_Json = async(dadosJson) => {
    // 1. Prepara os dados imediatamente (isso pode ser síncrono)
    const jsonString = typeof dadosJson === 'string' ? dadosJson : JSON.stringify(dadosJson, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const arquivo = new File([blob], 'dados-ficha.json', { type: 'application/json' });

    // 2. Verifica se o navegador suporta e tenta disparar o share IMEDIATAMENTE
    if (navigator.canShare && navigator.canShare({ files: [arquivo] })) {
        try {
            // O navigator.share() DEVE ser chamado logo após o clique do usuário
            await navigator.share({
                title: 'Ficha de Treino',
                text: 'Segue em anexo os dados da minha ficha de treino em JSON.',
                files: [arquivo],
            });
            return; // Sucesso, encerra por aqui
        } catch (error) {
            if (error.name === 'AbortError') {
                // O usuário cancelou o painel de compartilhamento, tudo bem
                return; 
            }
            console.warn('Falha ao compartilhar arquivo, tentando fallback...', error);
        }
    }

    // 3. Fallback: Se falhou ou não suporta arquivos, faz o download direto
    try {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'dados-ficha.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    } catch (downloadError) {
        console.error('Erro ao realizar o download alternativo:', downloadError);
    }
}