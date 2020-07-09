// ## Ejercicio Array 018

//   - Tenemos un array llamado`numbers` con números enteros al azar.
// - Queremos calcular la suma de todos los números que están en el array.
// - Por ejemplo: Si tenemos`[1, 2, 3]`, la suma de todos los números es ** 6 **

const numbers = [6, 1, 34, 94, 3, 17];
let sum = 0;
// solucion
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log(sum);
