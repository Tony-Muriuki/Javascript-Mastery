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
console.log(info.fname + " " + info.sname);

// Using Destructuring

const { fname: firstName, sname: surName, idNo } = info;
console.log(firstName);
