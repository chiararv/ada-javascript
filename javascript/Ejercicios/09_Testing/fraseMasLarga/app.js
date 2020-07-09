// - Escribir una función que reciba una frase e imprima la palabra mas larga de la misma(pista reduce)

const largestWord = (phrase) => {
  const separatedPhrase = phrase.split(" ");
  return separatedPhrase.reduce((largest, word) => largest.length > word.length ? largest : word
  )
}