// ## Ejercicio Array 002

//     - Tenemos un array en una variable`numeros` con números al azar.
// - Usar la función`map` para crear un nuevo array multiplicando cada valor del array por 2, y guardarlo en la variable`dobles`
//     - Mostrar por consola el array original y el nuevo

//         ```js
const numeros = [3, 7, 13, 99];
const dobles = numeros.map((num) => {
  return num * 2;
});

// codear acá la solución del ejercicio

console.log(numeros); // [3, 7, 13, 99]
console.log(dobles); // [6, 14, 26, 198]
