// Seleccionamos los divs dentro de la clase .container
const divs = document.querySelectorAll('.container div');

// Agregamos un evento de clic a cada div
for (let i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', function() {
        //guardamos this en una variable 
        //this  se refiere al objeto que interactua en cada caso
let cuadro = this;
//le cambiamos el color del fondo
cuadro.Style.backgroundColor = 'dodgerblue';

//ponemos un temporizador para que el div vuelva a su color inicial

setTimeout (function(){
    //desde aqui dentro no podemos acceder a this por eso lo hemos guardado en variable 
cuadro.style.backgroundColor = 'white';

},1500)};
//1500ms 1.5 -> el valor de la transition que dimos en CSS

}
