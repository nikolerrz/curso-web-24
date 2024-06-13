//1- Cuando haga click en el button, me aparece una alerta (alert();) que dirá:

let boton = document.getElementById("boton");

function darclic() {
alert ("Hiciste click en el boton!");
}

boton.addEventListener("click" , darclic);