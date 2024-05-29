// las variables son cajitas donde guardamos datos//
//primero debemos declarar una variable
let nombre;

//let significa que tenemos la intencion de utilizar una variable dentro del contecto del codigo actual

// Podemos usart las variables de dos formas. La primera es asignarles un valor y la segunda es llamarlas para leer y tomar su valor actual
// Modificar una variable:
nombre = "juana";
nombre = " nicole";

//llamar una variable 
console.log(nombre);
// las variables pueden contener en tres tipos de datos:

//Cadenas de texto
apellido = "soba";

// las cadenas de texto son solo de caracteres planos. no se puede operar con ellas , solo unirlas  o separarlas 

nombre = "Cristina";

console.log(nombre + " " + apellido);

nombreCompleto = nombre + " " + apellido;
console.log(nombreCompleto);
// las cadenas de texto se definen por llevar comillas tanto al inicio como al final 

// 2- Integuers o numeros integros 
edad = 35;
edad = 15;

//son numeros operables. Se pueden sumar ..restar.... y hacer todo tipo de calculos con ellos 
// Un ejemplo que necesitamos guardar  un int es que necesitaremos guardar un int es que tenemos que calcular datos a apartir de eestos;
añoNacimiento = 2024 - edad;

console.log(añoNacimiento);
let mayorEdad;

//saber si la persona es mayor de edad 
if (edad >= 18) {

    console.log(nombre + " tiene " + edad + " años. Es mayor de edad ");
    mayorEdad = true
} else {
    //mensaje de que la persona es menor de edad 
    if (edad < 18);

    console.log(nombre + " es menor de edad.Le quedan  " + (18 - edad) + " años. para ser mayor de edad");
    mayorEdad = false;
}
//ejemplo de dato numerico que va en una cadena de texto string 
dni = "5485669L";
cp = 48008;
nss = " 49452135498";
// 3 - booleano o estado binario
espesa = true
// solo pueden tener dos valores, "true" o "false"
// se generan a partir de comparaciones 
if (espesa == true) {
    console.log("Tomar cafe inmediatamente ");
}
if (mayorEdad) {
    console.log("Puedes entrer al pub");

}
//LAs tres son iguales 
if (mayorEdad != true) { }
if (mayorEdad == false) { }
if (!mayorEdad) { }



