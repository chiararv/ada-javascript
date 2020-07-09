// - Crear una funcion para aumentar tamaño
//     - de un titulo y otra para reducirlo.

const title = document.getElementById("title");

const aumentarTamaño = () => {
  title.style.fontSize = obtenerFontSize() + 5 + "px";
};
const disminuirTamaño = () => {
  title.style.fontSize = obtenerFontSize() - 5 + "px";
};

const obtenerFontSize = () => {
  // primero obtengo todos los estilos y me quedo con el fontSize
  const obtenerFontSize = getComputedStyle(title).fontSize;
  // con slice le corto los dos ultimos caracters que son px
  const soloValorSinUnidad = obtenerFontSize.slice(0, -2);
  // luego lo convierto en formato  numero
  const convertirDeStringANumber = Number(soloValorSinUnidad);
  return convertirDeStringANumber;
};
//
