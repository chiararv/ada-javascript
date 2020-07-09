/*
- Crear un programa que simule un Tamagochi (mascota virtual). Debe tener 4 variables: salud, felicidad, limpieza, energía, cuyos valores pueden ir entre 1 y 10. El programa debe iniciar mostrando un mensaje con el nombre del tamagochi y los valores de cada variable (que son asignados aleatoriamente). Luego, debe mostrar las siguientes posibles acciones a realizar, que modifican los valores de la siguiente forma:
  - ALIMENTAR: +3 energía, +2 felicidad
  - JUGAR: +2 felicidad, -2 energía, -1 limpieza
  - DORMIR: +5 energía, +2 salud, -2 limpieza
  - VACUNAR: +5 salud, -6 felicidad
  - BAÑAR: +3 salud
  - RETAR: -3 felicidad
  - ACARICIAR: +4 felicidad

Cuando el usuario selecciona una, debe mostrar el valor final de las variables.

En pantalla se debe mostrar los stast,cada 5 segundos se reduce la salud,felicidad y limpieza.
Todas las opciones se debe representar como botones.
*/

const btnAlimentar = document.getElementById("ALIMENTAR");
const btnJugar = document.getElementById("JUGAR");
const btnDormir = document.getElementById("DORMIR");
const btnVacunar = document.getElementById("VACUNAR");
const btnBañar = document.getElementById("BAÑAR");
const btnRetar = document.getElementById("RETAR");
const btnAcariciar = document.getElementById("ACARICIAR");
const energia = document.getElementById("energia");
const felicidad = document.getElementById("felicidad");
const salud = document.getElementById("salud");
const limpieza = document.getElementById("limpieza");


const getRandomNumber = () => {
  return Math.ceil(Math.random() * 10);

}

const variables = [energia, felicidad, salud, limpieza]
variables.forEach(variable => {
  variable.textContent = getRandomNumber()
});

const alimentar = () => {
  felicidad.textContent = Number(felicidad.textContent) + 2;
  energia.textContent = Number(energia.textContent) + 3;
}
const alimentar = (param) => {
  felicidad.textContent = Number(felicidad.textContent) + 2;
  energia.textContent = Number(energia.textContent) + 3;
}

// - DORMIR: +5 energía, +2 salud, -2 limpieza


