//Juego del ahoracado 

//tienes una palabra 
let palabra = '';
const listaPalabras = [
    'mesa',
    'lampara',
    'cuadro',
    'silla',
    'traidor',
    'pizarra'
];
let numAleatorio = Math.floor(Math.random() * listaPalabras.length ); //<completar esto
palabra = listaPalabras[numAleatorio];
console.log(palabra);

//la palabra esta oculta
//mesa = _ _ _ _
//guardamos el numero de caracteres que tiene la palabra
let longitud = palabra.length;
console.log("longitud: " + longitud);

let palabraOculta = '';

//si longitud es de 7, el for se repite 7 veces 
for (let i = 0; i < longitud; i++) {
    palabraOculta += "_ ";
}
console.log("palabra oculta: " + palabraOculta);

//tienes que averiguar la palabra 

//tienes que adivinar las letras de la palabra

//si dices una letra que no esta en la palabra pierdes una vida 

//si pierdes las vidas , pierdes el juego

//si pierdes el juego, vuelves a emepazar