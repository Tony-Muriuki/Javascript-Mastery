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

// KEY METHODS OF SETS

// .size property : Returns the number of unique elements in thes set
console.log(mySet1.size);

// .has(value) Checks if a specific element exists in the set. Returns True or False
console.log(mySet1.has(22));

// .add(value) Adds new element to the set.If the element already exists in the set it wont be added.(No Duplicates)
mySet1.add(22);
console.log(mySet1);

// .delete(Value) Removes a specific element from the set.
mySet1.delete(22);
console.log(mySet1);

// .clear() Removes all elements from the set
mySet1.clear();
console.log(mySet);

// Sets are iterable and you can loop over them using methods like for 0f , foreach, and destructuring

// Looping using forEach
const numbers = new Set([10, 20, 30]);

numbers.forEach(value => {
  console.log(value); // 10, 20, 30
});

// For of
const numbers1 = new Set([10, 20, 30]);

for (const num of numbers1) {
  console.log(num); // 10, 20, 30
}

// Destructuring
const mySet3 = new Set(['a', 'b', 'c']);

for (const [key, value] of mySet3.entries()) {
  console.log(key, value);
}

//Converting a Set to an Array

const carSet = new Set(['mercedez', 'atenza', 'prado']);
console.log(carSet.size);

//Using Destructuring
const carArr = [...carSet];
console.log(carArr);

//using my Array.from()
const myArr = Array.from(carArr);
console.log(myArr);

//Common Set Operations
// 01:Union combining Two Sets

// const union = new Set([...setA, ...setB]);
// console.log(union);

//02:Intersection: The intersection of two sets returns only the values that are present in both sets.
const setA = new Set([1, 2, 3, 4, 5, 6]);
const setB = new Set([3, 4, 5, 6]);
const intersection = new Set([...setA].filter(x => setB.has(x)));
console.log('intersection', intersection);

//symetric difference: Retruns anew set that are either in a or b but are not in both
const result = setA.symmetricDifference(setB);
console.log(result);

//05:isSubset()returns true if the elements of the current set exists in the given set

const bool = setB.isSubsetOf(setA);
console.log(bool);

//06: isSuperSetOf returns tru if the current set contains all elements in the given set
const bool2 = setA.isSupersetOf(setB);
console.log(bool2);

// 07 isDisjointFrom Returns true if both sets have no elements in common
const bool3 = setA.isDisjointFrom(setB);
console.log(bool3);

// Lecture 124 MAPS LESSON

// A map is a built in javascript data structure consisting of a collection of key value pairs similar to objects.However there are key differences between a map and an object.

/*
1: A map allows any type of key (object, functions,primitives)
2:The order of iteration on a map is based on the insertion order.
3:The size of a map can be easily be retrieved using the .size property.
4:A map provides more utility methods compared to plain objects.
*/

// CREATING A MAP:There are 2 ways to create a map.
// 1:You can create a map using the new map constructor
const myMap = new Map();
// 2You can also initialize a map with an array of key value pairs.
const myMap1 = new Map([
  ['name', 'Tony'],
  ['age', 18],
  ['country', 'Kenya'],
]);
console.log(myMap1);

// Various Map Methods
// .set('key','value')Property Adds or Updates a key value pair.If the key is already in the map it updates the value.
myMap1.set('wife', 'Beatrice');
console.log(myMap1);

// 02.get('key') Property  Retrieves the value associated with the given key.if the key does not exist it return undefined
console.log(myMap1.get('career'));

//03: has('key) property Checks if the key exists in the map. if it exists it returns true if not it returns false.
console.log(myMap1.has('age'));

// 04:Delete('key) property Removes the key value pair associated with the key
myMap1.delete('age');
console.log(myMap1.size, myMap1);

// .clear() Removes all key value pairs in the map
myMap1.clear();
console.log(myMap1);
