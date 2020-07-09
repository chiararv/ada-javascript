// # Objetos 008 - carrito parte 3

//     - Crear un documento con el nombre`obj_031.js`
//         - Copiar y pegar el código de la solución al ejercicio`obj_030`
//             - Ahora tenemos que agregarle un método a`shoppingCart` que se llame`render` para mostrar el listado de productos a comprar con su precio y al final de todo el precio final total

// COPIAR Y PEGAR LA SOLUCION EL EJERCICIO 030

/**** RESULTADO ESPERADO ****/

// Listado de productos:
// At vero elitr - $320
// Dolore ipsum est eos - $250
// Lorem sadipscing tempor - $120.5
// Duo invidunt accusam - $530
// Labore accusam eirmod. - $125.99
// Total con IVA: $1629.2529

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
    return `Total con envio e IVA: ${price * 1.21}`;
  },
  render: function () {
    let productInfo = "";

    for (let i = 0; i < this.products.length; i++) {
      productInfo += `${this.products[i].title} - ${this.products[i].price} \n`;
    }
    return `Listado de productos:\n${productInfo}`;
  },
};

shoppingCart.addProduct(perfume);
shoppingCart.addProduct(teclado);
shoppingCart.addProduct(crema);
shoppingCart.addProduct(shampoo);

// console.log(shoppingCart.products);

console.log(shoppingCart.render());
console.log(shoppingCart.getTotal());
