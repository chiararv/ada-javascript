// ingresar, por separado, nombre, apellido, edad, nacionalidad, documento, y muestre luego un mensaje que diga: "Nuevo usuario agregado al sistema:" y liste todos los datos juntos.

const nombre = prompt("ingrese su nonmbre");
const apellido = prompt("ingrese su apellido");
const edad = prompt("ingrese su edad");
const nacionalidad = prompt("ingrese su nacionalidad");
const documento = prompt("ingrese su documento");

document.getElementById("nombre").innerHTML = `${nombre}`;
document.getElementById("apellido").innerHTML = `${apellido}`;
document.getElementById("edad").innerHTML = `${edad}`;
document.getElementById("nacionalidad").innerHTML = `${nacionalidad}`;
document.getElementById("documento").innerHTML = `${documento}`;

// alert(
//   `Nuevo usuario agregado al sistema: ${nombre}, ${apellido} ${edad} ${nacionalidad}, ${documento}`
// );
