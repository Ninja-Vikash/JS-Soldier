/**
 *  Objects in JS
 */

// Objects are collection of key-value pairs.

// Object declaration
let obj = {
    key: 1,
}

let profile = {
    id: 1,
    name: "vikash",
    age: 21
}

// console.log(profile)

// Accessing object properties
// 1. Reading key
// 1. Dot notation 2. Bracket notation

console.log(profile.age)

console.log(profile["name"])

// Object mutating
// 2. Adding key

profile.isMarried = false

profile.role = 'developer'

// console.log(profile)

// // 3. Deleting key

delete profile.age

// console.log(profile)

// // 4. Updating key

profile.role = "frontend dev"

// console.log(profile)


// Call by reference

let user = {
    name: "user",
    email: "user@user.com"
}

let newUser = user

newUser.city = "Delhi"
delete newUser.email

// console.log("user", user)
// console.log("new", newUser)

// Note: Objects are mutable in JS.


// ----- Advance methods -----

let obj1 = {
    name: "vikash",
    age: 21
}

let obj2 = {
    city: "Jamshedpur",
    role: "developer"
}

// let newObj = Object.assign(obj1, obj2)
let newObj = { ...obj1, ...obj2}

// console.log(newObj)


let product = {
    id: 1,
    name: "iphone",
    brand: "apple",
    price: 1000,
    color: "black",
    isAvailable: true,
    category: "electronics"
}

// Getting all keys
// console.log(Object.keys(product))

// Getting all values
// console.log(Object.values(product))

// Frezzing an object
// Object.freeze(product)

// delete product.price    // after freezing mutation is now allowed


// Object.preventExtensions(product)   // prevent adding new key

// product.price = 1500

// delete product.color     // But you can remove existing

Object.seal(product)  // Only allow to modify existing key

delete product.name

product.latest = true

product.id = 2

console.log(product)
