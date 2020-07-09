// ### **Validar contraseña**

// - Tenemos los datos de distintas personas que quieren crear un user dentro de GMail
// - Todos los datos se guardan como objetos con las propiedades: `nombre`, `apellido`, `email` y `password`
// - Nos pidieron implementar una función, llamada `validarPassword`, que recibe estos objetos y valide la contraseña
// - La función nos tiene qu retornar un objeto con dos propiedades: `verificada` (un boolean que es true cuando la contraseña pasa las validaciones, o false en caso contrario) y `mensaje` (un string que contiene el mensaje de la validación que falló, o vacío si salió todo bien)
// - De la contraseña tenemos que validar:
//   - Que la longitud sea mayor o igual a 6 (si es menor, retornar el mensaje "Contraseña con menos de 6 caracteres")
//   - Que la contraseña no sea una de: "123456", "password", "111111", "qwerty" (si coincide con alguna de esas contraseñas, retornar el mensaje "Contraseña muy insegura")


const user1 = {
  nombre: 'Grace',
  apellido: 'Hopper',
  email: 'grace.hopper@gmail.com',
  password: '123456'
};

const user2 = {
  nombre: 'Ada',
  apellido: 'Lovelace',
  email: 'ada.lovelace@gmail.com',
  password: '**178!Ada--'
};

const user3 = {
  nombre: 'Hedy',
  apellido: 'Lamarr',
  email: 'hlamarr@gmail.com',
  password: '1234'
};


const validarPassword = (user) =>{
  const invalidPassword = ["123456", "password", "111111", "qwerty" ];
  const newObj = {verificada: true, mensaje: ''}; 

  if(user.password.length < 6){
    newObj.verificada = false;
    newObj.mensaje = "Contraseña con menos de 6 caracteres";
  }
  else if (invalidPassword.includes(user.password)){
    newObj.verificada = false;
    newObj.mensaje = "Contraseña muy insegura";
  }
 return newObj
}

// // CODEA ACA LA SOLUCION

// // casos de prueba
// validarPassword(user1); // { verificada: false, mensaje: 'Contraseña muy insegura' }
// validarPassword(user2); // { verificada: true, mensaje: '' }
// validarPassword(user3); // { verificada: false, mensaje: 'Contraseña con menos de 6 caracteres' }