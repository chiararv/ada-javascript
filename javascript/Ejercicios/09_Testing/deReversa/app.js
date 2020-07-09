const checkReverse = (number) =>{
  const numberArray = number.toString().split("").reverse();
  const invertedNumber = Number(numberArray.join(""));
  return invertedNumber
}

// const checkReverse = (number) => {

//   const numberArray = number.toString().split('');

//   const reverseArray = numberArray.reverse();

//   return Number((reverseArray.join('')));

// };