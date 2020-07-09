// ### **Render álbum**

// - Todos los discos en Spotify, se guardan como objetos que tienen las propiedades: `id` (string), `nombre` (string), `anio` (número), `genero` (array de strings), `banda` (string), `portada` (string) e `info` (string)
// - En este ejemplo, tenemos una variable `album`, con la información de un disco de Nirvana
// - Necesitamos crear una función `render` que reciba un objeto por parámetro (con las mismas propiedades que el objeto que tenemos guardado en `album`)
// - La función nos tiene que devolver el HTML que deberíamos agregar en nuestra web
// - El HTML con el que representamos un disco es:
// ```html
// <div class="card m-5" id="nirv1234">
//   <img class="card-img-top" src="https://muzikalia.com/wp-content/uploads/2005/03/nirvana__with_the_lights_out.jpg" alt="Nirvana - With The Lights Out" />
//   <div class="card-body">
//     <h5 class="card-title">Nirvana</h5>
//     <p class="card-text">With The Lights Out (2004) | Grunge</p>
//     <a href="https://en.wikipedia.org/wiki/With_the_Lights_Out" class="btn btn-primary">https://en.wikipedia.org/wiki/With_the_Lights_Out</a>
//   </div>
// </div>
// ```

// - La variable `album` que tenemos en nuestra aplicación, ahora, es:
// ```js
const album = {
  id: 'nirv1234',
  nombre: 'With The Lights Out',
  anio: 2004,
  genero: 'Grunge',
  banda: 'Nirvana',
  portada: 'https://muzikalia.com/wp-content/uploads/2005/03/nirvana__with_the_lights_out.jpg',
  info: 'https://en.wikipedia.org/wiki/With_the_Lights_Out'
};

// // CODEA ACA LA SOLUCION

const contenedor = document.getElementById("contenedor");

// render(album);

const render = (album) =>
{contenedor.innerHTML=
`<div class="card m-5" id=${album.id}>
  <img class="card-img-top" src=${album.portada} alt=${album.banda} - ${album.nombre} />
  <div class="card-body">
    <h5 class="card-title">${album.banda}</h5>
    <p class="card-text">${album.nombre} - ${album.genero}</p>
    <a href=${album.info} class="btn btn-primary">${album.info}</a>
  </div>
</div>`}

render(album);
// ```

// - 💡 Pista: para armar el HTML podés utilizar interpolación de strings, por ejemplo:
// ```js
// const producto = {
//   nombre: 'Notebook',
//   precio: 123
// }

// const html = `
//   <div class="producto">
//     <p>${producto.nombre}</p>
//     <small>ARS ${producto.precio}</small>
//   </div>
// `;
// ```
