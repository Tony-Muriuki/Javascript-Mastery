'use strict';

//Lecture 129 Default Parameters.

/*
--Defination : Default parameters in functions let us assign fallback values to arguments when none are provided, making functions more flexible and concise.


*/
const bookings = [];

const createBooking = function (flightNum, numPassengers = 1, price = 199) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createBooking('LH123');
createBooking('LH123', 2, 800);

// Lecture 136: Argument Passing in JavaScript
console.log('------------------------------------------------------------');
const flight = 'LH234'; // primitive (string)
const jonas = { name: 'Jonas Schmedtmann', passport: 24739479284 }; // object

// Checkin Function
const Checkin = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'MR' + passenger.name;
  if (passenger.passport === 24739479284) {
    console.log('Checkin');
  } else {
    console.log('Wrong Passport');
  }
};
Checkin(flight, jonas);
console.log(flight);
console.log(jonas);

let person = { name: 'Alice', age: 25 };

function changePerson(myPerson) {
  myPerson.age = 30; // mutate property
  console.log('Inside function:', myPerson);
}

changePerson(person);
console.log('Outside function:', person);

const Tony = {
  firstName: 'Tony',
  lastName: 'Kamande',
  girlFriend: 'Beatrice',
  status: 'Unsaved',
};

function bornAgain(obj) {
  obj.status = 'Saved';
  console.log('Inside Function', obj);
}
bornAgain(Tony);
console.log('Outside Function', Tony);

// The resaon as to why it changed is because objects are reference types and when passed to functions as arguements they are passed as references to the objects location in memory. Meaning changes inside the function affect the original.

// First-Class and High Order Functions

// A programming languange is said to have first class functions when functions in that language  are treated like any other variable. For example in such a language a function can be passed aa an arguement to other functions, can be returned by another function or can be assigned as a value to a variable

// Javascript treats functions as first-class functions aka first class citizens meaning they are values enabling the use of HOF- Higher Order Functions: functions that recieves one or more functions as arguements or returns a function as it results.

//Function that removes all spaces from a string and converts it to Lowercase
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

//Function that capitalizes only the first word of a string.
const upperFirstWord = function (str) {
  //Destructuring
  const [first, ...others] = str.split(' ');
  console.log(first);
  return [first.toUpperCase(), ...others].join(' ');
  // console.log(first);
};

//Creating our higher order Function
const transformer = function (str, fn) {
  console.log(`Original String: ${str}`);
  console.log(`Transformed String: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};
transformer('Javascript is The best', upperFirstWord);
transformer('Javascript is The best', oneWord);
