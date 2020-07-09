// ** Germinación **

//   - Crear un programa que permita ingresar una lista de flores y plantines(🌱).La lista debe comenzar con una flor, si no lo hace debe mostrar un mensaje de error.El programa debe convertir los plantines en flores, tomando como referencia la primera flor que encuentre a su izquierda.Ejemplo:

// ```javascro[t
// // Ingrese flores y plantines: 🌷🌱🌱🌱🌻🌱🌱🌸🌱🌱🌱🌱
// // ¡Las flores han germinado!: 🌷🌷🌷🌷🌻🌻🌻🌸🌸🌸🌸🌸

const floresPlantines = [
  "🌷",
  "🌱",
  "🌱",
  "🌱",
  "🌻",
  "🌱",
  "🌱",
  "🌸",
  "🌱",
  "🌱",
  "🌱",
  "🌱",
];

const germinado = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] === "🌱" ? arr[i - 1] : arr[i];
  }
  return arr;
};

const comienzaConFlor = (arr) => {
  if (arr[0] === "🌱") {
    return "Error";
  } else {
    return germinado(arr);
  }
};

console.log(comienzaConFlor(floresPlantines));

// const floresPlantines = ["🌱", "🌱", "🌱", "🌱", "🌻", "🌱", "🌱", "🌸", "🌱", "🌱", "🌱", "🌱"];

// const germinar = (array) => {
//   for (let i = 0; i < array.length; i++) {
//     array[i] = (array[i] === "🌱") ? array[i - 1] : array[i];
//   }
//   return array;
// }

// const hacerGerminación = (array) => {
//   if (array[0] !== "🌱") {
//     return germinar(array);
//   } else {
//     return "Error";
//   }
// }

// console.log(hacerGerminación(floresPlantines))
