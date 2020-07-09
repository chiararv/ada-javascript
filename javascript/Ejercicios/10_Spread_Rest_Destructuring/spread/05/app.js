// ### **Ejercicio 5**

// - Completá el siguiente código para llegar al resultado esperado (respetar orden).
// - Tengo un objeto con propiedades que representa una alumna
// - Las propiedades que contiene son: `nombre` y `apellido`
// - Queremos agregar la propiedad `sabeJS` con valor `true`, y la propiedad `edad` con el valor `27`
// - La propiedad `sabeJS` queremos que esté al principio y la propiedad `edad` al final


const estudianteJS = (estudiante) => {
 const nuevoObj = {   
  sabeJs: true,
  ...estudiante,
  edad: 27,
}

  return nuevoObj
}

console.log(estudianteJS(estudiante));
// { sabeJS: true, nombre: 'Ada', apellido: 'Lovelace', edad: 27 }