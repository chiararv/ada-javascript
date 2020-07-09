// - Crear la función `contarLosArgumentos`, que toma un número **variable** de parámetros y retorna la cantidad de parámetros que tiene
// - Utilizar spread Operator

// ```js

const contarLosArgumentos = (num, ...parametros) =>{
 console.log(num)
 console.log(parametros)
 return parametros.length
}

// contarLosArgumentos('uno', 'dos'); // 2
// contarLosArgumentos('uno', 'dos', 'tres', 'cuatro'); // 4
// contarLosArgumentos(5, 5, 4, 1, 32, 132, 54, 3, 4, 5, 76, 45, 23, 65, 12, 17); // 16