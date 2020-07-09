// ## Ejercicio Array 005

//   - Tenemos un array llamado`numeros` con números enteros al azar.
// - Utilizando`reduce`, queremos crear un nuevo array con todos los números, pero eliminando aquellos que estén repetidos.
// - Por ejemplo: Si tenemos`[1, 4, 3, 2, 4]`, el nuevo array sería`[1, 4, 3, 2]`

//   ```js
const numeros = [5, 1, 7, 12, 5, 2, 9, 0, 11, 9, 11];

// codea debajo de este comentario la solucion al ejercicio
const sinRepetidos = numeros.reduce((acumulador, num) => {
  if (acumulador.indexOf(num) === -1) {
    acumulador.push(num);
  }
  return acumulador;
}, []);

console.log(sinRepetidos);
// deberia mostrar [ 5, 1, 7, 12, 2, 9, 0, 11 ]

// playlistSinEscuchar = playlist.filter((cancion) => {
//   return playlistEscuchada.indexOf(cancion) === -1;
// });

var numeros = [1, 2, 3, 5, 9, 11, 12, 14, 18];

var multiploDe3 = numeros.reduce(function (multiplosAcumulados, numero) {
  // solo si el numero es multiplo de 3, lo agrego al array acumulador
  if (numero % 3 === 0) {
    multiplosAcumulados.push(numero);
  }

  return multiplosAcumulados;
}, []); // este array vacio, es el primer valor que va a tomar nuevas variable acumuladora, que en este ejemplo se llama multiplosAcumulados

console.log(multiploDe3); // [ 3, 9, 12, 18 ]
