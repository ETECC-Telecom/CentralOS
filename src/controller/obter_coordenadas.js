
export async function obterCoordenadas() {
    return new Promise((resolve, reject) => {
        // Verifica se o navegador suporta a API de Geolocalização
        if (!navigator.geolocation) {
            reject(new Error("Geolocalização não é suportada pelo seu navegador."));
            return;
        }

        // Configurações opcionais para maior precisão
        const opcoes = {
            enableHighAccuracy: true, // Tenta obter a localização mais precisa possível (GPS)
            timeout: 10000,          // Tempo máximo de espera (10 segundos)
            maximumAge: 0            // Não aceita localização em cache
        };

        navigator.geolocation.getCurrentPosition(
            (posicao) => {
                const coordenadas = {
                    latitude: posicao.coords.latitude,
                    longitude: posicao.coords.longitude,
                    precisao: posicao.coords.accuracy // Em metros
                };
                resolve(coordenadas);
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
            opcoes
        );
    });
}


/*
Utilização:
dentro de uma função asincrona 
const localizacao = await obterCoordenadas();

resultado é um objeto 

{latitude: -24.17983550860177, longitude: -46.78262720557638, precisao: 72}

*/