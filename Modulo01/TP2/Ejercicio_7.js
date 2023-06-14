//Escribir una función que reciba un texto y lo devuelva al revés.

document.write(`</br>    `);
document.write(`</br>------Ejercicio 7------</br>`);

function alreves (cadena){
    let n=cadena.length;
    for(let i=n-1;i>=0;i--){
        document.write(cadena[i]);
    }
}


var cadena;
cadena = window.prompt("Introduce tu String", "...");

alreves(cadena);