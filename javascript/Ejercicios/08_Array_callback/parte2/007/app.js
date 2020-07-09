// ## Ejercicio Array 007

//     - Tenemos un array en una variable`valores` con números al azar.
// - También tenemos un array vacio en la variable`dobles`.
// - Recorré el array`valores`(** utilizando forEach **) y guardá, en el mismo orden, cada número pero multiplicándolo por 2.
//     - Por ejemplo: Si tenemos`[1, 4, 7]`, `dobles` quedaría`[2, 8, 14]`

const valores = [6, 0, 5, 2, 3, 8, 7, 4, 1, 9];
const dobles = [];

// codea aca tu solución al ejercicio
valores.forEach((num) => {
  dobles.push(num * 2);
});

console.log("valores: ", valores);
console.log("dobles: ", dobles);
// deberias tener como resultado
// valores:  [ 6, 0, 5, 2, 3, 8, 7, 4, 1, 9 ]
// dobles:  [ 12, 0, 10, 4, 6, 16, 14, 8, 2, 18 ]
