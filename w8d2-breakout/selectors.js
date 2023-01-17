// Pantry & Orders

const pantry = [
  { name: "Chocolate", icon: "🍫", description: "Stale chocolate" },
  { name: "Cookie", icon: "🍪", description: "Very soft cookie" },
  { name: "Tuna", icon: "🎣", description: "It's in a can" },
  { name: "Pasta", icon: "🍝", description: "Ready to reheat!" },
  { name: "Potato", icon: "🥔", description: "Sad but happy potato" },
];

const nallysRunA = [{ name: "Potato", icon: "🥔", description: "Best potato" }];
const nallysRunB = ["🥔"]; // ingredient

const parseRun = (run, pantry) => {
  const output = [];

  for (const item of run) {
    output.push(pantry.find((ingredient) => ingredient.icon === item));
  }

  return output;
};

console.log(parseRun(nallysRunB, pantry));

// Databases, Normalization

getAppointmentsForDay(day);
