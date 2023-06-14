/*El factorial de un número entero positivo se define como el producto de todos los números
naturales anteriores o iguales a él. Es decir que multiplicando todos los factores n x (n-1) x (n-2) x ... x*/ 
document.write(`</br>    `);
document.write(`</br>------Ejercicio 3------`);
var num;
var acumulador=0;
var auxiliar;

num = window.prompt("Introduce tu Numero", "...");

for(let i=0;i<num;i++){
    auxiliar=num*(num-i);
    console.log(auxiliar);
    acumulador=acumulador+auxiliar;
}

document.write(`</br> El resultado del Factorial de --${num}-- es :${acumulador}</br> `);