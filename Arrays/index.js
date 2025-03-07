let arr = [1, 2, 4, 5, 7]
//  Index  0, 1, 2, 3, 4

arr[0] = 5666;
// Since arrays are mutable, we can change the value of an array element just like the above example
// console.log(arr, typeof arr); // Output --> [5666, 2, 4, 5, 7] 'object'
// console.log(arr.length)

// console.log(arr[0])
// console.log(arr[2])
// console.log(arr[4])

console.log(arr.toString())
console.log(arr.join(" and "))


 
// let numbers = [1, 2, 3, 4, 5] 
// numbers.splice(1, 2)              // Output --> [1, 4, 5]
// numbers.splice(1, 3)              // Output --> [1, 5]
// numbers.splice(1, 3, 222, 333)   // Output --> [1, 222, 333, 5]

let a = "Hello"
a[0] = "J"
console.log(a) // Output --> Hello
// Strings are immutable, so we can't change the value of a string element like we did with arrays therefore the output will be "Hello" and not "Jello" as we might expect.