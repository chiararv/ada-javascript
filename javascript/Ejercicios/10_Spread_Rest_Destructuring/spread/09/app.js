// ### **Ejercicio 9**

// - Escribir la función `alCuadradoYSumar`, que toma un número variable de parámetros, los eleva al cuadrado y retorna la suma de todos
// - Utilizar spread Operator

// ```js

const alCuadradoYSumar = (...num) =>{
 return num.reduce((acc, valor) =>{
    return acc += Math.pow(valor, 2)
  }, 0)
}

alCuadradoYSumar(2, 4, 3); // 29
// alCuadradoYSumar(1, 2); // 5