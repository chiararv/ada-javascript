const esImpar = (num) => num % 2; //si par 0 si es impar 1

for (let numero = 0; numero <= 20; numero++) {
  if (esImpar(numero)) {
    console.log(numero);
  }
}
