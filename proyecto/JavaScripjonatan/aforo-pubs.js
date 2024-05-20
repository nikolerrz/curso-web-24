// INICIO
let contador;

//Contador a cero 
contador = 0

//Tenemos que identificar todos los elementos HTML que bayamos a manipular con JS
//los guardamos en variables tambien: 
let btnSumar = document.getElementById('btn-sumar');
let btnRestar = document.getElementById('btn-restar');

let pTotal = document.getElementById('resultado');
let pCompleto = document.getElementById('completo');

//Las funciones son bloques de codigo reutilizables que podemos  llamar a voluntad 
function sumar() { 
   if(contador < 20)contador++;
    resultado();
}
function restar() { 
   if(contador > 0) contador--;
    resultado();
 }
function resultado() { 
    pTotal.innerHTML = contador; 
    //cada vez que ejecutamos esta funcion,el parrafo HTML se actualiza con el valor del  contador
}


