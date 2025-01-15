/**
 *  Numbers in JS
 */

let num = 123.675

// console.log(typeof num)

let num2 = new Number("23")

// console.log(typeof num2)

// console.log(num.toFixed(2))

// to fixed is used to preview digits after decimal
// num = 12.2345
// num.toFixed(2)
// num = 12.23
// num.toFixed(5)
// num = 12.23450

let num1 = 1245
console.log(num1.toPrecision(3))

// Becarefull with this property
// num = 1245
// num.toPrecision(5)
// num = 1245.0
// num.toPrecision(3)
// num = 1.25e+3
// It will return a scientific value

// console.log(num.toLocaleString().length)

/**
 *  Note: Once you convert number to an string you are able to access all the string methods
 */