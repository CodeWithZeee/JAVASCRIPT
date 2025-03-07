// Write a program to calculate factorial of a number using reduce and using for loops 



// With the help of reduce method
// Without user's input
let arr = [1, 2, 3, 4, 5];

const fact = (a,b) =>{
    return a*b
}
// console.log(arr.reduce(fact)) 





// With the help of for loop and reduce method
// With the help of user input 
let arr2 = [];
let n = prompt("Enter a number: ");
for(let i=1; i<=n; i++){
    arr2.push(i);
}
console.log(arr2.reduce(fact)) // Output --> 120
