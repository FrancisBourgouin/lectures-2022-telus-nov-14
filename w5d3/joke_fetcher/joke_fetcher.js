const { Client, Pool } = require("pg");

// Client or a Pool

const dbConnection = new Client({
  user: "francis",
  host: "localhost",
  database: "jokes",
  password: "francis",
  port: 5432,
}); // const app = express()

dbConnection.connect();

// dbConnection.query("SELECT * FROM jokes", (err, res) => {
//   console.log(err, res.rows);
//   dbConnection.end();
// });

// dbConnection
//   .query("SELECT * FROM jokes")
//   .then((res) => res.rows)
//   .then((rows) => console.log(rows))
//   .catch((err) => console.log(err))
//   .finally(() => dbConnection.end());

const bob = {
  id: 10,
  question: "What do you call a fly without wings?",
  answer: "A walk",
  rating: 5,
  author_id: 9,
};

const parseJokeInAFancyWay = (jokeObj) => {
  console.log("🎄🎄🎄🎄🎄🎄🎅🤶🎄🎄🎄🎄🎄🎄");
  console.log(jokeObj.question);
  console.log(jokeObj.answer);
  console.log(`This was a joke that was rated ${jokeObj.rating}/5`);
  console.log("🎄🎄🎄🎄🎄🎄🎅🤶🎄🎄🎄🎄🎄🎄");
};

const parseAllJokes = (jokeList) => jokeList.forEach(parseJokeInAFancyWay);

// fancyJokeParser(bob);

// dbConnection
//   .query("SELECT * FROM jokes")
//   .then((res) => res.rows)
//   .then(parseAllJokes)
//   .catch((err) => console.log("error in joke", err))
//   .finally(dbConnection.end);

const numberOfJokes = process.argv[2];
console.log(numberOfJokes);

// é = &eacute;

const dbQuery = "SELECT * FROM jokes LIMIT $1";
const dbOptions = [numberOfJokes]; // Sanitized

// dbConnection
//   .query(dbQuery, dbOptions)
//   .then((res) => res.rows)
//   .then(parseAllJokes)
//   .catch((err) => console.log("error in joke", err))
//   .finally(() => dbConnection.end());

// Count how many element
// Math random to max count
// query for the id of the random value

// dbConnection
//   .query("SELECT COUNT(*) FROM jokes")
//   .then((res) => res.rows) // return rows
//   .then((rows) => rows[0]) // return the only the row
//   .then((row) => row.count) // return the value inside the row object (count)
//   .then((amountOfRows) => Math.floor(Math.random() * amountOfRows) + 1) // return a random id between 1 and nb of rows
//   .then((randomId) => dbConnection.query("SELECT * FROM jokes WHERE id = $1", [randomId]))
//   .then((res) => res.rows) // return rows
//   .then((rows) => rows[0]) // return the only the row
//   .then(parseJokeInAFancyWay)
//   .then(console.log);

const calculateRandomId = (maxValue) => Math.floor(Math.random() * maxValue) + 1;

// dbConnection
//   .query("SELECT COUNT(*) FROM jokes")
//   .then((res) => res.rows[0].count) // return amount of rows
//   .then(calculateRandomId) // return a random id between 1 and nb of rows
//   .then((randomId) => dbConnection.query("SELECT * FROM jokes WHERE id = $1", [randomId]))
//   .then((res) => res.rows[0]) // return the only the row
//   .then(parseJokeInAFancyWay)
//   .catch((err) => console.log("Err with random query", err))
//   .finally(() => dbConnection.end());

// const someFunction = () => {
//   return dbConnection.query("SELECT NOW()");
// };

// someFunction().then(...)

const queryARandomJoke = () => {
  return dbConnection
    .query("SELECT COUNT(*) FROM jokes")
    .then((res) => res.rows[0].count) // return amount of rows
    .then(calculateRandomId) // return a random id between 1 and nb of rows
    .then((randomId) =>
      dbConnection.query("SELECT * FROM jokes WHERE id = $1", [randomId])
    )
    .then((res) => res.rows[0]); // return the only the row
};

queryARandomJoke()
  .then(parseJokeInAFancyWay)
  .catch((err) => console.log("Err with random query", err))
  .finally(() => dbConnection.end());
