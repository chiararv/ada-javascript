// ## Ejercicio Array 006

//     - Tenemos un array en una variable`playlist` con una lista de canciones de un disco.
// - Usar la función`map` para agregar a cada título de la canción el número de posición en la que está dentro del array.

// ```js
const playlist = ["Everlong", "The Pretender", "Learn to Fly"];

const indiceCanciones = playlist.map((cancion, indice) => {
  return `${indice} - ${cancion}`;
});

console.log(indiceCanciones);
/// completá acá el código

// RESULTADO ESPERADO
// [ '0 - Everlong', '1 - The Pretender', '2 - Learn to Fly' ]
