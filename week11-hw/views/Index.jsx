const React = require("react");

function Index(props) {
  const { playlists } = props;

  return (
    <div>
      <h1>Welcome to the Page of Fun</h1>

      <h2> Your Playlists</h2>
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

      <a href="/new">Add a new playlist</a> <br/><br/>

      <a href="/hmm">Where does this link go?</a> <br/><br/>

      <a href="/bio">Who made this site?</a>
    </div>
  );
}

module.exports = Index;
