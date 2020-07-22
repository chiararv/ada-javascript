const estudiantesPorHechizo = (estudiantes, hechizo) =>{
  return estudiantes.filter( estudiante => estudiante.hechizoPreferido === hechizo)
};

const estudiantesConMasAmiguesQue = (estudiantes, cantAmigos) => {
  return estudiantes.filter (estudiante => estudiante.amigues.length >= cantAmigos); 
}
const estudiantesConFamiliares = (estudiantes, familiares) => {
  return estudiantes.filter (estudiante => familiares.includes(estudiante.familiar)); 
};

const obtenerPromedioDeEstudiante = (estudiante) => {
  const sumaPromedios =  estudiante.materias.reduce((acc, materia) => acc + materia.promedio , 0);
  return sumaPromedios/estudiante.materias.length;
}

const estudiantesConPromedioMayorA = (numero, estudiantes) => {
  return estudiantes.filter(estudiante => {
    return obtenerPromedioDeEstudiante(estudiante) > numero;
  });
};


const mejoresEstudiantesPorCasa = (estudiantes, casa) => {
  return estudiantes.filter(estudiante => obtenerPromedioDeEstudiante(estudiante) > 6 && estudiante.casa === casa );
}




const casaConMejoresEstudiantes = (estudiantes) => {
  // ["casa1","casa2"]
  const casas = totalCasas(estudiantes)
  // [16,18]
  const alumnoPorCasas = casas.map(nombre => mejoresEstudiantesPorCasa(estudiantes, nombre).length)
  // 18
  const mayorAlumnos = alumnoPorCasas.reduce((cantdTotal, alumno) => cantdTotal > alumno ? cantdTotal : alumno)
  // 1
  const indice = alumnoPorCasas.indexOf(mayorAlumnos);
  // casa2
  return casas[indice];

};

const totalCasas = (estudiantes) => {
  const arrayCasasrepetidas = estudiantes.map((estudiante) => estudiante.casa);
  return arrayCasas = arrayCasasrepetidas.filter((x, i, a) => a.indexOf(x) == i)

}


// const casaConMejoresEstudiantes = (estudiantes) => {
//   // ["casa1","casa2"]
//   const casas = nombresDeCasas(estudiantes)
//   // [16,18]
//   const alumnoPorCasas = casas.map(nombre => mejoresEstudiantesPorCasa(estudiantes, nombre).length)
//   // 18
//   const mayorAlumnos = alumnoPorCasas.reduce((cantdTotal, alumno) => cantdTotal > alumno ? cantdTotal : alumno)
//   // 1
//   const indice = alumnoPorCasas.indexOf(mayorAlumnos);
//   // casa2
//   return casas[indice];

// };

// const nombresDeCasas = (estudiantes) => {
  
//   const casas = [];
//   for (let i = 0; i < estudiantes.length; i++) {

//       if (casas.indexOf(estudiantes[i].casa) === -1) {
//           casas.push(estudiantes[i].casa)
//       }

//   }

//   return casas;
// }

const estudiantesPorMateriaAprobada = (materiaElegida, estudiantes) => {
  return estudiantes.filter(estudiante => estudiante.materias.some(materia => materia.nombre === materiaElegida && materia.promedio >= 6)
  )
}


const obtenerInfoResumida = (estudiantes) => {

  return estudiantes.reduce((acumulador, estudiante) => {
      const nombre = estudiante.nombreCompleto.nombre;
      const casa = estudiante.casa;
      const promedio = obtenerPromedioDeEstudiante(estudiante);
      const amigues = estudiante.amigues.length

      const obj = {
          nombre: nombre,
          casa: casa,
          promedio: promedio,
          amigues: amigues,
      }

      acumulador.push(obj);

      return acumulador
  }, [])



  //estudiantes.materia


}




