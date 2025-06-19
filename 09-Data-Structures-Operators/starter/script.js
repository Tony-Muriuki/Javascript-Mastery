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
};

// ✅ This call should log correctly
restaurant.orderDelivery({
  time: '22:30pm',
  address: 'Via Del Sol,21',
  mainIndex: 2,
  starterIndex: 2,
});
// The Spread Parameter(...)

const carsArr = ['Maseratti', 'Lamborghini', 'McLaren'];
const allCarsArr = [
  'AstonMartin',
  'BMW',
  'Audi',
  'Ferrari',
  'Bughatti',
  ...carsArr,
];
console.log('Non-Spread', allCarsArr);
console.log('Spread', ...allCarsArr);

// Expanding
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copying
const mainMenuCopy = [...restaurant.mainMenu];
console.log('Copy Main menu:', mainMenuCopy);

// Join /Merge Two Arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log('Merged Array Menu:', menu);

// restaurant.orderPasta(...ingredients);
// Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guisepee' };
console.log(newRestaurant);
