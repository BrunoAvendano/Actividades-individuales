function hackerSpeak(texto) {
    let diccionario = {'a': '4', 'e': '3', 'i': '1', 'o': '0', 's': '5'};
    let textoHacker = '';
    for (let i = 0; i < texto.length; i++) {
        let letra = texto[i].toLowerCase();
        if (diccionario[letra]) {
            textoHacker += diccionario[letra];
        } else {
            textoHacker += texto[i];
        }
    }
    return textoHacker;
}
