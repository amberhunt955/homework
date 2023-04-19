const React = require("react");

function New() {
  return (
    <div>
      <h1>Create a new Pokemon</h1>

      <form action="/pokemon" method="POST">
        <label>
          Name: <input type="text" name="name" required />
        </label>

        <br/>

        <label>
          Image URL: <input type="text" name="img" required />
        </label>

        <br/>

        <button type="submit" value="Submit Changes">
          Submit
        </button>
      </form> <br/>

      <a href='/pokemon'>Go Back</a>
    </div>
  );
}

module.exports = New;
