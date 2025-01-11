/**
 *  variable declaration using 'var' keyword
 */

var userId = "abc564"

userId = "xyz64"

console.log(userId)

{
    userId = "hya781"
}

console.log(userId)

/**
 *  NOTE: It doesn't follow 'closures' and follows 'hoisting'
 */

// What is hoisting?

var productId = "a56"

console.log(productId)

// -----------------------

console.log(productName)

var productName = "table"

/**
 *  When ever we declare variables using var keyword
 *  var declares the variable at globally
 * 
 *  This is known as hoisting.
 */

// What is closures?
{
    // blocks are known as closures
}

console.log("user", user)

{
    var user = "ninja"
}

// var doesn't obey closures
// For learning more about closures check let and const