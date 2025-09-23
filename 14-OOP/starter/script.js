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
const mary = new Person('Mary', 2003);

console.log(jonas instanceof Person);
console.log(mary instanceof Person);

//Lecture 222 PROTOTYPES

// Each and every function in Javascript automatically has a property called prototype and that includes ofcourse constructor functions
//Every obj that is created by a certain constructor function will get access to all the methods and properties that we define on the constructor prototype property.
Person.prototype; //In our case its Person.prototype. The prototype property of the constructor function---This is to visualize: so all the obj/instances created throught the prototye property will inherit all the methods and property of the constructor function

//Lets add a method to this property
console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

//Jonas
jonas.calcAge();
mary.calcAge();

jonas.__proto__ === Person.prototype; // true
Person.prototype.species = 'Homo Sapiens';
jonas.species; // "Homo Sapiens"
jonas.hasOwnProperty('species'); // false
