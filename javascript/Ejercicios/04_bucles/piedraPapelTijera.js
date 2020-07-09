const getRandomOption = () => {
  const random = Math.random();
  if (random <= 0.33) {
    return "piedra";
  } else if (random <= 0.66) {
    return "tijera";
  } else {
    return "papel";
  }
};

let cantRondas = Number(prompt("cuantas rondas queres jugar?"));

const game = (player1, player2) => {
  if (!player2) {
    player2 = getRandomOption();
  }
  console.log(`jugador eligio: ${player1}`);
  console.log(`computadora eligio: ${player2}`);

  if (player1 == player2) {
    return "empate";
  } else if (
    (player1 == "tijera" && player2 == "piedra") ||
    (player1 == "papel" && player2 == "tijera") ||
    (player1 == "piedra" && player2 == "papel")
  ) {
    return "perdio";
  } else if (
    (player1 == "tijera" && player2 == "papel") ||
    (player1 == "papel" && player2 == "piedra") ||
    (player1 == "piedra" && player2 == "tijera")
  ) {
    return "gano";
  }
};

let rondasGanadas = 0;
let rondasPerdidas = 0;

for (i = 1; i <= cantRondas; i++) {
  input = prompt("ingrese piedra, papel  o tijera");
  // game(input);
  let status = game(input);
  if (status == "gano") {
    rondasGanadas++;
  }
  if (status == "perdio") {
    rondasPerdidas++;
  }
  console.log(`ronda ${i} de ${cantRondas}`);
}
let puntaje = `${rondasGanadas} (jugadora) - ${rondasPerdidas} (computadora)`;
console.log(`puntaje: ${puntaje}`);
