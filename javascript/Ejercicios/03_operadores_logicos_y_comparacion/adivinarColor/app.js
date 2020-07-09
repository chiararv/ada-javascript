const game = (jugador) => {
  const color1 = getRandomColor();
  const color2 = getRandomColor();
  const color3 = getRandomColor();
  const color4 = getRandomColor();
  const color5 = getRandomColor();
  alert(`Simon dice: ${color1}, ${color2}, ${color3}, ${color4} y ${color5}`);
  const userColor1 = prompt("ingrese el primer color");
  const userColor2 = prompt("ingrese el segundo color");
  const userColor3 = prompt("ingrese el tercer color");
  const userColor4 = prompt("ingrese el cuarto color");
  const userColor5 = prompt("ingrese el quinto color");
  if (
    color1 == userColor1 &&
    color2 == userColor2 &&
    color3 == userColor3 &&
    color4 == userColor4 &&
    color5 == userColor5
  ) {
    alert("ganaste");
  } else {
    alert("perdiste");
  }
};
game();
