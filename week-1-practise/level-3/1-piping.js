/*
  PIPING FUNCTIONS
  ================
  Using the provided functions:
  - multiply `startingValue` by 2
  - add 10
  - format
  - assign to the variable `result`

  As a learning exercise (you wouldn't do this normally), do all of the above in 1 line of code 
*/


function pipping(startValue) {
  startValue = multiply(startValue, 2);
  startValue = add(startValue, 10);
  startValue = format(startValue);
  return startValue;


}
var startingValue = 5;
var result = pipping(startingValue);

/* DO NOT EDIT BELOW THIS LINE */
/* --------------------------- */

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function format(num) {
  return "£" + num.toFixed(2);
}

console.log("Expected result: £20.00");
console.log("Actual result: " + result);
