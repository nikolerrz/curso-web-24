// INICIO
let contador;

//Contador a cero 
contador = 0;
aforo = 20;

//Tenemos que identificar todos los elementos HTML que bayamos a manipular con JS
//los guardamos en variables tambien: 
let btnSumar = document.getElementById('btn-sumar');
let btnRestar = document.getElementById('btn-restar');

let pTotal = document.getElementById('resultado');
let pCompleto = document.getElementById('completo');

//Las funciones son bloques de codigo reutilizables que podemos  llamar a voluntad 
function sumar() {
    //la funcion sumar se ejecuta al pulsar el boton +
    if (contador < 20) {
        // el contador aumenta solo cuando es menor de 20
        contador++;
    }
    else {
        //si intentamos sumar el contador esta en 20
        pCompleto.style.opacity = 1;
        //aparece el mensaje de aforo completo
        btnSumar.style.opacity= "lightgray";
    }
    //si el contador llega a 20,muestra el mensaje de aforo completo
    resultado();

}

function restar() {
    if (contador > 0) contador--;
//solo resta el contador es mayor que 0 . esto es para evitar mostrear numeros negativos

    pCompleto.style.opacity = 0;
    // en cuanto algien sale,restamos y el aforo deja de estar completo
    btnSumar.style.backgroundColor =  "pink";
    resultado();
}


function resultado() {
    pTotal.innerHTML = contador;
    //cada vez que ejecutamos esta funcion,el parrafo HTML se actualiza con el valor del  contador
}


