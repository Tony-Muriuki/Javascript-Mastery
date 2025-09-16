'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function (obj) {
    console.log(obj);
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3},`
    );
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// Ivoking OrderDelivery Function
restaurant.orderDelivery({
  time: '23.30',
  address: 'Via del sole 21',
  mainIndex: 2,
  starterIndex: 2,
});

//Lecture 108: DESTRUCTURING ARRAYS LESSON

// Destructuring Defination:

//  Destructuring is a feature introduced in ES6 (ECMAScript 2015) that allows you to extract values from arrays or properties from objects into distinct variables. This feature simplifies the process of accessing and working with data structures.

// ---- Defination:
// Array destructuring is a modern Javascript (es6 : ECMAScript 2015 ) feature that allows you to unpack elements from an array into individual variables in a concise and readable way / manner.

// Simple Array
const arr = [2, 3, 4, 5, 6, 7, 8]; //Array of Nums

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching Variables
[main, secondary] = [secondary, main];
console.log(main, secondary);

// Invoking Method
const [starter, mainn] = restaurant.order(2, 0);

// Receiving 2 Return Values From A function
console.log(starter, mainn);

// Nested Array Destructuring
const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default Values(Nested Destructuring)
const [p = 1, q = 2, r = 3] = [8, 9];
console.log(p, q, r);

// OBJECT DESTRUCTURING

// Object destructuring is an es6 feature that allows  you to extract properties from an object and assign them to a distinct variable using a concise and readable syntax

// Object Destructuring Syntax
const info = {
  fname: 'Dennis',
  sname: 'Muhia',
  idNo: 45678490,
};

// Using destructuring
const { fname: prop1, sname: prop2 } = info;
console.log(prop1, prop2);

// Destructuring Restaurant Object
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// Renaming Variables During Destructuring
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Setting Default Values During Destructuring
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Destructuring Nested Objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

// THE SPREAD OPERATOR

//Def: The spread operator in Javascript is a convinient and powerful syntax used to expand iterables (like arrays , sets,maps,strings) into individual elements.

// Basically used for copying, merging or expanding elements of arrays or objects.

const array = [7, 8, 9];
// Never do this in your life
const badNewArray = [1, 2, array[0], array[1], array[2]]; //No spread

const goodNewArr = [1, 2, ...array]; //Used spread
console.log(goodNewArr);

// Creating A new Menu Using Spread Operator
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Creating Shallow copy Arrays
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// Joining Two Arrays Together
const mergedArr = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(mergedArr);

// Spreading strings using Spread Operator
const userName = 'Jonas';
const letters = [...userName, '', 's'];
console.log(letters);

// Reverse userName
function reverse(arg) {
  const word = arg.split('').reverse().join('');
  return word;
}
console.log(reverse(userName));

// REST PPATTERN AND PARAMETERS
