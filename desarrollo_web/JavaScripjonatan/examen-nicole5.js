//5 escribir un codigo de una funcion a la que se le pasa como parametro entero y devuelve como resultado una cadena de texto que indica si el numero es par o impar.mostrar por pantalla el resultado devuelto por la funcion 

let numero = 87; 
        let resultado = paroImpar(numero);

        function paroImpar(numero) {
            if (numero % 2 === 0) {
                return "par";
            } else {
                return "impar";
            }
        } 

        console.log("El número " + numero + " es " + resultado + ".");