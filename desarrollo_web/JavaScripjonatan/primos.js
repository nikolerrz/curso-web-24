// un numero primo es cuando solo es divisible entre 1 y si mismo 
//por ejemplo el 7, el 19,23

//el 7 no se puede dividir entre 2, ni 2, ni 4, ni 5.....
//solo del 1 al 7 

//empezamos por 7/2 = x. -> el resto NO es cero
//15/3 = 5. el resto es 0

//tomamos un numero x. Dividir entre el 2 y los numeros hasta llegar a x

let numero = prompt('ingresar el numero que quieres comprobar si es primo');
let primo = true;

//ejemplo: tenemos el 17 y queremos calcular el resto  de la division resultante entre 3 

let resto = 17 % 3;
console.log(resto);

for (let i = 2; i <numero; i++); {

    if (numero % i ==0){
        //si en algun momento,esta operacion da 0
        //el numero queda descartado como primo 
        primo = false;
    }
    //si completamos el bucle y en ningun momento se ha cumplido la condicion if, entonces podemos decir que el numero es primo 
}
let mensaje = '';

if (primo){mensaje = "el numero elegido es primo"}
else{mensaje = "el numero no es primo"};

//alternativa
mensaje = "el numero es primo ";
if (!primo) {mensaje = "El  numero no es primo"};


alert(mensaje);