let numeroN = parseInt ( prompt ( "Introduce un n"));
let numeroM = parseInt (promt ("INtroduce un numero mayor al anterior"));

let sumaPAres = 0;
    
    // Calcular la suma de los números pares entre N y M
    for (let i = n; i <= numeroM; i++) {
        if (i % 2 === 0) {
            sumaPares += i;
        }
    }
    
    // Mostrar el resultado en la consola
    console.log(sumaPAres);
