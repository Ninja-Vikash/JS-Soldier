/**
 *  Higher Order Function
 */

// function Greet(user) {
//     console.log(`Hello ${user}`)
// }

// Greet("Vikash")

// console.log(userCall)

// Calculations
const add = (num1, num2) => num1 + num2
const sub = (num1, num2) => num1 - num2
const mul = (num1, num2) => num1 * num2
const div = (num1, num2) => num1 / num2


function calc(num1, num2, callback){
    return callback(num1, num2)
}

const result = calc(2, 4, (num1, num2) => num1 ** num2)
console.log(result)