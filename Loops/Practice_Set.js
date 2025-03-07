/*
Q1) Write a program to print the marks of a student in an object using for loop 
    obj = { harry : 98 , rohan : 70 , aakash : 70}
Q2) Write the program of Q1 using for in loop
Q3) Write a program to print "try again" until the user enters the correct number.
*/


let obj = {
    harry : 98 ,
    rohan : 70 ,
    aakash : 7
}

// Ans 1)

// for (let i = 0; i < Object.keys(obj).length; i++) {
//     let key = Object.keys(obj)[i];
//     console.log(key, obj[key]);
// }

for (i=0 ; i<100 ; i++){
    if (i==98){
        console.log("harry : 98")
    }

    else if (i==70){
        console.log("rohan : 70")
    }
    
    else if (i==7){
        console.log("aakash : 7")
    }
   
}

// Ans 2)

for (const key in obj) {
    console.log(key , obj[key])
}

// Ans 3)

for (i=0 ; i<100 ; i++){
    if (i==7){
        console.log("try again")
    }
    else if (i==70){
        console.log("try again")
    }
    else if (i==98){
        console.log("try again")
    }
    else{
        console.log("correct number")
        break}
}

// Or


for (i=0; i<200 ; i++){
    if(i>100){
        console.log("Try Again")
    }
    else{
        console.log("Correct Number :", i)
    }
}