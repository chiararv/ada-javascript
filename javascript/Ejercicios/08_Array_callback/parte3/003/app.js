// ## Ejercicio Array 003

//     - Tenemos un array en una variable`frases` con frases al azar.
// - Usar la función`map` para crear un nuevo array donde cada frase empiece y termine con signo de exclamación.
// - Mostrar por consola el array original y el nuevo

//     ```js
const frases = ["Labore sea dolor.", "Justo rebum dolor.", "Stet lorem amet."];

const frasesExclamadas = frases.map((frase) => {
  return "¡" + frase + "!";
});

// codear acá la solución del ejercicio

console.log(frases); // ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.']
console.log(frasesExclamadas); // [ '¡Labore sea dolor.!', '¡Justo rebum dolor.!', '¡Stet lorem amet.!' ]
