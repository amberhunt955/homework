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
 * Show playlist route
 */
app.get('/:playlist', (req, res) => {
    res.render('Show')
})

//* listen at port
const PORT = 3000;

app.listen(PORT, function() {
    console.log(`Listening at port ${PORT}`);
})