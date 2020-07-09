// /**
//  * @name uncensor
//  * @description Dado un texto censurado y una lista de letras en orden recupera el texto censurado reemplazando cada letra
//  * censurada por su correspondiente
//  *
//  * @param {string} censoredText - El texto censurado a recuperar. Las letras censuradas se representan con *
//  * @param {string[]} censoredLetters - Letras censuradas en orden a como corresponde al {censoredText}
//  * @returns {string} El texto sin censurar
//  *
//  * @example
//  *  uncensor('*di* Ja**Scr*p*', ['O', 'o', 'v', 'a', 'i', 't']) // returns 'Odio JavaScript'
//  */
const reemplazaAsteriscos = (phrase, letras) => {
  const array = phrase.split("")

  let acc = 0

  for (const valor in array) {

    if (array[valor] == "*") {
      array[valor] = letras[acc];
      acc++
    }

  }

  return array.join("");
} 