function nice(name) {
    console.log("Hey " + name + " you are nice!")
    console.log("Hey " + name + " you are good!")
    console.log("Hey " + name + " your tshirt is nice!")
    console.log("Hey " + name + " your course is good too!")
}

function sum(a, b, c = 3) {
    // console.log(a + b)
    console.log(a, b, c) // console.log will print the values of a and b
    return a + b + c // return will return the sum of a and b that can be stored in a variable (here the variables are result1, result2, result3)
}
// Note --> The default value of c is 3, so if we don't pass the value of c then it will take the default value of c as 3 
//          If we pass the value of c then it will take the value of c that we passed and not the default value of c

result0 = sum(1) // Here the value of a is 1 and the value of b is not passed so it will take the value of b as undefined 
result1 = sum(3, 2)
result2 = sum(7, 5)
result3 = sum(3, 13, 1)

console.log("The sum of these numbers is: ", result0) // Here the result will be NaN because one of the value is undefined
console.log("The sum of these numbers is: ", result1)
console.log("The sum of these numbers is: ", result2)
console.log("The sum of these numbers is: ", result3)


const func1 = (x)=>{
    console.log("I am an arrow function", x)
}

func1(34);
func1(66);
func1(84);

// Here func1 is a variable that stores the arrow function
// x is the parameter of the arrow function
// An arrow function is a shorter way to write a function in JavaScript. It uses the => syntax and is often more concise than traditional function expressions. Here's a basic example:


let sex = (x , y=18)=>{
    console.log("What is your body count?" + x + "And Your age?" + y )
}

sex(10);
sex(20,35);
