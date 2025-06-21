/*
Create a digital seconds clock using setInterval and Date object in JavaScript.
The Date object can be used to get the date , time , hours and seconds which can the be updated using setInterval 
Try to keep the UI good looking
*/

let clockElement = document.createElement('div');
clockElement.style.fontSize = '48px';
clockElement.style.fontFamily = 'Arial, sans-serif';
clockElement.style.textAlign = 'center';
clockElement.style.marginTop = '20%';
document.body.appendChild(clockElement); // Append the clock element to the body of the document


// Function to update the clock every second
function updateClock() {
    let now = new Date(); // Get the current date and time (date object)
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    clockElement.innerHTML = hours + ':' + minutes + ':' + seconds; // Update the clock element with the current time
    // clockElement.style.color = (hours < 12) ? 'blue' : 'red';
}

setInterval(updateClock, 1000);