const checkDay = (day) => {
  switch (day) {
    case "lunes":
      return 1;
      break;
    case "martes":
      return 2;
      break;
    case "miercoles":
      return 3;
      break;
    case "jueves":
      return 4;
      break;
    case "viernes":
      return 5;
      break;
    case "sabado":
      return 6;
      break;
    case "domingo":
      return 7;
      break;

    default:
      "dia invalido";
      break;
  }
} 