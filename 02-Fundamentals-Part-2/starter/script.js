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
console.log(fruitProcessor(39, 33));

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

// Array.prototype.at()
// The at method of array instances takes an interger positive/negative and returns the item at that index
const array1 = [5, 12, 8, 130, 44];
// Positive Integer
let index = 2;
console.log(`An index of ${index} returns ${array1.at(index)}`);
// Expected output: "An index of 2 returns 8"

// Negative Integer
index = -2;

console.log(`An index of ${index} returns ${array1.at(index)}`);
// Expected output: "An index of -2 returns 130"

// Array.Prototype.concat()
// The concat method of array instances is used to merge 2 or more arrays.It does not alter the existing array but returns a new array

const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8];
const arr3 = [9, 10, 11, 12];

const arr4 = arr1.concat(arr2, arr3);
console.log("The New Merged Array Output is:", arr4);

// Array.copyWithin()
// The copyWithin() method of array instances ,shallow coppies part of this array to another location in the same array and returns the array without modifying its length

const alphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
console.log("The length of the alphabets array is:", alphabets.length);

console.log(alphabets.copyWithin(0, 3, 5)); //This means copy item at index 3 and end at 5 to index 0
// Outcome=d,e,b,c,f,g,h,i,j

// Array.every()
// The every method of array instances is used to test whether all elements in the array pass the test implememnted by the provided function

const isSubset = (array1, array2) =>
  array2.every((element) => array1.includes(element));

console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6])); // true
console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 8, 7])); // false

const isBelowThreshHold = (currentValue) => currentValue < 40;
const array_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(array_1.every(isBelowThreshHold));

// Problem: Check if an array contains all vowels
// Write a function called containsAllVowels that takes a string as input and
// returns true if the string contains all five vowels (a, e, i, o, u), and false otherwise.
// The check should be case-insensitive.

function containsAllVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  const lowerStr = str.toLowerCase();
  const result = vowels.every((element) => lowerStr.includes(element));
  return result;
}
console.log(containsAllVowels("education")); // true
console.log(containsAllVowels("hello world")); // false
console.log(containsAllVowels("AEIOUaeiou")); // true
console.log(containsAllVowels("programming")); // false
console.log(containsAllVowels("uncopyrightable")); // true
console.log(Array(3));

// Array.fill()
// The fill method of array instances changes all elements within a range of indices in an array to a static value.It returns the modified array

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers.fill(45, 0, 6));

// Array.Filter()
// The filter method of array instances creates a shallow copy of a portion from a given array but filtered down to just the elements that pass or satisfy a given test implemented by a function.
const words = ["spray", "elite", "exuberant", "destruction", "present"];

const result = words.filter((word) => word.length >= 6);
console.log(result);

const doubled = (num) => num * 2;
const numArr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const doubledNumArr = numArr1.map(doubled);
console.log(doubledNumArr);

// Array.find()
// The find method of array instances returns the firts elementin the provided array that satisfies the provided testing function

const arrayNum = [1, 2, 3, 4, 78, 24, 35, 34, 67];
const found = arrayNum.find((element) => element > 10);
console.log(found);

// Array.findIndex()
// The findIndex method of array instances returns the index of the first element that satisfies the provided testing function
const foundIndex = arrayNum.findIndex((element) => element > 10);
console.log("The first Index of Element Is:", foundIndex);

// Array.pop()
// The pop method of array instances removes the last item from the array and returs the removed item.It modifies the length of the array.

const cars = [
  "Buggati",
  "McLaren",
  "Bentley",
  "Ferrari",
  "Maseratti",
  "Lamborghini",
];
console.log("Length of car before Pop:", cars.length);
const poppedCar = cars.pop();
console.log(poppedCar);
console.log("Length of Array after Pop:", cars.length);

// Function to Reverse String

const strReversed = (str) => str.split("").reverse().join("");
console.log(strReversed("first"));
console.log(strReversed("Tony"));
console.log(strReversed("Beatrice"));

// Array.splice()
// The splice method of array instances changes the contents of an array by removing or replacing existing elements and or adding new elements in place.

const sexStis = ["gonorrhea", "syphillis", "herpes", "hpv"];
console.log("Before Splice:", sexStis);
sexStis.splice(0, 0, "AIDS", "HIV");
console.log("After splice:", sexStis);

// Array.slice()
// The array.slice method of array instances returns a shallow copy of a portion from an arrayinto a new array object selected from start to end.
const wildAnimals = [
  "Lion",
  "Elephant",
  "Rhino",
  "Cheetah",
  "Leopard",
  "Buffalo",
  "Chicken",
  "Cow",
  "Dog",
  "Donkey",
];
const domesticAnimals = wildAnimals.splice(wildAnimals.indexOf("Chicken"));
console.log(domesticAnimals);

// Accessing Every Item In An Array
const birds = ["Falcon", "Eagle", "Owl", "Parrot", "Hawk"];
console.log("This is Orginal Array:", birds);

const birdCopy = [];

// accessing
for (const bird of birds) {
  birdCopy.push(bird);
}
console.log("This is the subcopy of birds Array:", birdCopy);

// You are given an array of city names.Write A function that filters out the cities whose names are more than 8 characters long and returns a new array containing only those cities . Use the following Array

const cities1 = ["London", "Liverpool", "Kajiado", "Edinburgh"];

const longerCities1 = (city) => {
  return city.filter((element) => element.length > 8);
};
// longerCities1(cities1);

console.log(longerCities1(cities1));

// Method2

// const cities2 = ["London", "Liverpool", "Kajiado", "Edinburgh"];

// const longerCities = (cityArray) => {
//   return cityArray.filter((city) => city.length > 8);
// };

// console.log(longerCities(cities2));
// // // Output: ["Liverpool", "Edinburgh"]*/
