const users = [
  { id: 1, email: "diana@gmail.com", name: "Diana Prince" },
  { id: 2, email: "bruce@gmail.com", name: "Bruce Wayne" },
  { id: 3, email: "clark@gmail.com", name: "Clark Kent" },
];

let lastId = users[users.length-1].id;


const fetchUser = (email) =>
  Promise.resolve(users.find((u) => u.email === email));

const createUser = (email, name) => {
  return new Promise((resolve, reject) => {
    fetchUser(email)
      .then( res => {
        if(res){
          reject(`Ya existe un registro con el email ${email}`)
        }
        lastId ++
        resolve({
          email: email,
          nombre: name,
          id: lastId
        })
      })
  })
};


createUser("diana@gmail.com", "Wonder Woman")
  .then((res) => console.log(`Registro creado: ${res}`))
  .catch((err) => console.log(`No se creó el registro: ${err}`));
// No se creó el registro: Ya existe un registro con el email diana@gmail.com

createUser("barry@gmail.com", "Barry Allen")
  .then((res) => console.log(`Registro creado: ${JSON.stringify(res)}`))
  .catch((err) => console.log(`No se creó el registro: ${err}`));