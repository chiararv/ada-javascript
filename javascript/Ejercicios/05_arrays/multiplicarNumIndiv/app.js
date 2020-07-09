// - Crear un programa que pida ingresar números separados por espacios y luego pregunte por cuánto se desea multiplicar cada número.El programa debe devolver un mensaje con un array donde cada elemento es el resultado del elemento del primer array(en la misma posición) multiplicado por el número ingresado.Ejemplo:

const listaNumeros = [1, 2, 3, 4, 5];
const multiplicador = 2;
const arrayMultiplicado = [];

const multiplicarPor = (array, multiplicador) => {
  let num;
  for (let i = 0; i < array.length; i++) {
    num = array[i] * multiplicador;
    arrayMultiplicado.push(num);
  }
  return arrayMultiplicado;
};

console.log(multiplicarPor(listaNumeros, multiplicador));
