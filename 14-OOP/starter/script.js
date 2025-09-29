'use strict';
// //Class Declaration
// class Personcl {
//   //Adding a constructor Method
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }
//   //Instance Methods This are methods that will be added to The .Prototype Property(For Instances Access)
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey ${this.fullName}`);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   // Set a property that already exists
//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }

//   get fullName() {
//     return this._fullName;
//   }
//   //Static Method
//   static hey() {
//     console.log(this);
//     console.log('Hey There ');
//   }
// }
// Personcl.hey();
// const walter = new Personcl('Walter White', 1965);
// const jessica = new Personcl('Jessica Davis', 1996);
// //Jessicas Prototype
// console.log(jessica);
// //Getting Jesiccas Age
// console.log(jessica.age);
// //Adding A Greet Method Manually To the Prototype
// Personcl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName} method Added!`);
// };
// jessica.greet();

//Getters and Setters

//So every object in javascript has a common features called getters and setters.This special properties are what we call/Refer to as Assesor properties while the normal properties are refered to as data properties.So getters and setters are basically functions that get and set the value.

//Bank Account Example

const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],
  //We Want a Method To Get The Latest Movement(We add get to transform it to a getter....)
  get latest() {
    return this.movements.slice(-1).pop();
  },
  //Adding A setter Method(But any setter Method needs to have at least one )
  set latest(mov) {
    return this.movements.push(mov);
  },
};
console.log(account.latest);

//How do we use Setter

//---so if it was a regular Function we would have done : account.latest(50) but latest is moreof a property now than a ,ethod so we basically set it
account.latest = 50;
console.log(account.movements); //50 was added.

//Setters and Getters can actually Be Very Useful For Data Validation

//Lecture 228 STATIC Methods

//Static methods:This are methods that are defined on constructors or classes themselves ,not on the instances and are typically used as helper utilities tied to a class/constructors namespace

const Person1 = function (firtsName, birthYear) {
  this.firstName = this.firstName;
  this.birthYear = birthYear;
};
//Add Static Method
Person1.hey = function () {
  console.log(this);
  console.log('Hey There ');
};
Person1.hey();

// /Lecture 228 Object.create()

// const PersonProt0 = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },
//   //Adding Method to Create Properties for us
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProt0); //Here we pass in the object that we want it to be the prototype of the new object.
// steven.name = 'Steven';
// steven.birthYear = 2002;
// steven.calcAge();
// console.log(steven.__proto__ === PersonProt0);
// console.log(PersonProt0.__proto__ === Object.prototype);
// console.log(Object.prototype.__proto__ === null);

// //New Object
// const sarah = Object.create(PersonProt0);
// sarah.init('Sarah', 1979);
// sarah.calcAge();

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

//Es6 Class

class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  //Accelerate Methods
  accelerate() {
    this.speed += 10;
    console.log(this.speed);
  }
  //Brake Method
  brake() {
    this.speed -= 5;
    console.log(this.speed);
  }
  //Getter Func speedUS
  get speedUS() {
    console.log('Get', this.speed / 1.6);
  }
  //Setter Func speedUS
  set speedUS(speed) {
    return (this.speed = speed * 1.6);
  }
}
const ford = new Car('Ford', 120);
console.log(ford);
//Accelerated Speeds
ford.accelerate();
//Decreased Speeds
ford.brake();
//Speed in mi/h
ford.speedUS = 50;
console.log(ford);
ford.speedUS;

//Inheritance Between Classes Constructor(Parent-> Child)

//-------This is The Parent Class
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
//-------This is the child class
const Student = function (firstName, birthYear, course) {
  // this.firstName = firstName;
  // this.birthYear = birthYear;----Violates the DRY Principle
  Person.call(this, firstName, birthYear);
  this.course = course;
};
//Linking Student to Person Manually For Inheritance
Student.prototype = Object.create(Person.prototype);

//Instantiation
const mike = new Student('Mike', 2020, 'Computer Science');
console.log(mike);

//Adding Method Introduce To The Prototype
Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and i study ${this.course}`);
};
mike.introduce();
mike.calcAge();

//Inheritance Between Classes ES6 Classes
class Personcl {
  //Adding a constructor Method
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  //Instance Methods This are methods that will be added to The .Prototype Property(For Instances Access)
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }
  //Static Method
  static hey() {
    console.log(this);
    console.log('Hey There ');
  }
}
//Child Class
//Extend keyword will link the prototype behind the scenes
class StudentCl extends Personcl {
  //For constructor it will receive same parameters as the parent and addition ++
  constructor(firstName, birthYear, course) {
    //Always needs to happen first
    super(firstName, birthYear);
    console.log(this, 'This is that');
    this.course = course;
  }
}
const mikes = new StudentCl('Mikse Ross', 2000, 'Law');

//Another Class Example
