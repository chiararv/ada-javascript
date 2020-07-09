const getShortestWords = (phrase) => {

  const phraseArray = phrase.split(" ")

  const wordLength = phraseArray.reduce((acc, valor) => {
    return acc.length < valor.length ? acc.length : valor.length
  });



  return phraseArray.filter((word) => {
    return word.length === wordLength;

  })
}