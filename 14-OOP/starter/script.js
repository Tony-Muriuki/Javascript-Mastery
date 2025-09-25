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
jessica.calcAge();

// A constructor function is a normal function used with the new operator. Naming convention is capitalize the firts letter.There are 2 ways to define a constructor function 1:Func Declaration 2: Func Expression.

//Declaration(Constructor Function)
function Student(fname, admNo, gender) {
  console.log(this);
  this.fname = fname;
  this.admNo = admNo;
  this.gender = gender;
}

//Instances, Instanciation
//1;Instances are real objects created from classes(instantion) new keyword

// const tony = new Student('Tony', 8190, 'male');
// console.log(tony, typeof tony);

// console.log(tony instanceof Student); //Each call to new Student creates an instance and we can validate using instanceof

//User Constructor Function(.prototype property Obj{})
function User(fname, password) {
  console.log(this);
  this.fname = fname;
  this.password = password;
}
console.log(User.prototype.constructor === User); //true User.prototype

//Create an Instance 'new' keyword (error)
const jake = new User('Jake', 'jake234');

console.log(jake.__proto__ === User.prototype); //New Objects is linked to User.prototype internally thru __proto__

console.log(User.prototype.__proto__ === User.prototype);
console.log(jake.hasOwnProperty('fname'));
