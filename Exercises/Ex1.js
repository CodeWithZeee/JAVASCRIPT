// GUESS THE NUMBER

// Write a js program to generate a random number and store it in a variable. 
// The program then takes an  input from the user and checks if whether the guess was correct , greater or smaller than the original number.
// 100 - (no.of guesses) is the score of the user.
// The program is expected to terminate once the number is guesssed
// Number should be between 1 and 100


// Another way to write the function using arrow function syntax :-
// const generateRandomNumber = () => {
//     return Math.floor(1 + 100 * Math.random()); // Math.floor rounds down to the nearest integer
// }

// Function to generate a random number between 1 and 100
function generateRandomNumber() {
    return Math.floor(1 + 100 * Math.random()); // Math.floor rounds down to the nearest integer
}
const randomNumber = generateRandomNumber();

let score = 100; // Initial score
let nog = 1; // Number of guesses
alert("Guess a number between 1 and 100!");
let guess = prompt("Enter your guess: ");
while (guess != randomNumber) {
    if (guess < randomNumber) {
        alert("Your guess is low! Try again.");
    } else {
        alert("Your guess is high! Try again.");
    }
    nog++;
    guess = prompt("Enter your guess: ");
}

alert("Congratulations! You guessed the number correctly. Your score is: " + (score - nog * 10) + "/100");
