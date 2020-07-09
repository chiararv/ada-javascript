// - Crear un programa que dado un array 2d de números, indique cuál es el mayor de ellos. El array debe estar guardado en una variable (no hace falta ingresarlo). Array de ejemplo:

const numeros = [
  [2, 7, 12, 1],
  [8, 23],
  [9, 45, 7],
  [22, 3, 24, 4],
];

const mayorDeUnArray = (array) => array.reduce((numMayor, numero) => {
  numMayor = numMayor > numero
    ? numMayor
    : numero;
  return numMayor;
});

const numeroMasGrande = (arrayDeArrays) => {
  let numMasGrandeDeTodos = 0;
  arrayDeArrays.forEach(array => {
    numMasGrandeDeTodos = numMasGrandeDeTodos > mayorDeUnArray(array) ? numMasGrandeDeTodos : mayorDeUnArray(array);
  });
  return numMasGrandeDeTodos;
}