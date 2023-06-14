/*Crea una función que genere 100 números aleatorios entre 1 y 100 que no se repitan y luego
imprima por pantalla usando document.write(). */

document.write(`</br>    `);
document.write(`</br>------Ejercicio 8------</br>`);

function repetidos(numero) {
    let newNumero;
    while (!newNumero || numero.includes(newNumero)) {
        newNumero = Math.floor((Math.random() * 100) + 1);
    }
    return newNumero;
}


function azar() {
    var numero = [];
    while (numero.length !== 100) {
        const n = repetidos(numero);
        numero.push(n);
    }
    return numero;
}

document.write(`</br>_${azar()}_</br>`);

azar();