// - Crear una función que dada una persona y una búsqueda de empleo, devuelva `true` si la persona se ajusta a dicha búsqueda. Ambos objetos tienen la siguiente estructura:

// ```javascript
persona = {
  experience: 4,
  languages: ["JavaScript", "HTML","CSS"],
  location: ["Buenos Aires"],
  remuneration: 35000
}

busqueda = {
  experience: 1,
  languages: ["JavaScript", "HTML"],
  location: ["Buenos Aires"],
  remuneration: 40000
}

const isMatch = (persona, busqueda) => {
  let cumpleExperiencia = persona.experience >= busqueda.experience;
  let cumpleLenguajes = (busqueda.languages).reduce((anterior, lenguaje) => {
    return anterior && (persona.languages).includes(lenguaje)
  }, true);
  let cumpleLocacion = (busqueda.location).reduce((anterior, locacion) => {
    return anterior && (persona.location).includes(locacion)
  }, true);
  let cumpleRemuneracion = persona.remuneration <= busqueda.remuneration;
  return cumpleExperiencia && cumpleLenguajes && cumpleLocacion && cumpleRemuneracion;
}
















