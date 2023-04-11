const React = require("react");

function ShowPlaylist(props) {
  const { playlist } = props;

  return (
    <div>
      <h1>{playlist.name}</h1>

      {playlist.songs ? (
        <ol>
          {playlist.songs.map((song, i) => {
            return (
              <li>
                <a href={`/${playlist.i}/${playlist.name}/${i}`}>{song.title}</a> - {song.artist}
              </li>
            );
          })}
        </ol>
      ) : (
        <p>No songs added yet.</p>
      )}

      <a href={`/${playlist.i}/${playlist.name}/new`}>Add a new song</a><br/><br/>

      <a href="/">Go back home</a>
    </div>
  );
}

module.exports = ShowPlaylist;
