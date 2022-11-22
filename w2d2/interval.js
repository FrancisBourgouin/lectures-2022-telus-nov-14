console.log("Wiggle.");
const myInterval = setInterval(() => {
  console.log("Wiggle.");
}, 1000);

setTimeout(() => {
  clearInterval(myInterval);
}, 5000);

// 0-999
// 1000 => show first wiggle
