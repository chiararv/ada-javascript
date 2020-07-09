// ## 03 - ordenar letras de palabra

// - Escribir una función que reciba una palabra e imprima sus letras ordenadas alfabéticamente.(pista split,join,sort)
const sortLetters = (word) => {
  return word.split("").sort().join("");
} 