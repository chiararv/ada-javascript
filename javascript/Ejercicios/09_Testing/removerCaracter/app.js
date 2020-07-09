// - Hacer una función que tome, primero, una frase y luego pida un caracter para remover de la frase ingresada.
//   Observaciones: validar que el caracter ingresado sea solo uno. Si es más de uno retornar un null.

const checkLength = (letter) =>{
  return letter.length === 1 
}

const removeLetters = (phrase, letter) =>{
if(!checkLength(letter)){
  return null
}
const filterLetters = phrase.toLowerCase().split("").filter((character) =>{
  return character != letter 
})
return filterLetters.join("")

}
removeSingleLetter = (phrase, letter) => {
  if (checkLength(letter)) {
    return phrase.toLowerCase().replace(letter, "");
  }
}
