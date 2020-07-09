// - Hacer un contador con las siguientes opciones: sumar / restar + 1, sumar / restar + 10, sumar / restar + 100. El valor mínimo del contador es 0.
/* Elemts en DOM
p o un h1 h2 
*/
// const contador = document.getElementById('contador');
// const btn100 = document.getElementById('btn100');
// const btn10 = document.getElementById('btn10');
// const btn1 = document.getElementById('btn1');
// const btn_1 = document.getElementById('btn-1');
// const btn_10 = document.getElementById('btn-100');

// let contadorLogico = 0;
// contador.innerHTML = contadorLogico;

// const sumarContador = (num) => {
//     contadorLogico += num;
//     contador.innerHTML = contadorLogico;
// }

// btn100.addEventListener('click', () => {
//     sumarContador(100);
// })
// btn10.addEventListener('click', () => {
//     sumarContador(10);
// })
// btn1.addEventListener('click', () => {
//     sumarContador(1);
// })
// btn_100.addEventListener('click', () => {
//     sumarContador(100);
// })
// btn_10.addEventListener('click', () => {
//     sumarContador(100);
// })
// btn_1.addEventListener('click', () => {
//     sumarContador(100);
// })
const contador = document.getElementById("contador");
const btn100 = document.querySelector("#btn100");
const btn10 = document.querySelector("#btn10");
const btn1 = document.querySelector("#btn1");
const btn_1 = document.querySelector("#btn_1");
const btn_10 = document.querySelector("#btn_10");
const btn_100 = document.querySelector("#btn_100");

let contadorLogico = 0;
contador.innerHTML = contadorLogico;

const sumarContador = (num) => {
  if (contadorLogico + num >= 0) {
    contadorLogico += num;
  } else {
    contadorLogico = 0;
  }
  contador.innerHTML = contadorLogico;
};

btn100.addEventListener("click", () => sumarContador(100));
btn10.addEventListener("click", () => sumarContador(10));
btn1.addEventListener("click", () => sumarContador(1));
btn_1.addEventListener("click", () => sumarContador(-1));
btn_10.addEventListener("click", () => sumarContador(-10));
btn_100.addEventListener("click", () => sumarContador(-100));

// - Hacer un contador con las siguientes opciones: sumar/restar +1, sumar/restar +10, sumar/restar +100. El valor mínimo del contador es 0.
// const contador = document.getElementById("contador");
// const btn100 = document.querySelector("#btn100");
// const btn10 = document.querySelector("#btn10");
// const btn1 = document.querySelector("#btn1");
// const btn_1 = document.querySelector("#btn-1");
// const btn_10 = document.querySelector("#btn-10");
// const btn_100 = document.querySelector("#btn-100");

// let valorContador = 0;

// contador.innerHTML = valorContador;

// let valorBoton = 0;

// let cambiarValorBoton = (btn) => {
//   if (btn === btn100) {
//     valorBoton = 100;
//   } else if (btn === btn10) {
//     valorBoton = 10;
//   } else if (btn === btn1) {
//     valorBoton = 1;
//   } else if (btn === btn_100) {
//     valorBoton = -100;
//   } else if (btn === btn_10) {
//     valorBoton = -10;
//   } else if (btn === btn_1) {
//     valorBoton = -1;
//   }
// };

// let actualizarContador = () => {
//   valorContador += valorBoton;
//   contador.innerHTML = valorContador;
// };

// btn100.addEventListener("click", () =>
//   actualizarContador(cambiarValorBoton(btn100))
// );
// btn10.addEventListener("click", () =>
//   actualizarContador(cambiarValorBoton(btn10))
// );
// btn1.addEventListener("click", () =>
//   actualizarContador(cambiarValorBoton(btn1))
// );
// btn_100.addEventListener("click", () =>
//   actualizarContador(cambiarValorBoton(btn_100))
// );
// btn_10.addEventListener("click", () =>
//   actualizarContador(cambiarValorBoton(btn_10))
// );
// btn_1.addEventListener("click", () =>
//   actualizarContador(cambiarValorBoton(btn_1))
// );
// - Hacer un login,se deber crear un form,donde se ingrese usuario y password,en caso de ser correcto,mostrar un alert que diga estas logeado,en caso contrario mostrar un mensaje en pantalla que diga usuario no registrado.

const user = document.getElementById("user");
const password = document.getElementById("password");
const btn = document.getElementById("btn");
const texto = document.getElementById("texto");

const user1 = "pepito";
const password1 = "abcd";

// const usuarios = [["pepe", 123], []]

btn.addEventListener("click", (event) => {
  event.preventDefault();
  if (user.value === user1 && password.value === password1) {
    texto.innerHTML = "ingreso exitoso";
  } else {
    texto.innerHTML = "datos incorrectos";
  }
});
