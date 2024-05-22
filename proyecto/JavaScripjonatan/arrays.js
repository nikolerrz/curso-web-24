console.log(" Arrays");

//la diferencia de una variable que solo puede guardar un dato a la vez, los arrays o "arreglos" son variables multidimencionales  es decir que podemos almacenar datos en ellas en varias direcciones , como si se tratase de una estanteria,con varias baldas y niveles.

//Arrays y bidireccionales 
let arrayEjemplo = ["uno", "dos", "tres", "cuatro"];

//para cceder a los datos de un array, tenemos que indicar la posicion del elemento al que queremos acceder 
let texto = arrayEjemplo[0];

console.log(texto);
//crea arrays
//manualmente 
let alumnas = ["arantza"  , "aleja" , "nicole"];
//al declarar con " const" el array se hara constante y no se podra modificar, es una buena practica en programacion trabajar con arrays constantes

//a partir de variables 
// porque usar arrays?
// inmaginemos que tenemos una lista de cualquier tipo de items (coches, personas, animales , etc )

let alumna1 = "cristina"
let alumna2 = "zaloa"
let alumna3 = "susana"
let alumna4 = "natalia"
// ahora inmaginemos que tienes que correr la lista para encontrar una alumna en especifico pero en vez de unas pocas, tuvieras 300 

//la solucion es un arrays 

//Un arrays puede guardar muchos valores  usando un solo nombre y puedes acceder a estos valores mediante una referencia al indice de estos 
 const listaAlumnas = [alumna1, alumna2, alumna3, alumna4];

 //imprimir en consola todo el array:
 console.log(listaAlumnas);


 console.log(listaAlumnas[3]);

 console.log(listaAlumnas[1] +  " y " +  listaAlumnas[2]);

 //tambien podemos crear un arrays y posterior añadir los items:

 const coches = [];
 coches [0] = "mercedes benz";
 coches [1] = "toyota";
 coches [2] = "mitsubishi";

 console.log( coches );
 coches[0] = "Hyundai";
 console.log (coches);

 console.log(listaAlumnas.toString());
 //la propiedad  length (lentitud)
 //se refiere a la longitud de la lista de items de un array 
 
 console.log(listaAlumnas.length)

 //acceder al primer elemento de un array
 console.log(listaAlumnas[0]);

 //acceder al ultimo elemento de un array
 console.log(listaAlumnas[listaAlumnas.length - 1] );
 // deentro de los corchetes :
 //lista alumnas.lenght = 4 
 //luego le restamos para que el numero coincida con el ultimo indice ,que en este caso seria 3

