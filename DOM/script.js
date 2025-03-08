console.log("Hello world")

document.body.firstElementChild // returns the first child element of the body (excluding text nodes and comment nodes)
document.body.firstElementChild.nextElementSibling // returns the next element sibling of the first child element of the body element
document.body.firstElementChild[3] // returns the 4th child element of the first child element of the body element
document.body.children[2].nextElementSiblingElement // returns the next element sibling of the 3rd child element of the body element
document.body.firstElementChild.childNodes // returns all the child nodes including text nodes (text nodes are the space left between two elements) and comment nodes 
document.body.firstElementChild.children // returns all the child elements of the first child element of the body element
document.body.firstElementChild.children[0] // returns the first child element


// Now 

console.log(document.body.children)
console.log(document.body.firstElementChild)
console.log(document.body.firstElementChild.children)