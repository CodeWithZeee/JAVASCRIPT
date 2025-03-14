console.log("Script.js initializing")
// let boxes = document.getElementsByClassName("box")
let boxes = document.querySelector(".container").children 


function getRandomColor(){
    let val1 = Math.ceil(0 + Math.random()* 255); // Till 255 because 255 is the max value for rgb
    let val2 = Math.ceil(0 + Math.random()* 255);
    let val3 = Math.ceil(0 + Math.random()* 255);
    // So here what's happening is that we are generating a random number between 0 and 255 (We are adding with zero because we want to start from 0.... If we wanted to start from any other number then we would have added that number)
    // Math.random() generates a random number between 0 and 1
    // So if we multiply it by 255, we get a random number between 0 and 255
    // Math.ceil is used to round off the number to the nearest whole number for e.g --> Math.ceil(2.3) = 3
    return `rgb(${val1}, ${val2}, ${val3})`
}
Array.from(boxes).forEach(e=>{
    e.style.backgroundColor = getRandomColor()
    e.style.color = getRandomColor()
})