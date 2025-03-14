/*
    Q1) Write a program to show different alerts when different buttons are clicked.
    Q2) Create a website which is capable of storing bookmarks of your favourite websites using href
    Q3) Repeat Q2 using event listerners
    Q4) Write a js program to keep fetching contents of website (every 5 seconds)
    Q5) Create a glowing bulb effect using classlist toggle method in js
 */

// Answer 1)
document.body.firstElementChild.addEventListener('click', () =>{
    alert('First button clicked')
})

document.body.firstElementChild.nextElementSibling.addEventListener('click', () =>{
    alert('Second button clicked')
})

document.body.children[2].addEventListener('click', () =>{
    alert('Third button clicked')
})

// Another method can be found in the html also

// Answer (2) is in the html file

// Answer 3)

document.getElementById("google").addEventListener("click", function() { 
  window.location = "https://www.google.com";
})

document.getElementById("youtube").addEventListener("click", function() { 
  window.location = "https://www.youtube.com";
})


// Answer 4)
const fetchContent = async (url) => {
  con = await fetch(url);
  let a = await con.json()
  return a;
}

setInterval(async function() {
  let url = "https://jsonplaceholder.typicode.com/todos/1"
  console.log(await fetchContent(url))
}, 3000)


// Answer 5)

  setInterval(() =>{
    document.getElementById("bulb").classList.toggle("bulb")
  }, 500)