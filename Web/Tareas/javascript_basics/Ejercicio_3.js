// Función para invertir un arreglo y devolver un nuevo arreglo
function invertirArregloNuevo(arreglo) {
    const nuevoArreglo = [];
    for (let i = arreglo.length - 1; i >= 0; i--) {
        nuevoArreglo.push(arreglo[i]);
    }
    return nuevoArreglo;
}

// Función para invertir un arreglo modificando el mismo arreglo pasado como argumento
function invertirArregloModificado(arreglo) {
    const n = arreglo.length;
    for (let i = 0; i < Math.floor(n / 2); i++) {
        // Intercambiar elementos simétricos
        const temp = arreglo[i];
        arreglo[i] = arreglo[n - 1 - i];
        arreglo[n - 1 - i] = temp;
    }
}

// Ejemplo de uso
const arregloOriginal = [1, 2, 3, 4, 5];
console.log("Arreglo original:", arregloOriginal);

// Usando la primera función
const nuevoArreglo = invertirArregloNuevo(arregloOriginal);
console.log("Nuevo arreglo invertido (sin modificar el original):", nuevoArreglo);

// Usando la segunda función
invertirArregloModificado(arregloOriginal);
console.log("Arreglo original invertido (modificado):", arregloOriginal);
