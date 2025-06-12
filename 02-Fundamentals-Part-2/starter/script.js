"strict";

// FUNCTIONS
function logger() {
  console.log("My Name is Jonas");
}
logger(); //Invoking/Running/Calliong The function
logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}
const appleJuice = fruitProcessor(5, 0);
console.log("AppleJuice", appleJuice);

const appleOrangeJuice = fruitProcessor(5, 2);
console.log("Apple x OrangeJuice", appleOrangeJuice);
