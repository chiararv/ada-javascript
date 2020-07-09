// Crear un programa que permita ingresar 3 cartas de truco(mazo español, sin ochos y nueves) una por una, ingresando número y palo por separado, y mostrar luego si se tiene puntos para hacer envido o no, y cuántos.Las reglas para el mismo son:

// - Si se tiene dos cartas del mismo palo, de las cuales una ** (A) ** es un 10, un 11 o un 12, y la otra ** (B) ** un número distinto, los puntos de envido son: 20 + el número de la carta ** (B) **
//     - Si se tienen dos cartas del mismo palo, de las cuales ambas son cualquiera de los siguientes números: 10, 11 o 12(no hace falta que sean iguales), los puntos de envido son 20.
//         - Si se tienen dos cartas del mismo palo, y ninguna de ellas es un 10, un 11, o un 12, los puntos de envido son la suma de ambas cartas + 20

/*ENVIDO = 2 cartas = +20ptos
10 11 12 no suman puntos
el rsto de las cartas suman su valor*/

let numA = Number(prompt("ingrse el num de la primera carta"));
let paloA = prompt("ingrese el palo de la primera carta");
let numB = Number(prompt("ingrese el num de la segunda carta"));
let paloB = prompt("ingrese el palo de la segunda carta");
let numC = Number(prompt("ingrese el num de la tercera carta"));
let paloC = prompt("ingrese el palo de la tercera carta");

const envido = () => {
  if (paloA === paloB || paloA === paloC || paloB === paloC) {
    alert("tenes envido");
    return 20;
  }
};

const valorA = () => {
  if (numA !== 10 || numA !== 11 || numA !== 12) {
    return numA;
  }
};
const valorB = () => {
  if (numB !== 10 || numB !== 11 || numB !== 12) {
    return numB;
  }
};
const valorC = () => {
  if (numC !== 10 || numC !== 11 || numC !== 12) {
    return numC;
  }
};

let puntos = envido() + valorA() + valorB();

const juego = () => {
  if (paloA === paloB) {
    alert(puntos);
  }
};
