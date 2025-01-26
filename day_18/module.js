/**
 *  Modules in JS
 */

// Modules are used to reusable pieces of code that can be imported and exported between different file.

// Modules help developers to break their code into smaller, manageable, and reusable components.
// That improves code organization and maintainability

// CommonJS
// const username = "vikash"

class User{
    constructor(name, role){
        this.name = name;
        this.role = role;
    }

    getDetails() {
        console.log(`NAME: ${this.name}`)
        console.log(`ROLE: ${this.role}`)
    }
}

// const sum = (a, b) => a + b

// module.exports = { sum }

// ----------------------------------

// module exports

// 1. Named export

// export const username = "vikash"

// export const greet = () => console.log("Hello")

// 2. default export

// const hello = () => console.log("Say Hello!")

// export default hello


// export const sum = (a, b) => a + b

const sum = (a, b) = a + b

export default sum