//console.log('Bucles');

// Los bucles son operaciones que se repiten un número determinado de veces (vueltas)
// Son muy útiles cuando queremos ejecutar el mismo código repetidamente, pero cada vez con un valor diferente

// ---- FOR ----
// Esta declaración crea una expresión con tres valores opcionales:

// 1. Indica el inicio del conteo del bucle (normalmente 0 o 1)

// 2. Indica la condición para que se ejecute el bucle (y por tanto el número de veces)

// 3. Indica la dirección del conteo. Aumenta o disminuye (cuenta atrás)

/*for (let i = 0; i < 5; i++) {
    // console.log(i);
}

for (let i = 1; i <= 10; i++) {
    //    console.log(i)
}

for (let i = 10; i > 0; i--) {
    console.log(i);
}

const coches = [
    "Ford Mustang",
    "Audi A1",
    "Mazda Furai",
    "Fiat 500",
    "Mercedes CLK 500",
    "Nissan Almera"
]



//imprimir este arrays en el parrafo del HTML
//const parrafo = document.getElementById('pTexto');

// texto =  coches[0] + "<br>";
// texto =  coches[1] + "<br>";
// texto =  coches[2] + "<br>";
// texto =  coches[3] + "<br>";
// texto =  coches[4] + "<br>";
// texto =  coches[6] + "<br>";


// texto += coches [1];

 //let texto = "<ul>";

 //for (let i = coches.length;  i> 0; i--){
   // texto += "<li>" + coches [ i - 1 ] + "</li>"};

   // texto +- "/ul";
   //  parrafo.innerHTML = texto 

     //imprimir en consola el siguiente ejercicio:
     //dado un numero, se imprimira en la consola ese numero de lineas
     // cada linea tendra un  asterisco, y cada lñinea sucesiva ira sumando un ams 

     // ejemplo :con el numero 3 esto es pòrque debe aparecer en pantalla :
     //1                                                         
     //12
     //123
     

     //let numero = 0;

     //for ( let i = 0; i < number; i++) {
       // console.log(i)  }

       //dado un numero, contar hasta ese numero desde el 1 e imprimir en pantalla 
       let numero = 0
       
       numero = 12;
       console.log( "contar hasta" + numero)
       for( let i =1; i<=numero; i++){
        console.log (i);
    }

    // cuenta atras desde el numero 
    console.log ("Cuenta atras desde " + numero);

 //contar hasta el numero, solo pares :
 //console.log ( "contar pares hasta " + numero)
//for ( let i = 2; i <= numero; i +=2) {
  //console.log (i);}


//Imprimir los multiplos de un numero 
let multiplo;
multiplo = 3;

console.log ("multiplos del" + multiplo + "hasta el " + numero)
for ( let i = multiplo; i <= numero; i += multiplo) {
    console.log (i);
}*/




//----uso de let en un for----
let i = 0;

for (let i = 0; i < 5; i) {
  console.log("i del for:" + i)
}
console.log("i fuera del for" + i );

//las dos variables, al ser declaradas con let , tienen un solo alcance de bloque . es decir que solo se ven afectadas por el codigo de su propio bloque 