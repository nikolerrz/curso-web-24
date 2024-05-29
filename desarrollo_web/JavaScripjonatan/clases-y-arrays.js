//El objetivo es cambiar los divs de color
//por un lado identificamos los divs y por otro los colores

const divs = document.getElementsByClassName("color");

const colores = ["#2471A3",  "#CA6F1E", "#2E4053", "#BB8FCE"]

divs[0].style.backgroundColor = colores[0];
divs[1].style.backgroundColor = colores[1];
divs[2].style.backgroundColor = colores[2];
divs[3].style.backgroundColor = colores[3];