const express = require('express');
const playlists = require('./models/playlists');
const app = express();

//& === CONFIGURATION
app.set('view engine', 'jsx')
app.engine('jsx', require('jsx-view-engine').createEngine())

//& === MIDDLEWARE
app.use((req, res, next) => {
    console.log(req.url);
    next();
  });
  
  app.use(express.urlencoded({ extended: false }));

//& === ROUTES
/**
 * 1 - MAIN INDEX
 */
app.get('/', (req, res) => {
    res.render('Index', {playlists})
})

/**
 * 2 - POST NEW PLAYLIST
 */
app.post('/', (req, res) => {
    console.log(req.body);
    playlists.push(req.body);
    res.redirect('/')
})

/**
 * 3 - CREATE NEW PLAYLIST FORM
 */
app.get('/new', (req, res) => {
    res.render('NewPlaylist')
})

/**
 * 4 - FUN ROUTE
 */
app.get('/hmm', (req, res) => {
    res.render('Fun')
})

/**
 * 5 - BIO ROUTE
 */
app.get('/bio', (req, res) => {
    res.render('Bio')
})

/**
 * 6 - PAGE ROUTE
 */
app.get('/page', (req, res) => {
    res.render('Page')
})

/**
 * 7 - CREATE NEW SONG FORM
 */
app.get('/:indexOfPlaylistsArray/:playlistName/new', (req, res) => {
    res.render('NewSong')
})

/**
 * 8 - SHOW SONG ROUTE
 */
app.get('/:indexOfPlaylistsArray/:playlistName/:indexOfSongsArray', (req, res) => {
    res.render('ShowSong', {
        playlist: playlists[req.params.indexOfPlaylistsArray],
        song: playlists[req.params.indexOfPlaylistsArray].songs[req.params.indexOfSongsArray]
    })
})

/**
 * 9 - SHOW PLAYLIST
 */
app.get('/:indexOfPlaylistsArray/:playlistName', (req, res) => {
    res.render('ShowPlaylist', {
        playlist: playlists[req.params.indexOfPlaylistsArray]})
})

/**
 * 10 - NEW SONG SUBMISSION
 */
app.post('/:indexOfPlaylistsArray/:playlistName', (req, res) => {
    console.log(req.body);
    res.redirect('/page')
})

/**
 * 11 - 404 PAGE NOT FOUND
 */
app.get('*', (req, res) => {
    res.render('404') 
 })

//* listen at port
const PORT = 3000;

app.listen(PORT, function() {
    console.log(`Listening at port ${PORT}`);
})