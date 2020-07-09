// ## Eliminar propiedades

// - Crear una función que tome como argumentos un objeto y un array con strings, y devuelva el objeto sin las propiedades especificadas en el array

// ```javascript
// const data = { a: 1, b: 2, c: 3 };
// const props = ["c"];
// removeProperties(data, props); // returns  {a: 1,b: 2}
// ```
const removeProperties = (object, array) => {
  const objectCopy = Object.assign({}, object);
  const keys = Object.keys(objectCopy);
  const newObject = {};

  for (const keys in object) {
    newObject[keys] = object[keys]

    if (array.includes(keys)) {
      delete newObject[keys];
    }
  }
  return newObject;
};