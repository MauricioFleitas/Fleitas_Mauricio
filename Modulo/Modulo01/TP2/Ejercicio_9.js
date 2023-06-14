/*Crear un programa que recibe las notas de un alumno, todos los números deben ser naturales
< 11. Debe calcular el promedio. Por último imprimir en pantalla si el valor de media es < 5
“Reprobado”, entre 6 y 8 “Aprobado” y si es mayor a 8 “Sobresaliente”.*/

document.write(`</br>    `);
document.write(`</br>------Ejercicio 9------</br>`);

const notas = [];
let contador=0;
let promedio=0;
var num=0;

do {
    num = window.prompt('Ingrese Las Notas , Para finalizar ingrese -1');

    if(isNaN(num)){
       window.alert('Erro Ustede no Ingrese Un Numero');

    }else if(num != -1){
        notas.push(num);
    }
    
} while (num!=-1);
for(let i=0;i < notas.length;i++){
    contador = contador + notas[i];
}
promedio = contador/notas.length;

if(promedio<6){
    document.write(`El Alumno a Reprobado`);
}else if((promedio>=6)||(promedio<=8)){
    document.write(`El Alumno a Aprobado`);
}else if(promedio>8){
    document.write(`El Alumno a Sobresaliente`);
}else{
    document.write('Recarge la Pagina para volver a cargar notas');
}

