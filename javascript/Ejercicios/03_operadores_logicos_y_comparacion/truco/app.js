// **🃏 Truco **

//     - Crear un programa que permita ingresar una carta del truco(mazo español, sin ochos y nueves) ingresando número y palo por separado.Hacer que el programa elija aleatoriamente otra carta.Mostrar un mensaje con ambas cartas, indicando cuál gana a cuál(o si empatan).

// Orden de las cartas, de mayor valor a menor:

// ```
// 1 de espadas
// 1 de bastos
// 7 de espadas
// 7 de oros
// 3
// 2
// 1 de copa y 1 de oro
// 12
// 11
// 10
// 7 de copas y 7 de bastos
// 6
// 5
// 4

let numUsuario = Number(prompt("ingresa el numero de tu carta"));
let paloUsuario = prompt("ingresa el palo");

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const numRandom = () => {
  let random = getRandomInt(1, 13);
  if (random === 8 || random === 9) {
    return 12;
  }
  return random;
};

let paloRandom = Math.random() * 10;

let paloComputadora = "";

const eleccionPalo = () => {
  if (paloRandom <= 2.5) {
    paloComputadora = "copa";
  } else if (paloRandom <= 5) {
    paloComputadora = "espada";
  } else if (paloRandom <= 7.5) {
    paloComputadora = "oro";
  } else if (paloRandom <= 10) {
    paloComputadora = "basto";
  }
  return paloComputadora;
};

paloComputadora = eleccionPalo();
let numComputadora = numRandom;

const anchoEspUsuario = () => {
  if (numUsuario === 1 && paloUsuario === "espada") {
    alert("ganaste");
  }
};

// 1 de espadas
// 1 de bastos
// 7 de espadas
// 7 de oros

const anchoEspComputadora = () => {
  if (numComputadora === 1 && paloComputadora === "espada") {
    alert("perdiste");
  } else {
    return false;
  }
};
const juego = () => {
  if (numUsuario === 1 && paloUsuario === "basto" && !anchoEspComputadora()) {
    alert("ganaste");
  } else if (
    numComputadora === 1 &&
    paloComputadora === "basto" &&
    !anchoEspUsuario()
  ) {
    alert("perdiste");
  }
};
