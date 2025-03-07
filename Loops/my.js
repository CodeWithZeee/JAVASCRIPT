// Types of loops 
//   for loop --> loop a block of code a number of times
//   for in loop --> loop through the properties of an object / loop through the keys of an object
//   for of loop --> loop through the values of an object
//   while loop --> loop a block of code while a specified condition is true
//   do while loop --> while loop variant which runs atleast once




/*

 Syntax of for loop :
    for (statement1 ; statement2 ; statement3) {
        code to be executed
        }

statement1 is executed before the loop starts and is executed only once
statement2 is the condition based on which the loop runs 
statement3 is executed every time after the loop body has been executed


Syntax of for in loop :
    for (key in object) {
        code to be executed
    }
variable is the property of the object
object is the object whose properties are to be looped through



Syntax of for of loop :
    for (variable of iterable object) {
        code to be executed
    }
Note -> Iterable data structures like arrays, strings, etc.

Syntax of while loop :
    while (condition) {
        code to be executed
    }

Syntax of do while loop :
    do {
        code to be executed
    } while (condition)

*/


let i = 0

while (i<3000){
    console.log("I love you 3000")
    i++
}