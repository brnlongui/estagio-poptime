const mongoose = require('mongoose');

const FilmSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    overview: {
        type: String, 
        required: true,
    },
    year: {
        type: String,
    }
});

mongoose.model('Film', FilmSchema);