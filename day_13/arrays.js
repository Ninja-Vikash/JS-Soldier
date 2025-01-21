/**
 *  Arrays in JS
 */

// Array is collection of elements.
// It can store any type of data.
// strings, numbers, booleans, objects, functions, arrays etc.

// Array declaration
let arr = [1, 2, 3, 4, 5];

let names = ["vikash", "john", "doe", "jane"];

let mixed = [
  1,
  "vikash",
  true,
  { name: "john" },
  function (name) {
    console.log(name);
  },
  [10, 20, 30]
];

let newArr = mixed

// mixed[4]("Vikash")

newArr.push(100)

// accessing elements
console.log("Mixed Arr: ",mixed)
console.log("new Arr: ",newArr)

// Note: index value start with 0

