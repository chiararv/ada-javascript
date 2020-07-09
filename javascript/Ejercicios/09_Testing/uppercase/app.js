// Escribir una función que reciba una frase e imprima la misma con la primera letra de cada palabra en mayúsculas.
const capitalizedFrase = (frase) =>{
  const arrayFrase = frase.split(" ")

  const newFrase = arrayFrase.map(frase => uppercaseWord(frase));
  
 const joinedFrase = newFrase.join(" ");
 return joinedFrase

//  let joinedFrase = "";

//  for (const palabra of  arrayFrase){
//    joinedFrase += uppercaseWord(palabra) + " ";  
//  }
//   return joinedFrase.trim();
}



const uppercaseWord = (palabra) =>{
  const letraMayusc =  palabra[0].toUpperCase();
  const resto = palabra.slice(1);
  const palabraMayusc = letraMayusc.concat(resto);
  return palabraMayusc
}
