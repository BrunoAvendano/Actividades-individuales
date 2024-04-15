function mayusculas(texto) {
    let palabras = texto.split(' ');
    for (let i = 0; i < palabras.length; i++) {
        palabras[i] = palabras[i][0].toUpperCase() + palabras[i].substr(1);
    }
    return palabras.join(' ');
}
