// ### 08 - toCamelCase

// ```javascript
// /**
//  * @name toCamelCase
//  * @description Convierte un string en dash-case a camelCase
//  *
//  * @param {string} str - El string en dash-case a convertir
//  * @returns {String} El string en camelCase convertido
//  *
//  * @example
//  *  toCamelCase('javascript-es-raro') // returns 'javascriptEsRaro'
//  */
// ```

const camelCaseConverter = (phrase) =>{
  const phraseArray = phrase.toLowerCase().split("-")

  const camelCase = phraseArray.reduce((acc, valor) => acc += uppercaseWord(valor))

  return camelCase
}

const uppercaseWord = (palabra) =>{
  const letraMayusc =  palabra[0].toUpperCase();
  const resto = palabra.slice(1);
  const palabraMayusc = letraMayusc.concat(resto);
  return palabraMayusc
}


// - pista hay que dividir por `-`
// - leer siguinte guia https://www.geeksforgeeks.org/how-to-make-first-letter-of-a-string-uppercase-in-javascript/#:~:text=There%20are%20number%20of%20ways,the%20all%20letters%20to%20uppercase.
