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

const game = (player1, player2) => {
  if (!player2) {
    player2 = getRandomOption();
    console.log(player2);
  }
  if (player1 == player2) {
    alert("empate");
  } else if (
    (player1 == "tijera" && player2 == "piedra") ||
    (player1 == "papel" && player2 == "tijera") ||
    (player1 == "piedra" && player2 == "papel")
  ) {
    alert("gano jugador 2");
  } else if (
    (player1 == "tijera" && player2 == "papel") ||
    (player1 == "papel" && player2 == "piedra") ||
    (player1 == "piedra" && player2 == "tijera")
  ) {
    alert("gano jugador 1");
  }
  alert(`jugador 1 ${player1} pc ${player2}`);
};

input = prompt("ingrese piedra, papel  o tijera");
game(input);
