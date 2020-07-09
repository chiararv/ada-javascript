// ## Ejercicio Array 002

// - Tenemos un array en una variable `frases` con frases al azar.
// - Usando `filter`, crear un nuevo array con las frases que tengan menos de 20 caracteres y guardarlo en la variable `frasesCortas`
// - Mostrar el array resultante

// ```js
const frases = [
  'Ut vero.',
  'Gubergren labore clita et duo accusam diam dolor. Ipsum nonumy et labore kasd lorem takimata ea sed dolor. Kasd no.',
  'Diam rebum nonumy et.',
  'Kasd stet.',
  'Sit et dolor.',
  'Est diam justo gubergren dolores et vero.',
  'Et sanctus sanctus et dolor clita.',
  'Dolores.',
  'Diam sea takimata voluptua ipsum labore voluptua kasd. At consetetur dolore diam.'
];

// codear acá la solución del ejercicio
const frasesCortas = frases.filter( frase => frase.length < 20);

console.log(frasesCortas);
// deberia mostrar
// [ 'Ut vero.', 'Kasd stet.', 'Sit et dolor.', 'Dolores.' ]