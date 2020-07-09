// ## Ejercicio Array 006

//   - Crear un documento con el nombre arr_052.js
//     - Tenemos un array en una variable`numeros` con números al azar.
// - Utilizando`reduce` crear un nuevo array con todos los números pares y guardalo en la variable`numerosPares`

//   ```js
const masNumeros = [
  43,
  11,
  18,
  46,
  44,
  37,
  42,
  29,
  9,
  3,
  37,
  0,
  40,
  10,
  38,
  34,
  25,
  40,
  4,
  32,
];

// codea acá tu solución
const numerosPares = masNumeros.reduce((acumulador, num) => {
  if (num % 2 === 0) {
    acumulador.push(num);
  }
  return acumulador;
}, []);

console.log("pares: ", numerosPares);
// deberias tener como resultado
// pares: [18, 46, 44, 42, 0, 40, 10, 38, 34, 40, 4, 32]
