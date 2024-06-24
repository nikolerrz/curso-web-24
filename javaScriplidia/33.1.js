let opcionSeleccionada = null;

function elegirOpcion(opcion) {
    opcionSeleccionada = opcion;
    document.getElementById("confirmacionResultado").innerText = "Has seleccionado la opción " + opcion;
}

function confirmarOpcion() {
    if (opcionSeleccionada !== null) {
        document.getElementById("confirmacionResultado").innerText = "Has confirmado la opción " + opcionSeleccionada;
    } else {
        document.getElementById("confirmacionResultado").innerText = "No has seleccionado ninguna opción para confirmar.";
    }
}
