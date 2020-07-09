const mes = prompt("Ingresa un mes");

const dias = (mes) => {
  if (mes == "febrero") {
    return "28";
  } else if (
    mes == "abril" ||
    mes == "junio" ||
    mes == "septiembre" ||
    mes == "noviembre"
  ) {
    return "30";
  } else if (
    mes == "enero" ||
    mes == "marzo" ||
    mes == "mayo" ||
    mes == "julio" ||
    mes == "agosto" ||
    mes == "octubre" ||
    mes == "diciembre"
  ) {
    return "31";
  } else {
    return "mes invalido";
  }
};
alert(dias(mes));
