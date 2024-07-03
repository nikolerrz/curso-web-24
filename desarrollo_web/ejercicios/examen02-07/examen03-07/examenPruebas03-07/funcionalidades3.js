//3. Crear una web con un botón y con una etiqueta div (con cualquier contenido) de 100x50 pixels que se mueva al hacer clic en el botón, de izquierda a derecha 400 pixels. 

function caja() {
    let div = document.querySelector('.caja');
    div.classList.toggle("mover")
    }

    document.getElementById('btn').addEventListener('click', caja);