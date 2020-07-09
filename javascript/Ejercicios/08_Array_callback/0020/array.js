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
const numerosPares = [];
const numerosImpares = [];

// for (let i = 0; i < masNumeros.length; i++) {

//    isOdd(masNumeros[i]) ? numerosImpares.push(masNumeros[i]) : numerosPares.push(masNumeros[i]);

// }
for (let i = 0; i < masNumeros.length; i++) {
  masNumeros[i] % 2
    ? numerosImpares.push(masNumeros[i])
    : numerosPares.push(masNumeros[i]);
}

// SOLUCION

console.log("pares: ", numerosPares);
console.log("impares: ", numerosImpares);
