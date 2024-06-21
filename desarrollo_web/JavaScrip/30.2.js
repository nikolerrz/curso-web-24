// Al hacer clic en un botón, mostrar la fecha y hora actual en un párrafo.
function showDateTime() {
    const now = new Date();
    const dateTimeString = now.toLocaleString('es-ES', {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
        hour: 'numeric', minute: 'numeric', second: 'numeric'
    });
    document.getElementById('datetime').textContent = dateTimeString;
}