/*
    Q1) Write a program using prompt function to take input of age as a value from the user and use alert to tell him if he can drive or not.
    Q2) In Q1 use confirm to ask the user if he wants to see the prompt again 
    Q3) In the previous questions , use console.error to log the error if the age entered in negative
    Q4) Write a program to change the url to google.com (Redirection) if user enters a number greater than 4
    Q5) Change the background of the page to yellow , red or any other color based on user input through prompt function
*/

// Answers:-

// Answer (1)
let age = prompt("Enter your age");
const func = (age) => {
  if (age >= 0 && age < 18) {
    alert("You cannot drive");
  } else if (age >= 18 && age <= 100) {
    alert("You can drive");
  } else if (age < 0) {
    console.error("Age cannot be negative"); // Answer (3)
  }
   else if (typeof age == "string") {
    alert("Age cannot be a string");   // It is else if and not else because in else condition cannot be passed as it will always be true    
}
};


func(age); 
if (confirm("Do you want to see the prompt again?")) {  // Answer (2)
  age = prompt("Enter your age");
  func(age);
}


/*
    Step 1) Take age from user prompt
    Step 2) Create a loop for age using if , else if , else
    Step 3) Till here everything will work perfectly but in order to use 'confirm' we will put the whole 'age' loop inside a function (here 'func')
    Step 4) Now we'll call that function to verify the age first
    Step 5) Now we'll make another if statement for confirming to see the prompt again using 'confirm'
    Step 6) We'll ask the user for age again so that a new value of age enters the function and we get new result
*/


// Answer 4)

let num = prompt("Enter a number")
if (num > 4){
    location.href = "https://www.google.co.in/"
}


// Answer 5)

let color = prompt("Enter a background color")
if (color === "yellow"){
    document.body.style.backgroundColor = "yellow";
}
else if (color === "red"){
    document.body.style.backgroundColor = "red"
}