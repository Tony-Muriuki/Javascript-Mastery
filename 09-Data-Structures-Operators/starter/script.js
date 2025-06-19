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

  openingHours: {
    thu: { open: 12, close: 22 },
    fri: { open: 11, close: 23 },
    sat: { open: 0, close: 24 },
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00hrs',
    address,
  }) {
    console.log(
      `Order Received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: (ing1, ing2, ing3) => {
    console.log(`Here is Your Delicious Pasta with ${ing1},${ing2},${ing3}`);
  },
  orderPizza: (mainIngredients, ...otherIngredients) => {
    console.log(mainIngredients);
    console.log(otherIngredients);
  },
};

// The For of loop

const menu = [...restaurant.starterMenu];
console.log(menu);

for (const menuCopy of menu) {
  console.log('Copy of Menu:', menuCopy);
}

const fruits = ['apple', 'banana', 'cherry'];

for (const fruit of fruits) {
  console.log(fruit);
}
// Output: apple banana cherry

for (const char of 'Tony') {
  console.log(char);
}
// Output: T o n y

const ids = new Set([1, 2, 3, 3]);

for (const id of ids) {
  console.log(id);
}
// Output: 1 2 3

const prices = new Map([
  ['apple', 100],
  ['banana', 60],
]);

for (const [fruit, price] of prices) {
  console.log(`${fruit} costs ${price}`);
}
// Output: apple costs 100, banana costs 60
