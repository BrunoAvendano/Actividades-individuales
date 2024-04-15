function bubbleSort(lista) {
    const n = lista.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (lista[i] > lista[i + 1]) {
                let temp = lista[i];
                lista[i] = lista[i + 1];
                lista[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    return lista;
}

const listaNumeros = [5, 3, 8, 1, 2];
console.log("Lista original:", listaNumeros);
const listaOrdenada = bubbleSort(listaNumeros);
console.log("Lista ordenada:", listaOrdenada);
