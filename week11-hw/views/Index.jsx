const React = require("react");

function Index(props) {
  const { playlists } = props;

  return (
    <div>
      <h1>Your Playlists</h1>

      <ol>
        {playlists.map((playlist, i) => {
          playlist.i = i;

          return (
            <li key={`${i}`}>
              <a href={`/${i}/${playlist.name}`}>{playlist.name}</a>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

module.exports = Index;
