function mostrarHora (){
//Declarar variables para guardar la hora
//guardar fecha actual
let fecha = new Date ();

//guardar hora, minutos y segundos
let hora = fecha.getHours (); //0 -23
let minutos = fecha.getMinutes(); // 0-59
let segundos = fecha.getUTCSeconds ();//0 - 59 
let formato = "AM"


//contruir el string para mostrar la hora 
//corregir los numeros del string
if(hora > 12) {
    //camb iar el formato dependiendo de la hora
    hora = hora - 12;
    //por ejemplo, si la hora  = 13, se cambian a 1PM
    formato = "PM"};
if (hora <10) {hora = "0" + hora  };
if (minutos < 10 ) {minutos  ="0" + minutos ;
}
//variable = (condicion if) ? valor si verdadero , valor si falso 

segundos = (segundos <10) ?"0" + segundos :segundos;

let reloj = hora + ":" + minutos + ":" + segundos
 + " " + formato;

//imprimir la informacion en pantalla
//identificar el div donde vamos a meter la info
let pantalla = document.getElementById('pantalla');

//meter la infop en elñ div 
pantalla.innerHTML = reloj;
 
//actualizar la funcion y, por tanto la hora cada segundo
setTimeout(mostrarHora, 1000);
//setTimeout realiza la cuenta atras en ms , en este caso 1000 o 1 segundo
// al finalizar la cuenta atras, ejecuta la funcion que le hemos indicado 

}

mostrarHora();