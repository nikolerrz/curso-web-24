// REaliza la suma de todos los numeros pares entre N y M donde  N y M los ingresa un usuario

function sumarPares() {

    let n = parseInt(document.getElementById('numeroN').value);
    let m = parseInt(document.getElementById('numeroM').value);

    let resultado = document.getElementById('resultado');


    if (isNaN(n) || isNaN(m)) {
        resultado.textContent = "Por favor, introduce valores válidos para N y M.";
        return;
    }

    let suma = 0;

    if (n > m) {
        let temp = n;
        n = m;
        m = temp;
    }

    for (let i = n; i <= m; i++) {
        if (i % 2 === 0) {
            suma += i;
        }
    }

    resultado.textContent = "La suma de los números pares entre " + n + " y " + m + " es: " + suma;
}