let edad = parseInt(prompt("Ingresa tu edad:"));

if (edad >= 0) {
    if (edad <= 12) {
        console.log("Eres un niño.");
    } else if (edad >= 13 && edad <= 17) {
        console.log("Eres un adolescente.");
    } else if (edad >= 18 && edad <= 64) {
        console.log("Eres un adulto.");
    } else {
        console.log("Eres un anciano.");
}
} else {
    console.log("Edad no válida.");
}