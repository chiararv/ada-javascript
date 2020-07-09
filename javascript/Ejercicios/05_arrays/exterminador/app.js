// ** Exterminador **

//   - Crear un programa que permita ingresar una lista de animales separados por espacios y devuelva un mensaje con todos los animales menos los mosquitos y alacranes.Ejemplo:

// ```javascript
// // Ingrese animales: 🐱 🐭 🐶 🦟 🦊 🦂

// // Animales sin insectos: [🐱, 🐭, 🐶, 🦊]

const animales = ["🐱", "🐭", "🦟", "🐶", "🦊", "🦂"];
const listaSinPlagas = [];

const sacarPlagas = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== "🦟" && array[i] !== "🦂") {
      listaSinPlagas.push(array[i]);
    }
    return listaSinPlagas;
  }
};

sacarPlagas(animales);
