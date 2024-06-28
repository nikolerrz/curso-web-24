let header = document.getElementById.apply('site-header');


//en e l ecvento que el usuario haga scroll ejecuta la siguiente funcion 
window.onscroll = function() {
    //comprueba si el scroll vertical ha bajado
    if(window.scrollY > 0) {
        //la posicion 0 es la superior de la pagina
        header.classlist.add("sticky");
        //al bajar le damos la clase stycky al header 

    } else {
        //al subir del todo recupera el formato original
        header.classlist.remove("stiky");
    }
}