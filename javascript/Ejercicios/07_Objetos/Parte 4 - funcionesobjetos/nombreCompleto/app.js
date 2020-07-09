// - Tenemos una variable `persona`, con la información de perfil de una persona en GMail
// - Necesitamos crear una función `obtenerNombreCompleto` que reciba un objeto por parámetro (con las mismas propiedades que el objeto que tenemos guardado en `persona`) y nos devuelva un string con el nombre completo (nombre + apellido)

// ```js
const persona = {
  nombre: 'Grace',
  apellido: 'Hopper',
  email: 'grace.hopper@gmail.com',
  plan: 'premium'
};

// // CODEA ACA LA SOLUCION
const obtenerNombreCompleto = (objeto) => {
  console.log(objeto.nombre," ",objeto.apellido);
};
obtenerNombreCompleto(persona); 