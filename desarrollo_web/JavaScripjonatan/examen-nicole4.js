// 4 escribe un programa que pida una frase y escriba cuantas veces aparece la letra a

 let fraseUsuario = prompt(" escribe una frase:");

let letraA = contarLetraA(fraseUsuario);
        console.log("La letra 'a' aparece " + letraA + " veces en la frase.");

       

        function contarLetraA(frase) {
            let conteo = 0;
            for (let i = 0; i < frase.length; i++) {
                if (frase[i].toLowerCase() === 'a') {
                    conteo++;
                }
            }
            return conteo;
        }
