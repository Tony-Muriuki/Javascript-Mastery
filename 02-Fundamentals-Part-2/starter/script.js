"strict";
/*
// FUNCTIONS
function logger() {
  console.log("My Name is Jonas");
}
logger(); //Invoking/Running/Calliong The function
logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}
const appleJuice = fruitProcessor(5, 0);
console.log("AppleJuice", appleJuice);

const appleOrangeJuice = fruitProcessor(5, 2);
console.log("Apple x OrangeJuice", appleOrangeJuice);

// Function Declaration Vs Function Expressions

function calcAge(birthYear) {
  //Function Declaration
  return 2037 - birthYear;
}
const ageOne = calcAge(2003);
console.log(ageOne);

// Function Expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(2007);
console.log(ageOne, age2);

// ARROW FUNCTIONS

const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(2007);
console.log(age3);

// Function Calling Other Functions

function cutFruitPieces(fruit) {
  return fruit * 4;
}
function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`;
  return juice;
}
console.log(fruitProcessor(2, 3));
console.log(fruitProcessor(39, 33));*/

// Arrays

// An array is a data structure consisiting of a collection of elements each identified by at least an array index

// Array One
const techCareers = [
  "Software Engineer",
  "Cybersecurity",
  "AI Engineer",
  "Devops",
  "Project Manager",
  "Operation Manager",
];
console.log("Length of techCareers Array:", techCareers.length);

// Method(Forming an Array using The Array Constructor())

const phones = new Array("Iphone", "Samsung", "HMD", "Oppo", "Itel", "Infinix");
console.log("Length of Phones Array:", phones.length);
