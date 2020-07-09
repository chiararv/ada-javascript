// ### **Ejercicio 3**

// - Completá el código para poder unir los 3 arrays en uno solo y llegar al resultado esperado utilizando el spread operator.

// ```js
const frase0 = ['¡', 'Hola'];
const frase1 = [',', ' ', 'Mundo'];
const frase2 = ['!'];

const fraseCompleta = [...frase0, ...frase1, ...frase2]

console.log( fraseCompleta.join('') ); // ¡Hola, Mundo!