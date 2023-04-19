const React = require('react');

function Show(props) {
    const { pokemon } = props;

    pokemon.name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

    pokemon.img += '.jpg';

    return (
        <div>
            <h1>Gotta Catch Em All</h1>

            <h2>{pokemon.name}</h2>

            <img src={pokemon.img} alt={pokemon.name}/>

            <br/><br/>

            <a href='/pokemon'>Back to Pokemon</a>
        </div>
    )
}

module.exports = Show;