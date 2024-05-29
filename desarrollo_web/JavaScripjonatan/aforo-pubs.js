// INICIO
let contador;

//Contador a cero 
contador = 0;
aforo = 5;

//Tenemos que identificar todos los elementos HTML que bayamos a manipular con JS
//los guardamos en variables tambien: 
let btnSumar = document.getElementById('btn-sumar');
let btnRestar = document.getElementById('btn-restar');

let pTotal = document.getElementById('resultado');
let pCompleto = document.getElementById('completo');

//Las funciones son bloques de codigo reutilizables que podemos  llamar a voluntad 
function sumar() {
    //la funcion sumar se ejecuta al pulsar el boton +
    if (contador < 5) {
        // el contador aumenta solo cuando es menor de 20
        contador++;
    }
    else {
        //si intentamos sumar el contador esta en 20
        pCompleto.style.opacity = 1;
        //aparece el mensaje de aforo completo
    }
    //si el contador llega a 20,muestra el mensaje de aforo completo
    resultado();
    comprobarBoton();

}

function restar() {
    if (contador > 0) contador--;
    //solo resta el contador es mayor que 0 . esto es para evitar mostrear numeros negativos

    pCompleto.style.opacity = 0;
    // en cuanto algien sale,restamos y el aforo deja de estar completo
    resultado();
    comprobarBoton();
}


function resultado() {
    pTotal.innerHTML = contador;
    //cada vez que ejecutamos esta funcion,el parrafo HTML se actualiza con el valor del  contador
}
// funsion para habilitar o desabilitar los botones
function comprobarBoton() {
    if (contador > 0) {
        //reactivamos el contador - si el contador sube de 0 
        btnRestar.classList.remove('inactivo');
        //classlist accede a la lista de las clases del elemento HTML
        //podemos alterar esta lista con remove y add para quitar y añadir clases respectivamente
    }

    if (contador == 0) {
        //el boton - se vuelve a desactivar cuando el contador llega a 0 
        btnRestar.classList.add('inactivo');


    }
 
    if (contador == aforo) {
        // desactivamos el btn + si el contador alcanza el aforo maximo

        btnSumar.classList.add('inactivo');
        //doc
    }
    if (contador < aforo) {
        
        //el boton + se vuelve a activar  cuando el contador baja de aforo 
        btnSumar.classList.remove('inactivo');
    }
}


// el boton + se vuelve a activar cuando el contador baja de aforo
