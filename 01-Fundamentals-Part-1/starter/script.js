//JAVSCRIPT TEST CODE
/*
let reverseWord = "Beatrice";//Function To Reverse and Test String and JS functionality
function reversingWord(str) {
  let wordReversed =
    typeof str === "string"
      ? str.split("").reverse().join("")
      : console.log("Word Not String");
  return wordReversed;
}
console.log(reversingWord(reverseWord));*/

// Lecture 1:VARIABLES
// let firstName = "Jonas"; //Data Type String
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// const PI = 3.147; //Data Type NUmber
// const PI2 = PI;
// console.log(PI2);

//Lecture 2:DATA TYPES

/*
// The & Primitive Data Types( Numbers, Strings , Boolean, Undefined , Null, Symbol , BigInt)

// Boolean Data Type(This is a logical Data Type That can only be true Or False Used In Making Decisions)
let javascriptIsFun = true;
console.log(javascriptIsFun, typeof javascriptIsFun);

// Undefined This is a value taken by a variable that is yet to be defined(Empty Value)
let firstName;
console.log(firstName, typeof firstName);

// STRING This is a sequence of Characters Enclosed in Quotes(Mainly Used For Text)
let country = "Kenya";
console.log(country, typeof country);

// NUll (Empty Value)
console.log(typeof null);

// Numbers (Often referred to as Floating Numbers)
let currentYear = 2025;
console.log(currentYear, typeof currentYear);

// Symbol(Value That is unique and cannot be changed. Introduced In ES6)

// BigInt(Introduced in es2020 ) Larger Integers than numbers can hold .


// LET , VAR, AND CONST

// Let (Keyword used To Declare Mutable Variables)es6

let currentGirlfriend = "Maggie";
console.log(
  currentGirlfriend,
  `Before Reassigning The Variable my GF was ${currentGirlfriend}`
);

currentGirlfriend = "Beatrice Nyagicuhi";
console.log(
  currentGirlfriend,
  `AFter Reassigning The Variable my GF was ${currentGirlfriend}`
);PI = 478;
// console.log(PI);

let careerToPursue;
console.log(careerToPursue, typeof careerToPursue);

careerToPursue = "Medicine";
console.log(careerToPursue, typeof careerToPursue);

// CONST (Used to declare immutable Variables)Variables that wont change
const PI = 3.14579;
console.log(PI);
// PI = 478;
// console.log(PI);
*/

// Basic operators
const currentYear = 2037;
const ageJonas = currentYear - 1991;
const ageSarah = currentYear - 2018;
console.log(ageJonas, "Years", ageSarah, "Years");

const firstName = "Tony";
const lastName = "Kamande";
console.log(firstName + " " + lastName);
