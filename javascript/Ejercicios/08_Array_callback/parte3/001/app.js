// ## Ejercicio Array 001

//   - Tenemos un array en una variable`numeros` con números al azar.
// - Usá la función`map` para crear un nuevo array incrementando cada valor del array en 10, y guardarlo en la variable`numerosMasDiez`
//   - Mostrar por consola el array original y el nuevo


const numeros = [1, 2, 3, 4, 5];

const numerosMasDiez;

// codear acá la solución del ejercicio
const numerosMasDiez = numeros.map((num) => {
  return num + 10;
})


console.log(numeros); // [1, 2, 3, 4, 5]
console.log(numerosMasDiez); // [11, 12, 13, 14, 15]
