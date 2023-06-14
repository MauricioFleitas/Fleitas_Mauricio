##Trabajo Prectico N°1##


1. Ejercicio 1:
a) Crear una carpeta con la siguiente nomenclatura: “TP1_Apellido_Nombre”
(Ej: TP1_Lopez_Jose).
b) Dentro de dicha carpeta, crear un archivo llamado index.html y pegar el siguiente código
en su interior:
Dentro de la misma carpeta, se irán creando otros 10 archivos con la extensión “.js”, cada
uno de estos archivos corresponderá a uno de los ejercicios que se les presentará más
adelante en este trabajo. Por ejemplo, el ejercicio N°5 deberá ser guardado en el archivo
“ejercicio_5.js”.
c) Crear el primer archivo llamado “ejercicio_1.js” y pegar el siguiente texto en su interior:
d) agregar un comentario debajo que explique que hace esa primer linea de código.


2. Ejercicio 2:
Copiar el siguiente código dentro de un archivo, luego guardarlo con el nombre: “ejercicio_2.js”.
Para poder ejecutarlo en el navegador, deberá cambiar el contenido del archivo index.html donde dice:
<script src="ejercicio_1.js"></script> por
<script src="ejercicio_2.js"></script>
<!DOCTYPE html>
<html>
<head>
 <script src="ejercicio_1.js"></script>
</head>
</html>
document.writeln("Hola Mundo!");
let A, B;
A = 9;
B = 7;
resultado = A + B;
alert (`La suma de A+B es: ${resultado}`);
alert (`La diferencia de A-B es: ${A-B}`);
alert (`La multiplicación de AxB es: ${A*B}`);
alert (`La división de A/B es: ${resultado=A/B}`);


3. Ejercicio 3:
Copiar el siguiente código dentro de un archivo, luego guardarlo con el nombre: “ejercicio_3.js”.


4. Ejercicio 4:
Copiar el siguiente código dentro de un archivo, luego guardarlo con el nombre: “ejercicio_4.js”.


5. Ejercicio 5:
Copiar el siguiente código dentro de un archivo, luego guardarlo con el nombre: “ejercicio_5.js”. Sin
embargo, dicho código tiene un error, para corregirlo se debe depurar el código en el navegador.


6. Ejercicio 6:
Crear un array llamado “dias” y que almacene el nombre de los siete días de la semana. Mostrar por
pantalla los siete nombres utilizando la función console.log().
const A = "Hola";
let B = " mundo!";
document.write("Constante A contiene " + A );
document.write("</br>");
document.write("Variable B contiene " + B );
document.write("</br>");
document.write(A + B );
document.write("</br>");
document.write("La etiqueta BR es un salto de linea");
document.write("</br>");
document.write("El signo '+' sirve para concatenar cadenas de texto");
let num1=0;
let num2=0;
num1 = num1 + 3;
num2 = num2 + 7;
alert (`El primer numero ahora es ${num1} `);
alert (`El segundo numero ahora es ${num2} ` );
let a, b;
a = 3; b = 7;
resultado = a * b;
document.write(`Variable a contiene ${a} <br> ` );
document.write(`Variable b contiene ${b} <br> ` );
document.write(`El producto de a por b es ${result} <br> `);
document.write("Los puntos de interrupcion son fundamentales para
programar");


7. Ejercicio 7:
Crear el archivo correspondiente a “ejercicio_7.js”, Ejecutarlo y luego agregar lineas de comentario
explicando que hace el programa.
let dato, resultado;
val1 = window.prompt("Introduce tu nombre", "...");
val2 = window.prompt("Introduce tu apellido", "...");
resultado = `Concatenado tu nombre y apellido es: ${val1} ${val2} ` ;
document.write(resultado);



8. Ejercicio 8:
Copiar el siguiente código dentro de un archivo “ejercicio_8.js” y ejecutar el programa en el navegador.
let val1, val2, num1, num2;
val1 = prompt("Introduce primer número ?", "0");
num1 = parseInt(val1);
val2 = prompt("Introduce segundo número ?", "0");
num2 = parseInt(val2);
let resultado = num1 + num2;
document.write(`<br/> <br/> La suma es ${resultado} ` );
// El método parseInt analiza un valor como una cadena y devuelve el
primer entero. https:
//www.w3schools.com/jsref/jsref_parseint.asp


9. Ejercicio 9:
Crear el archivo “ejercicio_9.js”. Declarar un array llamado “vocales” con las 5 letras. Luego se
deben imprimir en el navegador uno debajo de otro.


10. Ejercicio 10:
Crear el archivo “ejercicio_10.js”. Declarar un array llamado “meses” y que tenga guardado los
meses del año. Luego el usuario debe poder ingresar en el navegador un número de 1 al 12 y este
le devolverá el nombre del mes. Por ejemplo escribe 5 debe devolver el mes mayo.
