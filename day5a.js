// array to sort​​

//var array = [1943, 1652, 1974, 1952, 1961, 1948, 1959, 1987, 1991, 2000, 1942, 2018];

var array = [
  56.892524,
  92.654125,
  82.558745,
  42.598258,
  89.248475,
  21.587877,
  53.687755,
  97.548754,
  38.548471,
  67.548428,
  95.897812
];

// swap function helper​
document.write(array + "<br />");

function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function bubbleSort(array) {
  for (var i = 0; i < array.length; i++) {
    for (var j = 1; j < array.length; j++) {
      if (array[j - 1] > array[j]) {
        swap(array, j - 1, j);
      }
    }
  }
  return array;
}

document.write(bubbleSort(array.slice()) + "<br />");
document.write(array.sort());

/*

function calc(n1, op, n2) {
  console.log(n1, n2, op);
  switch (op) {
    case "+":
      return n1 + n2;
    case "-":
      return n1 - n2;
    case "*":
      return n1 * n2;
    case "/":
      return n1 / n2;
    default:
      alert("Something wrong happened...");
  }
}

console.log("Calcula", calc(5, "/", 3));
*/
