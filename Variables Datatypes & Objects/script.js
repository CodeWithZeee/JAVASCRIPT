console.log("Hey this is tutorial 55");

var a = 5;
// a = a + 1
let b = 6;
let c = "Harry";
let _a = "Shubham";
// var 55a = "Rohan"; // Not Allowed

// console.log(a +  b + 8);
// console.log(typeof a, typeof b, typeof c);
{
    // let a = 66;
    console.log(a)
}
console.log(a)
// const a1 = 6;
// a1 = a1 + 1; // Not Allowed because a1 is constant


let x = "Harry bhai";
let y = 22;
let z = 3.55;
const p = true;
let q = undefined;
let r = null;

console.log(x, y, z, p, q, r)
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r)

// Following is an object
let o = {
    name: "Harry", 
    // name is key and "Harry" is value . 
    // name can be written in double quotes or without double quotes because it is a single word without space in between
    "name2" : "Rohan Das",
    
    // both name and "name2" are correct

    "job code": 5600,
    // while writing multiple words with space in between we use double quotes
    "is_handsome": true ,
    is_Playboy: false ,
    // is Popeye: false ,
    // Not Allowed because it is not in double quotes
}

console.log(o);
o.salary = "100crores";
console.log(o);
o.salary = "500crores";
console.log(o);
