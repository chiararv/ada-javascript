
// - Utilizando destructuring, debemos extraer la propiedad nombre de cada objeto y crear un array en la variable nombres con los 3 nombres que obtuvimos de cada persona.
// - 💡 Pista: vamos a tener que crear una variable para cada nombre

// ```js
const persona1 = { nombre: 'Ada', apellido: 'Lovelace', edad: 35 };
const persona2 = { nombre: 'Grace', apellido: 'Hopper', edad: 25 };
const persona3 = { nombre: 'Hedy', apellido: 'Lamarr', edad: 45 };

const {nombre: nombre1} = persona1;
const {nombre: nombre2} = persona2;
const {nombre: nombre3} = persona3;

const nombres = [nombre1, nombre2, nombre3];

console.log( nombres );
// // [ 'Ada', 'Grace', 'Hedy' ]
