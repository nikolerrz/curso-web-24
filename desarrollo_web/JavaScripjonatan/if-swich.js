console.log('if y swich');

//if es un bloque que se ejecuta en base a una condicion
let edad = 20;
if (edad >= 18) {
    console.log("en hora buena , puedes votar ")
}
if (edad >= 63) {
    console.log('en hora buena, te puedes jubilar')
}


//podesmos endadenar tantos bloques y condiciones como querramos:
let hora = new Date().getHours();
console.log(hora);
let saludo = '';

if (hora <= 12) {
    saludo =  'Buenos dias';
} else if (hora <= 20) {
    console.log('Buenas tardes');
} else {
    console.log('buenas noches')
}
console.log(saludo);


// Swich se utiliza para ejecutar diferentes tipos de codigo en base a diferentes condiciones 

//supongamos que queremos dar un saludo en base al dia de la semana :

//getDate () es un metodo que retorna un valor de 0 a 6 segun el dia de la semana
// al estar en ingles, el primer dia ( el 0) es el domingo 
//domingo = 0, lunes = 1, martes = 2.....

let dia = new Date().getDay();
console.log(hora);
let diaSemana;
console.log(dia)
switch (dia) {
    case 0:
        diaSemana ="domingo";
        break;
    case 1:
        diaSemana = "lunes";
        break;
    case 2:
        diaSemana = "martes";
        break;
    case 3:
        diaSemana = "miercoles";

        break;
    case 4:
        diaSemana = "jueves";
        break;
    case 5:
        diaSemana = "viernes";

        break;
    case 6:
        diaSemana = "sabado";

        break;
    default:
        console.log('algo anda mal')

        break;
}
console.log(saludo + ', hoy es ' + diaSemana)

//comprobar si es findesemana
let mensaje;
switch (dia){
    default:
        mensaje = 'oh no,aun falta para el finde !!'
        break;
        case 0:
        case 6:
            mensaje = 'yupi! Estamos en el finde !! ';
            break;
}
console.log ( mensaje)




