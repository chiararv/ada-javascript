const el = document.querySelector(".box");

const box = document.querySelector(".box");

const delay = (time, className, operation, className2) => {
  return new Promise((resolve) => {
    setTimeout(()=>{
      if(className2){
        el.classList.replace(className, className2)
      }else{
        el.classList[operation](className)
      }      
      console.log("oooo")
      resolve()
    }, time)
  });  
}


const test = () => {
   delay(500,"circle", "add")
    .then(delay(333, "orange", "add"))
    .then(delay(250, "circle", "remove"))
    .then(delay(500, "orange", "replace", "purple"))
    .then(delay(2000, "fadeOut", "add"))
}
 
box.addEventListener("click", test);


// const el = document.querySelector(".box");

// const delay = time => new Promise(resolveCallback => setTimeout(resolveCallback, time));

// function clickCaja(e) {
//   el.textContent = "¡Clickeado!"

//   delay(2000)
//     .then(() => el.classList.add("circle"))
//     .then(() => delay(500))
//     .then(() => el.classList.add("orange"))
//     .then(() => delay(500))
//     .then(() => el.classList.remove("circle"))
//     .then(() => delay(250))
//     .then(() => el.classList.replace("orange", "purple"))
//     .then(() => delay(500))
//     .then(() => el.classList.add("fadeOut"))
// }

// const box = document.querySelector(".box");
// box.addEventListener("click", clickCaja);



//   const dividir = (num1, num2) => { 
//     return new Promise((resolveCallback, rejectCallback) => {
//       if (num1 / num2 == Infinity) {
//         rejectCallback("No se puede dividir");
//       }    
//       resolveCallback(num1 / num2);  
//     });
//   };

//   dividir(500, 0)
//     .then((resultado) => {
//       console.log(resultado);
//     })
//     .catch((error) => {
//       console.error(error);
//     });


//     const dividir = (num1, num2) => { 
//       return new Promise((resolveCallback, rejectCallback) => {
//         if (num1 / num2 == Infinity) {
//           rejectCallback("No se puede dividir");
//         }    
//         resolveCallback(num1 / num2);  
//       });
//     };
  
//     dividir(500, 0)
//       .then((resultado) => {
//         console.log(resultado);
//       })
//       .catch((error) => {
//         console.error(error);
//       });

