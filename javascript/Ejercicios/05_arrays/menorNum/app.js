// **Menor número**

// - Crear un programa que pida ingresar números separados por espacios y devuelva un mensaje con el menor número ingresado. Ejemplo:

// ```javascript

const arrayString = prompt(
  "Ingrese diferentes numeros separados por espacios"
).split(" ");
const arrayNumeros = arrayString.map((numero) => {
  return Number(numero);
});
console.log(arrayNumeros);

let numActual = arrayNumeros[0];
const menorNumero = arrayNumeros.forEach((numero) => {
  numActual = numActual < numero ? numActual : numero;
});
console.log(numActual);

// const menorNumero = (array) => {
//   let numActual = array[0];
//   for (let i = 0; i < array.length; i++) {

//     numActual = numActual < array[i] ? numActual : array[i];

//   }
//   return numActual;
// };
// console.log(menorNumero(arrayNumeros))
