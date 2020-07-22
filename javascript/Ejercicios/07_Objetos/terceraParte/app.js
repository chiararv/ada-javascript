// # Objetos 001
const holaMundo = {
  mostrarMensaje: function () {
    console.log("¡Hola mundo!");
  },
  obtenerMensaje: function () {
    return "¡Alo mundo!";
  },
};

holaMundo.mostrarMensaje(); // ¡Hola mundo!
console.log(holaMundo.obtenerMensaje()); // ¡Alo mundo!

// # Objetos 002

const pelicula = {
  titulo: "The Dark Knight",
  anio: 2008,
  director: "Christopher Nolan",
};
pelicula.mostrarInfo = function () {
  console.log(`Pelicula ${this.titulo} - Año ${this.anio}`);
};

pelicula.mostrarInfo();

// # Objetos 003

const playlist = {
  name: "Rupaul Lipsyncs",
  owner: "Ada",
  followers: 8743,
  songs: [],
  addSong: function (name) {
    this.songs.push(name);
  },
};
playlist.addSong("geronimo");
playlist.addSong("Sissy That Walk");
playlist.addSong("Cover Girl");

console.log(playlist.songs);

// # Objetos 004

// const user = {
//   firstName: "Hedy",
//   lastName: "Lamarr",
//   age: 30,
//   getFullname: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };

// console.log(user.getFullname()); // Hedy Lamarr

// # Objetos 005

var user = {
  name: {
    first: "Hedy",
    last: "Lamarr",
  },
  age: 30,
  getFullname: function () {
    return this.name.first + " " + this.name.last;
  },
};

console.log(user.getFullname()); // Hedy Lamarr

// # Objetos 006 007- carrito parte 1

const perfume = {
  id: 1,
  title: "perfume",
  price: 200,
  freeShipping: true,
};

const teclado = {
  id: 2,
  title: "teclado",
  price: 320,
  freeShipping: true,
};

const crema = {
  id: 3,
  title: "Crema de manos",
  price: 190,
  freeShipping: false,
};

const shampoo = {
  id: 4,
  title: "Clear",
  price: 180,
  freeShipping: false,
};

const shoppingCart = {
  owner: {
    id: 123,
    name: "Ada Lovelace",
  },
  products: [],
  addProduct: function (item) {
    this.products.push(item);
  },

  getTotal: function () {
    let price = 0;
    for (let i = 0; i < this.products.length; i++) {
      price += this.products[i].price;
      price += this.products[i].freeShipping ? 0 : 120;
    }
    return price * 1.21;
  },
};

shoppingCart.addProduct(perfume);
shoppingCart.addProduct(teclado);
shoppingCart.addProduct(crema);
shoppingCart.addProduct(shampoo);

// console.log(shoppingCart.products);

console.log(shoppingCart.getTotal());
