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
