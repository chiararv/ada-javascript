// - Crear un programa que pregunte al usuario cuántos kilos de helado va a comprar y mostrar en un mensaje la cantidad de sabores disponibles según la opción elegida.Opciones:
// - 1 / 4kg: 2 sabores.
//   - 1 / 2kg: 3 sabores.
//   - 3 / 4kg: 4 sabores.
//   - 1kg: 5 sabores.

//     Luego, permitirle ingresar la cantidad de sabores correspondientes por separado y mostrar al finalizar un mensaje con la cantidad de kg y los gustos escogidos.

const kilograms = document.getElementById("kilograms");
const btn = document.getElementById("btn");
const cantidadSabores = document.getElementById("cantidadSabores");
const eleccion = document.getElementById("eleccion");
const firstFlavour = document.getElementById("firstFlavour");
const fsecondFlavour = document.getElementById("secondFlavour");
const thirdFlavour = document.getElementById("thirdFlavour");
const fourthFlavour = document.getElementById("fourthFlavour");
const fifthFlavour = document.getElementById("fifthFlavour");
const confirm = document.getElementById("confirm");

btn.addEventListener("click", (event) => {
  if (kilograms.value === "1/4") {
    cantidadSabores.innerHTML = "2";
  } else if (kilograms.value === "1/2") {
    cantidadSabores.innerHTML = "3";
  } else if (kilograms.value === "3/4") {
    cantidadSabores.innerHTML = "4";
  } else if (kilograms.value === "1") {
    cantidadSabores.innerHTML = "5";
  }
});

confirm.addEventListener("click", (event) => {
  eleccion.innerHTML = `${firstFlavour.value} ${secondFlavour.value} ${thirdFlavour.value} ${fourthFlavour.value} ${fifthFlavour.value}`;
});

// btn.addEventListener("click", (event) => {
//   event.preventDefault();
//   if (user.value === user1 && password.value === password1) {
//     texto.innerHTML = "ingreso exitoso";
//   } else {
//     texto.innerHTML = "datos incorrectos";
//   }
// });
