/**
 *  Conditionals in JS
 */

// 1. if-else  2. switch

// Conditionals are used to return an output for any specific condition

// Single if statement

let isLoggedIn = false

if (condition1){
    statement
} else if(condition2) {
    statement
} else {
    statement
}


if(isLoggedIn){
    console.log("You are logged in!")
}


// if-else statement
let userAge = 21

// if(userAge > 18){
//     console.log("You are able to do job!")
// } else {
//     console.log("Sorry! you can't do job.")
// }

// if-else ladder
let voterAge = -2
const REQAGE = 18

// if(voterAge < 0){
//     console.log("Please enter a valid age.")
// } else if(voterAge < REQAGE){
//     console.log("You are underage.")
// } else {
//     console.log("Congratulation!!!")
// }

// -----------------------------------------------
// Switch case statements

let fruit = "Apple"

switch(fruit){
    case "Mango":
        console.log("Mango: 100/kg")
        break
    case "Orange":
        console.log("Orange: 70/kg")
        break
    case "Apple":
        console.log("Apple: 120/kg")
        break
    default:
        console.log("Sorry!")
}

// Use 'break' keyword for no more further execution of rest code