/*Escribir un programa que reciba el número del mes y devuelva si tiene 31, 30 o menos días.
Por ejemplo: si ingreso el mes 12 el resultado debe decir tiene 31 días. */

document.write(`</br>    `);
document.write(`</br>------Ejercicio 10------</br>`);

function Mes(mes){

    switch (mes) {
        case '1':
        case '3':
        case '5':
        case '7': 
        case '8':
        case '10': 
        case '12': 
         document.write(`</br>El Mes Que Ingreso Tiene 31 Dias</br>`); 
        break;
        case '4':
        case '6':
        case '9':
        case '11':
            document.write(`</br>El Mes Que Ingreso Tiene 30 Dias</br>`); 
        break;
        case '2':
            document.write(`</br>El Mes Que Ingreso Tiene 28 Dias</br>`); 
            break;
        default:
            break;
    }
}

var mes;
mes = window.prompt("Introduce tu Numero del Mes", "...");

Mes(mes);