let dineroDisponible = 5000;

const mostrarDineroDisponible = () => {
  alert(dineroDisponible);
};

const retirarDinero = (cantidad) => {
  if (dineroDisponible >= cantidad) {
    dineroDisponible -= cantidad;
    mostrarDineroDisponible();
  } else {
    alert("te quedaste sin dinero");
  }
};
