// - Hacer un contador con las siguientes opciones: sumar/restar +1, sumar/restar +10, sumar/restar +100. El valor mínimo del contador es 0.
const btn1 = document.getElementById("btn1");
const btn10 = document.getElementById("btn10");
const btn100 = document.getElementById("btn100");
const btn_1 = document.getElementById("btn_1");
const btn_10 = document.getElementById("btn_10");
const btn_100 = document.getElementById("btn_100");
const result = document.getElementById("result");

let contador = 0;
result.innerHTML = contador;

const sumarContador = (num) => {
  contador + num >= 0 ? contador += num : contador = 0;
  result.innerHTML = contador;
};

btn1.addEventListener("click", () => sumarContador(1));
btn10.addEventListener("click", () => sumarContador(10));
btn100.addEventListener("click", () => sumarContador(100));

btn_1.addEventListener("click", () => sumarContador(-1));
btn_10.addEventListener("click", () => sumarContador(-10));
btn_100.addEventListener("click", () => sumarContador(-100));


