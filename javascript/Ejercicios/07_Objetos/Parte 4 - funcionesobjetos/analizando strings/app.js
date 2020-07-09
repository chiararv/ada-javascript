// ## Analizando strings

// - Crear una función que dado un string devuelva un objeto con la cantidad de letras, espacios y números que contiene. Cualquier cosa que no sea un número o un espacio cuenta como una letra

// ```javascript
// getStringInfo("H3ll0 Wor1d"); // returns { LETTERS:  7, DIGITS: 3, SPACES: 1 }
// ```


const getStringInfo = (string) =>{
  let letters= 0;
  let digits = 0 ;
  let spaces = 0;

  string.split("").forEach(element => {

    if (element == " "){
      spaces++
    }
    else if (!isNaN(Number(element))){
      digits++;
    }
    else{
      letters++
    }
    
  }); 
  return {
    LETTERS : letters,
    DIGITS: digits,
    SPACES: spaces
  }

}
