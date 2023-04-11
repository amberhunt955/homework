const React = require('react');

function ShowPlaylist(props) {
    const {playlist} = props

    return (
        <div>
            <h1>{playlist.name}</h1>
            <ol>
            {playlist.songs.map((song, i) => {
                    return (
                        <li>
                            <a href={`/${playlist.i}/${playlist.name}/${i}`}>{song.title}</a> - {song.artist}
                        </li>
                    )
                })}
            </ol>
            <a href='/'>Go back home</a>
        </div>
    )
}

module.exports = ShowPlaylist;