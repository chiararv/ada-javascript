// ## Filtrar propiedades

// - Crear una función que tome como argumentos un objeto y un array con strings, y devuelva el objeto con solo las propiedades especificadas en el array

// ```javascript
// const data = { a: 1, b: 2, c: 3 };
// const props = ["c", "b"];
// filterProperties(data, props); // returns {b: 2, c: 3}
// ```

const filterProperties = (objeto, array) => {
  const objetoNuevo = {};
  for (const keys in objeto) {
    if (array.includes(keys)) {
      objetoNuevo[keys] = objeto[keys];
    }
  }
  return objetoNuevo;
};
