'use strict';

//Lecture 129 Default Parameters.

/*
--Defination : Default parameters in functions let us assign fallback values to arguments when none are provided, making functions more flexible and concise.


*/
const bookings = [];

const createBooking = function (flightNum, numPassengers = 1, price = 199) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createBooking('LH123');
createBooking('LH123', 2, 800);

// Lecture 136: Argument Passing in JavaScript

const flight = 'LH234'; // primitive (string)
const jonas = { name: 'Jonas Schmedtmann', passport: 24739479284 }; // object
