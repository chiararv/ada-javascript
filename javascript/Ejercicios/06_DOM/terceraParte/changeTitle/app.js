// /\*\*

//     - Escribir una funcion que se llame changeTitle.
// - Para esto deberemos tener dos elementos,
//     - un input, y un h1.
// - Debemos tomar el valor del input y ponerlo como
//     - el title.Si ya existe texto, reemplazarlo.
// \* /

const title = document.getElementById("title");
const input = document.getElementById("input");

input.addEventListener("keyup", () => {
  title.textContent = input.value;
});
