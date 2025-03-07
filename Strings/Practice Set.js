// Q1) What will the following print in javascript?
        console.log("har\"".length)

// Q2) Explore the includes, startswith & endswith functions of a string 

// Q3) Write a program to convert a given string to lowercase 

// Q4) Extract the amount out of this string -->  "Please give Rs 1000"

// Q5) Try to change 4th character of a given string 

// Ans 1) 4 would be the lenth . Following is the reason 
console.log("har\"")

// Ans 2) 
let y = "ZiyaWeds Liz iya"
console.log(y.includes("Liz"))
console.log(y.includes("Liz iya")) 

console.log(y.endsWith("z iya")) 
console.log(y.endsWith("ziya")) 

console.log(y.startsWith("Ziya"))
console.log(y.startsWith("Ziya Weds"))
console.log(y.startsWith("ZiyaWeds"))


// Ans 3) 
console.log(y.toLowerCase())

// Ans 4)
let z = "Please give Rs 1000"
console.log(z.slice(15)) // It will go till the end
// or
console.log(z.slice(15, 19))
console.log(z.slice(15, 18)) // For 100


// Ans 5)

let a = "Let him go"
console.log(a.replace("him", "her")) // Let her go
console.log(a.replace("Him", "her")) // Nothing will be replaced
console.log(a.replace("    him", "her")) // Nothing will be replaced