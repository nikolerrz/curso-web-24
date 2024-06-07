//REPASO examen


// EJERCICIO 1 
//Mostrar en la consola los números de X a 1 disminuyendo de 1 en 1. X lo ingresa el usuario en un prompt.


/*let x = parseInt(prompt("ingresa numero"));

for(let i = x; i >= 1; i--) {
    console.log(i);
}*/

//Pedir números mientras no le diga que pare y mostrar solo los pares


let contadorPares = 0;
let continuar = true,

for ( let i = 0; continuar == true; i++){

    let numero = prompt("ingresa un numero (o scribe para detenerle):");


    if (numero.toLowerCase() === "para");
     continuar = false;

} else{

    if(numero % 2 === 0) {
        contadorPares ++;
    }
}

console.log ("Numeros pares :" + contadorPares );
