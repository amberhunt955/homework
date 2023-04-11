const express = require('express');
const playlists = require('./models/playlists');
const app = express();


//& === CONFIGURATION
app.set('view engine', 'jsx')
app.engine('jsx', require('jsx-view-engine').createEngine())

//* routes
/**
 * Home page route
 */
app.get('/', (req, res) => {
    res.render('Index', {playlists})
})
/**
 * Show song route
 */
app.get('/:indexOfPlaylistsArray/:playlistName/:indexOfSongsArray', (req, res) => {
    res.render('ShowSong', {
        playlist: playlists[req.params.indexOfPlaylistsArray],
        song: playlists[req.params.indexOfPlaylistsArray].songs[req.params.indexOfSongsArray]
    })
})
/**
 * Show playlist route
 */
app.get('/:indexOfPlaylistsArray/:playlistName', (req, res) => {
    res.render('ShowPlaylist', {
        playlist: playlists[req.params.indexOfPlaylistsArray]})
})


//* listen at port
const PORT = 3000;

app.listen(PORT, function() {
    console.log(`Listening at port ${PORT}`);
})