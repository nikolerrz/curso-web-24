// Variables que almacenan las credenciales guardadas del usuario
let usuarioAlmacenado = "nicole";
let contraseñaAlmacenada = "123456";

// Usamos prompt para pedir el nombre de usuario al usuario
let usuarioIngresado = prompt("Por favor, ingrese su nombre de usuario:");

// Usamos prompt para pedir la contraseña al usuario
let contraseñaIngresada = prompt("Por favor, ingrese su contraseña:");

// Comparamos las credenciales ingresadas con las almacenadas
let datosCorrectos = (usuarioAlmacenado === usuarioIngresado) && (contraseñaAlmacenada === contraseñaIngresada);

// Mostramos en la consola si las credenciales son correctas o no
console.log("Los datos introducidos son " + datosCorrectos);



// Pedimos al usuario que ingrese su edad usando prompt
let edad = prompt("introduce tu edad:");

// Convertimos la entrada del usuario a un número entero
edad = parseInt(edad);

// Verificamos si la edad está dentro del rango permitido (entre 18 y 65 años, inclusive)
let edadPermitida = edad >= 18 && edad <= 65;

//7.3
let passalmacenada = "hola1234";
let pass = prompt("introduce contraseña")

if (passAlmacenada === pass) {
    console.log("la contraseña es correcta");
} else {
    console.log("la contraseña es incorrecta");

}




/*if ((1 condicion)) {
    si se cumple
} else if (2 condicion) {
   si se cumple la 2

}else if (3 condicion) {
    si se cumple la 3
}else {
    si no se cumple ninguna

}*/





