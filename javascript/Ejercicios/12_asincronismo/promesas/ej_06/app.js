const todosPares = (numArr) => {
  return new Promise((resolve, reject) => {
    if(numArr.every(elem => elem % 2 === 0)){
      resolve("todos los numeros son pares")
    }else{
      reject("No todos los números del array son pares")
    }
  })
}

todosPares([2, 4, 6])
  .then((res) => console.log(`Promesa resuelta: ${res}`))
  .catch((err) => console.log(`Promesa con error: ${err}`));
// Promesa resuelta: Todos los número son pares

todosPares([2, 4, 7, 6])
  .then((res) => console.log(`Promesa resuelta: ${res}`))
  .catch((err) => console.log(`Promesa con error: ${err}`));

  const users = [
    { id: 1, user: "adalovelace", pass: "AL1815" },
    { id: 2, user: "gracehopper", pass: "GH4536" },
    { id: 3, user: "hedylamarr", pass: "HL7788" },
  ];

  const login = (user, pass) => {
    return new Promise((resolve, reject) => {
      const usuario = users.find(elem => elem.user === user)
      if (!usuario) {
        reject("Usuario inexistente")
      }
      if (usuario.pass !== pass) {
        reject("Contraseña incorrecta")
      }
  
  
      
      resolve({
        id: usuario.id,
        user: usuario.user
      });
  
    })
  };
  
  login("adalovelace", "AL1815")
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
  // { id: 1, user: 'adalovelace' }
  
  login("gracehopper", "123")
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
  // Contraseña incorrecta
  
  login("sherylsandberg", "SS1234")
    .then((res) => console.log(res))
    .catch((err) => console.log(err));