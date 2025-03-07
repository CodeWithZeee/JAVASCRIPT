alert("Hello World");

console.log("Code is running...")
console.log("Code is also running...")
console.log("Code is looking like a wow...")

var a = prompt("Enter your number")
var isTrue = confirm("Are you sure you want to leave this page and blast your computer ")

if(isTrue){
    console.log("Computer is blasting")
}

else{
    console.log("Computer is not blasting")

}
console.log("Your number is " + a)

document.title = "Hey I am good"

// document.body.style.backgroundColor = "red"


/*
    var: Declares variables with function or global scope and allows re-declaration and updates within the same scope.
    let: Declares variables with block scope, allowing updates but not re-declaration within the same block.
    const: Declares block-scoped variables that cannot be reassigned after their initial assignment.
*/