const palabra = prompt("Ingrese una palabra:");
const numero = parseInt(prompt("Ingrese un número:"));
let palabraRepetida = "";

for (let i = 0; i < numero; i++) {
    palabraRepetida += palabra + " ";
}

console.log(palabraRepetida);