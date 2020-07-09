const title = document.getElementById("title");
const paragraph = document.getElementById("paragraph");
const btn = document.getElementById("btn");

const cambiarColor = (elemento, color = colorRandom()) => {
  elemento.style.backgroundColor = color;
};

const colorRandom = () => {
  const colores = ["pink", "yellow", "blue", "violet", "green"];
  let indiceRandom = Math.floor(Math.random() * colores.length);
  return colores[indiceRandom];
};

cambiarColor(title);
cambiarColor(paragraph);
cambiarColor(btn, "green");
