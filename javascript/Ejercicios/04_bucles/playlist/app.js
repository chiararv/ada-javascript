// **📀 Playlist **

//     - Crear un programa que pida al usuario ingresar el nombre de una playlist y cuántas canciones desea agregar a la misma.Luego debe ir pidiendo agregar la cantidad de canciones elegidas de a una.Se debe ir mostrando la cantidad de canciones que quedan por agregar y la playlist con los temas hasta el momento a medida que se va a actualizando.Al finalizar mostrar un mensaje con el nombre de la playlist y la lista de canciones.

let nombrePlaylist = prompt("ingresa el nombre de tu playlist");
let totalCanciones = Number(prompt("cuantas canciones queres que tenga?"));
let canciones = " ";
for (let i = 1; i <= totalCanciones; i++) {
  let cancion = prompt("ingresa el nombre de la cancion");
  let cancionesRestantes = totalCanciones - i;
  canciones += ` ${cancion}`;

  console.log(`agregaste: ${canciones} faltan ${cancionesRestantes} canciones`);
}

// for (let i = 0; i < 10; i++) {
//     if (i === 3) {
//         console.log("La tercera es la vencida");
//         continue;
//     }
//     console.log(`el numero actual es ${i}`);
//     if (i === 7) {
//         console.log("Se termina aca");
//         break;
//     }
// }
