// - Crear un programa que pida ingresar 🍎, 🍐y 🍑 y devuelva un mensaje con la cantidad que hay de cada una.Ejemplo:

// ```
// // Ingrese frutas: 🍎🍎🍐🍑🍎🍑

// // Hay 3 🍎, 1 🍐 y 2 🍑

const frutas = ["🍎", "🍎", "🍐", "🍑", "🍎", "🍑"];

const cantidadDeFrutas = [];
let manzanas = 0;
let peras = 0;
let duraznos = 0;

for (let i = 0; i < frutas.length; i++) {
  if (frutas === "🍎") {
    manzanas++;
  } else if (frutas === "🍐") {
    peras++;
  } else {
    duraznos++;
  }
}
