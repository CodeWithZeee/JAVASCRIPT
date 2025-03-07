/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **

It performs wrong operation 10% of the times

*/

let random = Math.random() // Generate random number between 0 and 1
console.log(random)
let a = prompt("Enter first number")
let c = prompt("Enter operation")
let b = prompt("Enter second number")

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
}



if (random > 0.1) {
    // Perform correct calculation
    console.log(`The result is ${a} ${c} ${b}`)
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`) // Performing the correct operation and alerting the result
}

else {
    // Perform wrong calculation
    c = obj[c] // Changing the operation to wrong operation. For example if the operation was + then it will be changed to - 
                // Now if we entered + for c then it will be c = obj["+"] and obj["+"] = "-" so c = "-"
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`) // Performing the wrong operation and alerting the result
}

// Step 1 : First we generate a random number between 0 and 1 using Math.random() function
// Step 2 : We print it just to check what is that random number we are getting 
// Step 3 : We take two numbers as input from the user and also the operation we wanna perform that will be stored on their respective variables 
// Step 4 : We create an object with key value pairs where key is the correct operation and value is the wrong operation
// Step 5 : We check if the random number is greater than 0.1 then we perform the correct operation and print the result (As this is the 90% of the times)
// Step 6 : If the random number is less than 0.1 then we perform the wrong operation and print the result (As this is the 10% of the times)
// Step 7 : We alert the result to the user

// To check whatever is happening --> Open in browser through html file and go to inspect then console and check the result