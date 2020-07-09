// ## Analizando párrafos

// - Crear una función que dado un string devuelva un objeto con la cantidad de letras, palabras y oraciones.

// ```javascript
// getParagraphInfo("Do. Or do not. There is no try."); // returns { LETTERS:  21, WORDS: 8, SENTENCE: 3 }
// ```


const contadorLetras = (string) =>{
  let letters= 0;

  string.split("").forEach(element => {
    if(element != " " && element != "."){
      letters++
    }
  });
  return letters
}

const contadorPalabras = (string) =>{
  let palabras = 0;
  //return string.split(" ").length
  string.split(" ").forEach(element => {
    palabras++ 
  });
  return palabras
}

const contadorOraciones = (string) =>{
  let oraciones = 0;
  const array = string.split(".");
  const arrayFiltrado = array.filter((oracion) => oracion!= "");

  // return arrayFiltrado.length

  arrayFiltrado.forEach(element => {
    oraciones++ 
  })

  return oraciones
}

const getParagraphInfo = (string) =>{

  return {
    LETTERS:  contadorLetras(string), WORDS: contadorPalabras(string), SENTENCE: contadorOraciones(string)
  }


}
