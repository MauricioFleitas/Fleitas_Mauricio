/*Escribir un script que muestre la posición de la primera vocal de un texto introducido por
teclado. Por ejemplo: perro = “e” es la letra Nº2 ; árbol = “a” es la letra Nº1.  */
document.write(`</br>    `);
document.write(`</br>------Ejercicio 6------</br>`);

var cadena;
cadena = window.prompt("Introduce tu String", "...");
var n = cadena.length;

document.write(`</br>---${cadena}---</br>`);
document.write(`</br> La Primera Letra del string es:${cadena.substring(cadena,1,n)}</br> `);
document.write(`</br> La Primera Letra del string es:${cadena.slice(-1)}</br> `);