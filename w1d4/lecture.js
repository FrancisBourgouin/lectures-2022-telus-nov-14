// Basic function!

// function sayHiToEveryone() {
//   // Function definition
//   console.log("Hello everyone !");
// }

const sayHiToEveryone = function () {
  // Function expression
  console.log("Hello everyone!");
};
// sayHiToEveryone();

// function sayHiToEveryone() {
//   // Function definition
//   console.log("MWAHAHAHAHAHHAHA");
// }

// Parameters / Arguments

const sayHiToEveryoneButBetter = function (amountOfPeople, greeting) {
  for (let i = 0; i < amountOfPeople; i++) {
    console.log(greeting);
  }
};

// sayHiToEveryoneButBetter(10, "Good Morning");
// sayHiToEveryoneButBetter(10, "Good Afternoon");
// sayHiToEveryoneButBetter(10, "Buenos dias");

// Grocery list (Array or Object)
// Apples, Chips, Pasta
// Apple => Object {name:"Apple", icon:"🍎", quantity:1}
// Chips => Object {name:"Chips", icon:"🍟", quantity:10}
// Pasta => Object {name:"Pasta", icon:"🍝", quantity:100}
// GroceryList => [apple, chips, pasta]

const apple = { name: "Apple", icon: "🍎", quantity: 1 };
const chips = { name: "Chips", icon: "🍟", quantity: 10 };
const pasta = { name: "Pasta", icon: "🍝", quantity: 9000 };

const groceryList = [apple, chips, pasta];

// Show the icons of the list (summary) => ["🍝","🍟","🍎"]

const showTotalOfItems = function (groceryList) {
  // make a variable (num) called totalOfItems (Accumulator / Buffers)
  let total = 0;
  // iterate over every item of the list
  for (const item of groceryList) {
    //  for each item of the list, extract the quantity
    const quantity = item.quantity;
    //  add the quantity to total
    total += quantity;
  }
  // once we're done looping, output the total
  console.log(total);
};

showTotalOfItems(groceryList);

const addOneIcon = function (list, groceryItem) {
  //  for each item of the list, extract the icon
  const icon = groceryItem.icon;
  //  give the icon to summary list
  list.push(icon);
};

const addMultipleIcons = function (list, groceryItem) {
  const icon = groceryItem.icon;
  const quantity = groceryItem.quantity;
  //  give the icon to summary list as many times as quantity
  for (let i = 0; i < quantity; i++) {
    list.push(icon);
  }
};

const showSummaryOfItems = function (groceryList) {
  // make a new list called summary
  const summary = [];
  // iterate over every item of the list
  for (const item of groceryList) {
    addOneIcon(summary, item);
  }
  // once we're done looping, output the list
  console.log(summary);
};

showSummaryOfItems(groceryList);

const showIconPerIndividualItem = function (groceryList) {
  // make a new list called summary
  const summary = [];
  // iterate over every item of the list
  for (const item of groceryList) {
    //  for each item of the list, extract the icon and quantity
    addMultipleIcons(summary, item);
  }
  // once we're done looping, output the list
  console.log(summary);
};

showIconPerIndividualItem(groceryList);

const loopOverTheGroceryListAndDoSomething = function (groceryList, action) {
  // make a new list called summary
  const summary = [];
  // iterate over every item of the list
  for (const item of groceryList) {
    //  for each item of the list, extract the icon and quantity
    action(summary, item);
  }
  // once we're done looping, output the list
  console.log(summary);
};

loopOverTheGroceryListAndDoSomething(groceryList, addMultipleIcons);
loopOverTheGroceryListAndDoSomething(groceryList, addOneIcon);

const chipsTime = function (list) {
  list.push("🍟");
};

loopOverTheGroceryListAndDoSomething(groceryList, chipsTime);
