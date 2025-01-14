/**
 *  Call by Value
 */

let myName = "vikash"

let newName = myName

newName = "vikash kumar"

console.log("myname: ",myName)
console.log("newname: ",newName)

/**
 *  Note:
 *  Whenever we make a copy of a variable of data type primitive.
 *  String | Number | Boolean | null | undefined | bigint | symbol
 *  It passes the copy of original variable.
 * 
 *  If we made any changes on the copy it will not reflect on the original value.
 */