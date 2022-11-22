// Filesystem
const fs = require("fs");
const readFile = fs.readFile;
const writeFile = fs.writeFile;
// const fileContent = readFile("./secretFile.txt") // WILL NOT WORK

const showContentOfFile = (data) => {
  console.log("The content of the file is :");
  console.log(data);
  console.log("END OF THE FILE");
};

console.log("STARTING THE READ THE FILE !");

let dataFromReadMaybe = "";

// readFile("./secretFile.txt", "utf-8", (err, data) => {
//   showContentOfFile(data);
//   dataFromReadMaybe = data;
//   console.log("ENDED READING THE FILE !");
// });

// writeFile("./logOutput.txt", dataFromReadMaybe, (err) => {
//   console.log("Yep the file has been written.");
// });

// 1- Define the function called showContentOfFile
// 2- Log the start of reading
// 3- Define and set dataFromReadMaybe to ""
// 4- start to read the file, and give the callback to the queue
// 5- start to write a file, and give the callback to the queue (this is where data is used by writeFile)
// ------ END OF SYNCHRONOUS ------
// 6?- Execute the callback of readFile
//    show content in console
//    set dataFromReadMaybe to the chickens
//    log to the console ENDED READING
// 7?- Execute the callback of writeFile
//    Log "Yep the file..."

readFile("./secretFile.txt", "utf-8", (err, data) => {
  showContentOfFile(data);
  dataFromReadMaybe = data;
  console.log("ENDED READING THE FILE !");

  writeFile("./logOutput.txt", dataFromReadMaybe, (err) => {
    console.log("Yep the file has been written.");
  });
});

// 4- start to read the file, and give the callback to the queue
// ------ END OF SYNCHRONOUS ------
// 6?- Execute the callback of readFile
//    show content in console
//    set dataFromReadMaybe to the chickens
//    log to the console ENDED READING
//    start to write a file, and give the callback to the queue (this is where data is used by writeFile)
//      Execute the callback of writeFile
//      Log "Yep the file..."
