let select = document.getElementById("opciones");
let cajaInput = document.getElementById("cajaTexto");

function actualizarTexto() {
    let valorOpcion = select.options[select.selectedIndex].value;
    cajaInput.value = valorOpcion;

    let indiceSelec = select.selectedIndex;
    if (indiceSelec >= 1 && indiceSelec <= 4) {  // Asegurarse de que el índice esté en el rango correcto
        document.getElementById("boton" + indiceSelec).disabled = false;
    }

    // Deshabilitar los demás botones
    for (let i = 1; i <= 4; i++) {
        if (i !== indiceSelec) {
            document.getElementById("boton" + i).disabled = true;
        }
    }
}

function deshabilitarBoton(indice) {
    document.getElementById("boton" + indice).disabled = true;
}

// Añadir event listeners
select.addEventListener('change', actualizarTexto);
