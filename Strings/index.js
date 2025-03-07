console.log("This is strings tutorial")
let a = "Harry";
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
// console.log(a[5]); // This will give undefined as output

console.log(a.length)

let real_name = "Harry"
let friend = "Rohan"
console.log("His name is " + real_name + " and his friends name is " + friend)
console.log(`His name is ${real_name} and his friends "motherfucking" name is ${friend}`) // This is called string interpolation using backtics (``) (found above the tab button and below the esc button)
                                                                                           // Note -> Strings with double quotes can be used inside the backticks
                                                                                          //  Basically it's another method to concatenate strings
let b = "ShivamSh"                                          
console.log(b.toUpperCase())
console.log(b.toLowerCase()) 
console.log(b.length) 
console.log(b.slice(1, 5)) 
console.log(b.slice(1)) 

console.log(b.replace("Sh", "77"))
console.log(b.concat(a, "Aishwariya", "Rahul", "Priya"))

console.log(b) // Output will remain ShivamSh because strings are immutable in javascript

let x = b.toUpperCase()
console.log(x)