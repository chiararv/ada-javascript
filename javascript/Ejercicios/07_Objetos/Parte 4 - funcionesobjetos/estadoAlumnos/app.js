// ### **Estado alumnxs**

// - Estamos diseñando un nuevo sistema para una facultad, y tenemos la información de las materias para cada alumnx en objetos donde cada propiedad es una materia que contiene un array con las notas de los resultados de los parciales


// - Nos pidieron generar un informa que muestre las materias aprobadas (promedio de notas >= 4) y desaprobadas (promedio de notas < 4)
// - Para implementar este reporte, vamos a tener que desarrollar una función que tome como parámetro de entrada un objeto con las materias y sus notas, y nos retorne un objeto con dos propiedades: `aprobadas` y `desaprobadas`
// - Cada propiedad es un array que contiene el nombre de las materias que aprobaron o desaprobaron respectivamente

// const multiplosDe10 = precios.filter((precio)=>{
//   return (precio % 10) === 0;
// })
// console.log("multiplos de 10 son", multiplosDe10);


const materiasAda = {
  matematica: [10, 6, 10, 8],
  algoritmos: [10, 10, 9],
  algebra: [7, 9]
};

const materiasGrace = {
  matematica: [2, 9, 10, 7],
  algoritmos: [7, 1, 9],
  algebra: [2, 3]
};

const promedioMateria = objeto => {
  const materiasEstado = {
    aprobadas: [],
    desaprobadas: []
}
  for (const materia in objeto) {
    const notas = objeto[materia].reduce((sumaNotas, nota) => sumaNotas + nota)/objeto[materia].length;
    notas >= 4? materiasEstado.aprobadas.push(materia) : materiasEstado.desaprobadas.push(materia) 
  }
  return materiasEstado;
}




// const agruparMateriasPorEstado = (materias) => {

//   const materiasEstado = {
//       aprobadas: [],
//       desaprobadas: []
//   }
//   for (const materia in materias) {
//     let promedio = obtenerPromedio(materias[materia]);

//      promedio >= 4? materiasEstado.aprobadas.push(materia) : materiasEstado.desaprobadas.push(materia) 

//   };
//   return materiasEstado;
// };

// const obtenerPromedio = (notas) => {
//   return promedio = notas.reduce((acc, nota) => acc + nota ) / notas.length;
// }

// agruparMateriasPorEstado(materiasGrace)