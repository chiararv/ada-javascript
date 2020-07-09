// **Puntajes**

// - Crear un programa que permita ingresar el nombre de dos jugadoras y dos listas con los puntajes de cada ronda de un juego separados por espacio. Primero debe preguntarse el nombre de la jugadora 1, luego sus puntajes, luego el nombre de la jugadora 2, luego sus puntajes. El programa debe comparar los valores de las listas uno a uno (el primero con el primero, el segundo con el segundo) sumando un punto a la jugadora que tenga mayor puntaje en la ronda. Al finalizar, mostrar quién gano y los puntajes finales. Ejemplo:

// ```javascript
// // Ingrese nombre jugadora 1: Ada
// // Ingrese puntajes de Ada: 5 6 3 1 8

// // Ingrese nombre jugadora 2: Grace
// // Ingrese puntajes de Grace: 8 2 4 2 3

// // Resultado: 2 (Ada) vs 3 (Grace)
// // Ganadora: Grace
// ```

let nombreJugadorA = "Pepito";
let nombreJugadorB = "Jose";

const puntosJugadorA = [2, 3, 5, 7, 5, 78];
const puntosJugadorB = [4, 5, 2, 4, 76, 4];


let puntajeJugadorA = 0;
let puntajeJugadorB = 0

const ganador = (puntajeJugadorA, puntajeJugadorB) => {
  if (puntajeJugadorA === puntajeJugadorB) {
    return "EMPATARON"
  }
  return puntajeJugadorA > puntajeJugadorB ? nombreJugadorA : nombreJugadorB;

}



const compararRondas = (puntosJugadorA, puntosJugadorB) => {
 
  puntosJugadorA.forEach((punto, i) => {
    if (punto !== puntosJugadorB[i]) {
      if (punto > puntosJugadorB[i]) {
        puntajeJugadorA++
      } else {
        puntajeJugadorB++;
      }

    }
  });



  
  return {
    PUNTOSA: puntajeJugadorA,
    PUNTOSB: puntajeJugadorB,
    GANADOR: ganador(puntajeJugadorA, puntajeJugadorB)
  }
} 