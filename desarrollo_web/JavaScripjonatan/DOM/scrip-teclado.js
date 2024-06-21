// Extraer el contenido de un input y guardarlo en 
// una varibale.
// tomamos las dos contraseñas: tiene que tener mas 
// de 4 caracteres y que sean iguales.
// en caso de que no cumplan edstas condiciones, 
// aimprimir un mensaje en pantalla donde se indique el error (p id='mensaje').
// al pulsar el botón guardamos las contraseñas en 
// variables..

//guardar el parrafo en una variable
let parrafo = document.getElementById('mensaje');
let inputPass1 = document.querySelector('#fpass1');
let inputPass2 = document.getElementById('fpass2');

function comprobar( ){

}
//guardamos los inputs de las contraseñas en variables
//esto nos dará facilidad de acceso en un futuro
function comprobar () {
    let texto = '';
    //al pulsar el botón, guardamos las contraseñas variables
    let pass1 = document.getElementById('fpass1').value;
    let pass2 = document.getElementById('fpass2').value;
//value es el contenido que escribe el usuario dentro del input

//comprobar que son iguales
if (pass1 == pass2) {
//mensaje que indíque que las contraseñas coinciden
    texto = 'Las contraseñas coinciden';
} else {
//mensaje que indíque que las contraseñas NO coinciden
    texto = 'Las contraseñas NO coinciden';
}

//imprimir el mensaje en el párrafo
mensaje.innerHTML = texto;
}
// añadimos un evento al segundo input para que compare las contraseñas cada vez que 
//pulsamos el teclado

inputPass2.addEventListener('keyup', comprobar);
//keyup se activa cada vez que soltamos una tecla