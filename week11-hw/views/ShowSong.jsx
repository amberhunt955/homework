const React = require('react');

function ShowSong(props) {
    const {playlist, song} = props;

    return (
        <div>
            <h1>{song.title}</h1>

            Artist: {song.artist} <br/>

            <a href={song.link} target='_blank'>Listen Now</a> <br/><br/>

            Go back to <a href={`/${playlist.i}/${playlist.name}`}>{playlist.name}</a> <br/><br/>

            <a href='/'>Go back home</a>
        </div>
    )
}

module.exports = ShowSong;