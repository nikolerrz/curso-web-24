let jugada;
let jugadaCPU;
let puntuacion;

const opciones = [
    'piedra',
    'papel',
    'tijera',
]

function elegir(jugada) {
    console.log("Has elegido " + jugada);
    let jugadaCPU = elegirCPU();

    //comarar las dos jugadas y determinar un ganador 
    let resultado = comparar(jugada, jugadaCPU);
    console.log(resultado);
}

function elegirCPU() {


    //elegir numero ramdom 0-2
    //Math.floor(Math.random()......)......
    let numeroAleatorio = Math.floor(Math.random() * 3);

    //opciones[numeroRamdon]
    let jugadaCPU = opciones[numeroAleatorio];
    //console.log -> la CPU ha elegido...
    console.log(" la CPU ha elegido " + jugadaCPU)

    //retornar el daro para que salga la funcion 
    return jugadaCPU;
}

function comparar(jugada, jugadaCPU) {
    // if(jugada == jugadaCPU) {
    //      return "Hay un empate";} 


    switch (true) {
        case (jugada == jugadaCPU):
            return "Hay empate";

        case (jugada == 'piedra' && jugadaCPU == 'tijera'):
            return "Haz ganado";
        case (jugada == 'tijera' && jugadaCPU == 'papel'):
            return "Haz ganado";
        case (jugada == 'papel' && jugadaCPU == 'piedra'):
            return "Haz ganado";

        default:

            return "Haz perdido"

    }
}
