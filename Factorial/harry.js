let a = 7

function factorial(number){
   let arr = Array.from(Array(number+1).keys()) // Shortcut to create an array of numbers from 0 to n
   let c = arr.slice(1,).reduce((a, b)=> a*b ) // Shortcut of array function . Instead we can return a*b (Both are correct)
   return c
}


function facFor(number){
    let fac = 1;
    for (let index = 1; index <= number; index++) {
        fac = fac * index
    }
    return fac
}
console.log(factorial(a))
console.log(facFor(a))