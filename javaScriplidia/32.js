// Pide al usuario una frase y determina si la frase empieza con un número, con una letra o con un carácter especial.

function detectarPrimerCaracter() {
    let frase = document.getElementById("frase").value;
    let primerCaracter = frase.charAt(0);
    let resultado = "";

    if (primerCaracter >= '0' && primerCaracter <= '9') {
        resultado = "La frase empieza con un número.";
    } else if ((primerCaracter >= 'a' && primerCaracter <= 'z') || (primerCaracter >= 'A' && primerCaracter <= 'Z')) {
        resultado = "La frase empieza con una letra.";
    } else {
        resultado = "La frase empieza con un carácter especial.";
    }

    document.getElementById("resultado").innerText = resultado;
}
</script>