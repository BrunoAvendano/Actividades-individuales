function primerNoRepetido(cadena) {
    let contador = {};

    for (let i = 0; i < cadena.length; i++) {
        let char = cadena[i];
        if (contador[char]) {
            contador[char]++;
        } else {
            contador[char] = 1;
        }
    }

    for (let i = 0; i < cadena.length; i++) {
        let char = cadena[i];
        if (contador[char] === 1) {
            return char;
        }
    }

    return null;
}

let cadena = 'abacddbec';
console.log("El primer carácter no repetido es:", primerNoRepetido(cadena));
