//solicitar un numero a un usuario 


//ejercicio1

/*let numero = prompt ("ingresar  un numero");

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
} */

//ejercicio3

let numero = prompt("Por favor, ingresa un número del 1 al 7:");

switch (parseInt(numero)) {
  case 1:
    console.log("El número ingresado corresponde a lunes.");
    break;
  case 2:
    console.log("El número ingresado corresponde a martes.");
    break;
  case 3:
    console.log("El número ingresado corresponde a miércoles.");
    break;
  case 4:
    console.log("El número ingresado corresponde a jueves.");
    break;
  case 5:
    console.log("El número ingresado corresponde a viernes.");
    break;
  case 6:
    console.log("El número ingresado corresponde a sábado.");
    break;
  case 7:
    console.log("El número ingresado corresponde a domingo.");
    break;
  default:
    console.log("El número ingresado no es válido. porfavor , ingrese un numero del 1 al 7 ");
}