const firstItem = document.getElementById("first-item");
const secondItem = document.getElementById("second-item");
const thirdItem = document.getElementById("third-item");
const fourthItem = document.getElementById("fourth-item");
const fifthItem = document.getElementById("fifth-item");

console.log(firstItem, secondItem, thirdItem, fourthItem, fifthItem);

const paragraph = document.getElementsByClassName("paragraph");

paragraph[0].style.color = "blue";

const title = document.getElementsByClassName("title");

title[0].classList.toggle("title--red");

const kindButton = document.querySelector("#kind-button");

const saludar = () => {
  alert("hola");
};
const despedir = () => {
  alert("chau");
};

kindButton.addEventListener("click", () => {
  saludar();
  despedir();
});

const escribeEnConsola = document.getElementById("escribe-en-consola");

escribeEnConsola.addEventListener("keypress", () => {
  console.log(event.target.value);
});

const reflejaInput = document.getElementById("refleja-input");
const escribeEnH1 = document.getElementById("escribe-en-h1");

escribeEnH1.addEventListener("keyup", (event) => {
  reflejaInput.innerHTML = event.target.value;
});

const titulo = document.getElementById("titulo");
const botonColor = document.getElementById("boton-color");

botonColor.addEventListener("click", () => {
  titulo.classList.toggle("title--violet");
});

const tituloCambiaTamaño = document.getElementById("titulo-cambia-tamaño");
const btnAchicar = document.getElementById("btn-achicar");
const btnAgrandar = document.getElementById("btn-agrandar");

let tamañoInicial = 16;

btnAgrandar.addEventListener("click", () => {
  tamañoInicial += 10;
  tituloCambiaTamaño.style.fontSize = tamañoInicial + "px";
});
btnAchicar.addEventListener("click", () => {
  tamañoInicial -= 10;
  tituloCambiaTamaño.style.fontSize = tamañoInicial + "px";
});
