// - Crear una función (arrow function) llamada `mostrarInfo`
// - `mostrarInfo` recibe un objeto y retorna la cadena “Tu nombre completo es ” concatenado con el valor de la propiedad nombre, un espacio y el valor de la propiedad apellido
// - Tenés que usar destructuring dentro de la función.
const persona = {
  nombre: "carla",
  apellido: "perez",
}


const mostrarInfo = ({nombre, apellido})=>{

return "tu nombre completo es " + nombre +" "+apellido
}

mostrarInfo(persona);