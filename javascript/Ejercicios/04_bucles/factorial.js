// - Crear un programa que pida ingresar un número, y muestre su factorial.Este se calcula multiplicando el mismo número y todos los números que le anteceden hasta el 1. Por ejemplo: 4 ⇒ 4 _ 3 _ 2 \* 1 = 24
/*
  1. Ingresar número por prompt
2.Guardar el número
3. Multiplicar por atrás el número
5. número a factorizar
  */

// VALE:
const inputUsuario = 5;
const factorial = (numeroUsuario) => {
  let acumulador = 1;
  for (let i = 0; i < numeroUsuario; i++) {
    acumulador = acumulador * (numeroUsuario - i);
  }
  return acumulador;
};

console.log(factorial(inputUsuario));

// BELU
// let resultado = 1;

// const factorial = () => {
//   let numero = Number(prompt("ingrese un numero"));

//   for (let i = 1; i < numero; i++) {
//     resultado += resultado * i;
//   }

//   alert(resultado);
// };
