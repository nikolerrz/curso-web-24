
// Variable que almacena la contraseña guardada del usuario
let contraseñaAlmacenada = "123456";

// Usamos prompt para pedir la contraseña al usuario
let contraseñaIngresada = prompt("Por favor, ingrese su contraseña:");

// Comparamos la contraseña ingresada con la almacenada
let esCorrecta = contraseñaAlmacenada === contraseñaIngresada;

// Mostramos en la consola si la contraseña es correcta o no
console.log("La contraseña es " + esCorrecta);


