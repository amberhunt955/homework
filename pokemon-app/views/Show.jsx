const React = require('react');

function Show(props) {
    const { player } = props;

    player.name = player.name.charAt(0).toUpperCase() + player.name.slice(1);

    player.img += '.jpg';

    return (
        <div>
            <h1>Gotta Catch Em All</h1>

            <h2>{player.name}</h2>

            <img src={player.img} alt={player.name}/>

            <br/><br/>

            <a href='/pokemon'>Back to Pokemon</a>
        </div>
    )
}

module.exports = Show;