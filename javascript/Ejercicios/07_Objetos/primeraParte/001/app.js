// ### 01 - sobre Mi

const sobreMi = {
  nombre: "chiara",
  apellido: "rosa velazco",
  edad: 22,
};
console.log(sobreMi);

// ### 02 - presentar

const user = {
  fullname: "mirtha legrand",
  email: "2oldforemail@hotmail.com",
  age: 200,
};
console.log(user);
console.log(`Hola, mi nombre es ${user.fullname} y tengo ${user.age} años`);
// ### 03 - cancion

const song = {
  title: "Rock and Roll",
  bandName: "Led Zeppelin",
  duration: 166000,
  album: "Led Zeppelin IV",
};

const cancion = {
  titulo: song.title,
  banda: song.bandName,
  duracion: song.duration / 1000,
};

console.log(cancion);

// ### 04 - base de datos
const persona1 = {
  id: 1,
  nombre: "Ada Lovelace",
  email: "ada@gmail.com",
  telefono: "1234567890",
};
const persona2 = {
  id: 2,
  nombre: "Grace Hopper",
  email: "grace@hotmail.com",
  telefono: "0987654321",
};
const persona3 = {
  id: 3,
  nombre: "Hedy Lamarr",
  email: "hedy@gmail.com",
  telefono: "6789054321",
};
const persona4 = {
  id: 4,
  nombre: "Radia Perlman",
  email: "radia@yahoo.com",
  telefono: "1234509876",
};
const persona5 = {
  id: 5,
  nombre: "Sheryl Sandberg",
  email: "Sheryl@facebook.com",
  telefono: "5432167890",
};

//// TENEMOS QUE MOSTRAR LOS SIGUIENTES DATOS

// 1. El nombre de Ada:
console.log(persona1.nombre);

// 2. El ID de Grace
console.log(persona2.id);

// 3. El email de Hedy
console.log(persona3.email);

// 4. El ID y nombre de Radia
console.log(persona4.id, persona4.nombre);

// 5. El telefono de Sheryl
console.log(persona5.telefono);

// ### 05 - correcion de datos

var datos = {
  id: 1,
  nombre: "Ada",
  apellido: "Lovelace",
  email: "ada.lovelace@gmail.com",
  telefono: "1234567890",
  edad: "29",
  programa: true,
};

datos.telefono = "0192837465";
datos.edad = 29;
console.log(datos);

// ### 06 - leguaje favorito

var datos = {
  id: 1,
  nombre: "Ada",
  apellido: "Lovelace",
  email: "ada.lovelace@gmail.com",
  telefono: "1234567890",
  edad: 29,
  programa: true,
};

if (datos.programa) {
  datos.lenguajeFavorito = "JavaScript";
}

console.log(datos);

// ### 07 - lenguaje favorito 2

var datos = {
  id: 1,
  nombre: "Ada",
  apellido: "Lovelace",
  email: "ada.lovelace@gmail.com",
  telefono: "1234567890",
  edad: 29,
  programa: true,
};

if (datos.programa) {
  datos.lenguajeFavorito = ["JavaScript", "Python"];
}
console.log(
  `Hola, mi nombre es ${datos.nombre} y programo en ${datos.lenguajeFavorito}`
);

// ### 08 - disco

var disco = {
  id: 1,
  nombre: "Wasting Light",
  añoLanzamiento: 2011,
  cantidadDeTemas: 12,
  banda: {
    nombre: "Foo Fighters",
    anioFormacion: 1994,
  },
};

var nombreDisco = disco.nombre;
var añoDisco = disco.añoLanzamiento;
var nombreBanda = disco.banda.nombre;

console.log(
  "El disco " +
    nombreDisco +
    " de la banda " +
    nombreBanda +
    " se lanzó en el año " +
    añoDisco
);

// ### 09 - Agregar Skills

var usuario = {
  id: 123456789,
  name: "Ada Lovelace",
  url: "https://www.linkedin.com/in/ada-lovelace",
  skills: ["HTML", "CSS", "SASS"],
};

usuario.skills.push("Javascript");
console.log(usuario);

// ### 10 - playlist

const playlist = {
  nombre: "Lista de Nirvana",
  privada: true,
  canciones: ["Smells Like Teen Spirit", "In Bloom", "Come As You Are"],
};
console.log(playlist.nombre);
console.log(playlist.privada ? "si" : "no");

for (let i = 0; i < playlist.canciones.length; i++) {
  console.log(playlist.canciones[i]);
}

// ### 11 - ganadora

