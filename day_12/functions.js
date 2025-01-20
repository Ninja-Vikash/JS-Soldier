/**
 *  fn()'s in JS
 */

// functions are used to encapsulate logic and reuse the logic.

function func(){
    // function body
}

// function evokation

function greet() {
    console.log("Hello! User")
}

// greet()

// You can manipulate the fn() response using 'parameters' and 'arguments'

function add(num1, num2){     // num1 and num2 are parameters
    console.log(num1 + num2)
}

// add(2 ,3)
// 2 and 3 are arguments passed to num1 and num2 respectively

// default parameters
function ifAdd(num1, num2 = 10) {
    console.log(num1 + num2)
}

// ifAdd(12)

// fn() declaration
// 1. Traditional
function myFunc() {
    // functional body
}

// 2. Expression
const sum = function() {
    // functional body
}

// 3. Arrow fn()
// const addition = (num1, num2) => {
//     console.log(num1 + num2)
// }

// const addition = (num1, num2) => console.log(num1 + num2)

// addition(2, 3)

const sayHello = _ => console.log("Hello")

// sayHello()


// return statement

// function getSum (num1, num2){
//     return num1 + num2
// }

// const getSum = (num1, num2) => {
//     return num1 + num2
// }

const getSum = (num1, num2) => num1 + num2

// const result = getSum(54, 12)
// console.log(`Result is ${result}`)

const increment = val => val + (val * 5)/100

const finalResult = increment(2_00_000)
console.log(`Final result after 5% increment is ${finalResult}`)


// function increment(val) {
//     let incrementedValue = (val * 5)/100
//     let finalValue = val + incrementedValue
//     return finalValue
// }

// const finalResult = increment(200000)
// console.log("Final result after 5% increment is ", finalResult)