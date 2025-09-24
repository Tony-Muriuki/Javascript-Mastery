'use strict';

// OBJECT ORIENTED PROGRAMMING.

// Constructor Functions and The New Operator
/*
const Person = function (firstName, birthYear) {
  // Instance Properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const jonas = new Person('Jonas', 1991);
const mary = new Person('Mary', 2003);

console.log(jonas instanceof Person);
console.log(mary instanceof Person);

//Lets add a method to this property
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

Person.prototype.species = 'Homo Sapiens';
jonas.species; // "Homo Sapiens"
jonas.hasOwnProperty('species'); // false*/

//Lecture 226 ES6 Classes

//Implementing Person Using Class

//Class Declaration
class Personcl {
  //Adding a constructor Method
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
}
const jessica = new Personcl('Jessica', 1996);
