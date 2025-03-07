// The benifit of a seperate js file is that the browser will download it and store it in cache so that it doesn't have to download it again

// Console objects methods :-
console.log('Hello World');
console.error('This is an error');
console.warn('This is a warning');
console.info('This is an info');
console.table({a: 1, b: 2});
// console.clear();



// Interaction : Alert , Prompt , Confirm
alert('Hello this is alert'); // Used to invoke a mini pop-up window with a message

const name = prompt('Enter your name'); // Used to take user input as string
alert(`Hello ${name}`);

if(confirm('Shall we proceed?')){ // Shows a message and waits for the user to press ok or cancel. Returns true for ok and false for cancel
    console.log('Bro said ok');
} 
