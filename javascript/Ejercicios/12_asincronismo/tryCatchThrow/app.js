const arr = [1, 2, 3]
const arr2 = [1, 2, 3, "perro"]

const isNumber = (item) => {
  return typeof(item)  === "number"
}

const sumar = (arr) => {

  if(arr.every(item => isNumber(item))){
    return arr.reduce((acc, item) => acc + item)
  }else{
    //error : 
    throw {
      nombre: "no son todos num",
      mensaje: "debes ingresar un numero",
    }
  }
}

try {
  sumar(arr2)
} catch (error) {
  console.log("No se puede imprimir porque", error.mensaje);
}


// Crear un programa que divida dos numero,en caso de ser infinito el resultado me lance un excepcion avisandome que no se puede realizar esa cuenta

const dividir = (num1, num2) => {
  const div = num1/num2
  if(div == Infinity){
   throw {
      nombre: "error de calculo",
      mensaje: "el resultado es infinito"
    }
  }

  return div;
}

try {
  dividir(1401, 0)
} catch (error) {
  console.log("No se puede imprimir porque", error.mensaje);
}

//- Crear un programa que pregunte por el día, el mes y devuelva la estación del año correspondiente,en caso contario lanzar una excepcion que diga si el dia o el mes es invilido.

const getDates = (dia, mes) => {
if(dia >= 21 && mes >= 12)


  switch (dia, mes) {
      case Date:
          dates = '21-dic al 20-mar';
          break;
      case 'invierno':
          dates = '21-jun al 20-sep';
          break;
      case 'primavera':
          dates = '21-sep al 20-dic';
          break;
      case 'otoño':
          dates = '21-mar al 20-jun';
          break;
      default:
          dates = 'inválido';
  }

  return dates;
};
// const getDates = (season) => {

//   switch (season) {
//       case 'verano':
//           dates = '21-dic al 20-mar';
//           break;
//       case 'invierno':
//           dates = '21-jun al 20-sep';
//           break;
//       case 'primavera':
//           dates = '21-sep al 20-dic';
//           break;
//       case 'otoño':
//           dates = '21-mar al 20-jun';
//           break;
//       default:
//           dates = 'inválido';
//   }

//   return dates;
// };

// Verano (21 de diciembre a 20 de marzo).
//     Otoño (21 de marzo a 20 de junio).
//     Invierno (21 de junio a 20 de septiembre).
//     Primavera (21 de septiembre a 20 de diciembre).

// const meses = {
//   enero: 31,
//   febrero: 28,
//   marzo: 31,
//   abril: 30,
//   mayo: 31,
//   junio: 30,
//   julio: 31,
//   agosto:31,
//   septiembre : 30,
//   octubre: 31,
//   noviembre: 30,
//   diciembre: 31
// }

// const estaciones = {
//   verano: ["diciembre", "enero", "febrero", "marzo"],
//   otoño: ["marzo", "abril", "mayo", "junio"],
//   invierno: ["junio", "julio", "agosto", "septiembre"],
//   primavera: ["septiembre", "octubre", "noviembre", "diciembre"],
// }


// const getEstacion = (mes) => {
//   let posibilidades = []

//   const {verano, otoño, invierno, primavera} = estaciones
//   verano.includes(mes) ? posibilidades.push("verano") : posibilidades
//   otoño.includes(mes) ?  posibilidades.push("otoño") : posibilidades
//   invierno.includes(mes) ?  posibilidades.push("invierno") : posibilidades
//   primavera.includes(mes) ?  posibilidades.push("primavera") : posibilidades



//   return posibilidades
// }
const getSeason = (dia, mes) => {
  const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "diciembre"]
  const verano = ["enero", "febrero"]
  const otoño = ["abril", "mayo"]
  const invierno = ["julio", "agosto"]

  if (dia > 31 || dia <= 0 || !meses.includes(mes)) {
    throw {
      nombre: "error",
      mensaje: "Mes o dia no son validos"
    }

  } else {
    if (dia < 21 && mes === "marzo" || verano.includes(mes) || dia >= 21 && mes === "diciembre") {
      return "Verano"
    }
    if (dia < 21 && mes === "junio" || otoño.includes(mes) || dia >= 21 && mes === "marzo") {
      return "Otoño"
    }
    if (dia < 21 && mes === "septiembre" || invierno.includes(mes) || dia >= 21 && mes === "junio") {
      return "Invierno"
    } else {
      return "Primavera"

    }
  }
}


try {
  console.log(getSeason(37, "enero"))
} catch (error) {
  console.log("No se puede imprimir porque", error.mensaje);
}

