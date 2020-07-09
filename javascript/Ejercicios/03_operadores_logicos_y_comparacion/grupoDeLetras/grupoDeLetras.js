// - Crear un programa que pida al usuario ingresar una letra y mostrar en un mensaje a qué grupo pertenece.
//   - grupo A = { a, e, i, o, u }
//     - grupo B = { b, c, d, f, g }
//         - grupo C = { h, j, k, l, m }
//             - grupo D = { n, p, q, r }
//     - grupo E = { s, t, v, w, x, y, z }

const letter = prompt("ingrese letra");

const getGroupLetter = (letter) => {
  if (
    letter == "a" ||
    letter == "e" ||
    letter == "i" ||
    letter == "o" ||
    letter == "u"
  )
    alert("pertenece al grupo A");
  else if (
    letter == "b" ||
    letter == "c" ||
    letter == "d" ||
    letter == "f" ||
    letter == "g"
  )
    alert("pertenece al grupo B");
  else if (
    letter == "h" ||
    letter == "j" ||
    letter == "k" ||
    letter == "l" ||
    letter == "m"
  )
    alert("pertenece al grupo c");
  else if (letter == "n" || letter == "p" || letter == "q" || letter == "r")
    alert("pertenece al grupo D");
  else if (
    letter == "s" ||
    letter == "t" ||
    letter == "v" ||
    letter == "w" ||
    letter == "x" ||
    letter == "y" ||
    letter == "z"
  )
    alert("pertenece al grupo E");
};

getGroupLetter(letter);
