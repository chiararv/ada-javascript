// - Crear un programa que pida al usuario ingresar un número, y luego el porcentaje que se desea obtener del mismo.Devolver un mensaje muestre el porcentaje de dicho número.
let numero = prompt(`Ingresa un numero`);
let porcentajeDeseado = prompt(`Ingresa el porcentaje deseado`);

let porcentaje = (porcentajeDeseado * numero) / 100;

alert(`el resultado es ${porcentaje}`);
