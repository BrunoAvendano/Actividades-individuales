function esPalindromo(cadena) {
    let cadenaSinEspacios = cadena.replace(/ /g, '').toLowerCase();
    let cadenaReversa = cadenaSinEspacios.split('').reverse().join('');
    return cadenaSinEspacios === cadenaReversa;
}
