const express = require('express');
const playlists = require('./models/playlists');
const app = express();


//& === CONFIGURATION
app.set('view engine', 'jsx')
app.engine('jsx', require('jsx-view-engine').createEngine())

//* routes
/**
 * Route - home page
 */
app.get('/', (req, res) => {
    res.render('Index', {playlists})
})

/**
 * Route - fun route
 */
app.get('/hmm', (req, res) => {
    res.render('Fun')
})

/**
 * Route - show song
 */
app.get('/:indexOfPlaylistsArray/:playlistName/:indexOfSongsArray', (req, res) => {
    res.render('ShowSong', {
        playlist: playlists[req.params.indexOfPlaylistsArray],
        song: playlists[req.params.indexOfPlaylistsArray].songs[req.params.indexOfSongsArray]
    })
})

/**
 * Route - show playlist
 */
app.get('/:indexOfPlaylistsArray/:playlistName', (req, res) => {
    res.render('ShowPlaylist', {
        playlist: playlists[req.params.indexOfPlaylistsArray]})
})

/**
 * Route - 404
 */
app.get('*', (req, res) => {
    res.render('404') 
 })

//* listen at port
const PORT = 3000;

app.listen(PORT, function() {
    console.log(`Listening at port ${PORT}`);
})