const riddle1 = " No es cama ni es león, y desaparece en cualquier rincón.";
const riddle2 =
  "En la ciudad o el campo es un amigo del hombre.Adivina cuál es este animal sin que te diga su nombre.";
const riddle3 =
  "Es la reina de los mares, su dentadura es muy buena, y por no ir nunca vacía, siempre dicen que va llena.";
const riddle4 =
  "En el circo lo veo, en el zoo, también. Tiene la nariz más grande que en el mundo pueda haber.";
const riddle5 = "Oro parece, plata no es.Quien no lo adivine listo no es.";

const getRandomRiddle = () => {
  const random = Math.random();

  if (random <= 0.2) {
    return riddle1;
  }
  if (random <= 0.4) {
    return riddle2;
  }
  if (random <= 0.6) {
    return riddle3;
  }
  if (random <= 0.8) {
    return riddle4;
  }
  if (random <= 1) {
    return riddle5;
  }
};

const currentRiddle = getRandomRiddle();
alert(currentRiddle);

const correctAnswer = (par) => {
  if (par == riddle1) {
    return "camaleon";
  }
  if (par == riddle2) {
    return "perro";
  }
  if (par == riddle3) {
    return "ballena";
  }
  if (par == riddle4) {
    return "elefante";
  }
  if (par == riddle5) {
    return "platano";
  }
};
const currentAnswer = correctAnswer(currentRiddle);
const userAnswer = prompt("respuesta:");

console.log(userAnswer);
console.log(currentAnswer);

const gameResult = (ans) => {
  if (ans == currentAnswer) {
    alert("correcto!");
  } else if (ans !== currentAnswer) {
    alert("incorrecto");
  } else {
    alert("error");
  }
};
gameResult(userAnswer);

const userAnswer = prompt("Respuesta:");
const resultado = () => {};
