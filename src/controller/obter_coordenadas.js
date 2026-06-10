export async function obterCoordenadas() {

    // Verifica suporte à Geolocalização
    if (!navigator.geolocation) {
        throw new Error("Geolocalização não é suportada pelo seu navegador.");
    }

    // Verifica o estado da permissão
    if (navigator.permissions) {
        const permissao = await navigator.permissions.query({
            name: "geolocation"
        });

        // Se o usuário já negou anteriormente
        if (permissao.state === "denied") {
            throw new Error(
                "Permissão de localização negada. Altere nas configurações do navegador."
            );
        }

        // Se estiver em "prompt", o getCurrentPosition()
        // exibirá a solicitação automaticamente.
    }

    return new Promise((resolve, reject) => {

        navigator.geolocation.getCurrentPosition(
            (posicao) => {
                resolve({
                    latitude: posicao.coords.latitude,
                    longitude: posicao.coords.longitude,
                    precisao: posicao.coords.accuracy
                });
            },
            (erro) => {
                switch (erro.code) {
                    case erro.PERMISSION_DENIED:
                        reject(new Error("Usuário negou a permissão de Geolocalização."));
                        break;

                    case erro.POSITION_UNAVAILABLE:
                        reject(new Error("Informações de localização indisponíveis."));
                        break;

                    case erro.TIMEOUT:
                        reject(new Error("Tempo limite atingido ao obter localização."));
                        break;

                    default:
                        reject(new Error("Erro desconhecido ao obter localização."));
                }
            },
            {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 0
            }
        );
    });
}
