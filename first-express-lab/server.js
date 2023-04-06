//* require express & create app instance
const express = require("express");
const app = express();

//* mount middleware
const answers = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",
  "As I see it yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
];

//* mount routes
app.get("/", (req, rep) => {
  rep.send("<h1>Hello, world!</h1>");
});

//! greeting routes
app.get("/greeting", (req, rep) => {
  rep.send("Hello, stranger.");
});

app.get("/greeting/:name", (req, rep) => {
  const { name } = req.params;
  rep.send(`Hello, ${name}! It's so great to see you.`);
});

//! tip calculator routes
app.get("/tip/:total/:tipPercentage", (req, rep) => {
  const { total, tipPercentage } = req.params;
  rep.send(
    `Based on your bill of $${total} and your chosen tip percentage of ${tipPercentage}%, your tip will be $${total * (tipPercentage * 0.01)}.`
  );
});

//! magic 8 ball routes
app.get("/magic/:question", (req, rep) => {
  const { question } = req.params;
  const randomIndex = Math.floor(Math.random() * answers.length);
  if (question === "Will I Be A Millionaire") {
    rep.send(`Your question was, "${question}?" And the answer is... \n<h1>${answers[randomIndex]}</h1>`);
  } else {
    rep.send(`Your question was, "${question}?" Sorry, but I don't have all the answers. Try asking a different question.`);
  }
});

//* listen at port 3000
app.listen(3000, function () {
  console.log("Listening at port 3000...");
});
