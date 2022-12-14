const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const { fetchAllJokes, fetchJokeById } = require("./dbHelpers");
const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.get("/api/jokes", (req, res) => {
  fetchAllJokes().then((jokes) => res.json(jokes));
});

app.get("/api/jokes/:joke_id", (req, res) => {
  fetchJokeById(req.params.joke_id).then((joke) => res.json(joke));
});

module.exports = app;
