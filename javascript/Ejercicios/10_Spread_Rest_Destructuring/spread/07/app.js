
// - Escribir una arrow function llamada `agregarNumeroAlArray`, que recibe un número como primer parámetro y un array como segundo parámetro
// - Utilizando spread operator, la función tiene que retornar un array conteniendo los números del array pasado por parámetro y concatenarle al final el nuevo número.
// - Utilizar Spread Operator

// ```js
// ejemplo de uso
const agregarNumeroAlArray = (num, arr) =>{
  return [...arr , num]
}



console.log( agregarNumeroAlArray(1, [6, 19]) ) // [6, 19, 1]
console.log( agregarNumeroAlArray(4, [1, 2, 3]) ) // [1, 2, 3, 4]
// ```