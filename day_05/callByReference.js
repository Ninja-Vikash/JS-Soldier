/**
 *  Call by Reference
 */

let arr = [1, 2, 3, 4]

let anotherArr = arr

anotherArr.pop()

console.log("anotherArr: ",anotherArr)
console.log("arr: ",arr)

let vehicle = {
    name: "car",
    wheel: 4
}

let secondVehicle = vehicle

secondVehicle.name = "bike"
secondVehicle.color = "black"

console.log("2nd vehicle: ",secondVehicle)
console.log("1st vehicle: ",vehicle)

/**
 *  Note:
 *  Whenever We make a copy of reference data type variable
 *  If we made changes on the copy it will reflect on the original
 */