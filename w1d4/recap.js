// Talked about functions

// We want functions to be reusable

// Reusability can be achieved by using data parameters

const logEveryValueOfList = function (list) {
  for (const value of list) {
    console.log(value);
  }
};

logEveryValueOfList([1, 2, 3, 4, 5]);
logEveryValueOfList(["Mark", "Joe", "Jacqui"]);

// More reusability can be achieved we have an action parameter

// forEveryValue is an higher-order function
// Because it needs another function to work

const forEveryValue = function (list, action) {
  for (const item of list) {
    action(item);
  }
};

const logValue = function (value) {
  console.log(value);
};

let sum = 0;
const addToSum = function (value) {
  let newSum = sum + value;
  sum = newSum;
};

forEveryValue([1, 2, 3, 4], logValue); // logValue is the callback of forEveryValue

// forEveryValue([1, 2, 3, 4], addToSum);
// console.log(sum);

// const calculateSum = function (list) {
//   let sum = 0;
//   forEveryValue(list, addToSum);
//   console.log(sum);
// };

// .forEach

const someList = ["Donny", "Raeme", "Tony", "Eszter"];

const fancyLogValue = function (element, index, array) {
  console.log(`The element ${element} is at position ${index} of the array ${array}`);
};

const logIndexesOnly = function (element, index) {
  console.log(index);
};

someList.forEach(fancyLogValue);

forEveryValue(someList, fancyLogValue);

// .map

const uppercaser = function (name) {
  return name.toUpperCase();
};

const uppercaseArrow = (name) => name.toUpperCase();

const result = someList.map((name) => name.toUpperCase());

console.log(result);

const otherResult = [1, 2, 3, 4, 5, 6].map((number) => number * number);

console.log(otherResult);
// const sum = function (num1, num2) {
//   console.log(num1 + num2);
// };

// sum(5, 6, 7);
// ? :
const filteredResult = [1, 2, 3, 4, 5, 6].filter((number) => number % 2 === 1);
const filteredResult2 = [1, 2, 3, 4, 5, 6].filter(function (number) {
  return number % 2 === 1;
});

console.log(filteredResult);

Object.keys();
Object.values();
