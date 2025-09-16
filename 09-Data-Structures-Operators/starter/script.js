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
  orderPizza: function (mainIngredients, ...otherIngredients) {
    console.log(mainIngredients);
    console.log(otherIngredients);
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
//Invoking the order Pizza function()
console.log(restaurant.orderPizza('mushrooms', 'onions', 'cheese', 'caramel'));
// Ivoking OrderDelivery Function
restaurant.orderDelivery({
  time: '23.30',
  address: 'Via del sole 21',
  mainIndex: 2,
  starterIndex: 2,
});

//Lecture 120: Looping Objects

const user = { name: 'Tony', age: 25, country: 'Kenya' };
const keyVal = [];

Object.keys(user).forEach(key => {
  keyVal.push(key);
});

console.log(keyVal); // ["name", "age", "country"]

// 2: Object.Values()

const values = [];

Object.values(user).forEach(value => {
  values.push(value);
});
console.log(values);

// Object.entries()

const entries = [];

Object.entries(user).forEach(([key, value]) => {
  entries.push(`${key}: ${value}`);
});

console.log(entries);
// ["name: Tony", "age: 25", "country: Kenya"]

// SETS

// A set is a collection of unique values of any type primitive or object references. They are different from arrays as the only store unique values and do not maintain any order of insertion in a strictly indexical way like arrays do.

// No duplicates , unordered ,iterable
// 1: Creating New Sets
const mySet = new Set();
console.log(mySet);

const mySet1 = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(mySet1);
