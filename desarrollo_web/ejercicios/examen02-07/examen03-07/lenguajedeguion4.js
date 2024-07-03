//dado un array que vontiene  ["azul", " amarillo","rojo", "verde","cafe", "rosa"]determinar si un color introducido por el usuario a travez de un prompt se encuentra dentro del array o no

function verificarColor() {
    
    let colores = ["azul", "amarillo", "rojo", "verde", "cafe", "rosa"];
   let colorUsuario = prompt("Introduce un color:").toLowerCase();

    
   let resultado = document.getElementById('resultado');


    if (colores.includes(colorUsuario)) {
        resultado.textContent = "El color " + colorUsuario + " está en la lista.";
    } else {
        resultado.textContent = "El color " + colorUsuario + " no está en la lista.";
    }
}