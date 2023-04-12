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
    res.render('Index')
})

/**
 * POKEMON JSON ROUTE
 */
app.get('/pokemon', (req, res) => {
    res.send(pokemon);
})

/**
 * SHOW ROUTE
 */
app.get('/show', (req, res) => {
    res.render('Show')
})

//& === LISTEN AT DESIGNATED PORT
const PORT = 3000;

app.listen(PORT, function() {
    console.log(`Listening at port ${PORT}`);
})