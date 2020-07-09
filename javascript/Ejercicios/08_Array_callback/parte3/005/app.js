// ## Ejercicio Array 005

//     - Tenemos un array en una variable`frases` con frases al azar.
// - Usar la función`map` para crear un nuevo array que contenga la longitud de cada palabra.
// - Mostrar por consola el array original y el nuevo.

// ```js
const frases = ["Labore sea dolor.", "Justo rebum dolor.", "Stet lorem amet."];

const longitudes = frases.map((frase) => {
  return frase.length;
});

// codear acá la solución del ejercicio

console.log(frases); // ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.']
console.log(longitudes); // [ 17, 18, 16 ]
