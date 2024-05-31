function contarVocales(frase) {
    let vocales = 'aeiouAEIOU';
    let contador = 0;

    for (let i = 0; i < frase.length; i++) {
        if (vocales.indexOf(frase[i]) !== -1) {
            contador++;
        }
    }

    return contador;
}

let frase = 'si nos organizamos todos';
let totalVocales = contarVocales(frase);
console.log('la frase tiene : ' + totalVocales);
