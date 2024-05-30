console.log('objeto date ()');

//el objeto date() (Fecha) nos deja trabajar con fechas en javaCript

console.log(Date());

//El objeto Dte () es invariable , no lo podemos modificar,solo leer

//para solventar esto  podemos crear una copias;

//Crear una copia con la fecha/hora actual:
let fecha = new Date();
console.log(fecha);

//Crea una copia con una fecha correcta
//formato año-mes-dia
fecha = new Date('2003-02-15');
console.log(fecha)

//formato,año numerico,mes,dia, horas, minutos,
fecha = new Date(1996, 9, 24);
console.log(fecha)
// los meses van de 0 a 11 ( enero = 0, diciembre = 11);
//introducir un dia superior a 11, no da error, si no que empieza a contar el siguiente año
fecha = new Date(2015, 15, 29);
console.log(fecha);

//que pasa si obmitimos el mes 
fecha = new Date(2000);
console.log(fecha);

// si solo ponemos un dato, lo trata como millisegundos


//si en el año ponemos solo dos cifras, lo tratara como 19xx
fecha = new Date(91, 5, 12);
console.log(fecha);

//las fechas se guardan como millisegundos 
// 0 ms es el tiempo Zero,1 de enero de 1970 00:00UTC
//un dia (24h) son 86.400000ms
//la fecha actual es : 1716888227553 ms desde el 1 de enero de 1970
fecha = new Date(1716888227553);
console.log(fecha);
fecha = new Date(0);
console.log(fecha);
fecha = new Date(-86400000);
console.log(fecha);


//Metodos--------------

fecha = new Date('1996-june-21');
console.log(fecha.toDateString())
//toDatestring transforma la fecha en formato mas legible

console.log(fecha.toISOString());
console.log(fecha.toUTCString());
//Distintos formatos de fechas 

//Parsear fechas 
//Date.parse() convierte una fecha en un string de fecha a milisegundos

console.log(Date.parse('may 29 2024'));

console.log(new Date(1716933600000));

//--- Tomar datos del objeto fecha----
fecha = new Date(1996, 9, 24, 4);
console.log(fecha);

const dias = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
]
const meses = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'JUlio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
]
//fecha.Date() = 4
//por lo tanto, lo de abajo equivale a :
//dias [4]
console.log[dias[fecha.getDay()]];

//Fecha.getNOnth () = 9
//este numero equivale al mes de octubre
// porque empezamos a contar los meses desde 0
console.log(fecha.getMonth());

//otros metodos get (tomar)
let fechaActual = new Date();
//hora, munutos y segundos
console.log(fechaActual.getHours());
console.log(fechaActual.getMinutes());
console.log(fechaActual.getUTCSeconds());


//-----MEtodos ser ------
//se usan para establecer datos en una fecha

//calcular un dia en ms 
//1000ms * 60s * 60m * 24h
console.log(1000 * 60 * 60 * 24)

let fechaHoy = new Date();
console.log(new Date(fechaHoy - 86400000));

//18 amos en ms
///18años * 365 dias * 24h * 60m * 60s * 1000ms
let años18 = new Date((18 * 365 * 24 * 60 * 60 * 1000)
    + (4 * 24 * 60 * 60 * 1000));
console.log(años18);

//------Metodos set-----
//se usan para establecer datos en una fecha 
fecha = new Date ();

//setFullYear permite establecer el año de una fecha , tambien podemos establecer el año, mes y dia
fecha.setFullYear (2018);
console.log(fecha);

fecha.setFullYear (2002, 2, 25);
console.log(fecha);


//establecer mes o el dia dolamente 
// el mes se establece con setMonth() 0-11
//el dia del mes se establece con setDate() 1-31

fecha.setMonth(6);
fecha.setDate (8);
console.log (fecha);

//ejemplo practico
//queremos realizar una reserva en un hotel el dia 15 de agosto para 3 dias

let fechaEntrada;
let fechaSalida;

fechaEntrada = new Date ('2024-08-15');
fechaEntrada = new Date (2024, 7, 15);
console.log (fechaEntrada);

//con esto las dos fechar parten del dia 15 de agosto

fechaSalida = fechaEntrada;
//usamos setDate() para establecer el dia de la fecha de salida 
//dentro del parentesis tomamos el dia de la fecha de entrada y le sumamos 3 
fechaSalida.setDate(fechaEntrada.getDate() + 3);
console.log(fechaSalida);

//ejemplo 2  // a un trabajador se le vence el contrato el 18 de junio
//le han dicho que se lo van a renovar por 18 meses 
//calcular la nueva fecha de vencimiento usando el objeto Date()
//fecha en la que se inicia el nuevo contrato
let fechaInicio;
//fecha en la que la finaliza el nuevo contratio 
let fechaFin;

fechaInicio = new Date ('jun 18,2024');
fechaFin = fechaInicio;
fechaFin.setMonth(fechaInicio.getMonth() + 18);
console.log(fechaFin);


//ejemplo3 - alarma
let alarma =new Date ();

alarma.setHours(11);
alarma.setMinutes(20);

function saltarAlarma () {
if(alarma <= Date ()) {
    alert("Hora del descanso!!");
}

    setTimeout(saltarAlarma,1000);
}

alert('Esto es una alerta');

