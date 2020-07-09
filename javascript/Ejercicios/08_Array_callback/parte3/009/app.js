// ## Ejercicio Array 009

//     - Tenemos un array en una variable`costos` con números que representan costos de diferentes productos.
// - También tenemos un array en una variable`productos` con los nombres de cada producto.
// - Completar el siguiente código para llegar al resultado esperado
//     - A un costo primero se le agrega la ganancia y después el IVA
//         - El nombre de un producto en una posición, se corresponde con el precio que está en la misma posición.Por ejemplo: el producto que está en la posición ** 1 ** tiene un costo igual al elemento en la posición ** 1 ** del array`costos`

const productos = ["celular", "notebook", "monitor"];
const costos = [12.5, 56, 98];

const agregarIVA = function (costo) {
  return costo * 1.21;
};

const sumarGanancia = function (costo) {
  return costo * 1.5;
};

const preciosConIva = costos.map(agregarIVA);
const preciosFinales = preciosConIva.map(sumarGanancia);

// const productoConPrecio = preciosFinales.map((precio) => {
//   return productos.forEach((producto) => {
//     return producto + " " + precio;
//   });
// });

let element = "";
productos.map((producto, indice) => {
  element += `${producto}: ${preciosFinales[indice]} \n`;
});
console.log(element);

// codear acá la solución del ejercicio

// console.log(productoConPrecio);
// deberia mostrar
// [ "celular 22.6875", "notebook 101.64", "monitor 177.87" ]
