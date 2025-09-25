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
