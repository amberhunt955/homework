const React = require("react");

function Index(props) {
  const { pokemon } = props;

  return (
    <div>
      <h1>Available Pokemon</h1>

      <ul>
        {pokemon.map((player, i) => {
          // capitalize first char of player name
          player.name = player.name.charAt(0).toUpperCase() + player.name.slice(1);

          return (
            <li key={i}>
              <a href={`/pokemon/${player.name}`}>{player.name}</a>
            </li>
          );
        })}
      </ul>

      <a href="/">Go Home</a>
    </div>
  );
}

module.exports = Index;
