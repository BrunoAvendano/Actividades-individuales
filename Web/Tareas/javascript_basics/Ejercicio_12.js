function calcularMedianaYModa(lista) {
    // Ordenar la lista
    lista.sort((a, b) => a - b);

    // Calcular la mediana
    let mediana;
    if (lista.length % 2 === 0) {
        mediana = (lista[lista.length / 2 - 1] + lista[lista.length / 2]) / 2;
    } else {
        mediana = lista[(lista.length - 1) / 2];
    }

    // Calcular la moda
    let frecuencias = {};
    let maxFrecuencia = 0;
    let moda;
    for (let num of lista) {
        if (frecuencias[num]) {
            frecuencias[num]++;
        } else {
            frecuencias[num] = 1;
        }
        if (frecuencias[num] > maxFrecuencia) {
            maxFrecuencia = frecuencias[num];
            moda = num;
        }
    }

    return {mediana: mediana, moda: moda};
}
