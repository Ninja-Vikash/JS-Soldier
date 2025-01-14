/**
 *  Data Type: String
 */

// In JS we can declare a string variable in multiple ways

let myName = "vikash"
let learning = 'JavaScript'
let building = `Docs.dev`

// Using: Double Quotes, Single Quotes, Backtics.

// NOTE: In modern JS, Backtics are gamechanger for declaring an string variable

let firstName = "vikash"
let lastName = "kumar"

// let fullName = firstName + " " + lastName

// console.log(fullName)

let fullName = `${firstName} ${lastName}`

/**
 *  The above method is known as string interpolation
 *  With a $ and {} we can create pockets for variable
 */

// console.log(typeof fullName)

let userName = new String(true)

console.log(typeof userName)        // Object
// Mastering string means mastering it's properties

let dev = "vikAsh"

console.log(dev.length)             // 6
console.log(dev.toUpperCase())      // VIKASH
console.log(dev.toLowerCase())      // vikash
console.log(dev.indexOf("k"))       // 2
console.log(dev.charAt(2))          // 2

let userEmail = "vikash@dev.com"
console.log(userEmail.includes("@google.com"))      // false

console.log(userEmail.endsWith("@dev.com"))         // true

let email = "    email@dev.com"

console.log(email.trim())