const React = require('react');

function Index(props) {
    const {playlists} = props;

    return(
        <div>
            <h1>Your Playlists</h1>

            <ol>
                <a href={`/${playlists[0].name}`}>{playlists[0].name}</a>
            </ol>
        </div>
    )
}

module.exports = Index;