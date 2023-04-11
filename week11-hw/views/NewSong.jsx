const React = require("react");

function NewSong() {
  return (
    <div>

      <h1>Add a new song</h1>

      {/* NOTE: action will be the route, method will be the HTTP verb */}
      <form action="/:indexOfPlaylistsArray/:playlistName" method="POST">
        Title: <input type="text" name="title" />

        <br />
        <br />

        Artist: <input type="text" name="artist" />

        <br />
        <br />

        Link: <input type="text" name="link" />
        
        <br />
        <br />
        
        <input type="submit" name="" value="Create Song" />
      </form>

      <br/><a href='/'>Go Home</a>
    </div>
  );
}

module.exports = NewSong;