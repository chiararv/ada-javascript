
// ### **Ejercicio 2**

// - A partir del array dado, creá un nuevo array que empiece con el elemento ‘CERO’ y termine con el elemento ‘CUATRO’

// ```js
const arrayDado = ['UNO', 'DOS', 'TRES'];

const nuevoArray =['CERO', ...arrayDado, 'CUATRO']

console.log( nuevoArray ); // ['CERO', 'UNO', 'DOS', 'TRES', 'CUATRO']