// Q1) Use logical operator to find whether age of a person lies between age 10 and 20
// Q2) Demonstrate the use of switch case statements in Javascript 
// Q3) Write a Javascript program to find whether a number is divisible by 2 and 3
// Q4) Write a Javascript program to find whether a number is divisible by either 2 or 3
// Q5) Print "You can drive" or "You cannot drive" based on the age being greater than 18 using ternary operator

// Ans 1)
let age = 20;
if (age>=10 && age<=20){
    console.log("Age lies between 10 and 20")
}

// Ans 2)
let day = 2;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

// Ans 3)
let num = 6;
if (num%2==0 && num%3==0){
    console.log("Number is divisible by 2 and 3");
}

// Ans 4)
let number = 9;
if (number%2==0 || number%3==0){
    console.log("Number is divisible by either 2 or 3");
}

// Ans 5)
let myage = 20
if (myage>18){
    console.log("You can drive");
}
else {
    console.log("You cannot drive");
}