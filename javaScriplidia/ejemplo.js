let formulario = document.getElementById('miFormulario');

function validarFormulario(event) {
  event.preventDefault(); // Evitar el comportamiento predeterminado del formulario
  
  let nombre = document.getElementById('nombre').value;
  // Validar el nombre
  if (nombre === "") { 
    alert('Por favor ingresa un nombre válido.');
  }else{
    alert('Formulario enviado correctamente con el nombre: ' + nombre);
    formulario.submit();
  }
}

formulario.addEventListener('submit', validarFormulario);
