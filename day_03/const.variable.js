/**
 *  To declare a constant variable we use 'const' keyword
 */

const INCOMETAX = 8

// INCOMETAX = 1

// constant variables can not be re-assignable

/**
 *  NOTE: const and let obeys closures and don't follow hoisting
 */

const TAX = 8

{
    console.log("Inner Tax: ", TAX)
}

console.log("Outer Tax: ", TAX)

// ----------------------------

{
    const TAX = 5
    console.log("Inner Tax: ", TAX)
}

console.log("Outer Tax: ", TAX)

// ---------------------------

{
    console.log("Inner Tax: ", TAX)
    const TAX = 5
}

console.log("Outer Tax: ", TAX)


/**
 *  NOTE: 
 *  1. Children scope has the access of parent environment
 *  2. If the same variable name declared within the scope it will refer to variable which is declared inside.
 */