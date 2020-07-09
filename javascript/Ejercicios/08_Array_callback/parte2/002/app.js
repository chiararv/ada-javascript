// ## Ejercicio Array 002

//     - Tenemos un array en una variable`librosDeJS` con una lista de libros de javascript.
// - Queremos saber la cantidad de libros que tenemos en el array
//     - Nos pidieron que evitemos usar la propiedad`length` para contar los elementos de un array y que tenemos que usar si o si un`forEach`
//         - Completá el siguiente código para que funcione el último`console.log()` y muestre el mensaje ** Mi lista de libros de JavaScript tiene 9 libros **

const librosDeJS = [
  "JavaScript for Kids: A Playful Introduction to Programming",
  "Composing Software",
  "Eloquent JavaScript: A Modern Introduction to Programming",
  "JavaScript: The Good Parts",
  "Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries",
  "Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript",
  "JavaScript: The Definitive Guide",
  "You Don’t Know JS",
  "JavaScript Allongé: The Six Edition",
];

/// ¡escribir en este espacio la solución del ejercicio!

// const totalLibros = () => {
//     let aux=
//     librosDeJS.forEach()
// }
let totalLibros = 0;
librosDeJS.forEach(() => {
  totalLibros++;
});

console.log(
  "Mi lista de libros de JavaScript tiene " + totalLibros + " libros"
);
