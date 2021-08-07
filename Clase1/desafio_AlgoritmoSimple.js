/* ------------------------ Desafio Crear Algoritmo Simple ------------------------ */
//Recibe dos valores por prompt y devuelve lka suma de ambos

let dato1 = prompt("Desafio Algoritmo simple Suma de dos Números: \n ingresa primer número");
let dato2 = prompt("Desafio Algoritmo simple Suma de dos Números: \n ingresa segundo número");
//Se parsea los valores recibidos de tipo string, a numero entero
let num1 = parseInt(dato1);
let num2 = parseInt(dato2);

//funcion que devuelve la suma de ambos valores

let suma = num1 + num2;
alert(`Desafio Algoritmo simple Suma de dos Números: \n La suma es ${suma}`);


/* --------------- Desafio Crear Algoritmo con un Condicional --------------- */

let valor = prompt(
  "Desafio Condicional: comprobación de valor ingresado:\n Ingresa un valor para evaluar si es número"
);
if (isNaN(valor)) {
  alert(`El valor no es número: ${valor}`);
} else {
  alert(`El valor es un número: ${valor}`);
}
