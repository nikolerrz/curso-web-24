
function comprobar(event) {
    event.preventDefault();
    let nombreEmpleado = document.getElementById('empleado').value.trim();
    let resultado = document.getElementById('resultado');
    let empleados = ["Juan", "Maria", "Carlos", "Ana", "Luis", "Sofía"];





    if (nombreEmpleado === "") {
        resultado.textContent = "Por favor, introduce un nombre.";
        resultado.style.color = "red";
    } else {

        if (empleados.includes(nombreEmpleado)) {
            resultado.textContent = "El empleado " + nombreEmpleado + " está verificado.";
            resultado.style.color = "green";
        } else {
            resultado.textContent = "El empleado " + nombreEmpleado + " no está en la base de datos.";
            resultado.style.color = "red";
        }
    }
}
document.getElementById('btn').addEventListener('click', comprobar);
