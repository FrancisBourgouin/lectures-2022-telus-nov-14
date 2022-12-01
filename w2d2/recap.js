// const someFunction = require("./...")
// someFunctionDefinition();
// // Hoisting / Redefined
// function someFunctionDefinition() {
//   console.log("Hello!");
// }

const someFunctionExpression = function () {
  console.log("Hi!");
};

// If to be used as a method, don't use arrow functions
const someArrowFunction = () => {
  console.log("Potato");
};

const add = (a, b) => a + b;
// function someFunctionDefinition() {
//   console.log("MWAHAHAHAHAH!");
// }

// HOF => Higher Order Functions
// Data parameters / data arguments in a functions, reusability
// Function parameters =>

const calculateSomethingThen = (num1, num2, doSomething) => {
  const sum = num1 + num2;

  return doSomething(sum);
};

const logResult = (result) => console.log("The result is: " + result);
const someArray = [];
const addToArray = (result) => someArray.push(result);

calculateSomethingThen(5, 5, logResult); // logResult is THE callback of calculateSomethingThen...
calculateSomethingThen(5, 5, addToArray); // addToArray is THE callback of calculateSomethingThen...

// const amIAHigherOrderFunctionQuestionMark = () => {
//   addToArray(5); // helper function
// };

const doSomethingToAnArray = (arr, mean) => mean(arr);

// A callback is a function given as a parameter to another function

const mean = (arr) => {
  return sum(arr) / count(arr);
};

doSomethingToAnArray([1, 2, 3], mean);
// mean([1,2,3])

// for(let i = 0; i < 10; i++){

// }

// for(const element of someArray){

// }
