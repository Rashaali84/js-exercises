/*
I am new to London and would like to know what transport I can take to different famous locations.
An array with London locations have been provided.
Using .map(), print where I can go if I only want to use the river boat.
Note: only the names should be printed, not the means of transport.
*/

var londonLocations = [
  ["Angel", "tube", "bus"],
  ["London Bridge", "tube", "bus", "river boat"],
  ["Tower bridge", "tube", "bus"],
  ["Greenwich", "tube", "bus", "river boat"]
];
var newArr = [];
var locationsByBoat = londonLocations.map(
  function (subarray) {
    return subarray.map(
      function (strValue) {
        strValue.includes("boat") ? newArr.push(subarray[0]) : '';
      });
  }
);
console.log(newArr);
/* EXPECTED OUTPUT
["London bridge", "Greenwich"]
*/
