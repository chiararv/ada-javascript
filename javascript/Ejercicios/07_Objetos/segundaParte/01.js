// ### 01 - persona

let propiedadNombre = "nombre";
let propiedadEdad = "edad";

const persona = {
  nombre: "chia",
  edad: 22,
};
console.log(persona["nombre"], persona["edad"]);
console.log(persona[propiedadNombre], persona[propiedadEdad]);

// ### 02 - keys

//     - Partiendo de un objeto guardado en la variable`producto`
//         - Mostrar en la consola el nombre de todas las propiedades que tiene el producto
//             - Utilizar el método ** keys **

// const producto = {
//   id: "ADA-020",
//   title: "Gubergren sed est amet voluptua",
//   price: 123.75,
//   picture:
//     "https://i.kinja-img.com/gawker-media/image/upload/s--53mPze4a--/c_scale,f_auto,fl_progressive,q_80,w_800/1315358249455433031.jpg",
//   condition: "nuevo",
//   free_shipping: true,
//   location: "Capital Federal",
// };

// completá acá el código
// let todasLasPropiedades = Object.keys(producto);

// console.log(todasLasPropiedades);
// resultado esperado
// [ 'id',
//   'title',
//   'price',
//   'picture',
//   'condition',
//   'free_shipping',
//   'location' ]
// ### 03 - Producto

//     - Partiendo de un objeto guardado en la variable`producto`
//         - Mostrar en la consola el nombre y valor de todas las propiedades que tiene el producto
//             - Utilizar el método ** keys **
//                 - El formato para mostrar la propiedad y valor es: "producto['[ACA NOMBRE DE LA PROPIEDAD]'] -> [ACA VALOR DE LA PROPIEDAD]"

const producto = {
  id: "ADA-020",
  title: "Gubergren sed est amet voluptua",
  price: 123.75,
  picture:
    "https://i.kinja-img.com/gawker-media/image/upload/s--53mPze4a--/c_scale,f_auto,fl_progressive,q_80,w_800/1315358249455433031.jpg",
  condition: "nuevo",
  free_shipping: true,
  location: "Capital Federal",
};

// completá acá el código
let propiedades = Object.keys(producto);

for (let i = 0; i < propiedades.length; i++) {
  console.log(`producto ${propiedades[i]} -> ${producto[propiedades[i]]}`);
}

// console.log(`${propiedades} `);
/////
// RESULTADO ESPERADO
// producto['id'] -> ADA-020
// producto['title'] -> Gubergren sed est amet voluptua
// producto['price'] -> 123.75
// producto['picture'] -> https://i.kinja-img.com/gawker-media/image/upload/s--53mPze4a--/c_scale,f_auto,fl_progressive,q_80,w_800/1315358249455433031.jpg
// producto['condition'] -> nuevo
// producto['free_shipping'] -> true
// producto['location'] -> Capital Federal

// ### 04 - TengoEmail

//     - Partiendo de un objeto guardado en la variable`user`
//         - Verificar si tiene la propiedad`email`
//             - Si no la tiene, mostrar en pantalla: 'El usuario no tiene la propiedad email'
//                 - Si la tiene, mostrar en pantalla: 'El usuario tiene la propiedad email'

// const user = {
//   username: "ada_lovelace",
//   password: "1234567890!",
// };
// console.log(
//   user.email
//     ? "El usuario tiene la propiedad email"
//     : "El usuario no tiene la propiedad email"
// );

// console.log(user.hasOwnProperty("email"));

// user.hasOwnProperty("email")
//   ? console.log("El usuario tiene la propiedad email")
//   : console.log("El usuario no tiene la propiedad email");

//   ### 05 - hasProperty

//     - Completa el código dentro de la función`hasProperty`
//         - Si el objeto de la variable`object` tiene la propiedad que recibe en la variable`property`, retorna`true`
//             - Sino retorna`false`

const hasProperty = (object, property) => {
  console.log(object.hasOwnProperty(property));
  // return true si el objeto (object) tiene la propiedad (property) que llega por parametro
  // property es un string
  // sino return false
};

const user = {
  username: "ada_lovelace",
  password: "1234567890!",
};

const user2 = {
  username: "grace_hopper",
  password: "1234567890!",
  email: "grace@hopper.com",
};

console.log(hasProperty(user, "email")); // false
console.log(hasProperty(user, "password")); // true
console.log(hasProperty(user, "id")); // false

console.log(hasProperty(user2, "email")); // true
console.log(hasProperty(user2, "password")); // true
console.log(hasProperty(user2, "id")); // false
