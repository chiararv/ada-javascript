// ## Ejercicio Array 007

//     - Tenemos un array en una variable`numeros` con números al azar.
// - Utilizando`reduce` crear un nuevo array con todos los números impares y guardalo en la variable`numerosImpares`

//     ```js
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
const numerosImpares = masNumeros.reduce((acumulador, num) => {
  if (num % 2 !== 0) {
    acumulador.push(num);
  }
  return acumulador;
}, []);

console.log("impares: ", numerosImpares);
// deberias tener como resultado
// impares: [43, 11, 37, 29, 9, 3, 37, 25]
