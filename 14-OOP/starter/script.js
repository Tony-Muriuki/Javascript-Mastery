'use strict';
//Class Declaration
class Personcl {
  //Adding a constructor Method
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  //Adding a Method
  calcAge() {
    console.log(2035 - this.birthYear);
  }
  //Getter For The Age Property
  get age() {
    return 2037 - this.birthYear;
  }
  //Check if it has Space
  set fullname(name) {
    console.log(name);
    if (name.includes(' ')) this.fullName = name;
    else alert`${name} is not a fullName`;
  }
}
const jessica = new Personcl('Jessica Davis', 1996);
//Jessicas Prototype
console.log(jessica);
//Getting Jesiccas Age
console.log(jessica.age);
//Adding A Greet Method Manually To the Prototype
Personcl.prototype.greet = function () {
  console.log(`Hey ${this.firstName} method Added!`);
};
jessica.greet();

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
