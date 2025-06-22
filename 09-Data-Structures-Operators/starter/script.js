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

// Looping Through Keys....with Object.Keys()
const { openingHours } = restaurant;
const properties = Object.keys(openingHours);
console.log('Properties', properties);

let openStr = `We are open on ${properties.length} days:`;

for (const day of Object.keys(openingHours)) {
  openStr += `${day}, `;
}
console.log(openStr);

//Looping Through Values
const values = Object.values(openingHours);
console.log(values);

// Looping Through Entries
const entries = Object.entries(openingHours);
// console.log(entries);

for (const [keys, { open, close }] of entries) {
  console.log(`On ${keys} we open at ${open} and close at ${close}`);
}

// Bookstore Object
const bookstore = {
  name: 'Readers Haven',
  location: 'Nairobi, Kenya',
  categories: ['Fiction', 'Science', 'Biography', 'Self-Help'],
  inventory: {
    mon: { open: 9, close: 18 },
    tue: { open: 9, close: 18 },
    wed: { open: 9, close: 18 },
    fri: { open: 10, close: 20 },
  },
  bestSellers: ['Atomic Habits', 'Sapiens', 'Educated'],

  orderBook: function (index) {
    return `You ordered: ${this.bestSellers[index]}`;
  },

  orderDelivery({ bookIndex = 0, address, time = '15:00' }) {
    console.log(
      `📚 "${this.bestSellers[bookIndex]}" will be delivered to ${address} at ${time}.`
    );
  },
};

// Looping Through The Object Keys
const bookStoreKeys = [];

for (const books of Object.keys(bookstore)) {
  bookStoreKeys.push(books);
}
console.log('Keys', bookStoreKeys);
console.log(
  `The Object.keys() method returns an array of values of length ${bookStoreKeys.length}`
);

// Looping Through The Objects Values
const bookStoreValues = [];

// Next will Use The For of Loop()
for (const booksValues of Object.values(bookstore)) {
  bookStoreValues.push(booksValues);
}
console.log('Values', bookStoreValues);
console.log(
  `The Object.Value() method returns an array of values of length ${bookStoreValues.length}`
);

// Looping Through Object Key Value Pairs

for (const [keys, values] of Object.entries(bookstore)) {
  console.log(`${keys}:${values}`);
}
