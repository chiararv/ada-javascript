
// Recrear el piedra,papel y tijera.Este consta de 3 botones,piedra,papel y tijera respectivamente,cuando se le hace click este muestra un mensaje de ganaste,empataste,o perdiste.Cada mensaje tiene un color distintivo.

const bntTijera = document.getElementById("btn_tijera");
const bntPapel = document.getElementById("btn_papel");
const bntPiedra = document.getElementById("btn_piedra");
const resultado = document.getElementById("resultado");

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

let cantRondas = 1;



bntTijera.addEventListener( "click", () => {
  resultado.innerHTML =  game("tijera" , false);
});


bntPapel.addEventListener( "click", () => {
  resultado.innerHTML =  game("papel" , false);

});
bntPiedra.addEventListener( "click", () => {
  resultado.innerHTML =  game("piedra" , false);
});




const game = (player1, player2) => {
  let status = ""
  if (!player2) {
    player2 = getRandomOption();
  }
  // console.log(`jugador eligio: ${player1}`);
  // console.log(`computadora eligio: ${player2}`);

  if (player1 == player2) {
    status = "empate";
  } else if (
    (player1 == "tijera" && player2 == "piedra") ||
    (player1 == "papel" && player2 == "tijera") ||
    (player1 == "piedra" && player2 == "papel")
  ) {
    status = "perdio";
  } else if (
    (player1 == "tijera" && player2 == "papel") ||
    (player1 == "papel" && player2 == "piedra") ||
    (player1 == "piedra" && player2 == "tijera")
  ) {
    status = "gano";
  }
  return status
};






