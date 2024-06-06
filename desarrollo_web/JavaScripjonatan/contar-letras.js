//contar cuantas veces  aparece uan letra en un texto dado

//por un lado tomamos el texto
let texto = prompt('ingresa un texto');

//por otro lado tomamos la letra a contar 
let letra = prompt('ingresa la letra que quieres contar');

//creamos un contador para ir almacenando las apariciones de dicha letra 
let contador = 0;

//recorrer la cadena de texto, caracter por caracter e ir comparando con la letra especifica

for(let i = 0; i < texto.length; i++){
    if (texto[i] == letra) {
        // texto[i] es cada uno de los caracteres del texto
        //si coincide con la letra, el contador aumenta en 1 y pasa al siguiente carácter
        contador++
    }
}

//alert es para que le aparezca al usuario
alert("Número de veces que aparece la letra: " + contador);