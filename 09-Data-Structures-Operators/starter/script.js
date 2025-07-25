'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

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

const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(orderSet);
//  Key Methods of Set

// Set.size() Returns The number of Unique Elements in The Set
console.log(orderSet.size);

// Set.has() Checks if a specific element exists in the set. Returns True or False
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Githeri'));

// Set.add() Adds a new element to the set.If the element already exists it wont be added
orderSet.add('Garlic Bread');
console.log(orderSet);

// Set.Delete Deletes a specific element from the set
orderSet.delete('Pizza');
console.log(orderSet);

// Converting Set To An array: we can convert a set into an array by destructuring or using array.from()
const mySet = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);
const myArray = [...mySet];
console.log(myArray);

// Converting sets to array using Array.from()
const myArray2 = Array.from(mySet);
console.log(myArray2);

// Converting Array to Set
const arrayNames = ['Tony', 'Beatrice', 'Josephine', 'Tyla', 'Audrey'];
const mySet3 = new Set(arrayNames);
console.log(mySet3);

// New operations To make Sets Useful
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

// A map is a built-in Javascript Data structure consisting of a collection of key-value pairs similar to objects. However the key differences between a map and a plain Javascript Object is that,
/*
1: Map allows any type of keys(objects, functions, primitives etc).
2:The size of a map can be easily retrieved using the .size() property
3:The iteration of a map is based on tyhe insertion order.
4:A map provides more utility methods compared to a plain JS objcet.*/

// const rest=new Map()//an empty map

const rest = new Map();
// console.log(rest.size);

// MAP METHODS.
// 1:Map.SET()---Adds or updates key-value pair in the map.If the key exists, then the value is updated.
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze,Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('Close', 23)
  .set(true, 'We are Open')
  .set(false, 'We are closed ');

// Rest.get() Method Retrieves the value associated with the given key.If the key does not exsit it return undefined.

console.log(rest.get(false));

const time = 21;
rest.get(time > rest.get('open') && time < rest.get('Close'));
console.log(rest.get(time > rest.get('open') && time < rest.get('closed')));

// Rest.has() method is used to check if the key exists in the map .Returns tru if the key exists otherwise false.
console.log(rest.has('boy'));
console.log(rest.has('open'));
console.log(rest);

// Rest.delete() Property is used to remove a key-value pair associated with the given key
rest.delete('name');
console.log(rest);

// Rest.size() Returns the number of key-value Pairs in the map
console.log(rest.size);

// Rest.clear() property removes all key-value pairs in the map
rest.clear();
console.log(rest.size);
