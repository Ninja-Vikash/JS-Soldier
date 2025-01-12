/**
 *  Primitive Data Type
 */

let userName = "Vikash Kumar"
let userAge = 21
let isDeveloper = true

let account = null
let own

console.log(typeof "vikash")        // string
console.log(typeof 23)              // number
console.log(typeof true)            // boolean
console.log(typeof null)            // object 🤔?
console.log(typeof undefined)       // undefined
console.log(typeof Symbol("id"))    // symbol

// NOTE: datatype of null is Object

let userId = Symbol("id")
let anotherUserId = Symbol("id")

console.log(anotherUserId == userId)

console.log(typeof userId)

let bigNumber = 134n

console.log(typeof bigNumber)