const { Client, Pool } = require("pg");

// Client or a Pool

const db = new Client({
  user: "francis",
  host: "localhost",
  database: "jokes",
  password: "francis",
  port: 5432,
}); // const app = express()

db.connect();

const fetchAllJokes = () => {
  return db.query("SELECT * FROM jokes").then((res) => res.rows);
};

const fetchJokeById = (id) => {
  const sqlQuery = "SELECT * FROM jokes WHERE id = $1";
  const sqlOptions = [id];

  return db.query(sqlQuery, sqlOptions).then((res) => res.rows[0]);
};

const fakeJokesByRating = [
  {
    id: 3,
    question: "What do you call a belt made out of watches?",
    answer: "A waist of time.",
    rating: 5,
    author_id: 3,
  },
  {
    id: 4,
    question: "Why do programmers mix hallowen and christmas",
    answer: "because OCT 31 === DEC 25",
    rating: 5,
    author_id: 1,
  },
];

const fetchJokesByRating = (rating) => {
  // return db.query(...)
  return Promise.resolve(fakeJokesByRating);
  return fakeJokesByRating;
};

app.get("/api/jokes/ratings/:rating_score", (req, res) => {
  fetchJokesByRating(req.params.rating_score).then((jokeList) => res.json(jokeList));
});

module.exports = { fetchAllJokes, fetchJokeById };
