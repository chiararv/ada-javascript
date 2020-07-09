// ** Chat **

//   - Crear un programa que dado una lista de nombres de usuarias separadas por espacios, muestre un mensaje con el status del chat.Las reglas son:

// - Para una usuaria, debe mostrar: `nombre usuaria + está conectada`
//   - Para dos usuarias, debe mostrar: `nombre usuaria 1 + y + nombre usuaria 2 + están conectadas`
//     - Para más de dos usuarias, debe mostrar: `nombre usuaria 1, nombre usuaria 2 + y X persona(s) más están conectadas`

const lista1 = ["vale"];
const lista2 = ["vale", "chia"];
const lista3 = ["vale", "chia", "iris", "belu", "tati"];

const usuariasConectadas = (arr) => {
  if (arr.length === 1) {
    return `${arr[0]} esta conectada`;
  }
  if (arr.length === 2) {
    return `${arr[0]} y ${arr[1]} estan conectadas`;
  }
  if (arr.length > 2) {
    return `${arr[0]}, ${arr[1]}  y ${
      arr.length - 2
    } persona/s estan conectadas`;
  }
};

console.log(usuariasConectadas(lista1));
console.log(usuariasConectadas(lista2));
console.log(usuariasConectadas(lista3));

// Ejemplo:

// ```javascript
// // Ingrese nombres de usuarias: Ada
// // Ada está conectada

// // Ingrese nombres de usuarias: Ada Grace
// // Ada y Grace están conectadas

// // Ingrese nombres de usuarias: Ada Grace Marie
// Ada, Grace y 1 persona(s) más están conectadas
