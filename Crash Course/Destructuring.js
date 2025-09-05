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

// const user = {
//   name: "Alice",
//   age: 25,
// };

// const { name: userName, age: userAge, country: userCountry = "Unknown" } = user;

// console.log(userName); // Alice
// console.log(userAge); // 25
// console.log(userCountry); // Unknown

// Destructuring Arrays

// syntax const [item1, item2] = array;

// const numbers = [1, 2, 3, 4];

// Traditional way to access values
// const first = numbers[0];
// const second = numbers[1];
// console.log(first, second); // 1 2

// // Using destructuring
// const [first1, second1, third1] = numbers;
// console.log(first1, second1, third1); // 1 2

// Nested Destructuring
const user = {
  name: "Alice",
  address: {
    city: "Wonderland",
    zip: 12345,
  },
};
// to access city
console.log(user.address.city);

const {
  address: { city, zip },
} = user;
// console.log(address);
console.log(city);
console.log(zip);

const user3 = {
  id: "USER-123456",
  name: {
    first: "Alice",
    last: "Liddell",
  },
  email: "alice@example.com",
  address: {
    shipping: {
      street: "123 Rabbit Hole",
      city: "Wonderland",
      state: "Fantasy",
      postalCode: "12345",
      country: "WL",
    },
    billing: {
      street: "456 Mad Hatter Lane",
      city: "Tea Party",
      state: "Fantasy",
      postalCode: "67890",
      country: "WL",
    },
  },
  payment: {
    total: "100.00",
    currency: "USD",
    details: {
      subtotal: "75.00",
      tax: "15.00",
      shipping: "10.00",
    },
    transactions: [
      { id: "TXN-123", amount: "50.00", description: "Magic Potion" },
      { id: "TXN-456", amount: "50.00", description: "EnchantedSword" },
    ],
  },
};
