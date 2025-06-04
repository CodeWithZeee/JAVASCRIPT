function loadScript(src){
    return new promise ((resolve,reject) =>{
        const script = document.createElement('script'); // Create a script element
        script.src = src ; // Set the source of the script

        script.onload  = () => resolve ('Script loaded successfully'); // Resolve the promise when the script loads
        script.onerror = () => reject ('Error loading script'); // Reject the promise if there's an error

        document.body.append(script); // Append the script to the document body (both head and body work, but body is more common in modern practices)
        // document.head.append(script); // Alternatively, append to the head
    })
}
// Create a promise which rejects after 3 seconds. Use an async/await function to get its value and a try...catch block to handle its error.

function createRejectedPromise() {
    return new Promise ((_ , reject) =>{
        setTimeout(() => {
            reject('Promise rejected after 3 seconds'); // Reject the promise after 3 seconds
        }, 3000);
    });
}