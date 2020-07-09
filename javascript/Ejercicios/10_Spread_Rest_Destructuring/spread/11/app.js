// - Escribir la función `combinarArrays`, que toma un número variable de parámetros
// - Cada parámetro es un array
// - Combinar todos los arrays y retornar uno solo para obtener el resultado esperado
// - Utilizar Rest Operator y Spread operator

// ```js

const combinarArrays = (...arr) =>{
  newarr = []
  return(newarr.concat(...arr) )

}



// combinarArrays([1, 2], [4, 5, 6]); // [1, 2, 4, 5, 6]
// combinarArrays(['a', 'b']); // ['a', 'b']
// combinarArrays([true, false], [1, 2, 3], ['a'], [{}]) // [true, false, 1, 2, 3, 'a', {}]