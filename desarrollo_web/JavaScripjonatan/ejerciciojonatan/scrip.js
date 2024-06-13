//indentificamos los elementos HTML con los que vamos a trabajar
let boton = document.getElementById('btnAñadir');
let input = document.getElementById('inputTexto');
let lista = document.getElementById('lista');

function agregarTarea() {
    //guardamos el contenido del input de una variable
    let texto = input.value;


    //contruimos el elemento li
    let elemento = document.createElement('li');
    //le añadimos el contenido
    elemento.innerHTML = '<button onclick="marcarTarea(this)">Marcar</button>';
    elemento.innerHTML += texto;
    elemento.innerHTML += '<button onclick="borrarTarea(this)">X</button>';

    //le agregamos a la lista
    lista.appendChild(elemento);

    //borramos el input
    input.value = '';
}


function borrarTarea(botonX) {
    //al pulsar el boton de guardar identificamos al li padre 
    let tarea = botonX.parentElement;

    //borramos la tarea
    //con css
    //tarea.style.display = 'none';

    //con removeChils()
    //vamos al padre que es la ul lista y eliminamos el li (el hijo)
    lista.removeChild(tarea);
}

function marcarTarea(botomV){
    let tarea = botomV.parentElement;

    tarea.style.color = 'red';
}
boton.addEventListener('click', agregarTarea);
// a boton le agregamos un evento, que activa la funcion agregarTarea cuando hacemos click sobre este 

//ejecutar el mismo evento, pero con la tecla 'enter'

input.addEventListener('keypress', function (evento) {
    if (evento.key == 'Enter') {
        agregarTarea();

    }
})
