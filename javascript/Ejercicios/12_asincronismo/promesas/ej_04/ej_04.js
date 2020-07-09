const esMayorADiez = (num) => {
  return new Promise((resolve, reject) => {
    if(num > 10){
      resolve(`${num} es mayor a diez, ¡éxito!`)
    }else{
      reject(`${num} es menor o igual a diez, ¡error!`)
    }
  })
}

esMayorADiez(15)
  .then((result) => console.log(result)) // 15 es mayor a diez, ¡éxito!
  .catch((error) => console.log(error));

esMayorADiez(8)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));