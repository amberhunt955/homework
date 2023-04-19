require("dotenv").config();
const express = require('express');
const connectToDB = require("./config/db");
const app = express();

// Data
const Pokemon = require('./models/Pokemon');

//& === CONFIGURATION
app.set("view engine", "jsx");
app.engine("jsx", require("jsx-view-engine").createEngine());

//& === MIDDLEWARE
app.use(express.urlencoded({ extended: false }));

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
    Pokemon.find({}, (error, allPokemon) => {
        res.render("Index", { pokemon: allPokemon });
      });
})

/**
 * POST POKEMON TO INDEX
 */

app.post("/pokemon", (req, res) => {
    Pokemon.create(req.body, (error, createdPokemon) => {
      res.redirect("/pokemon");
    });
  });

/**
 * CREATE NEW POKEMON
 */
app.get("/pokemon/new", (req, res) => {
    res.render("New");
  });

/**
 * POKEMON SEED ROUTE
 */
app.get('/pokemon/seed', (req, res)=>{
    Pokemon.create([
        {name: "bulbasaur", img: "http://img.pokemondb.net/artwork/bulbasaur"},
        {name: "ivysaur", img: "http://img.pokemondb.net/artwork/ivysaur"},
        {name: "venusaur", img: "http://img.pokemondb.net/artwork/venusaur"},
        {name: "charmander", img: "http://img.pokemondb.net/artwork/charmander"},
        {name: "charizard", img: "http://img.pokemondb.net/artwork/charizard"},
        {name: "squirtle", img: "http://img.pokemondb.net/artwork/squirtle"},
        {name: "wartortle", img: "http://img.pokemondb.net/artwork/wartortle"}
     ], (err, data)=>{
        res.redirect('/pokemon');
    })
});

/**
 * SHOW ROUTE
 */
app.get('/pokemon/:id', (req, res) => {
    Pokemon.findById(req.params.id, (error, foundPokemon) => {
        res.render("Show", { pokemon: foundPokemon });
      });
})

//& === LISTEN AT DESIGNATED PORT
const PORT = 3000;

app.listen(PORT, function() {
    console.log(`Listening at port ${PORT}`);
    connectToDB()
})