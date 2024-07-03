// Crear una web con una imagen .al pasar con el raton por encima cambia la imagen por otra.Cuando salga el raton de la imagen volver a poner la primer imagen
let imagen = document.getElementById("miImagen");
let imagenOriginal = imagen.src;
let imagenNueva = "img/8-4.jpg";

function cambiarImagen() {
    imagen.src = imagenNueva;
}

function restaurarImagen() {
    imagen.src = imagenOriginal;
}


imagen.addEventListener("mouseover", cambiarImagen);
imagen.addEventListener("mouseout", restaurarImagen);
