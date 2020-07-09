// ## Ejercicio Array 005

//   - Tenemos un array`playlist` con canciones seleccionadas al azar por spotify para reproducir.
// - Tenemos otro array`playlistEscuchada` que tiene canciones que ya escuchamos anteriormente.
// - Usando`filter`, queremos crear una nueva lista que solo contenga aquellas canciones guardadas en`playlist` que no están en`playlistEscuchada`
//   - Guarda el resultado en la variable`playlistSinEscuchar`

//     ```js
const playlist = [
  "Smells Like Teen Spirit",
  "Everlong",
  "Come As You Are",
  "The Pretender",
  "Heart-Shaped Box",
  "Learn to Fly",
  "Lithium",
];
const playlistEscuchada = ["The Pretender", "Lithium", "Come As You Are"];

playlistSinEscuchar = playlist.filter((cancion) => {
  return playlistEscuchada.indexOf(cancion) === -1;
});

/// codea aca tu solución

console.log(playlistSinEscuchar);
// deberia mostrar
// [ 'Smells Like Teen Spirit', 'Everlong', 'Heart-Shaped Box', 'Learn to Fly' ]
