let imagenPrincipal = document.getElementById('imagenPrincipal');
let fechaHora = document.getElementById('fechaHora');
let imagenOriginal = '...jpg';
let imagenAlternativa = 'imagen2.jpg';


imagenPrincipal.addEventListener('mouseout', function() {
    imagenPrincipal.src = imagenOriginal;
});


imagenPrincipal.addEventListener('mouseover', function() {
    imagenPrincipal.src = imagenAlternativa;
});

function actualizarFechaHora() {
    let ahora = new Date();

    
    let dias = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
    let meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

    
    let nombreDia = dias[ahora.getDay()];
    let dia = String(ahora.getDate()).padStart(2, '0');
    let mes = meses[ahora.getMonth()];
    let año = ahora.getFullYear();
    let horas = String(ahora.getHours()).padStart(2, '0');
    let minutos = String(ahora.getMinutes()).padStart(2, '0');
    let segundos = String(ahora.getSeconds()).padStart(2, '0');

    fechaHora.textContent = `${nombreDia}, ${dia} de ${mes} de ${año} - ${horas}:${minutos}:${segundos}`;
}

actualizarFechaHora();
setInterval(actualizarFechaHora, 1000);
