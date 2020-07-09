// ## Ejercicio Array 019

//   - Tenemos un array llamado`notasDeTPs` con números del 1 al 10, que representan las notas de los distintos trabajos prácticos entregados por Grace Hopper en el curso de Ada.
// - Queremos calcular la nota promedio final de trabajos prácticos _(el promedio se calcula sumando todas las notas y dividiéndolo por la cantidad de notas)_.
// - Por ejemplo: Si tenemos`[7, 8, 9, 10]`, la nota final es ** 8.5 **

const notasDeTPs = [4, 7, 8, 5, 10];
let notaFinal = 0;

for (let i = 0; i < notasDeTPs.length; i++) {
  notaFinal += notasDeTPs[i];
}
notaFinal = notaFinal / notasDeTPs.length;

// SOLUCION

console.log(notaFinal);
