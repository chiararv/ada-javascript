// - Escribir un HTML con un div.
// - Luego, por ID, modificar el contenido del DIV
//     - agregando una lista de 5 elementos.
// - Una vez agregada la lista, agregar
//     - programaticamente un numero a cada elemento
//         -
//         - por ejemplo, si son 5 elementos deberia verse:
// - 1
//     - 2
//     - 3
//     - 4
//     - 5

const divPadre = document.getElementById("padre");

divPadre.innerHTML = `
     <ol>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
    </ol>
`;
