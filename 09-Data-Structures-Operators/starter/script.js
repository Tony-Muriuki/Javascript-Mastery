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
// Strings Method
//01:The indexOf().. Returns the first index where the substring is found, else it returns -1 if none
console.log('Airbus A320'.indexOf('A')); // 0
console.log('Airbus A320'.indexOf('bus')); // 3
console.log('Airbus A320'.indexOf('Boeing')); // -1

// 02: Slice(start,end) The slice method extracts a section of a string .Takes in 2 arguements which is start and count/end but the end index is exclusive
const str = 'Airbus A320neo';
console.log(str.slice(0, 6)); // 'Airbus'
console.log(str.slice(7)); // 'A320neo'
console.log(str.slice(-3)); // 'neo'

//03:lastIndexOf() Returns the last index of the substring
console.log('Airbus A320neo A320'.lastIndexOf('A320')); // 12

//04:trim(),trimStart(),trimEnd() Removes whitespaces from both start ,end or both ends
console.log('   hi there   '.trim()); // 'hi there'
console.log('   hi'.trimStart()); // 'hi'
console.log('hi   '.trimEnd()); // 'hi'

//05: replaceAll(search,replacement) Replaces all occurences
console.log('door door door'.replaceAll('door', 'gate'));
// 'gate gate gate'

//06:replace(search,replacement) replaces the first occurence of a substring
console.log('288,97£'.replace('£', '$')); // '288,97$'

// 8. includes(substring)
console.log('Airbus A320'.includes('A320')); // true
console.log('Airbus A320'.includes('Boeing')); // false

//
