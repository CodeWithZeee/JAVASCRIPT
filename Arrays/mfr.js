let arr = [1, 13, 5 ,7, 11];
// let newArr = []
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element**2)
// }


// map() is used to create a new array from an existing array by performing some operation on each existing array element
let newArr = arr.map((e)=>{
    return e**2
})

console.log(newArr)


// filter() filters an array with values that passes a test
const greaterThanSeven = (e)=>{
    if(e>7){
        return true
    }
    return false
}
console.log(arr.filter(greaterThanSeven))



// reduce() reduces an array to a single value
let arr2 = [1,2,3,4,5,6]
let arr3 = [1,2,3,4,5,6,"Harry Potter"]

const red = (a, b)=>{
    return a+b
}

console.log(arr2.reduce(red)) // Output --> 21
console.log(arr3.reduce(red)) // Output --> 123456Harry Potter


arr4 = Array.from("Hello")
console.log(arr4) // Array.from is a method that creates an array from a string
