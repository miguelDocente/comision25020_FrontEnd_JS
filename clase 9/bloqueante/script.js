// Función que bloquea el hilo principal por X milisegundos
function bloquear(ms) {
    const inicio = Date.now();
    while (Date.now() - inicio < ms) {
        // espera activa (bloqueo del hilo principal)
    }
    console.log("culmina el bloqueo")
}

// Bloquea el hilo por 3 segundos
bloquear(5000);