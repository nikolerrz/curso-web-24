console.log( 'Metodos');

//Metodos de string
//Obtener la longitud de dstring
let texto = "ABCDEFGHYJKLMNÑOPQRS";
let longitud = texto.length;

console.log( longitud );

//comparar la contraseña de un fotmulario de un registro

let contraseña1;
let contraseña2;
//una de las condiciones que suelen pedir para las contraseñas es que sea mayor o que tenga cierta longitud de caracteres
contraseña1 ="12345"
//supongamos que una pagina requiere que la contraseña sean de por lo menos de 8 caracteres 
let longitudRequerida = 8

//el usuario ingresa una contrasdeña :
contraseña1 = "1234";

//ahora comparamos la longitud de la contraseña ingresada con el requerimiento 
if (contraseña1.length >= longitudRequerida) {
        console.log ("la contraseña es valida")
     }
     else{
        console.log("la contraseña debe tener almenos 8 caractereres");
     }


// ----Extraer caracteres ---
//con CharAt

texto = "hola mundo";
let primeraLEtra = texto.charAt (0);

console.log (primeraLEtra);


let ultimaLetra = texto.charAt ( texto.length - 1 );
console.log (ultimaLetra);