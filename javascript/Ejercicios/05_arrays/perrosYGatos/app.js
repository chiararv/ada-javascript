// ** Perros y gatos **

//   - Crear un programa que permita ingresar perros y gatos y devuelva un mensaje con los perros agrupados por un lado y los gatos por otro.Ejemplo:

// ```javascript
// // Ingrese perros y gatos: 🐶🐱🐶🐱🐱🐶🐶
// // Resultado: 🐶🐶🐶🐶🐱🐱🐱

const perrosYGatos = prompt(
  "ingresa emojis de 🐶 y 🐱 separados por un espacio "
).split(" ");

perrosYGatos.sort();
console.log(perrosYGatos);
