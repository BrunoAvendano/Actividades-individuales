function ordenDescendente(lista) {
    let listaOrdenada = lista.slice();
    listaOrdenada.sort((a, b) => b - a);
    return listaOrdenada;
}
