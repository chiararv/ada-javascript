// - Crear un programa que dado un array 2d de _strings_, indique cuál es la cantidad de una de sus ítems. El programa debe dar la posibilidad de ingresar qué item se desea buscar. Ejemplo:

const frutas =[
  ["🍎", "🍏", "🍌", "🍌"],
  ["🍌", "🍎"],
  ["🍎", "🍏", "🍌"],
  ["🍏", "🍌", "🍎", "🍌"],
];



let item =  "🍏"; 

let manzanaRoja = 0;
let manzanaVerde = 0;
let banana = 0;

const cantidadTotal = (array, item) =>{
  let total = 0;
  array.forEach(element => {
   total+= cantidadFrutas(element, item)
  manzanaRoja = 0;
  manzanaVerde = 0;
  banana = 0;
});  
return total;
}




const cantidadFrutas = (array, item) =>{
array.forEach(fruta => {
  if(fruta === "🍎"){
    manzanaRoja++
  }
  if(fruta === "🍏"){
    manzanaVerde++
  }
  if(fruta === "🍌"){
    banana++
  }
});

if(item === "🍎"){
  return manzanaRoja
}
if(item === "🍏"){
  return manzanaVerde
}
if(item === "🍌"){
  return banana
}

} 