const cantidadDeEstudiantesPorCasa = (estudiantes) => {
  
  return estudiantes.reduce((accum, estudiante) => {

   //opcion 1
   return  {...accum , [estudiante.casa] : (accum[estudiante.casa] + 1) || 1}

   //opcion 2
   // return (accum[estudiante.casa])
    // ? {...accum , [estudiante.casa] : accum[estudiante.casa] + 1}
    // : {...accum , [estudiante.casa] : 1}

    //opcion 3 
   //  (accum[estudiante.casa])
   //  ? accum[estudiante.casa] += 1
   //  : accum[estudiante.casa] = 1;
   // return accum; 

  }, {});

}

const cantidadDeEstudiantesPorMateriaAprobada = (estudiantes) => {
  return estudiantes.reduce((materias, estudiante) => {
    const materiasAprobadas = estudiante.materias.filter((materia) => {
      return materia.promedio > 6
    });

    materiasAprobadas.forEach(materia => {
      if (!materias[materia.nombre]) {
        materias[materia.nombre] = 1;
      } else {
        materias[materia.nombre]++;
      }
    })
    return materias;

  }, {})


}



// promedioPorMateria`, que tome por parámetro un array de estudiantes y devuelva un objeto con los nombres de las materias como propiedades y el promedio total de dicha materia entre todes les estudiantes (suma de todos los promedios divido la cantidad de estudiantes



function promedioPorMateria(estudiantes) {
  return estudiantes[0].materias.reduce((accum, materia) => {
    accum[materia.nombre] = getPromedioPorMateria(materia.nombre, estudiantes)
    return accum
  }, {})
}

function getPromedioPorMateria(materia, estudiantes) {
  const promedios = estudiantes.reduce((accum, estudiante) => {
    const promedioEstudiante = estudiante.materias.find(m => m.nombre === materia)

    return accum + promedioEstudiante.promedio
  }, 0)
  return promedios / estudiantes.length
} 

const obtenerPromedioMateria = (materiaElegida, estudiantes) => {

  const promedios = estudiantes.reduce((acc, estudiante) => {

    let promedio;

    estudiante.materias.forEach(materia => {
      if(materia.nombre === materiaElegida){       
        promedio = materia.promedio
      }
    });
    
    return acc + promedio
  }, 0)

  return promedios / estudiantes.length;
}

// function getNombreMaterias(estudiantes) {
//   const materiasPorEstudiantes = estudiantes.map(e => e.materias.map(m => m.nombre))
//   const flatten = materiasPorEstudiantes.reduce((accum, materias) => accum.concat(materias), [])
//   return [...new Set(flatten)]
// }

// function getPromedioPorMateria(materia, estudiantes) {
//   const promedios = estudiantes.reduce((accum, estudiante) => {
//     const promedioEstudiante = estudiante.materias.find(m => m.nombre === materia)

//     return accum + promedioEstudiante.promedio
//   }, 0)
//   return promedios / estudiantes.length
// }


// function promedioPorMateria(estudiantes) {
//   return estudiantes[0].materias.reduce((accum, materia) => {
//     accum[materia.nombre] = getPromedioPorMateria(materia.nombre, estudiantes)
//     return accum
//   }, {})
// }

// function promedioPorMateria1(estudiantes) {
//   const materias = getNombreMaterias(estudiantes)
//   return materias.reduce((accum, materia) => {
//     accum[materia] = getPromedioPorMateria(materia, estudiantes)
//     return accum
//   }, {})









  




const familiarPreferido = (estudiantes) => {
  
  const animales =  estudiantes.reduce((acc, estudiante) => {
    
    acc[estudiante.familiar]? acc[estudiante.familiar] += 1 : acc[estudiante.familiar] = 1    
    return acc
  }, {})
//lechuza : 1, gato: 2

  const cantidadPorAnimal = Object.values(animales); //[1, 2]

  
  
  let max = Math.max(...cantidadPorAnimal); // 2
  
  let index = cantidadPorAnimal.indexOf(max); //i de 2
  
  let animalPreferido = Object.keys(animales)[index]; // key de 2
  console.log(animales);
  
  return animalPreferido;
}


// [
//   { animal: 'gato', number: 6}
//   { animal: 'lechuza', number: 3}
//   { animal: 'tu vieja', number: 2}
// ].sort((a,b) => b.number - a.number)[0]['animal']







































