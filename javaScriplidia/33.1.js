let select = document.getElementById("opciones");
let cajaInput = document.getElementById("cajatexto");

function actualizarTexto() { let valorOpcion = select.options [select.selectedIndex].value;
    cajaInput.value = valorOPcion