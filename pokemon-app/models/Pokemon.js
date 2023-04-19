const mongoose = require('mongoose');

// Create the schema
const pokemonSchema = new mongoose.Schema({
    name: {type: String, required: true},
    img: {type: String, required: true},
},
{timestamps: true}
)

// Create and export the model
const Pokemon = mongoose.model('Pokemon', pokemonSchema)
module.exports = Pokemon;