//3escribir un programa que nos diga si un numero dado es primo (no es divisible por ningun otro numero que no sea el mismo o la unidad)

let numero = 7; 
        mostrarResultado(numero);

        function esPrimo(numero) {
            
            if (numero <= 1) {
                return false;
            }
           
            for (let i = 2; i < numero; i++) {
                if (numero % i === 0) {
                    return false; 
                }
            }
            return true; 
        }

        function mostrarResultado(numero) {
            if (esPrimo(numero)) {
                console.log(numero + " es un número primo.");
            } else {
                console.log(numero + " no es un número primo.");
            }
        }
