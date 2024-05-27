//ejercicio 10

let calificacion =parseInt( prompt("Ingresa una calificación del 1 al 5"));

switch (calificacion) {
  case 1:
    console.log("Deficiente");
    break;
  case 2:
    console.log("Regular");
    break;
  case 3:
    console.log("Aceptable");
    break;
  case 4:
    console.log("Bueno");
    break;
  case 5:
    console.log("Excelente");
    break;
  default:
    console.log("La calificación no es válida. Debe ser un número del 1 al 5");
}
//break hay que poner siempre para que se detenga la  ejecucion y solo mande a una en concreto SIEMRPE USAMOS BREAK



