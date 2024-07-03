//Crear una web tal que al elegir una opción de las cuatro que aparecerán de una lista desplegable <select> nos muestre su valor en una caja de texto. Además, tendremos cuatro botones deshabilitados y dependiendo de qué opción se escoja se habilitará uno de ellos. Al hacer clic en cada botón se volverá a desactivar
function seleccionarOpcion() {
    let select = document.getElementById('opciones');
    let opcionSeleccionada = select.value;

    document.getElementById('boton1').disabled = true;
    document.getElementById('boton2').disabled = true;
    document.getElementById('boton3').disabled = true;
    document.getElementById('boton4').disabled = true;
    
    switch (opcionSeleccionada) {
        case 'opcion1':
            document.getElementById('boton1').disabled = false;
            break;
        case 'opcion2':
            document.getElementById('boton2').disabled = false;
            break;
        case 'opcion3':
            document.getElementById('boton3').disabled = false;
            break;
        case 'opcion4':
            document.getElementById('boton4').disabled = false;
            break;
        default:
            break;
    }
}

function mostrarValor(boton) {
    let valor = boton.textContent;
    document.getElementById('resultado').value = valor;
    
    document.getElementById('boton1').disabled = true;
    document.getElementById('boton2').disabled = true;
    document.getElementById('boton3').disabled = true;
    document.getElementById('boton4').disabled = true;
}
