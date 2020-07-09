// ## Ejercicio Array 004

//     - Tenemos un array llamado`numbers` con números enteros al azar.
// - Queremos calcular la suma de todos los números que están en el array.
// - Por ejemplo: Si tenemos`[1, 2, 3]`, la suma de todos los números es ** 6 **
//     - Es necesario utilizar`forEach` para conseguir la suma

const numbers = [6, 1, 34, 94, 3, 17];
let sum = 0;

// codea debajo de este comentario la solucion al ejercicio
numbers.forEach((num) => {
  sum += num;
});

console.log(sum);
// deberia mostrar 155
