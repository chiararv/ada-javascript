// - Crear un programa que tenga un menú con las siguientes opciones:
//   - ** AGREGAR TAREA:** debe pedir al usuario ingresar una tarea y agregarla a la lista de tareas
//   - ** MODIFICAR TAREA:** debe pedir al usuario ingresar el número de tarea que se desea modificar, mostrarla, y pedir que ingrese la tarea a reemplazarla o modificarla
//     - ** ELIMINAR TAREA:** debe pedir al usuario ingresar el número de tarea a eliminar, mostrarla, y pedirle confirmar si desea eliminarla o no
//       - ** VER TAREAS:** debe listar todas las tareas hasta el momento
//         - ** SALIR:** debe terminar la ejecución del programa
//           - El programa debe mostrar el menú de opciones, y permitir ingresar una opción.Si la opción ingresada es incorrecta, debe mostrar nuevamente el menú.Si se elige SALIR, debe terminar el programa.Si se elige alguna de las otras opciones, debe realizar las acciones correspondientes, y una vez terminada, volver al menú de opciones.
/*
1- declarar variable tarea
2- crar menu
3- crear fx opciones
4-pedir al user ingresar tarea y agregarlaa lista
5-ingresar indece d tarea a modificar, ingresar cambios y modificar tarea
6- ingresar ix de tarea a leiminar, mostararla, pedir confirmacion, eliminar
7-mostrar todo
*/

let tareas = [];

const agregarTarea = () => {
  let nuevaTarea = prompt("ingresar nueva tarea");
  tareas.push(nuevaTarea);
};

const modificarTarea = () => {
  let posicionTarea = Number(prompt("que numero de tarea desea modificar?"));
  let tareaModificada = prompt("ingrese la modificacion");
  tareas.splice(posicionTarea, 1, tareaModificada);
  // tareas[posicionTarea]= tareaModificada;
};

const eliminarTarea = () => {
  let tareaAEliminar = prompt("que tarea desea borrar?");
  let confirmacion = confirm(tareas[tareaAEliminar]);
  if (confirmacion) {
    tareas.splice(tareaAEliminar, 1);
  }
};

const mostrarTareas = () => {
  alert(tareas);
};

let acciones = "";

const menuTareas = () => {
  while (acciones !== "salir") {
    acciones = prompt(
      "seleciona una de las siguientes oppciones: agregar tarea, moficar tarea, eliminar tarea, ver tareas o salir"
    );
    switch (acciones) {
      case "agregar tarea":
        agregarTarea();
        break;
      case "modificar tarea":
        modificarTarea();
        break;
      case "eliminar tarea":
        eliminarTarea();
        break;
      case "ver tareas":
        mostrarTareas();
        break;
      case "salir":
        alert("chau");
        break;
      default:
        alert("opcion incorrecta");
    }
  }
};
menuTareas();
