// - Hacer una función que reciba una frase y devuelva el número de vocales que tiene la misma.(pista indexOf,findIndex o reduce)



const vowels = (phrase) =>{

  const phraseArray = phrase.split("");

  return phraseArray.reduce((totalVowels, letter) =>{
    let allVowels = ["a", "e", "i", "o", "u"];
    allVowels.includes(letter) ? totalVowels++ : totalVowels
    return totalVowels
  }, 0)
}


