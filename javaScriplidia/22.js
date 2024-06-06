function contarNumerosPares() {
    let contadorPares = 0; 
    let condicion = true;  

    for ( condicion; ) {
        let input = prompt("Ingrese un número o escriba 'parar' para detener:");

        if (input.toLowerCase() === "parar") {
            condicion = false; 
        } else {
            let numero = parseInt(input, 10);

            if (!isNaN(numero) && numero % 2 === 0) {
                contadorPares++; 
            }
        }
    }

    console.log(`Has ingresado ${contadorPares} números pares.`);
}


contarNumerosPares();
  function imprimirNumerosPares() {
    for (let i = 2; i <= 10; i += 2){
        console.log(i);
    }
  }