const React = require("react");

function NewPlaylist() {
  return (
    <div>

      <h1>Create a new playlist</h1>

      <form action="/" method="POST">
        Name: <input type="text" name="name" />{" "}

        <input type="submit" name="" value="Create Playlist" />
      </form>

      <br/><a href='/'>Go Home</a>
    </div>
  );
}

module.exports = NewPlaylist;