'use strict';

// Lecture 140: The Call, Apply and Bind Method

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a sit on ${this.airline} flight ${this.iataCode} ${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};
//Invoke the func:
lufthansa.book(239, 'Tony');
lufthansa.book(635, 'Linda');
console.log(lufthansa.bookings);
const euroWings = {
  airLine: 'EuroWings',
  iataCode: 'EW',
  bookings: [],
};
const book = lufthansa.book; //This is possible because Javascript Has first class functions.
//book(23, 'Beatrice Kamande'); //Cannot read properties of undefined (reading 'airline') We get the error because the book function is a regular function call which is undefined

book.call(euroWings, 23, 'Beatrice Kamande');
console.log(euroWings);

//Lufthansa Bookings array
book.call(lufthansa, 23, 'Ruth Kamande');
console.log(lufthansa);

//Lufthansa Child Airline

const swiss = {
  airLine: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};
book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);

//Apply Method : It is similar to the call method but the only disparity is that it does not receive a list of arguements but rather an array of arguements

const flightData = [583, 'George cooper'];
book.apply(swiss, flightData);
console.log(swiss);

const newMap = new Map([
  ['name', 'Tony'],
  ['age', 22],
  ['marital status', 'married'],
  ['wife', 'Beatrice'],
  ['carWHip', 'Merc Gle400d'],
]);
console.log(newMap);
