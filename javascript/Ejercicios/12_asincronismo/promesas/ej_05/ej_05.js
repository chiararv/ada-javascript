const pasarAMayusculas = (arrayStrings) => {
  return new Promise((resolve, reject) => {
    if (arrayStrings.every(elem => typeof (elem) === "string")) {
      resolve(arrayStrings.map(e => e.toUpperCase()))

    } else {
      reject("No se puede pasar a Mayusculas porque no es un string.")
    }
  })

};

const palabras = ['nirvana', 'foo fighters', 'pearl jam'];
const arrayMix = ['blind melon', 44, true]


const ordenarPalabras = (arrayStrings) => {
  return new Promise(resolve => {
    resolve(arrayStrings.sort());
  })
}

pasarAMayusculas(palabras)
  .then(ordenarPalabras)
  .then((result) => console.log(result))
  .catch(error => console.log(error))

pasarAMayusculas(arrayMix)
  .then(ordenarPalabras)
  .then((result) => console.log(result))
  .catch(error => console.log(error))