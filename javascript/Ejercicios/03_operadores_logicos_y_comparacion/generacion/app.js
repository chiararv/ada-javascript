const añoNacimiento = prompt("Ingresa tu año de nacimiento");

const generacion = (añoNacimiento) => {
  if (1946 <= añoNacimiento && añoNacimiento <= 1964) {
    return "Baby Boomer";
  } else if (1965 <= añoNacimiento && añoNacimiento <= 1979) {
    return "Gen X";
  } else if (1980 <= añoNacimiento && añoNacimiento <= 1995) {
    return "Millennial";
  } else if (1996 <= añoNacimiento && añoNacimiento <= 2005) {
    return "Centennial";
  } else {
    return "error";
  }
};
alert(generacion(añoNacimiento));
