function verificarInicio() {
    
    let cadena = document.getElementById('cadena').value;
    let resultado = document.getElementById('resultado');


    if (cadena === "") {
        resultado.textContent = "La cadena está vacía.";
        return;
    }

    
   let primerCaracter = cadena.charAt(0);

    if (primerCaracter >= '0' && primerCaracter <= '9') {
        resultado.textContent = "La cadena empieza con un número.";
    }
    
    else if (primerCaracter.toLowerCase() >= 'a' && primerCaracter.toLowerCase() <= 'z') {
        resultado.textContent = "La cadena empieza con una letra.";
    } else {
        resultado.textContent = "La cadena empieza con otro carácter.";
    }
}