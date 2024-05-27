const numero = Number(prompt("Ingrese un número:"));

if (numero === 0) {
    console.log("El número es cero.");
} else {
    if (numero > 0) {
        console.log("El número es positivo.");
    } else {
        console.log("El número es negativo.");
    }

    if (numero % 2 === 0) {
        console.log("El número es par.");
    } else {
        console.log("El número es impar.");
    }
}