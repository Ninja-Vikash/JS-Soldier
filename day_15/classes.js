/**
 * Classes in JS
 */

// Classes are blueprint for creating objects.

// There are few more ways to create objects in JS.
/**
 *  1. Object literals
 *  2. Constructor functions
 *  3. ES6 classes
 */

let obj = {
    name: "vikash",
    role: "dev"
}

// Constructor fn()

function User(name, role) {
    this.name = name
    this.role = role
}

const user1 = new User("vikash", "dev")

// console.log(user1)
// Note: Arrow fn() can't be used as constructor fn()

// ES6 classes

class Person{
    constructor(name, role, city){
        this.name = name
        this.role = role
        this.city = city
    }

    // Method
    print() {
        console.log(`Name: ${this.name}, Role: ${this.role}, City: ${this.city}`)
    }
}

const person1 = new Person("vika", "coder", "Delhi")

// person1.print()

class Employee extends Person {
    constructor(name, role, city, salary){
        super(name,role, city)

        this.salary = salary
    }

    print() {
        console.log(`Name: ${this.name}, Role: ${this.role}, City: ${this.city}, Salary: ${this.salary}`)
    }
}


const emp1 = new Employee("vikash", "frontend developer", "Jamshedpur", 50_000)

// emp1.print()

function Vehicle(name){
    this.name = name
}

const car = new Vehicle("BMW")
console.log(car)

class Vehicle {
    constructor(name){
        this.name = name
    }
}

// const car = new Vehicle("Audi")

class Car extends Vehicle{
    constructor(name, color){
        super(name)

        this.color = color
    }
}

const car1 = new Car("BMW", "Black")

console.log(car1)


