const express = require('express');
const app = express();

const pokemon = require('./models/Pokemon');

//& === CONFIGURATION
app.set("view engine", "jsx");
app.engine("jsx", require("jsx-view-engine").createEngine());

//& === ROUTES
/**
 * INDEX ROUTE
 */
app.get('/', (req, res) => {
    res.send(`<h1>Welcome to the Pokemon App!</h1><a href='/pokemon'>Go to Pokemon</a>`)
})

/**
 * POKEMON INDEX ROUTE
 */
app.get('/pokemon', (req, res) => {
    res.render('Index', {pokemon});
})

/**
 * SHOW ROUTE
 */
app.get('/pokemon/:id', (req, res) => {
    res.send(req.params.id)
})

//& === LISTEN AT DESIGNATED PORT
const PORT = 3000;

app.listen(PORT, function() {
    console.log(`Listening at port ${PORT}`);
})