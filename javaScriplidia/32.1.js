// Crea un array que contenga ["patata", "lechuga", "tomate", "berenjena", "batata", "maíz"]. Pide al usuario que escriba un ingrediente de ensalada y determina si se encuentra en el array o no.
function buscarIngrediente() {
    let ingredientes = ["patata", "lechuga", "tomate", "berenjena", "batata", "maíz"];
    let ingrediente = document.getElementById("ingrediente").value.toLowerCase();
    let resultado = "";

    if (ingredientes.includes(ingrediente)) {
        resultado = "El ingrediente se encuentra en la lista.";
    } else {
        resultado = "El ingrediente no se encuentra en la lista.";
    }

    document.getElementById("resultado").innerText = resultado;
}