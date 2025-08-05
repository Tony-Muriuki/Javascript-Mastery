"use strict";
// Destructuring is an Es6 feature that allows you to extract values from arrays or properties from objects into distinct variables.

// syntax
// const { prop1, prop2 } = ObjectName;

const info = {
  fname: "Dennis",
  sname: "Muheia",
  idNo: 45678498,
};

// Traditional way of accessing values from an object
// console.log(info.fname + " " + info.sname);

// Using Destructuring

// const { fname: firstName, sname: surName, idNo } = info;
// console.log(firstName);

// Default Values in Array Destructuring

// const [element1 = defaultValue1, element2 = defaultValue2] = array;
// const numbers = [1, 2];

// Using Default Values with undefined Elements:

// const numbers = [1, undefined];

// const [first, second = 20] = numbers;

// console.log(first); // 1
// console.log(second); // 20

// 2. Objects default destructuring

// syntax : const { property1 = defaultValue1, property2 = defaultValue2 } = object;

const user = {
  name: "Alice",
  age: 25,
};

const { name: userName, age: userAge, country: userCountry = "Unknown" } = user;

console.log(userName); // Alice
console.log(userAge); // 25
console.log(userCountry); // Unknown

// Nested Destructuring
