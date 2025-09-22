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

const votersDetail = {
  name: 'Tony Muriuki Kamande',
  marital_status: 'Married',
  religion: 'Christian',
  assembly: 'CITAM',
  membId: 1987,
  booksRead: [],
  books(title, testament) {
    const bookDetail = { title, testament }; // create a book object
    console.log(bookDetail);
    this.booksRead.push(bookDetail); // push the object, not the function
  },
};

const readbooks = votersDetail.books;
readbooks.call(votersDetail, 'Genesis', 'Old Testament');
readbooks.call(votersDetail, 'Matthew', 'New Testament');

console.log(votersDetail);

//The .BIND() Property
const person = {
  name: 'Alice',
  greet() {
    console.log('Hi, I’m ' + this.name);
  },
};

// Copy the method into a variable:
const greetFn = person.greet;

// Calling it directly loses `this`:
// greetFn();
// ❌ "Hi, I’m undefined" (because `this` is no longer `person`)

// Use .bind() to fix this:
const greetAlice = person.greet.bind(person);

// Now greetAlice is a *new function*,
// where `this` is forever tied to `person`.
greetAlice();
// ✅ "Hi, I’m Alice"
