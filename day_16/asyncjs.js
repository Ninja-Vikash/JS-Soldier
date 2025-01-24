/**
 *  Async JS
 */

// SetTimeout is used to execute a block of code after some time

// console.log("Hello JS: 1")

// setTimeout(() => {
//     console.log("Hello JS: 2")
// }, 1000);

// console.log("Hello JS: 3")


// SetInterval is used to execute a block of code after intervals

// console.log("Hello 1")

// setInterval(() => {
//     console.log("Hello 2")
// }, 0);

// console.log("Hello 3")

// Note: setInterval & setTimeout executes the code async even if the time is 0.


setTimeout((a, b) => {
    console.log(a + b)
}, 1000, 10, 10)


const increased = setInterval( name => {
    console.log(`JS Soldier: ${name}`)
}, 1000, "Vikash" )

setTimeout(() => {
    clearInterval(increased)
}, 6000);
