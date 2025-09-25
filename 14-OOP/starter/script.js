'use strict';
//Class Declaration
class Personcl {
  //Adding a constructor Method
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  //Adding a Method
  calcAge() {
    console.log(2035 - this.birthYear);
  }
}
const jessica = new Personcl('Jessica', 1996);

//Adding A Greet Method Manually To the Prototype
Personcl.prototype.greet = function () {
  console.log(`Hey ${this.firstName} method Added!`);
};
jessica.greet();

//Getters and Setters

//So every object in javascript has a common features called getters and setters.This special properties are what we call/Refer to as Assesor properties while the normal properties are refered to as data properties.So getters and setters are basically functions that get and set the value.
