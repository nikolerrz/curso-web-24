//Repaso

//Variables
//son contenedores para guardar datos y acceder a ellos mas adelante
//Tipos de datos:
//Strings - 'Paquita'
//Numeros - 2.50
//Booleanos - true/false

//Declarar variables 
//Alcance de bloque
//let,const
//alcance global
//var,

let x = 15;
let z = "zeta"
// declaramos la z afuera dandole alcance global
{
    let x = 30;
    //Alcance de bloque,no se puede acceder desde fuera
    console.log("x dentro del blque: " + x);
    console.log("z dentro del blque: " + z);
    var y = 20;
    z = "equis";
    //cambiamos el valor de la z
}
console.log("x fuera del bloque: " + x);
console.log("y fuera del bloque " + y);
console.log("z fuera del bloque " + z);
//z continua con el valor cambiado

{
    let x = "uvedoble";
    {
        console.log("x: " + x);
    }
}
{
    {
        var y = 100;
        console.log("x: " + x);
    }
}
u = "Roman"
console.log("u: " + u);

const fija = "jonatan";

{
    //fija = "aleja"; --> daria error por intentar cambiar una constante 
    const fija = "aleja";
    //no da error porque la estamos declarando a nivel de bloque 
    //y por lo tanto, serian dos variables distintas
    console.log(' var constante: ' + fija)
}
console.log('var constante ' + fija)

//Arrays
//almacenan mas de un dato
//se accede a los datos mediante un INDICE numerado
const items = [];
//por buenas practicas se nombra const y  en PLURAL
//asignacion de los datos:
items[0] = "arriba";
items[1] = "abajo";
items[2] = " centro";

//acceso a los datos:
console.log(items[0]);

const coches = ["Sedan", "berlina", "deportivo"];
console.log(coches[1]);
//MEtodos y propiedades
//las propiedades son caracteristicas de objetos en cuestion, en este caso un arrays:
console.log(coches.length); // accede a la longitud del arrays
console.log(coches[2].length); // accede a la longitud del items

// los metodos son operaciones internas que nos facilitan tareas a la hora dfe trabajar con los datos/objetos
//metodo para transformar un arrays en un string
let listacoches = coches.toString();
console.log(listacoches);
listacoches = coches.join("><");
console.log(listacoches);

//Objetos
let fecha = new Date();
//para trabajar con el objeto Date() es necesario crear una instancia (una copia) para, poder modificarla
//una propiedad del objeto fecha :
console.log(fecha); //->accedemos al objeto entero
console.log(fecha.getDay()); //-> accedemos solamente al dia de la semana




//Bucles
//Funciones
//crear una funcion que al darle un nombre nos ndevuelva un saludo con ese nombre 
function saludo(nombre) {
    return "hola, " + nombre;
}
console.log(saludo('Arantxa'));

//Funcion que al ingresar dos numeros nos devuelve multiplicados
function multiplicar(x, y) {
    return x * y;
}
console.log(multiplicar(24, 6));

//Crear una funcion a  la que ingresar nuestro año de nacimiento, nos retorne un saludo diciendonos los años que tenemos 
function mensajeEdad(añoNacimiento) {
    let edad = new Date().getFullYear() - añoNacimiento ;
    return "hola tienes " + edad + "años";
}
console.log(mensajeEdad(1996));

// crear una funcion a la que ingresarle un numero nos devuelva un conteo del 1 hasta ese numero
function conteo (x) {
    let mensaje = "";
    for(let i = 1; i <= x; i++){
        mensaje += i +" ,";

    }


    return mensaje;
    }
    console.log(conteo(15));

//if/else
//Swich case
//Metodos
//Propiedades
