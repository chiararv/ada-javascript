// ## Ejercicio Array 003

//   - Tenemos un array llamado`notasDeTPs` con números del 1 al 10, que representan las notas de los distintos trabajos prácticos entregados por Grace Hopper en el curso de Ada.
// - Usando`reduce`, queremos calcular la nota promedio final de trabajos prácticos _(el promedio se calcula sumando todas las notas y dividiéndolo por la cantidad de notas)_.
// - Por ejemplo: Si tenemos`[7, 8, 9, 10]`, la nota final es ** 8.5 **

const notasDeTPs = [4, 7, 8, 5, 10];
const notaFinal = notasDeTPs.reduce((acumulador, nota) => {
  return acumulador + nota;
});

// codea debajo de este comentario la solucion al ejercicio

console.log(notaFinal / notasDeTPs.length);
