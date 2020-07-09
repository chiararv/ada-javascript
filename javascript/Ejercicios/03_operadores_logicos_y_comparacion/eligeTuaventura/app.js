// **📚 Elige tu propia aventura ** HACER

//   - Crear un programa que simule un juego de "Elige tu propia aventura".Debe describir un escenario y presentar opciones disponibles para actuar.Luego, a partir de la opción elegida, repetir el proceso hasta llegar a un final.El juego debe tener 1 escenario inicial con 3 opciones posibles, cada opción debe llevar a un nuevo escenario(distinto de los demás) con 3 opciones disponibles también.Estas opciones deben llevar a un final(por lo tanto hay 9 finales posibles).

/* 
vale y chiara tienen hambre 
1- comen sobras
    a- fideos recalentados
    b- tarta misteriosa
    c- pastel de papa (de la semana pasada)
2- piden delivery
  a- a su pizzeria favorita
  b- al chino mas cercano
  c- pero deciden que van a cenar helado
3- cocinan
  a- lasagna como hacia la nona
  b- milanesas con pure
  c- papas fritas
*/

let opcionUno = "comen sobras";
let opcionDos = "piden delivery";
let opcionTres = "cocinan";

let bienvenidos = alert("Juego elige tu propia aventura");
let comienzo = alert(
  "'vale y chiara tienen hambre' elige un numero: 1- comen sobras 2- piden delivery 3- cocinan"
);
let primerElecion = Number(prompt("elige 1, 2 o 3"));

if (primerElecion === 1) {
  alert(
    `Elegiste ${opcionUno}. Tus opciones son: a - fideos recalentados b - tarta misterios c - pastel de papa(de la semana pasada)`
  );
  let segundaEleccion = prompt("elegi a, b o c");
  if (segundaEleccion === "a") {
    alert("fideos recalentados");
  } else if (segundaEleccion === "b") {
    alert("tarta misteriosa");
  } else {
    alert("pastel de papa (de la semana pasada)");
  }
} else if (primerElecion === 2) {
  alert(
    `Elegiste ${opcionDos}. Tus opciones son:   a- a su pizzeria favorita
  b- al chino mas cercano
  c- pero deciden que van a cenar helado`
  );
  let segundaEleccion = prompt("elegi a, b o c");
  if (segundaEleccion === "a") {
    alert("a su pizzeria favorita");
  } else if (segundaEleccion === "b") {
    alert("al chino mas cercano");
  } else {
    alert("pero deciden que van a cenar helado");
  }
} else {
  alert(
    `Elegiste ${opcionTres}. Tus opciones son:   a- lasagna como hacia la nona
  b- milanesas con pure
  c- papas fritas`
  );
  let segundaEleccion = prompt("elegi a, b o c");
  if (segundaEleccion === "a") {
    alert("lasagna como hacia la nona");
  } else if (segundaEleccion === "b") {
    alert("milanesas con pure");
  } else {
    alert("papas fritas");
  }
}
