let frase = prompt("Introduce una frase:");
let consonantes = 0;
let letras = "bcdfghjklmnpqrstvwxyz";

for (let i = 0; i < frase.length; i++) {
    
  if (letras.indexOf(frase[i].toLowerCase()) !== -1) {
    consonantes++;
  }
}

console.log("La frase introducida tiene " + consonantes + " consonantes.");
