const arrayUsuario = [1, 2, 3, 4, 5];
const arrayInvertido = [];

const invertir = () => {
  for (let i = arrayUsuario.length; i > 0; --i) {
    arrayInvertido.push(i);
    console.log(arrayInvertido);
  }
};
//     variables
// numeros => string que voy a convertir a array -> lista de numeros -> hardcodeado(string fijo) o prompt(ingrese el usuario)

// axiliar que guarde en sentido inverso los numero

// recorrer el array for --i
//                        numeros.length - i

// const arrayUsuario = prompt("Ingrese números:").split(" ");
// const arrayInvertido = [];
// const invertir = () => {
//     for (let i = arrayUsuario.length - 1; i >= 0; --i) {
//         arrayInvertido.push(arrayUsuario[i]);
//     }
// };
// invertir();
// alert(arrayInvertido);
// ahora si esta bien
