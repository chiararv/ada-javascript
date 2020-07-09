var swap = function (array, frstElm, scndElm) {
  var temp = array[frstElm];
  array[frstElm] = array[scndElm];
  array[scndElm] = temp;
};

var permutation = function (array, leftIndex, size) {
  var x;

  if (leftIndex === size) {
    temp = "";

    for (var i = 0; i < array.length; i++) {
      temp += array[i] + " ";
    }

    console.log("---------------> " + temp);
  } else {
    for (x = leftIndex; x < size; x++) {
      swap(array, leftIndex, x);
      permutation(array, leftIndex + 1, size);
      swap(array, leftIndex, x);
    }
  }
};

arrCities = ["Sidney", "Melbourne", "Queenstown"];
permutation(arrCities, 0, arrCities.length);
