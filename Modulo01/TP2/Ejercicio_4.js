/*Escribir el código de una función a la que se pasa como parámetro un número entero y
devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por
pantalla el resultado devuelto por la función.
Por ejemplo si ingresara un dos el resultado debe ser par y si ingresara un 5 el resultado
debe ser impar*/
function par (num){
    if(num%2==0){
        document.write(`</br>El Numero --${num}-- es Par</br>`);

    }else{
        document.write(`</br>El Numero --${num}-- es Impar</br>`);
    }
}

document.write(`</br>    `);
document.write(`</br>------Ejercicio 4------`);
var num;
num = window.prompt("Introduce tu Numero", "...");
par(num);
