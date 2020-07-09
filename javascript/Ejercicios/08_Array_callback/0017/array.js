// ## Ejercicio Array 017

//   - Tenemos un array llamado`womenInTech` con nombres de mujeres influyentes en la tecnología.
// - Queremos transformar el array en un string sin usar ** join **, separando los nombres con un guión y guardando el string resultante en la variable`nombresSeparadosPorGuion`

const womenInTech = [
  "Ada Lovelace",
  "Hedy Lamarr",
  "Grace Hopper",
  "Radia Perlman",
  "Janie Tsao",
  "Sheryl Sandberg",
  "Susan Kare",
  "Parisa Tabriz",
];
const nombresSeparadosPorGuion = womenInTech.toString().replace(/,/g, "-");

// aca va la solucion

console.log(nombresSeparadosPorGuion);
// deberia mostrar "Ada Lovelace - Hedy Lamarr - Grace Hopper - Radia Perlman - Janie Tsao - Sheryl Sandberg - Susan Kare - Parisa Tabriz"
