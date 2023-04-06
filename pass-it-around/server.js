//* require express & create app instance
const express = require("express");
const app = express();

//* routes
app.get("/", (req, rep) => {
  rep.send(`<h1>99 bottles of beer on the wall</h1>\n<a href="/98">Take one down, pass it around.</a>`);
});

app.get("/:numOfBottles", (req, rep) => {
  const { numOfBottles } = req.params;
  if (numOfBottles === '0') {
    rep.send(`<h1>0 bottles of beer on the wall</h1>\n<a href="/">Game over! Click here to play again.</a>`);
  } else {
    rep.send(`<h1>${numOfBottles} bottles of beer on the wall</h1>\n<a href="/${numOfBottles - 1}">Take one down, pass it around.</a>`);
  }
});

//* listen at port 3000
app.listen(3000, function () {
  console.log("Listening at port 3000...");
});
