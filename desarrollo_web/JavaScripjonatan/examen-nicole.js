// 1 mostrar todos los numero de 1 disminuyendo de 1 en 1 donde n lo ingresa el usuario en un promt


let numero = prompt("Ingresa numero:");

numero = parseInt(numero);

if (isNaN(numero)) {
    alert("Por favor, ingresa un número válido.");
} else {

    for (let i = numero; i >= 1; i--) {
        console.log(i);
    }
} 
