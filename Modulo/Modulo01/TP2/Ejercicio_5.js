/*Crear una función que muestre información sobre una cadena de texto que se le pasa como
argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada
sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.*/

function información (cadena){
   
    if(cadena==cadena.toLowerCase()){
        document.write(`</br>La Cadena :|${cadena}| Esta Cumpuesta de solo Minúsculas</br>`);
    }
    if(cadena==cadena.toUpperCase()){
        document.write(`</br>La Cadena :|${cadena}| Esta Cumpuesta de solo Mayusculas</br>`);
    }
    if(cadena!=cadena.toLowerCase() && cadena!=cadena.toUpperCase()){
        document.write(`</br>La Cadena :|${cadena}| Esta Cumpuesta de Minusculas y Mayusculas</br>`);
    }
}

document.write(`</br>    `);
document.write(`</br>------Ejercicio 5------</br>`);
var cadena
cadena = window.prompt("Introduce tu String", "...");
información(cadena);