const ganadoras = [
  {
    nombre: "Bebe Zahara Benet",
    temporada: "1",
    foto: "http://www.nokeynoshade.party/images/bebe-zahara-benet.jpg",
  },
  {
    nombre: "Tyra Sanchez",
    temporada: "2",
    foto: "http://www.nokeynoshade.party/images/tyra-sanchez.jpg",
  },
  {
    nombre: "Raja",
    temporada: "3",
    foto: "http://www.nokeynoshade.party/images/raja.jpg",
  },
  {
    nombre: "Sharon Needles",
    temporada: "4",
    foto: "http://www.nokeynoshade.party/images/sharon-needles.jpg",
  },
  {
    nombre: "Jinkx Monsoon",
    temporada: "5",
    foto: "http://www.nokeynoshade.party/images/jinkx-monsoon.jpg",
  },
  {
    nombre: "Bianca Del Rio",
    temporada: "6",
    foto: "http://www.nokeynoshade.party/images/bianca-del-rio.jpg",
  },
];

for (let i = 0; i < ganadoras.length; i++) {
  console.log(
    `${ganadoras[i].nombre} gano la temporada ${ganadoras[i].temporada} `
  );
}

// ### 12 - duracion de canciones

const bandas = [
  { id: 1, nombre: "Nirvana", fundacion: 1987, activa: false },
  { id: 2, nombre: "Foo Fighters", fundacion: 1994, activa: true },
  { id: 3, nombre: "Led Zeppelin", fundacion: 1967, activa: false },
  { id: 3, nombre: "Queens of the Stone Age", fundacion: 1997, activa: true },
  { id: 3, nombre: "Pearl Jam", fundacion: 1990, activa: true },
];

for (let i = 0; i < bandas.length; i++) {
  console.log(
    bandas[i].activa
      ? `${bandas[i].nombre} está activa desde el año ${bandas[i].fundacion}`
      : `${bandas[i].nombre}  no está activa`
  );
}

// ### 13 - Info banda

//     - Tenemos un objeto en la variable`banda`, con datos de una banda(nombre, año de lanzamiento, si sigue en actividad, una foto, los integrantes y una lista de sus discos).
// - Queremos mostrar:
// 1. La duración total del disco(suma de la duración de cada canción)
// 2. La duración promedio por canción(un promedio entre todas las duraciones)

const banda = {
  name: "Led Zeppelin",
  year: 1968,
  active: false,
  thumbnail:
    "http://townsquare.media/site/295/files/2014/10/Led-Zeppelin1.jpg?w=980&q=75",
  members: ["Jimmy Page", "Robert Plant", "John Paul Jones", "John Bonham"],
  albums: [
    {
      name: "Led Zeppelin",
      year: 1969,
      songs: ["Good Times, Bad Times", "Communication Breakdown"],
      duration: 2691,
    },
    {
      name: "Led Zeppelin II",
      year: 1969,
      songs: ["Whole Lotta Love", "Moby Dick", "Ramble On"],
      duration: 2502,
    },
    {
      name: "Led Zeppelin III",
      year: 1970,
      songs: ["Immigrant Song"],
      duration: 2489,
    },
    {
      name: "Led Zeppelin IV",
      year: 1971,
      songs: ["Rock and Roll", "Stairway to Heaven", "Four Sticks"],
      duration: 2559,
    },
  ],
};
const cantidadTotalCanciones = () => {
  let songs = 0;
  for (let i = 0; i < banda.albums.length; i++) {
    let cancionesPorAlbum = banda.albums[i].songs.length;
    songs += cancionesPorAlbum;
  }
  return songs;
};

const duracionTotal = () => {
  let duracion = 0;
  for (let i = 0; i < banda.albums.length; i++) {
    let duracionDelAlbum = banda.albums[i].duration;
    duracion += duracionDelAlbum;
  }
  return duracion;
};

let promedioDuracion = cantidadTotalCanciones / duracionTotal;

// completa el codigo para lograr el resultado esperado

///// RESULTADO
// console.log("Led Zeppelin se fundó en el año " + anioLanzamiento);
// console.log("Tiene " + cantidadMiembros + " miembros: " + miembros);
// console.log("Tiene en total " + cantidadDiscos + " discos");
// console.log(
//   "Tiene en total " +
//     cantidadTotalCanciones +
//     " canciones entre todos los discos."
// );
// console.log("En promedio, cada canción dura " + promedioDuracion + " segundos");
// ESPERADO
// Led Zeppelin se fundó en el año 1968
// Tiene 4 miembros: Jimmy Page, Robert Plant, John Paul Jones, John Bonham
// Tiene en total 4 discos
// Tiene en total 9 canciones entre todos los discos.
// En promedio, cada canción dura 1137.888888888889 segundos
