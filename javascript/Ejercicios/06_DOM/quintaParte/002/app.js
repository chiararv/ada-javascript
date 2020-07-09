// // 002
// /\*\*

//     - Tomar el input del ejercicio anterior y hacer que
//         - cambie sus bordes de color y de ancho cuando
//             - hacemos foco(focus, hacemos click en el recuadro) en el,
//                 - y que esos mismos bordes y color vuelvan al
//                     - estado anterior cuando sacamos el foco(blur).
// \* /

const inputTareaNueva = document.getElementById("nuevaTarea");
const btnAgregarTarea = document.getElementById("agregarTarea");
const lista = document.getElementById("lista");

inputTareaNueva.addEventListener("focus", () => {
  inputTareaNueva.classList.toggle("foco");
});
inputTareaNueva.addEventListener("blur", () => {
  inputTareaNueva.classList.toggle("foco");
});

const eliminar = (evento) => {
  evento.parentNode.remove();
};
const tachar = (evento) => {
  console.log(evento);
  console.log(evento.parentNode);
  evento.parentNode.classList.toggle("tachado");
  // evento.parentNode.children[1].classList.toggle("tachado");
};

btnAgregarTarea.addEventListener("click", (evento) => {
  lista.innerHTML += `
        <li>
        <div>
        <input onclick="tachar(this)" type="checkbox" name="" id="">
        <span>${inputTareaNueva.value}</span>
        </div>
            <button onclick="eliminar(this)">Eliminar tarea</button>
        </li>
`;
});
