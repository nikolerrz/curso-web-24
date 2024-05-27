//ejercicio 11

//IF METEMOS CONDICION Y LUEGO METEMOS EL SWICH(CON LA VARIABLE) DENTRO DEL IF 


let numero = parseInt(prompt("Ingresa un número del 1 al 5 "));
//parseint se pone cuando lo que nos piden numeros luego dentro se pone un prompt para ingresar la pregunta [ parseint( prompt( pregunta) ) ]
if (numero >= 1 && numero <= 5) {
  switch (numero) {
    case 1:
      console.log("Perro - Guau guau");
      break;
    case 2:
      console.log("Gato - Miau");
      break;
    case 3:
      console.log("Vaca - Muuu");
      break;
    case 4:
      console.log("Pato - Cuac cuac");
      break;
    case 5:
      console.log("León - Rugido");
      break;
  }
} else {
  console.log("Número inválido, ingresa un número del 1 al 5");
}