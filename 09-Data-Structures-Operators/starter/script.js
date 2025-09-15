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

//Lecture 108: DESTRUCTURING ARRAYS LESSON
// ---- Defination:
// Array destructuring is a modern Javascript (es6 : ECMAScript 2015 ) feature that allows you to unpack elements from an array into individual variables in a concise and readable way / manner.

// Simple Array
const arr = [2, 3, 4, 5, 6, 7, 8]; //Array of Nums

// Retrieve 'arr' elements without es6 feat destructuring into an individual variable
// const a = arr[0];
// console.log(a, 'Without Destructuring');
// const b = arr[1];
// console.log(b, 'Without Destructuring');
// const c = arr[2];
// console.log(c, 'Without Destructuring'); //DRY : Don't Repeat  Yourself
// const d = arr[3];
// console.log(d, 'Without Destructuring');
// const e = arr[4];
// console.log(e, 'Without Destructuring');
// const f = arr[5];
// console.log(f, 'Without Destructuring');

// Retrieving 'arr' Elements using Destructuring;
const [a, b, c, d, e, f] = arr;
console.log(c, 'Destructured ES6');
