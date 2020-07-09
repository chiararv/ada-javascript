// ** Buscaminas **

//     - Crear un programa que dado un array 2d permita ingresar una coordenada(representando los índices del array), y mostrar si era una casilla vacía o tenía una mina.En caso de que tenga una casilla vacía, debe poder seguir jugando e ingresando casillas.Si descubre todas las casillas vacías o elige una con una mina, el juego debe terminar, e indicar si perdió o ganó.Las minas y casillas vacías(ocultas y descubiertas) pueden representarse con emojis con con números o letras.

// ```javascript
const tablero =
[
  ['📦', '💣', '💣'],
  ['📦', '📦', '📦'],
  ['💣', '📦', '📦']
]

// const bombaUno = tablero[0][1];
// const bombaDos = tablero[0][2];
// const bombaTres = tablero[2][0];


const coordenadaFila = Number(prompt("Ingrese la coordenada 2: Nro de fila:"));
const coordenadaColumna = Number(prompt("Ingrese la coordenada 1: Nro de columna:"));

let coordenadaIngresada = tablero[coordenadaFila][coordenadaColumna];


if (coordenadaIngresada === "💣"a) {
    alert("¡Oh no!¡Has encontrado una bomba!");
}else {
    while (coordenadaIngresada === "💣") {

        alert("La caja está vacía!");



📦 📦 📦
📦 📦 📦
📦 📦 📦

// Ingrese una coordenada: 0,0
// La caja está vacía!

💨 📦 📦
📦 📦 📦
📦 📦 📦

// Ingrese una coordenada: 0,1
// ¡Oh no!¡Has encontrado una bomba!

💨 💥 📦
📦 📦 📦
📦 📦 📦