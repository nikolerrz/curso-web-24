console.log('Objetos en JvaCript');

//en el mundo real,los objetos son sosas como: casas, coches, personas, animales....

//por ejemplo una moto.es un objeto que tiene distintas propiedades.Por ejemplo:marca, color,peso, modelo,potencia....

//Todas las motos tienes el mismo tipo de propiedades,pero el valor de estas varia segun la moto

//y tambien tienen metodos. los metodos son acciones que los objetos pueden ejecutar.

//volviendo al caso de la moto. una moto puede arrancar, acelerar, frenar,detenerse.

// Todas las motos tienen el mismo metodo pero estos se ejecutanen distintos momentos.

//Representacion de las propiedades y los metodos:

//moto.peso, moto.color ----moto.arrancar(), moto acelerar(); moto.frenar();

//VARIABLES. son contenedores para guardar un valor 
let coche = "fiat";

//los objetos tambien son variables pero pueden contener varios valores 
//A diferencia de los arrays , que contienen varios  valores identificados por un indice que empieza de 0 
// array[0], array[7]....
//los objetos tienen los indices indicacos por un nombre 

//ejemplo:
const moto = {
marca: 'yamaha',
modelo: 'Mt-07',
color: 'Blanco',
}

console.log('la marca de la moto es' + moto.marca)
//crear un objeto y luego asignarle propiedades
const persona = {};


persona.nombre = "Cristina";
persona.apellido = "Soba";
persona.edad = 35;
persona.colorOjos = "Castaño";

console.log(persona)

//propiedades de un objeto
persona.nombreCompleto = function() {
    return this.nombre + " " + this.apellido
}

console.log( persona.nombreCompleto())

//javaCript funciona principàlmente con objetos 
//los objetos son contenedores para propiedades y metodos.
//las propiedades son valores con nombre. los metodos son funciones guardadas como propiedades 
//las propiedades pueden ser valores primitivos , funciones o incluso otros objetos