// // 001
// /\*\*

//     - Crear un TODO list, que tenga
//         - 1.  un input para agregar nuevos TODO
//             - 2.  Este input debe tener un button para poder
//                 - agregar el TODO desde el input
//                     - 3.  un button por cada TODO de la lista
//                         - para borrar el mismo.
// - 4.  Un checkbox, antes del texto de cada TODO,
//     - que me permita tachar el elemento de la lista
//         - como resuelto.
// \* /

const inputTareaNueva = document.getElementById("nuevaTarea");
const btnAgregarTarea = document.getElementById("agregarTarea");
const lista = document.getElementById("lista");

const eliminar = (evento) => {
  evento.parentNode.remove();
};
const tachar = (evento) => {
  console.log(evento);
  console.log(evento.parentNode);
  // evento.parentNode.classList.toggle("tachado");
  evento.parentNode.children[1].classList.toggle("tachado");
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
