// ## Ejercicio Array 008

//     - Tenemos un array en una variable`costos` con números que representan costos de diferentes productos.
// - Completar el siguiente código para llegar al resultado esperado
//     - A un costo primero se le agrega la ganancia y después el IVA

//         ```js
const costos = [12.5, 56, 98, 45.75];

const agregarIVA = function (costo) {
  return costo * 1.21;
};

const sumarGanancia = function (costo) {
  return costo * 1.5;
};

const preciosConIva = costos.map(agregarIVA);
const preciosFinales = preciosConIva.map(sumarGanancia);

// codear acá la solución del ejercicio

console.log(preciosFinales);
// deberia mostrar
// [ 22.6875, 101.64, 177.87, 83.03625 ]
