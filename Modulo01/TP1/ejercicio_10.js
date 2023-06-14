/*Crear el archivo “ejercicio_10.js”. Declarar un array llamado “meses” y que tenga guardado los
meses del año. Luego el usuario debe poder ingresar en el navegador un número de 1 al 12 y este
le devolverá el nombre del mes. Por ejemplo escribe 5 debe devolver el mes mayo.
*/ 
var meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
let op=0;
op = prompt("Introduce un número del 1 al 12 para eleguir el Mes ", "0");
switch (op) {
        case "1":
            document.write("Enero");
            break;
        case "2":
            document.write("Febrero");
            break;
        case "3":
            document.write("Marzo");
            break;
        case "4":
            document.write("Abril");
            break;
        case "5":
            document.write("Mayo");
            break;
        case "6":
            document.write("Junio");
            break;
        case "7":
            document.write("Julio");
            break;
        case "8":
            document.write("Agosto");
            break;
        case "9":
            document.write("Septiembre");
            break;
        case "10":
            document.write("Octubre");
            break;
        case "11":
            document.write("Noviembre");
            break;
        case "12":
            document.write("Diciembre");
            break;
        default:
            document.write("Usted No Ingrese Un Valor Permitido, Reitentar");
}