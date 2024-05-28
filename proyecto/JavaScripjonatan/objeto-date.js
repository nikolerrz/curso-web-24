console.log ('objeto date()');

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
fecha = new Date (1996, 9, 24);
console.log(fecha)
// los meses van de 0 a 11 ( enero = 0, diciembre = 11);
//introducir un dia superior a 11, no da error, si no que empieza a contar el siguiente año
fecha = new Date (2015,15,29);
console.log(fecha);

//que pasa si obmitimos el mes 
fecha = new Date (2000);
console.log(fecha);

// si solo ponemos un dato, lo trata como millisegundos


//si en el año ponemos solo dos cifras, lo tratara como 19xx
fecha = new Date (91,5,12);
console.log(fecha);

//las fechas se guardan como millisegundos 
// 0 ms es el tiempo Zero,1 de enero de 1970 00:00UTC
//un dia (24h) son 86.400000ms
//la fecha actual es : 1716888227553 ms desde el 1 de enero de 1970
fecha = new Date (1716888227553);
console.log(fecha);
fecha = new Date (0);
console.log(fecha);
fecha = new Date (-86400000);
console.log(fecha);
