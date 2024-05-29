//operaciones y asignaciones 

//declaracion de variables
let x;
let y;
let z;
// varias declaraciones en un let
let a, b, c;

//asignaciones de valor (=)
a= 1;
b= 2;
c= 3;

//asignaciones en una sola linea
b, c = 4;

x = a ;
//a partir x = a = 1
console.log("x = " + x )

y = a + b;
// se  puede guardar el resultado de operar dos variables en otra variable 
console.log ("y = " + y );

z = ( 3 + 5 ) * b;
//se puede operar juntando valores numericos con variables numericos
console.log ( "z = " + z );

//PEDMAS
//Parentesis -> exponentes -> multiplicacion -> Division ->adicion (suma) -> substraccion (resta)

//incrementos y decrementos
x = 32;
x++;
// x aumenta en 1 , ahora x = 33
console.log( "x = " + x );

y = 6;
y--;
console.log (" y = " + y )

z = 3;
z *= 2;
// con esto, z se multiplica por 2 
console.log ( "z = " + z)
// z = /2 
//se divide enetre 2
console.log("x = " + x )
// RESTO (%)
x = 10;
y = 3;

z = x % y;
// esto nos da el resto de la divicion, NO el resultado
console.log(" x % y = " + z )

