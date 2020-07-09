// ## Ejercicio Array 005

//     - Tenemos un array llamado`notasDeTPs` con números del 1 al 10, que representan las notas de los distintos trabajos prácticos entregados por Grace Hopper en el curso de Ada.
// - Queremos calcular la nota promedio final de trabajos prácticos _(el promedio se calcula sumando todas las notas y dividiéndolo por la cantidad de notas)_.
// - Por ejemplo: Si tenemos`[7, 8, 9, 10]`, la nota final es ** 8.5 **
//     - Es obligatorio utilizar`forEach` para conseguir el promedio

const notasDeTPs = [4, 7, 8, 5, 10];
let cantidadNotas = 0;
let notaFinal = 0;

// codea debajo de este comentario la solucion al ejercicio
notasDeTPs.forEach((nota) => {
  cantidadNotas++;
  notaFinal += nota;
});

console.log(notaFinal / cantidadNotas);
// deberia mostrar 6.8
