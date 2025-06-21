/*
elem.innerhtml is used to populate a div with HTML . 
Search online about this method and create a website with a div tag containing a random joke given an array of jokes.
Use math.random and fetch jokes from the internet (Use any website to create an array)
Your website should show a random joke every time you refresh the page.
Mix length of your jokes array should be 10
*/

let jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Why don't skeletons fight each other? They don't have the guts!",
    "What do you call fake spaghetti? An impasta!",
    "Why did the bicycle fall over? Because it was two-tired!",
    "What do you call cheese that isn't yours? Nacho cheese!",
    "Why did the math book look sad? Because it had too many problems!",
    "What do you call a bear with no teeth? A gummy bear!",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
    "Why don't oysters donate to charity? Because they are shellfish!"
];

let randomIndex = Math.floor(Math.random() * jokes.length);
console.log(jokes[randomIndex]);