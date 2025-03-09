/*
    Q1) Create a navbar and change the color of it's first element to red.
    Q2) Create a table without tbody . Now use "view page source" button to check whether tbody is added or not.
    Q3) Create an element with 3 children . Now change the color of first and last element to green.
    Q4) Write a js code to change background of all <li> tags to cyan.
    Q5) Which of the following is used to look for the farthest ancestor that matches a given CSS selector 
    (a) matches
    (b) closest
    (c) contains
    (d) None of these 
*/


// Ans 1)
document.getElementsByTagName("ul")
document.getElementsByTagName("ul")[0].firstElementChild
document.getElementsByTagName("ul")[0].firstElementChild.style.color = "red"


// Ans 2)
// No because viewpage source shows raw source of what we have written even if we do anything wrong in it.


// Ans 3) 
document.getElementsByTagName("ul")[0].firstElementChild.style.color = "green"
document.getElementsByTagName("ul")[0].lastElementChild.style.color = "green"


// Ans 4)
/*
document.getElementsByTagName("li").forEach((e) => {
    e.style.backgroundColor = "cyan";
})
This won't work because for each is a method of array and getElementsByTagName returns an HTMLCollection.
Agar array k method lagane h toh pehle usko array me convert karna padega.

Example:-
const str = "hello";
const arr = Array.from(str);
console.log(arr); // Output: ['h', 'e', 'l', 'l', 'o']

*/

Array.from(document.getElementsByTagName("li")).forEach((e) => {
    e.style.backgroundColor = "cyan";
})


// Ans 5) (b) closest
// Explanation :-
// closest() method is used to look for the farthest ancestor that matches a given CSS selector. It starts from the current element and goes up the DOM tree until it finds a match for the specified selector. If it finds a match, it returns the element itself. If not, it returns null.
// matches() method is used to check if an element matches a specified CSS selector. It returns true if the element matches the selector, and false otherwise.
// contains() method is used to check if an element contains another element. It returns true if the specified element is a descendant of the element on which it is called, and false otherwise.