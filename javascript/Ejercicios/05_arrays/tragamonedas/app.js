// // ** Tragamonedas **

// //   - Crear un programa que permita ingresar un conjunto de 5 símbolos y determine si son iguales.Si lo son, mostrar un mensaje indicando que se ha ganado.Si se ingresan más de 5 sólo deben evaluarse los primeros 5. Ejemplo:

// // ```javascript
// // // Ingrese símbolos: ⭐️⭐️⭐️💫✨
// // // ¡Has perdido! Inténtalo nuevamente

// // // Ingrese símbolos: 💫💫💫💫💫
// // // ¡Felicitaciones! Has ganado

const simbolos1 = ["⭐️", "⭐️", "⭐️", "⭐️", "⭐️"];
const simbolos2 = [
  "⭐️",
  "💫",
  "⭐️",
  "⭐️",
  "💫",
  "✨",
  "💫",
  "💫",
  "💫",
  "💫",
  "💫",
];





const sonIguales = (array) => {
  let iguales = true;

  for (let i = 1; i < 5; i++) {
    const primerElem = array[0];
    console.log(iguales);

    if (primerElem != array[i]) {
      iguales = false;
      break;
    }
  }
  const resultado = iguales ? "has ganado!" : "perdiste";
  console.log(iguales);
  return resultado;
};

console.log(sonIguales(simbolos1));
// console.log(sonIguales(simbolos2));
