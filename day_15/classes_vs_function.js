/**
 *  Classes VS function
 */

// class Vehicle{
//     constructor(name){
//         this.name = name
//     }
// }

// const car = new Vehicle("BMW")

// console.log(car)

// Extending classes are very easy

// class Car extends Vehicle{
//     constructor(name, color){
//         super(name)
//         this.color = color
//     }
// }

// const car1 = new Car("Audi", "Black")
// console.log(car1)

// ------------------------------------------

// function Vehicle(name){
//     this.name = name
// }

// const car = new Vehicle("BMW")
// console.log(car)

// function Car(name, color){
//     Vehicle.call(this, name)
//     this.color = color
// }

// Car.prototype = Object.create(Vehicle.prototype)
// Car.prototype.constructor = Car

// const car1 = new Car("Audi", "Red")
// console.log(car1)

// Note: extending constructor function is using chain of prototype

// ------------------------------------------

// Methods in class

class Vehicle{
    constructor(name){
        this.name = name
    }

    drive(){
        console.log("Car is driving")
    }
}

Vehicle.data = function(){
    console.log("Not possible")
}

Vehicle.prototype.data = function(){
    console.log("Possible")
}

const car = new Vehicle("BMW")
car.data()


// Note: Can't add new method in class from outside

// function Vehicle(name){
//     this.name = name

//     this.drive = function(){
//         console.log("Car is driving")
//     }
// }

// Vehicle.prototype.data = function() {
//     console.log("Possible")
// }

// const car = new Vehicle("BMW")
// car.data()