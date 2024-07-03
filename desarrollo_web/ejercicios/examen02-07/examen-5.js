let formulario = document.getElementById('formulario');

function validarEnvio(event) {
  event.preventDefault(); 
  let nombre = document.getElementById('nombre').value;
  let edad = document.getElementById('edad').value;
  let interes = document.getElementById('interes').value;

  let nombreValido=nombre !==""; 
  let interesValido=interes !=="";
  let edadValida = Number.isInteger(parseInt(edad))&& parseInt(edad)>18; 

  if (nombreValido && interesValido && edadValida) {


    formulario.submit(); 
    
  }

  mostrarError('error-nombre',nombreValido);
  mostrarError('error-edad',edadValida);
  mostrarError('error-interes',interesValido);
  
  }


  


  function mostrarError(id,mostrar) {

    let parrafo=document.getElementById(id);
    
  

    if (mostrar) {
      parrafo.style.display='none';
      
    }

    else{
 
      parrafo.style.display='block';

    }

  }
  
  formulario.addEventListener('submit',validarEnvio);
