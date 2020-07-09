// - Crear un programa que pregunte si se desea buscar el mayor o el menor número de un conjunto.Luego, preguntar entre cuántos se desea buscar.Ir pidiendo ingresar uno por uno la cantidad de números que se eligió, y al finalizar mostrar el número mayor o menor de todos los ingresados según el elegido.

let mayorMenor = prompt("desea buscar el mayor o el menor?");
let numeros = prompt("ingresa los numeros");
// console.log(numeros);
let stArray = numeros.split(",");

// console.log(stArray);

let intArray = [];
for (i = 0; i < stArray.length; i++) {
  intArray.push(+stArray[i]);
}

// console.log(intArray);
const max = () => {
  let mayor = intArray[0];
  for (i = 0; i < intArray.length; i++) {
    let numActual = intArray[i];
    if (mayor < numActual) {
      mayor = numActual;
    }
  }
  alert(mayor);
};

const min = () => {
  let menor = intArray[0];
  for (i = 0; i < intArray.length; i++) {
    let numActual = intArray[i];
    if (numActual < menor) {
      menor = numActual;
    }
  }
  alert(menor);
};

const resultado = () => {
  if (mayorMenor === "mayor") {
    max();
  } else if (mayorMenor === "menor") {
    min();
  } else {
    alert("opcion invalida");
  }
};

resultado();
