//lo primero es identificar  a la lista
let lista = document.getElementById('lista');



// definir los elementos que vamos a agregar

const frutas = [
    'piña',
    'sandia',
    'melocotón',
    'fresas',
    'plátano'
]




// creamos un contador para ir tomando distintos elementos del array
let contador = 0;


function agregarLista() {
// tomamos el texto del array
let texto = frutas[contador];

//construimos el elemento li
let elemento = document.createElement('li');
//le añadimos el contenido
elemento.innerHTML = texto;

// lo agregamos a la lista
lista.appendChild(elemento);


//aumentamos el contador para que coja otro elemento del array
contador++;


// reinciiar el contador si se acaba el array
if (contador >= frutas.length) {
    contador= 0;
}


}
