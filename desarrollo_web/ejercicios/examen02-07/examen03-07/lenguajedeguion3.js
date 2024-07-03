// definir una funcion que  nos muestre informacion sobre una cadena de texto que se le pasa como argumento. a partir de la cadena que se le pasa, la funcion determinada si esa cadena esta formada solo por mayusculas,so lo por minusculas o por mexcla de ambas (usar la funcion toUpperCase para convertir  a mayusculas y toLowerCase para convertir a minuscula).

 let cadenaMayusculas = cadena.toUpperCase();
 let cadenaMinusculas = cadena.toLowerCase();

 function verificarCadena() {

    let cadena = document.getElementById('cadena').value;

    if (cadena === "") {
        console.log(" cadena  vacía.");
        return;
    }
       if (cadena === cadenaMayusculas) {
        console.log("La cadena está formada solo por mayúsculas.");
    } else if (cadena === cadenaMinusculas) {
        console.log("La cadena está formada solo por minúsculas.");
    } else {
        console.log("La cadena está formada por una mezcla de mayúsculas y minúsculas.");
    }
}