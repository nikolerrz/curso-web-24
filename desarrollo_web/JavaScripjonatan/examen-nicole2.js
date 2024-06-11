//2ejercicio que me pida un numero mientras no le diga que pare y me muestre solo pares

let numerosIngresados = pedirNumeros();
        mostrarPares(numerosIngresados);

        function pedirNumeros() {
            let numeros = [];
            let entrada = prompt("ingresa numero:"); 

            while (entrada.toLowerCase() !== 'pare') {
                let numero = parseInt(entrada);
                if (!isNaN(numero)) {
                    numeros[numeros.length] = numero; 
                } else {
                    alert("ingresa un número válido.");
                }
                entrada = prompt(" escribe 'pare' para terminar:");
            }

            return numeros;
        }

        function mostrarPares(numeros) {
            console.log("Números pares ingresados:");
            for (let i = 0; i < numeros.length; i++) {
                if (numeros[i] % 2 === 0) {
                    console.log(numeros[i]);
                }
            }
        }

