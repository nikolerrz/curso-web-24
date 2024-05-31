//Numeros aleatorios en JS

//Math.random() nos retorna un numero aleatorioentre el 0 (incluido) y el 1 (excluido)
let numAleatorio = Math.random();
console.log(numAleatorio);

//para obtener un numero entero se puede combinar MAth.random() con Mat.floor();

//Math.random() obtiene un numero del 0 al 1
//MAth.floor() redondea ese numero

//generar un numero del 0 al 9
numAleatorio = Math.floor(numAleatorio * 10);
//Math.random() * 10 genera un numero del 0 al 10(excluido) con muchos decimales
//Math,floor() redondea esos decimales y redondea los numeros enteros (int)

console.log("numero del 0 al 9:" + numAleatorio);

//simular que lanzamos un dado
const carasDado = [
    1,
    2,
    3,
    4,
    5,
    6,
]
//generamos un numero del 0 año 5 (el 6 esta excluido)
let lanzamiento = Math.floor(Math.random() * 6);

console.log("lanzo el dado: " + carasDado[lanzamiento]);

//lanzar dos dados 
let lanzamiento1 = Math.floor(Math.random() * 6);
let lanzamiento2 = Math.floor(Math.random() * 6);
let dado1 = carasDado[lanzamiento1];
let dado2 = carasDado[lanzamiento2];

//console.log("lanzo los dados: " + carasDado[lanzamiento1] + " " + carasDado [ lanzamiento2]);
//onsole.log("total :" + (carasDado [lanzamiento1] + carasDado [ lanzamiento2]));//
console.log("lanzo los dados: " + dado1 + " " + dado2);
console.log("Total: " + (dado1 + dado2));
//obtener un numero de 1 a 10 (incluidos)
let min = 1;
let max = 10;
numAleatorio = Math.floor(Math.random() * max) + min;
console.log(numAleatorio);
//obtener un numero de 10 a 20 (incluidos)
min = 10;
max = 20;
numAleatorio = Math.floor(Math.random() * max) + min;
console.log(numAleatorio);

