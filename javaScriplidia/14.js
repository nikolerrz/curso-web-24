for (let i = 1; i <= 10; i++) {
    console.log(i);
}


for (let i = 1; i <= 20; i++) {
    if(i % 2 === 0 ) {
        console.log(i);
}
    }
    

    // Definimos la tabla de multiplicar que queremos imprimir
const tablaDeMultiplicar = 5;

// Iteramos del 1 al 10
for (let i = 1; i <= 10; i++) {
    // Multiplicamos el número actual (i) por la tabla de multiplicar y lo imprimimos
    console.log(i + " x " + tablaDeMultiplicar + " = " + (i * tablaDeMultiplicar));
}