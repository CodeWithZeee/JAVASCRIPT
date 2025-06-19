// Use Js to create a game of snake , water and gun . 
// The game should ask you to enter s , w or g for snake, water or gun respectively.
// The computer should be able to randomly generate s , w or g and declare win or lose without alert 
// Use confirm and prompt whenever necessary.

let choices = ['s', 'w', 'g'];
let user = prompt("Enter your choice (s for snake, w for water, g for gun):").toLowerCase();

if (user !== 's' && user !== 'w' && user !== 'g') {
   console.log("Invalid choice! Please enter 's', 'w', or 'g'.");
} else {
   let computer = choices[Math.floor(Math.random() * choices.length)];
   console.log("Computer chose: " + computer);
   if (user === computer) {
       console.log("It's a tie!");
   } else if (
       (user === 's' && computer === 'w') ||
       (user === 'w' && computer === 'g') ||
       (user === 'g' && computer === 's')
   ) {
       console.log("You win!");
   } else {
       console.log("You lose!");
   }
}

// console.log(choices.length)  Output - 3
// console.log(choices[0])      Output - 's'
// console.log(choices[1])      Output - 'w'
// console.log(choices[2])      Output - 'g'