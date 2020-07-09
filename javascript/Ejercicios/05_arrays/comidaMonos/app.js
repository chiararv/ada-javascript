// **Comida para monos**

// - Crear un programa que permita ingresar una lista de 🐵(monos) y **🍌**(bananas). Preguntar luego cuántas bananas come cada mono. Mostrar en un mensaje si hay suficientes bananas para cada mono. Ejemplo:

// // Ingresar monos y bananas: 🐵🍌🍌🍌🐵🍌🐵🍌
// // Cuántas bananas come un mono?: 2
// // ¡Oh no!¡No hay suficientes bananas para los monos! 😭

let monosYBananas = prompt(
  "Ingreese emojis mosnos y bananas separados por un espacio"
).split(" ");

let bananasPorMono = Number(prompt("cuantas bananas come cada mono?"));
let contadorMonos = 0;
let contadorBananas = 0;

for (let i = 0; i < monosYBananas.length; i++) {
  if (monosYBananas[i] === "🐵") {
    contadorMonos++;
    console.log();
  }
  if (monosYBananas[i] === "🍌") {
    contadorBananas++;
  }
}

let bananasNecesarias = bananasPorMono * contadorMonos;
console.log(`banans necesarias ${bananasNecesarias}`);

const haySuficentes =
  contadorBananas >= bananasNecesarias
    ? "tenes suficientes bananas!"
    : "¡Oh no!¡No hay suficientes bananas para los monos! 😭";

alert(haySuficentes);
