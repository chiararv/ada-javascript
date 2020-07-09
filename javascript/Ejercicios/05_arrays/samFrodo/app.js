// ** Sam y Frodo **

//   - Crear un programa que permita saber si Sam y Frodo están juntos.El programa debe permitir ingresar nombres separados por espacios, y mostrar con un mensaje si Sam se encuentra al lado de Frodo, ya sea antes o después.Ejemplo:

// ```javascript
// Ingresar nombres: Sam Frodo Legolas
// Sam y Frodo están juntos, ¡Frodo está a salvo!

// Ingresar nombres: Sam Orco Frodo
//Sam y Frodo están separados, ¡Frodo está en peligro

const juntos = ["sam", "frodo", "mabel", "chicho"];
const juntosAlReves = ["frodo", "sam", "mabel", "chicho"];
const separados = ["sam", "mabel", "chicho", "frodo"];

const estanJuntos = (array) => {
  let indiceFrodo = array.indexOf("frodo");
  let indiceSam = array.indexOf("sam");
  if (indiceFrodo === indiceSam - 1 || indiceFrodo === indiceSam + 1) {
    alert("Sam y Frodo están juntos, ¡Frodo está a salvo!");
  } else {
    alert("Sam y Frodo están separados, ¡Frodo está en peligro");
  }
};
