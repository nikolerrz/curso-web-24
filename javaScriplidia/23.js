//Escribe una función que imprima en la consola los números pares de x al y.
//Pedir al usuario nº de inicio (x)
//Pedir al usuario nº de fin (y)

let x = parseInt(prompt("Introduce el número de inicio :"));

let y = parseInt(prompt("Introduce el número de fin :"));


function imprimirNumerosPares() {
   
    console.log('Números pares entre  :');

    for (let i = x; i <= y; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}


imprimirNumerosPares(x, y);

// Verificación de contraseña
//Necesitamos una contraseña almacenada.
//Pedimos al usuario ingresar la contraseña.

// Paso 1: Definir la contraseña almacenada
const contraseñaAlmacenada = "12345";

// Paso 2: Pedir al usuario que ingrese la contraseña
let contraseñaUsuario = prompt("Por favor, ingresa la contraseña:");

// Paso 3: Verificar si la contraseña ingresada es correcta
if (contraseñaUsuario === contraseñaAlmacenada) {
    console.log("¡Contraseña correcta! Acceso concedido.");
} else {
    console.log("Contraseña incorrecta. Acceso denegado.");
}



//Determina el grupo de edad
//El usuario ingresa la edad.
//Si es mayor o igual a 0 comprobamos:
//Si tiene 12 o menos -> Es un niño
//Si tiene 17 o menos -> Es adolescente
//Si tiene 64 o menos -> Es adulto
//Sino, es anciano
//Si es menor a 0 → Edad no válida

// Paso 1: Pedir al usuario que ingrese la edad
let edad = parseInt(prompt("Por favor, ingresa tu edad:"));

// Paso 2: Verificar si la edad es válida
if (edad >= 0) {
    // Paso 3: Determinar el grupo de edad
    if (edad <= 12) {
        console.log("Eres un niño.");
    } else if (edad <= 17) {
        console.log("Eres adolescente.");
    } else if (edad <= 64) {
        console.log("Eres adulto.");
    } else {
        console.log("Eres anciano.");
    }
} else {
    console.log("Edad no válida.");
}