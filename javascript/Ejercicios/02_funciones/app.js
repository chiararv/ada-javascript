// const number = prompt("ingresa un numero");

// const isOdd = (number) => {
//   if (number % 2 == 1) {
//     return true;
//   } else {
//     return false;
//   }
// };

const isOdd = (number) => {
  return number % 2 == 1;
};
const inRange = (number) => {
  return number >= 1 && number <= 10;
};

const inRange2 = (x, min, max) => {
  return x >= min && x <= max;
};
// const inRange2 = (x, min, max) => {
//   return min <= x <= max;
// };

const getPercentage = (number, percentage) => {
  result = (percentage * number) / 100;
  return result;
};
