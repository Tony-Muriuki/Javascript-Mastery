'use strict';

// OBJECT ORIENTED PROGRAMMING.

// Constructor Functions and The New Operator

const Person = function (firstName, birthYear) {
  // Instance Properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Adding a method Never do This
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

const jonas = new Person('Jonas', 1991);
const mary = new Person('Mary', 991);

console.log(jonas instanceof Person);
console.log(mary instanceof Person);
