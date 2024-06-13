// //1  Crea una página web con un elemento (por ejemplo, un div) y utiliza JavaScript para cambiar su color de fondo
// let divColor = document.getElementById("color");
// divColor.style.backgroundColor = "red";

// //2 Haz una página web con un párrafo y utiliza JavaScript para cambiar su tamaño de fuente
// let miParrafo = document.getElementById("miParrafo");
// miParrafo.style.fontSize = "30px";

//3 Haz una página web con múltiples elementos (por ejemplo, párrafos, divs, etc.) y utiliza JavaScript para cambiar sus estilos (como color de fondo, tamaño de fuente)
let miParrafo = document.querySelector('#miParrafo');
let miDiv = document.querySelector('.miDiv');

miParrafo.style.color = "orange";
miParrafo.style.fontSize = "45px";
miParrafo.style.backgroundColor = "deeppink";
miParrafo.style.border = "2px solid black";

// miParrafo.style.cssText = "color: blue; font-size: 50px;";
// style.cssText = 'background-color: black; color: white;';