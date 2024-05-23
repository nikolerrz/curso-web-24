//solicitar un numero a un usuario 

let numero = prompt ("ingresar  un numero");

if(numero > 0 ){
    console.log( "El numero ingresado es positivo");

}else if (numero < 0) {
    console.log("el numero es negartivo")
}else {
    console.log("Elnumero ingresado es igual a cero")
}

//ejercicio2
let edad = prompt("Ingresa tu edad:");
edad = parseInt(edad);

if (edad < 18) {
  console.log("Eres menor de edad");
} else if (edad >= 18 && edad <= 64) {
  console.log("Tienes menos de 65");
} else if (edad >= 65 && edad <= 99) {
  console.log("Tienes menos de 100");
} else {
  console.log("Tienes 100 o más");
}

