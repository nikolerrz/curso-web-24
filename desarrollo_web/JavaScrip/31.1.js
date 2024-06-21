//Crea una función para determinar si lo que ha ingresado el usuario en el prompt es una cadena de texto escrita solo en mayúsculas, solo en minúsculas o por una mezcla de ambas.


let frase = prompt("Introduce una frase");

function comprobar(Frase) {

    let mayusculas = frase.toLocaleLowerCase();
    let minuculas = frase.toLocaleLowerCase();
   
   
    // Verificar si el texto está en mayúsculas, minúsculas o es una mezcla
    
    
    if (frase === mayuscula) {
       console.log ("solo mayúsculas");
    } else if (frase === minuscula) {
        console.log ("solo minusculas")
    } else {
        console.log("mezcla de mayusculas y minusculas");
    }
}

comprobar(Frase);