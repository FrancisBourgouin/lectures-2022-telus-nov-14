// console.log("hello!");

// // setTimeout is NOT asynchronous
// // setTimeout's callback that is executed in an asynchronous way
// const doSomethingWhenItIsTheTimeForIt = () => {
//   // throw new Error("why not");
//   console.log("bye!");
// };

// // setTimeout(doSomethingWhenItIsTheTimeForIt, 2000);
// // setTimeout(doSomethingWhenItIsTheTimeForIt, 3500);
// // setTimeout(doSomethingWhenItIsTheTimeForIt, 5000);

// setTimeout(() => {
//   console.log("bye!");
//   setTimeout(() => {
//     console.log("bye!");
//     setTimeout(() => {
//       console.log("bye!");
//     }, 1500);
//   }, 1500);
// }, 1500);

// console.log("Bye to you too!");

// 1- run console.log("hello")
// 2- set timeout to 2s, and give the callback to be run
// 3- run console.log("bye to you too")
// 4- ran everything that was synchronous, waiting for the callback queue to empty (READY FOR QUEUE)
// 5- run the callback with console.log("bye") in it

// 4 timers, code execution takes (4s)

let someValue = 9001;

setTimeout(() => {
  console.log("ITS OVER " + someValue);
}, 1000);

someValue = "Anakin";

// 1- set someValue to 9001
// 2- start a timeout of one second
// 3- set someValue to "Anakin"
// ---- END OF SYNCHRONOUS
// 4- we execute the content of the callback inside the timeout
