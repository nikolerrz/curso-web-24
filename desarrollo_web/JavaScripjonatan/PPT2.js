function jugar(eleccionJugador) {
    const opciones = ['piedra', 'papel', 'tijera'];
    const eleccionCPU = opciones[Math.floor(Math.random() * opciones.length)];
    let resultado = '';

    if (eleccionJugador === eleccionCPU) {
        resultado = 'Empate';
    } else if (
        (eleccionJugador === 'piedra' && eleccionCPU === 'tijera') ||
        (eleccionJugador === 'papel' && eleccionCPU === 'piedra') ||
        (eleccionJugador === 'tijera' && eleccionCPU === 'papel')
    ) {
        resultado = '¡Ganaste!';
    } else {
        resultado = 'Perdiste';
    }

    document.getElementById('result').textContent = `Tú elegiste ${eleccionJugador}, la CPU eligió ${eleccionCPU}. ${resultado}`;
}
