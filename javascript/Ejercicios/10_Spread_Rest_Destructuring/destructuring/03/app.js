// - Tenemos un array `datosPersonales`, con el nombre, apellido, día nacimiento, mes nacimiento, año nacimiento, lugar nacimiento (respetando el orden) de una persona
// - Utilizando destructuring, obtener los datos necesarios para completar el siguiente código.

// ```js
const datosPersonales = [ 'Ada', 'Lovelace', 10, 12, 1815, 'Londres' ];

const [nombre, apellido, dia, mes, anio, lugar]= datosPersonales
// // utilizando destructuring
// // extraer las variables nombre, lugar, dia, mes, anio

console.log(`${nombre} nació en ${lugar}, el ${dia}/${mes}/${anio}.`);
// // Ada nació en Londres, el 10/12/1815.

