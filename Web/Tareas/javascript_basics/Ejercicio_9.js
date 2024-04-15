function longitudCadenaMasCorta(lista) {
    let longitudMinima = lista[0].length;
    for (let i = 1; i < lista.length; i++) {
        if (lista[i].length < longitudMinima) {
            longitudMinima = lista[i].length;
        }
    }
    return longitudMinima;
}


//let lista = ["Hola", "Mundo", "JavaScript", "es", "divertido"];
//let longitudMinima = longitudCadenaMasCorta(lista);
//console.log(longitudMinima);  
