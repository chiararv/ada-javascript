// ## Obtener experiencia

// - Crear una función que dado un objeto que contenga niveles de experiencia y puntaje por cada nivel, y un objeto con la cantidad de desafíos realizados por cada nivel, devuelva la cantidad total de experiencia obtenida

// ```javascript
const score = { EASY: 10, MEDIUM: 50, HARD: 100 };
const challenges = { EASY: 3, MEDIUM: 4, HARD: 2 };
// getXP(challenges, score); // returns 630 (3 * 10 + 4 * 50 + 2 * 100)
// ```

const getXP = (objeto1, objeto2) => {
  let XP = 0;
  for (const prop in objeto1) {
    XP += objeto1[prop] * objeto2[prop];
  }
  return XP;
};

getXP(score, challenges);
