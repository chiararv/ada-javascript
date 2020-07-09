// ## Parámetros de búsqueda

// Los parámetros de búsqueda en una URL son aquellos que vienen después del signo `?` y se escriben como `parametro=valor`, separados por el signo `&`. Crear una función que dada una URL, devuelva un objeto con cada parámetro como clave con su respectivo valor.

// ```javascript
// parseQueryParams(
//   "http://www.exercises.com?keyword=objects&language=javascript&level=intermediate"
// ); // returns { keyword: "objects", language: "javascript", level: "intermediate }
// ```



const parseQueryParams = (URL) => {
  const objetoNuevo = {}
  const conjuntoParametros = (URL.split("?"))[1];
  const parametrosIndividuales = conjuntoParametros.split("&");
  parametrosIndividuales.forEach(elemento => {
    const elementoClaveValor = elemento.split("=");
    objetoNuevo[elementoClaveValor[0]] = elementoClaveValor[1];

  });
  return objetoNuevo;

}