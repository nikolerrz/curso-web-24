// Cuando pase el ratón por encima del div, cambiará el color de fondo de ese div.
let div = document.getElementById("miDiv");

function pasar() {
   
   div.style.backgroundColor = "blue";
    enlace.style.backgroundColor = "grey";
}

function restaurarColor() {
    enlace.style.backgroundColor = "";
}

function Alerta() {
    alert("¡Hiciste click en el botón!");
}

enlace.addEventListener("mouseover", cambiarColor);
enlace.addEventListener("mouseout", restaurarColor);
enlace.addEventListener("click", Alerta);