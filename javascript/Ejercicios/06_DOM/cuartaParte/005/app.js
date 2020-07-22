// - Crear una lista que contenga imagenes, de las
// - cuales se va a mostrar solo una.
// - Crear una funcion que me permita ir cambiando
// - de imagen cada vez que la ejecuto, segun el orden
// - en que estan declaradas.

const listElement = document.getElementById("list").children;
const parentElement = document.getElementById("list");

let currentN = 0;

const showImg = () => {
  for (let i = 0; i < listElement.length; i++) {
    listElement[i].style.display = i != currentN ? "none" : "block";
  }
  currentN = currentN < listElement.length - 1 ? currentN + 1 : 0;

};

// listElement.forEach((i) => {
//     listElement[i].addEventListener('click' , showImg)
// })

parentElement.addEventListener('click' , showImg)
