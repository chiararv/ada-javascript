
// - Crear un programa que dado un array 2d de números, indique cuál es la suma de una de sus columnas. El programa debe dar la posibilidad de ingresar qué columna se desea elegir. El array debe estar guardado en una variable (no hace falta ingresarlo). Ejemplo:

const numeros = [
  [2, 7, 12, 1],
  [8, 23],
  [9, 45, 7],
  [22, 3, 24, 4],
];
let columnaElegida = 2;
const agarrarNumeroASumar = (arrayDeArrays, columnaElegida) => {
  let sumaDeNumeros = 0;
  arrayDeArrays.forEach(element => {
    sumaDeNumeros = (element[columnaElegida] !== undefined) ? sumaDeNumeros + element[columnaElegida] : sumaDeNumeros;
    console.log()
  });
  return sumaDeNumeros;
}

