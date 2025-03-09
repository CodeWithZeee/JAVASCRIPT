console.log("Harry")

// let boxes = document.getElementsByClassName("box")
// console.log(boxes)

// boxes[2].style.backgroundColor = "red"

// document.getElementById("redbox").style.backgroundColor = "red" 

// document.querySelector(".box").style.backgroundColor = "green";   // It will select only the first element with class name 'box' and change its background color to green.
console.log(document.querySelectorAll(".box"))

// document.getElementsByClassName("box").style.backgroundColor = "green";  // It will give an error because getElementsByClassName returns an HTMLCollection and not a single element.
// document.querySelectorAll(".box").style.backgroundColor = "green";  // It will give an error because querySelectorAll returns a NodeList and not a single element. 
// So we'll have to use forEach or even a traditional for loop to change the background color of all the elements with class name 'box' .

document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor = "green";
}) 


// Another method of doing the same things using traditional for loop :-
// let boxes = document.querySelectorAll(".box");
// for (let i = 0; i < boxes.length; i++) {
//     boxes[i].style.backgroundColor = "yellow";
// }

document.getElementsByTagName("div")[0].style.backgroundColor = "blue";  // It will change the background color of the first div element to blue (which is container here)
// Here the first div is being targeted through its tag name 'div' and its index and then its background color is changed to blue.



// Note 1 :- getElementById is used to select a single element, while getElementsByClassName and querySelectorAll are used to select multiple elements.
// Note 2 :- getElementsByClassName have 's' at the end of 'Element' while getElementById does not have 's' at the end of 'Element'.
//           This is because getElementsByClassName returns multiple elements while getElementById returns a single element.