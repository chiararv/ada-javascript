// ## Ejercicio Array 001

//   - Tenemos un array llamado`numbers` con números enteros al azar.
// - Utilizando`reduce`, queremos calcular la suma de todos los números que están en el array.
// - Por ejemplo: Si tenemos`[1, 2, 3]`, la suma de todos los números es ** 6 **

//   ```js
// arr.reduce(callback(acumulador, valorActual[, índice[, array]])[, valorInicial])

// var notas = [1, 2, 3, 4, 10, 5];
// var sumaDeNotas = notas.reduce(function (total, nota) {
//   return total + nota;
// });

const numbers = [6, 1, 34, 94, 3, 17];

const sum2 = numbers.reduce((sum, nota) => {
  return sum + nota;
});
// codea debajo de este comentario la solucion al ejercicio

console.log(sum2);
// deberia mostrar 155
