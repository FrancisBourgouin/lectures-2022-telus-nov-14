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

// INSERT DATA IN A DATABASE
// INSERT INTO
//   jokes (question, answer, rating, author_id)
// VALUES
//   ('Knock knock, whos there, to who', 'no, to whom',3, 1)

const [nodeVer, file, question, answer, rating, authorId] = process.argv;

// const nodeVer = process.argv[0]
// const file = process.argv[1]
// const question = process.argv[2]
// const answer = process.argv[3]
// const rating = process.argv[4]
// const authorId = process.argv[5]

const sqlQuery = `
INSERT INTO
  jokes (question, answer, rating, author_id)
VALUES
  ($1, $2, $3, $4)
RETURNING *
`;
const sqlOptions = [question, answer, rating, authorId];

db.query(sqlQuery, sqlOptions).then((res) =>
  console.log("succesfully added new row", res.rows[0].id)
);
