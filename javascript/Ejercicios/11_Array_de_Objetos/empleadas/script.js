const empleadesQueHacenGuardia = (empleades) => {
return empleades.filter((empleade) => empleade.haceGuardia)
}


const empleadesPorPais = (empleades, pais) => {
return empleades.filter((empleade) => empleade.pais === pais)
}


const empleadesPorArea = (empleades, area) => {
  return empleades.filter((empleade) => empleade.area === area)
}

const empleadesConSueldoMayorA = (empleades, sueldo) => {
  const arraySueldos = empleades.filter((empleade) => empleade.sueldo > sueldo)

  return arraySueldos.sort((a,b) => a - b)

}


const empleadesConMasLenguajes = (empleades, lenguajes) => {
  return empleades.filter((empleade) => empleade.lenguajes.length > lenguajes)
}

const sueldoPromedioEmpleades = (empleades) => {
const sumaSueldos = empleades.reduce((acc, empleade) => { return acc + empleade.sueldo }, 0)

return sumaSueldos / empleades.length

}


const sueldoPromedioPorSeniority = (empleades, seniority) => {
const empleadosPorSeniority = empleades.filter((empleade) => empleade.seniority === seniority)

return empleadosPorSeniority.reduce((acc, empleade)  => { return acc + empleade.sueldo }, 0)/empleadosPorSeniority.length
}

const errorEnProduccion = (empleades) => {
  return empleades.map(empleade => ({...empleade,haceGuardia:true}))
}

const subirDeCategoria = (empleade) => {


const nuevoObj = {...empleade}

if (empleade.seniority == "Senior") {   
  return; 
}

  const seniority =  ["Trainee", "Junior", "Semisenior", "Senior"]
  const i = seniority.indexOf(nuevoObj.seniority)
  nuevoObj.seniority = seniority[i +1]

  nuevoObj.sueldo += 10000

 return nuevoObj
}


const agregarTecnologias = (empleades) => {

  const nuevoArr = [...empleades];
  return nuevoArr.map(empleade => {
    return { ...empleade, tecnologias : ["GIT", "Node.JS"] }
  });
}

const empleadeSabeLenguaje = (empleade, lenguaje) => {
  return empleade.lenguajes.includes(lenguaje)
}

const empleadesQueSabenLenguaje = (empleades, lenguaje) => {
return empleades.filter(empleade => empleadeSabeLenguaje(empleade, lenguaje))
}


const empleadesQueSabenLenguajes = (empleades, lenguajesRequeridos) =>{
  return empleades.filter(empleade => lenguajesRequeridos.every(lenguaje => empleade.lenguajes.includes(lenguaje)))
}

const empleadesQueSabenAlgunosLenguajes = (empleades, lenguajesRequeridos) =>{
  return empleades.filter(empleade => lenguajesRequeridos.some(lenguaje => empleade.lenguajes.includes(lenguaje)))
}

const empleadesConMejorSueldo = (empleades) => {
  const sueldos = empleades.map((empleade, indice) => ({ sueldo: empleade.sueldo, indiceEmpleado: indice }))
  const mejoresSueldos = (sueldos.sort((a, b) => b.sueldo - a.sueldo)).slice(0, 10);



  return mejoresSueldos.map(sueldo => {

      return empleades[sueldo.indiceEmpleado]
  })


}
