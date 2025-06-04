// Async/Await Practice Set
// Q1️ Write a program to load a Javascript file in a browser using Promises. Use then() to display an alert when the load is complete.
// Q2️ Write the same program from the previous question and use async/await syntax.
// Q3️ Create a promise which rejects after 3 seconds. Use an async/await function to get its value and a try...catch block to handle its error.
// Q4️ Write a program using Promise.all() inside an async/await function to await 3 promises. Compare its results with the case where we await these promises one by one.

// Ans 1) Without async/await, we use Promises with then() and catch() for error handling
function loadScript(src) {
    return new Promise((resolve, reject) => { // ✅ Returns a Promise
        const script = document.createElement('script');
        script.src = src;
        
        script.onload = () => resolve('Script loaded successfully');
        script.onerror = () => reject('Error loading script');

        document.head.append(script);
    });
}

// Calling the function
loadScript('script.js')
    .then(message => alert(message)) 
    .catch(error => alert(error));


// Ans 2) With async/await, we can simplify the code and handle errors using try...catch
// This function loads a script and returns a Promise that resolves when the script is loaded
function loadScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script'); // Create a <script> element
        script.src = src; // Set the script source
        
        script.onload = () => resolve('Script loaded successfully'); // Resolve when loaded
        script.onerror = () => reject('Error loading script'); // Reject if there's an error
        
        document.head.append(script); // Append to <head>
    });
}

async function loadAndNotify() {
    try {
        let message = await loadScript('https://example.com/script.js'); // Wait for script to load
        alert(message); // Show success message
    } catch (error) {
        alert(error); // Show error message if script fails
    }
}

loadAndNotify(); // Call the function

// Ans 3) 
function createRejectedPromise() {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject('Promise rejected after 3 seconds');
        }, 3000);
    });
}

async function handleRejectedPromise() {
    try {
        let result = await createRejectedPromise();
        alert(result);
    } catch (error) {
        alert(error);
    }
}

handleRejectedPromise();

// Ans 4) Promise.all() needs all Promises to resolve → If even one fails, it rejects everything.

async function awaitMultiplePromises(){
  const p1 = new Promise((resolve)=>{
    setTimeout(() => {
        resolve('Promise 1 resolved');
    }, 1000);
  })

  const p2 = new Promise ((resolve)=>{
    setTimeout(() => {
        resolve('Promise 2 resolved');
    }, 2000);
  })

  const p3 = new Promise ((resolve)=>{
    setTimeout(() => {
        resolve('Promise 3 resolved');
    }, 3000);
  })

  const results = await Promise.all([p1, p2, p3]);
  console.log(results);
  // If any promise rejects, the catch block will be executed
  // If all promises resolve, results will be an array of resolved values
  // Example: ['Promise 1 resolved', 'Promise 2 resolved', 'Promise 3 resolved']
}

awaitMultiplePromises();