/**
 *  Operators
 */

// In programming language operators act as a modifier, which has the ability to modify data.

// Arithmetic
// + , - , * , / , % , **

// Comparision
// > , < , >= , <= , == , !=

// Assignment
// = , += , -= , *= , /= , **

// Logical
// && (AND) , || (OR) , ! (NOT)


/**
 *  These operators are used to modify data for getting desirable result
 */

let fName = "Vikash"
let lName = "Kumar"

// let fullName = fName + lName    // ❎

// console.log(fullName)       // VikashKumar    👀!

// let fullName = fName + " " + lName
// Fine, but we have a better option

let fullName = `${fName} ${lName}`  // ✅

// console.log(fullName)

// NOTE: + operator is used to concatenate two or more strings.

// Let's see more examples of arithmetic

// let num1 = 3
// let num2 = 5

// console.log(num2 + num1)
// console.log(num2 - num1)
// console.log(num2 * num1)
// console.log(num2 / num1)
// console.log(num2 % num1)
// console.log(num2 ** num1)


// -------------------------------------
// Comparison
// Comparison is used to compare between two values or expression
// Note: Comparison always returns a boolean value ( true / false )

console.log(2 > 3)      // false
console.log(2 < 3)      // true
console.log(2 >= 3)     // false
console.log(2 <= 3)     // true
console.log(2 == 3)     // false
console.log(2 != 3)     // true

// Some bad practices
// console.log("2" > 1)            // true
// console.log("02" > 2)           // true

// comparison with null
// console.log(null > 0)       // false
// console.log(null == 0)      // false
// console.log(null >= 0)      // true

// The reason is that an equality check == and comparisons > , < , >= , <= work differently

// comparison with undefined
// console.log(undefined == 0)     // false
// console.log(undefined > 0)      // false
// console.log(undefined < 0)      // false

// --------------------------------
// Assignment
let number = 12

// console.log(number+=2)      // 14
// console.log(number-=3)      // 11
// console.log(number*=2)      // 22
// console.log(number/=11)     // 2
// console.log(number%=3)      // 2
// console.log(number**=3)     // 8

// Logical
// Evaluting two or more expressions

// console.log(true && true)
// console.log(true && false)
// console.log(false && true)
// console.log(false && false)

// console.log(true || true)
// console.log(true || false)
// console.log(false || true)
// console.log(false || false)

// console.log(!true)
// console.log(!false)

// Which logical operator has high status

console.log(false || !false && true)

// NOT > AND > OR