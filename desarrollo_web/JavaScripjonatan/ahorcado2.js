// script.js

const palabras = ["hola", "flor", "sol", "desarrollo", "codidillo"];
const palabraSecreta = palabras[Math.floor(Math.random() * palabras.length)];
let intentos = 6;
const letrasAdivinadas = [];

document.getElementById('intentos').textContent = intentos;

function mostrarEstado() {
    const estado = palabraSecreta.split('').map(letra => letrasAdivinadas.includes(letra) ? letra : '_').join(' ');
    document.getElementById('palabra').textContent = estado;
}

function mostrarMensaje(mensaje) {
    document.getElementById('mensaje').textContent = mensaje;
}

function crearBotonesLetras() {
    const botonesContainer = document.getElementById('botones-letras');
    const letras = 'abcdefghijklmnopqrstuvwxyz'.split('');

    letras.forEach(letra => {
        const boton = document.createElement('button');
        boton.textContent = letra;
        boton.onclick = () => adivinarLetra(letra);
        botonesContainer.appendChild(boton);
    });
}

function adivinarLetra(letra) {
    if (letrasAdivinadas.includes(letra)) {
        mostrarMensaje('Ya has adivinado esa letra.');
        return;
    }

    letrasAdivinadas.push(letra);

    if (!palabraSecreta.includes(letra)) {
        intentos--;
        document.getElementById('intentos').textContent = intentos;
        mostrarMensaje(`Incorrecto. La letra '${letra}' no está en la palabra.`);
    } else {
        mostrarMensaje('');
    }

    mostrarEstado();

    if (palabraSecreta.split('').every(letra => letrasAdivinadas.includes(letra))) {
        mostrarMensaje(`¡Felicidades! Has adivinado la palabra: ${palabraSecreta}`);
        desactivarBotones();
    } else if (intentos === 0) {
        mostrarMensaje(`Lo siento, te has quedado sin intentos. La palabra era: ${palabraSecreta}`);
        desactivarBotones();
    }
}

function desactivarBotones() {
    const botones = document.querySelectorAll('#botones-letras button');
    botones.forEach(boton => boton.disabled = true);
}

crearBotonesLetras();
mostrarEstado();
