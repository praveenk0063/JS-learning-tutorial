// primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt.

const id = Symbol("123")
const anotherId = Symbol("123") //Symbol dataType
// console.log(id === anotherId);


const bigNumber = 18564621643218435184321n  //bigInt dataType 


// Reference (Non Primitive)

//Array, Objects, Functions

const heros = ["marvel", "DC","Disney"];  // This is Array

let myObject = {        // object can be stored in variables 
    name: "john",       //  {} is used to declare object. 
    age: 22,
}

const myFunction = function() {     // This is a function
    console.log("hello world");
}
// console.log(myFunction());


// ********************************************************************

// Stack (Primitive) gives copy of file in stack,
//  Heap (Non Primitive) gives original reference of variable

let myYoutube = "world@gmail.com"
let anothername = myYoutube
anothername = "praveen"

// console.log(myYoutube);
// console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "hitesh@google.com"
console.log(userOne.email);
console.log(userTwo.email);
