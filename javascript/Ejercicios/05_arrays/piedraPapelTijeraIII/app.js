const pepito = ["papel", "tijera", "piedra"];
const jose = ["tijera", "papel", "papel"];


function jugada(eleccion1, eleccion2) {
  if (eleccion1 === eleccion2) {
    return "Empataron"
  }
  if (
    (eleccion1 === "piedra" && eleccion2 === "papel") ||
    (eleccion1 === "tijera" && eleccion2 === "piedra") ||
    (eleccion1 === "papel" && eleccion2 === "tijera")) {
    return "Gano el usuario 2"
  }
  return "Gano el usuario 1"

}
const calculoPuntosUsuario1 = (eleccion1, eleccion2) => {
  let puntosUsuario1 = 0;
  if (jugada(eleccion1, eleccion2) === "Gano el usuario 1") {
    puntosUsuario1++;
  }
  return puntosUsuario1;
}

const calculoPuntosUsuario2 = (eleccion1, eleccion2) => {
  let puntosUsuario2 = 0;
  if (jugada(eleccion1, eleccion2) === "Gano el usuario 2") {
    puntosUsuario2 = puntosUsuario2 + 1;
  }
  return puntosUsuario2;
} 

const comparar = (jugada1, jugada2) => {
  let puntos1 = 0;
  let puntos2 = 0;
  jugada1.forEach((element, i) => {
  
    jugada(element, jugada2[i])
    puntos1 += calculoPuntosUsuario1(element, jugada2[i]);
   
    puntos2 += calculoPuntosUsuario2(element, jugada2[i]);
  });
  return {
    puntosJug1 : puntos1,
    puntosJug2 : puntos2
  }

}

