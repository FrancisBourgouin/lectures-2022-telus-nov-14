const { readFileSync } = require("fs");

setTimeout(() => {
  console.log("I am one second");
}, 1000);
setTimeout(() => {
  console.log("I am one second");
}, 2000);

const startTime = new Date().getTime();
const fileContent = readFileSync("/mnt/g/bobbb/bob.txt");
const endTime = new Date().getTime();
console.log("It took:");
console.log(endTime - startTime);

console.log("File read.");
