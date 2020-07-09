// - Crear un programa que permita ingresar dos listas de valores separados por espacio y muestre en un mensaje si las listas son iguales o no(mismos valores en mismo orden).Ejemplo:

// ```javascript
// // Ingrese valores de lista 1: 10 25 6 33 48 105
// // Ingrese valores de lista 2: 10 24 6 33 48 105

// // Las listas no son iguales
// ```

const primerArray = [1, 2, 3, 4, 5];
const segundoArray = [1, 2, 3, 8, 5, 6];
let iguales = true;

const igualLargo = () => {
  if (primerArray.length !== segundoArray.length) {
    alert("Los array no son iguales. Tienen distinta longitud.");
  }
};
igualLargo();

const sonIguales = () => {
  for (let i = 0; i < primerArray.length; i++) {
    if (primerArray[i] !== segundoArray[i]) {
      iguales = false;
      break;
    }
  }
  const msj = iguales ? "son iguales" : "No son iguales";
  alert(msj);
};
sonIguales();
// const sonIguales = () => {
//     for (let i = 0; i < primerArray.length; i++) {
//         if (primerArray[i] === segundoArray[i]) {
//             continue;
//         } else {
//             alert("No son iguales");
//             break;
//         }
//     }
//     alert("son iguales");
// };
