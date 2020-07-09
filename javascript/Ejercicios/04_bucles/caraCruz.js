// - Crear un programa que permita escoger entre cara o cruz.El programa luego debe generar un resultado aleatorio y mostrar si se acertó o no.El programa debe mostrar en cada vuelta cuántas rondas seguidas acertadas van, y si en algún momento se erra, reiniciar el contador a 0. También debe llevar una cuenta de la cantidad máxima de rondas seguidas que se hizo sin errar.Cuando se ingresa la palabra SALIR, en vez de CARA o CRUZ, el programa debe mostrar la cantidad máxima de rondas seguidas acertadas junto a un mensaje de despedida, y terminar su ejecución.

let userChoice = prompt("elegir cara o cruz");

const getCaraCruz = () => {
  let random = Math.random();
  if (random <= 0.5) {
    return "cruz";
  } else {
    return "cara";
  }
};

let computerChoice = getCaraCruz();

const game = () => {
  if (userChoice === computerChoice) {
    alert("ganaste");
  } else {
    alert("perdiste");
  }
};
game();

let contadorAciertos = 0;
let contadorRondas = 0;

let resultado = game(userChoice);
if (resultado) {
  contadorAciertos++;
} else {
  contadorRondas =
    contadorRondas > contadorAciertos ? contadorRondas : contadorAciertos;
}
