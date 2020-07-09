// ## Batalla

// - Crear una función que acepte dos combatientes. Cada combatiente debe tener: nombre, vida, defensa y ataque. Por ronda, se atacan una vez cada uno, usando la siguiente fórmula: `daño = ataque - defensaEnemigo` y restando a la vida el daño generado. La batalla termina cuando la vida de cualquiera llegue a 0 o menos. Devolver un objeto que indique la cantidad de rondas de duración y quién ganó.
// ```javascript
// const fighterA = { name: "Chun-Li", life: 100, attack: 40, defense: 10 };
// const fighterB = { name: "Cammy", life: 50, attack: 20, defense: 20 };
// fight(fighterA, fighterB); // returns { rounds: 3, winner: "Chun-Li"}
// ```

const chunli = { name: "Chun-Li", life: 100, attack: 40, defense: 10 };
const cammy = { name: "Cammy", life: 50, attack: 20, defense: 20 };
// fight(fighterA, fighterB); // returns { rounds: 3, winner: "Chun-Li"}




const pelea = (fighterA, fighterB) => {
  const ataqueA = fighterA.attack - fighterB.defense;
  const ataqueB = fighterB.attack - fighterA.defense;
  let vidaA = fighterA.life;
  let vidaB = fighterB.life;
  let rondas = 0;

  while (vidaA > 0 && vidaB > 0) {
    vidaA -= ataqueB;
    vidaB -= ataqueA;
    // console.log(`VidaA: ${vidaA} /n VidaB : ${vidaB}`);
    rondas++
  }
  return {
    ganador: vidaA > 0 ? fighterA.name : fighterB.name,
    totalRondas: rondas
  }
  // return vidaA > 0 ? { ganador: fighterA.name, totalRondas: rondas } : { ganador: fighterB.name, totalRondas: rondas };

}














