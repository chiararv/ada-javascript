// - Escribir una funcion que nos permita pasarle un elemento
//     - y un color, y le cambie el color de fondo al elemento.
// \* /

const title = document.getElementById("title");
const paragraph = document.getElementById("paragraph");
const btn = document.getElementById("btn");

const cambiarColor = (elemento, color) => {
  elemento.style.backgroundColor = color;
};

cambiarColor(title, "blue");
cambiarColor(paragraph, "pink");
cambiarColor(btn, "green");
