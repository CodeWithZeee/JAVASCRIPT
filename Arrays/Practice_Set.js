/*
Q1) Create an array of numbers and take input from the user to add numbers to this array 
Q2) Keep adding numbers to the array in (Q1) until 0 is added to the array 
Q3) Filter for numbers divisible by 10 from a given array 
Q4) Create an array of square of given numbers
Q5) Use reduce to calculate factorial of a given number from an array of first n natural numbers (n being the number whose factorial need to be calculated)
*/

// Ans 1) and 2)

let arr1 = [];

while (true) {
  let a = prompt("Enter numbers for array");
  if (a == "0") {
    break;
  } else {
    arr1.push(a);
  }
}
console.log(arr1);

// Ans 3)

const divby10 = (x) => {
  if (x % 10 == 0) {
    return true;
  } else {
    return false;
  }
};

console.log(arr1.filter(divby10));
let arr2 = arr1.filter(divby10); // To save it in another array

// Ans 4)

let arr3 = arr1.map((e) => {
  return e ** 2;
});
console.log(arr3);

// Ans 5)

// Pushing elements in array
let array = []
let n = prompt("Enter the number for which you want to calculate factorial") // Taking input from user
for (let i = 1 ; i <= n ; i++){
    array.push(i)
}

// Calculating factorial
const fact = (a,b) => {
    return a * b // This will take first 2 elements from array and multiply them then it will take the result and multiply it with the next element and so on
}

// Printing the result using reduce
console.log(array.reduce(fact))