// ## Ejercicio Array 002

//   - Utilizando`reduce`, queremos calcular la multiplicación de todos los números que están en el array.
// - Por ejemplo: Si tenemos`[1, 2, 3, 4]`, la suma de todos los números es ** 24 **
//   - Ayuda: ojo con el valor de comienzo

//     ```js
const numbers = [6, 1, 34, 94, 3, 17];
const valorMultiplicado = numbers.reduce((mul, number) => {
  return mul * number;
});

// codea debajo de este comentario la solucion al ejercicio

console.log(valorMultiplicado);
// deberia mostrar 977976
