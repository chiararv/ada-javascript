
// - La función Math.max() recibe varios números (distintos parámetros) y retorna el más alto.
// - ¿Cómo modificarías el siguiente código para que funcione con distintos arrays sin tener que estar todo el tiempo usando los índices?

// ```js


const tresNums = [9, 4, 7];
console.log( Math.max(...tresNums) ); // 9
// console.log( Math.max(tresNums) ); // NaN

const masNums = [5, 5, 4, 1, 32, 132, 54, 3, 4, 5, 76, 45, 23, 65, 12, 17];
console.log( Math.max(...masNums) ); // NaN, y debería ser 132