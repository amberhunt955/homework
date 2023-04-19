const React = require("react");

function Index(props) {
  const { pokemon } = props;

  return (
    <div>
      <h1>Available Pokemon</h1>

      <ul>
        {pokemon.map((player) => {
          // capitalize first char of player name
          player.name = player.name.charAt(0).toUpperCase() + player.name.slice(1);

          return (
            <li key={player._id}>
              <a href={`/pokemon/${player._id}`}>{player.name}</a>
            </li>
          );
        })}
      </ul>

      <a href="/pokemon/new">Create New Pokemon</a><br/><br/>

      <a href="/">Go Home</a>
    </div>
  );
}

module.exports = Index;
