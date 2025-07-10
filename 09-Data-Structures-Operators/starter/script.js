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

// MAPS a map is a built in Javascript Datastructure consisiting of key value pairs similar to objects however there are some key differences

const myMap = new Map();

// Setting values
myMap.set('name', 'Tony');
myMap.set('age', 25);
myMap.set('Girlfriend', 'Beatrice');
myMap.set('country', 'Kenya');
myMap.clear();

console.log(myMap);
// Output: Map(3) {'name' => 'Tony', 'age' => 25, 'country' => 'Kenya'}

const rest = new Map();
// rest.set() adds or updates
