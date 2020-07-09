//## Ejercicio Array 001

const playlistFoo = [
  "Everlong",
  "The Pretender",
  "Learn to Fly",
  "Best of You",
  "All My Life",
  "Monkey Wrench",
  "The Sky is a Neighborhood",
];
console.log(playlistFoo[1], playlistFoo[4]);

// ## Ejercicio Array 002

//     - Crear un array con el nombre ** notas ** y asignar un array con 10 valores numéricos de 1 a 10
//         - Sumar los valores de la primera, cuarta, quinta y última entrega
//             - Cada nota del array notas corresponde a una entrega de las alumnas

const notas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let notaFinal = notas[0] + notas[3] + notas[4] + notas[notas.length - 1];

// ## Ejercicio Array 003

//     - Declarar un array con el nombre ** discoNevermind ** y asignar los siguientes valores:
// - Smells Like Teen Spirit
//     - In Bloom
//   - Come As You Are
// - Immodium
//  - Lithium
//  - Polly
// - Territorial Pissings
//  - Drain You
//    - Lounge Act
//   - Pay To Play
//  - On a Plain
//  - Endless, Nameless
//  - Reemplazar`Immodium` por`Breed`
//  - Reemplazar`Pay To Play` por`Stay Away`
//  - Reemplazar`Tim` por`Something in the Way`
//                                             - Mostrar en consola la lista de canciones modificada
//                                                 - El resultado debería ser: `["Smells Like Teen Spirit", "In Bloom", "Come As You Are", "Breed", "Lithium", "Polly", "Territorial Pissings", "Drain You", "Lounge Act", "Stay Away", "On a Plain", "Something in the Way"]`

// ## Ejercicio Array 004

//     - Declarar una variable`etiquetasHtml` con varios de los nombres de las etiquetas de HTML que ya conocés
//         - Mostrar en consola el nombre de la 2da etiqueta del array ** en mayúsculas **
//             - Mostrar en consola el nombre de la 5ta etiqueta del array ** en minúsculas **
//                 - Mostrar en consola la cantidad de etiquetas guardadas en el array

// ## Ejercicio Array 005

//     - Teniendo el array`ganadorasRupaul`, mostrar en consola el nombre de la primer y última ganadora.
// - Para la última ganadora no se puede usar un índice a mano sino que hay que hacerlo de forma dinámica _como si no supieramos la cantidad exacta de elementos_

const ganadorasRupaul = [
  "BeBe Zahara Benet",
  "Tyra Sanchez",
  "Raja",
  "Sharon Needles",
  "Jinkx Monsoon",
  "Bianca del Rio",
  "Violet Chachki",
  "Bob the Drag Queen",
  "Sasha Velour",
  "Aquaria",
];

// ## Ejercicio Array 006

//    - Teniendo dos arrays de canciones, comparar sus longitudes y mostrar en pantalla “La playlist de Nirvana tiene más canciones” si el array`playlistNirvana` tiene más canciones, o “La playlist de Foo Fighters tiene más canciones” si el array`playlistFoo` tiene más elementos.

const playlistNirvana = [
  "Smells Like Teen Spirit",
  "Come As You Are",
  "Heart-Shaped Box",
  "Lithium",
];
const playlistFoo2 = ["Everlong", "The Pretender", "Learn to Fly"];

console.log(
  playlistNirvana.length > playlistFoo2.length
    ? "La playlist de Nirvana tiene más canciones"
    : "La playlist de Foo Fighters tiene más canciones"
);

// ## Ejercicio Array 007

const frutas = ["Manzana", "Banana"];
frutas.shift();
frutas.unshift("Frutilla");

console.log(frutas);

// ## Ejercicio Array 008 - 009

const concreteAndGold = [];

//orden comun:
// concreteAndGold.push("T-Shirt", "Run", "Make It Right", "The Sky Is a Neighborhood", "La Dee Da", "Dirty Water", "Arrows", "Happy Ever After (Zero Hour)", "Sunday Rain", "The Line", "Concrete and Gold");
//orden inverso:
concreteAndGold.reverse();

console.log(concreteAndGold);
console.log(
  `${concreteAndGold[0]}, ${concreteAndGold[concreteAndGold.length - 1]}`
);

// ## Ejercicio Array 010

const numeros = [6, 1, 2, 3, 4, 5];

numeros.push(numeros[0]);
numeros.shift();
console.log(numeros);

// ## Ejercicio Array 011

const playlist = [
  "Smells Like Teen Spirit",
  "Come As You Are",
  "Heart-Shaped Box",
  "Lithium",
];
const playlistEscuchada = ["School"];
let valor = playlist.shift();

playlistEscuchada.push(valor);
console.log(playlist);
console.log(playlistEscuchada);

// ## Ejercicio Array 012

const womenInTech = [
  "Ada Lovelace",
  "Hedy Lamarr",
  "Grace Hopper",
  "Radia Perlman",
  "Janie Tsao",
  "Sheryl Sandberg",
  "Susan Kare",
  "Parisa Tabriz",
];
womenInTech.sort();
console.log(womenInTech);
womenInTech.reverse();
console.log(womenInTech);

console.log(womenInTech.join(" - "));

// ## Ejercicio Array 013

const playlistNirvana13 = [
  "Smells Like Teen Spirit",
  "Come As You Are",
  "Heart-Shaped Box",
  "Lithium",
];
const playlistFoo13 = ["Everlong", "The Pretender", "Learn to Fly"];

const playlistCompleta = playlistNirvana13.concat(playlistFoo13);

console.log(playlistCompleta);
console.log("++++++++");
console.log(playlistNirvana13[0]);
console.log(playlistNirvana13[1]);
console.log(playlistNirvana13[2]);
console.log(playlistNirvana13[3]);
console.log("++++++++");

let j = 0;
while (j < playlistFoo13.length) {
  console.log(playlistFoo13[j]);
  j++;
}

for (let i = 0; i < playlistCompleta.length; i++) {
  console.log(playlistCompleta[i]);
}

//     - Nombres de los canciones de foo fighters(utilizando while)
//     - Nombres de todas las canciones entre ambas listas(utilizando for)

// ## Ejercicio Array 014

//     - Tenemos un array de canciones de Spotify.Queremos mostrar por consola la siguiente información:
// - Posición de la canción ** Lithium **
//     - Posición de la canción ** On a Plain **
//         - Completar el siguiente código para que pueda mostrarnos lo que solicitamos

const playlist14 = [
  "Smells Like Teen Spirit",
  "Come As You Are",
  "Heart-Shaped Box",
  "Lithium",
];

// completar las dos asignaciones de abajo
const indiceLithium = playlist14.indexOf("Lithium");
const indiceOnAPlain = playlist14.indexOf("On a Plain ");

console.log("El índice de la canción Lithium es:");
console.log(indiceLithium); // deberia mostrar 3
console.log("El índice de la canción On a Plain es:");
console.log(indiceOnAPlain); // deberia mostrar -1
