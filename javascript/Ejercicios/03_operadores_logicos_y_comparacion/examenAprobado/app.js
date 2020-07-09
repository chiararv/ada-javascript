const nota = Number(prompt("ingresa tu nota"));

const resultado = (nota) => {
  if (nota >= 7) {
    return "aprueba";
  } else if (nota >= 4) {
    return "recupera";
  } else if (nota < 4) {
    return "aplazo";
  } else {
    return "error";
  }
};
alert(resultado(nota));
