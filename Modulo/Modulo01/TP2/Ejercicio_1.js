//1. Determinar cuál de los “elementos de texto” es mayor, es decir el que contenga más letras.
//2. Imprimir estos elementos de menor a mayor cantidad de letras
//3. Determinar el resultado de las cuatro operaciones matemáticas básicas (suma, resta,
//   multiplicación y división) realizadas con los dos elementos numéricos

//deje solo los tipos Char dentro de valores 
var valores = [true, false, 2, "hola", "mundo", 3, "char"];
var caracter =[0,0,0];
var numeros =[0,0];
var max=0;
let nombre=null;
let aux=0;
let suma;
let resta;
let multiplicación;
let división;

document.write(`</br>    `);
document.write(`</br>------Ejercicio 1------`);

//En Caracteres Pongo Todos los valores que sean Char
caracter[0]=valores[3];
caracter[1]=valores[4];
caracter[2]=valores[6];

for(let i=0;i<caracter.length;i++){
 console.log(caracter[i]);
}
console.log("---Ordenados quedan: ---");

//Recorer la string Caracteres y Oredena con

//Burbuja de a Pares
for(let i=0;i<caracter.length;i++){
    for(let j=i+1;j<caracter.length;j++){
        if(caracter[i]>caracter[j]){
            aux=caracter[i];
            caracter[i]=caracter[j];
            caracter[j]=aux;
        }
    }

}
for(let i=0;i<caracter.length;i++){
    console.log(caracter[i]);
}
console.log("-------------------------");

// En Numeros pongo Todos los valores que sean Enteros
numeros[0]=valores[2];
numeros[1]=valores[5];

for(let i=0;i<numeros.length;i++){
 console.log(numeros[i]);
}
console.log("-------------------------");

suma=numeros[0]+numeros[1];
resta=numeros[0]-numeros[1];
multiplicación=numeros[0]*numeros[1];
división=numeros[0]/numeros[1];
document.write(`</br> El resultado de la Suma fue:${suma}</br> El resultado de la Resta fue:${resta}</br> El resultado de la Multiplicacion fue:${multiplicación}</br> El resultado de la Divicion fue:${división}</br>`)

//Recorer la string y hace lo que pide el punto 1
for (let i=0;i<valores.length;i++){
      console.log(valores[i]);
    if(valores[i].length>max){
        max=valores[i].length;
        nombre=valores[i];
    }   
}
 console.log("-------------------------");
 console.log(max);
 console.log(nombre);
 console.log("-------------------------");
 document.write(`</br>    `);
 document.write(`El Que continene Mas letras es -${nombre}- con un Total de -${max}- letras`);