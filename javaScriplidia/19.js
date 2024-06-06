/*let frase = prompt("Ingresa una frase: ");
let palabra = "gato";




if(frase.indexOf(palabra) >= 0 ){
    console.log("La palabra " + palabra + " está en la frase.");
} else {
    console.log("La palabra " + palabra + " no está en la frase.");
}*/


/*let frase = prompt("Ingrese una frase:");
let letra = prompt("Ingrese una letra:");
let contador = 0;

for (let i = 0; i < frase.length; i++) {
  if (frase[i] === letra) {
    contador++;
  }
}

console.log(`La letra ${letra} aparece ${contador} veces en la frase.`);*/

//1
function saludo(nombre, apellido) {

  return "Hola, " + nombre + " " + apellido;

}

let nom = prompt("Ingrese su nombre");
let apel = prompt("Ingrese su nombre");

console.log(saludo(nom, apel));

//2
function Cuadrado(numero) {

  return numero * numero;

}

let n = parseInt(prompt("Ingrese su número:"));

console.log("El cuadrado de " + n + " es " + Cuadrado);

//3
// function Signo(numero) {

// if (numero >= 0) {

// return "positivo";

// } else {

// return "negativo";
// }
// }

// let n = parseInt(prompt("Ingrese su número:"));
// console.log("El número es " + Signo(n));

let j = parseInt(prompt("Ingrese su número:"));

function resultado(numero) {

  if (numero % 2 === 0) {
      return "par";

  } else {
      return "impar";
  }
}

console.log("El número es " + resultado(j));