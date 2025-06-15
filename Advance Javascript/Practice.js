/*
 Q1) Write a js program to print the following after 2 seconds delay
hello
world

Q2) Write the js program to find average of numbers in an array using spread syntax

Q3) Write a js program which resolves a Promise after n seconds . The function takes n as the parameter. Use an IIFE to execute the function with different values of n.

Q4) Write a simple interest calculator using javascript
*/

// Ans 1)
setTimeout(() => {
  console.log("hello");
  console.log("world");
}, 2000);

// Ans 2)
const numbers = [10, 20, 30, 40, 50];

const sum = (a, b, c, d, e) => {
  return a + b + c + d + e;
};

function average(...numbers) {
  return sum(...numbers) / numbers.length;
}
console.log(average(...numbers));

// Ans 3)
const resolveAfterNSeconds = (n) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Resolved after ${n} seconds`);
    }, n * 1000);
  });
};

(async () => {
  console.log(await resolveAfterNSeconds(1));
  console.log(await resolveAfterNSeconds(2));
  console.log(await resolveAfterNSeconds(3));
})();

// Ans 4)
const simpleinterest = (p,r,t) =>{
    return (p * r * t)/100;
}
console.log(simpleinterest(1000, 5, 2)); // Example: Principal = 1000, Rate = 5%, Time = 2 years


