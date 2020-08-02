const mongoose = require('mongoose');

const FilmSchema = new mongoose.Schema({
    movie_id: {
        type : Number,
        required: true,
    },
    name: {
        type: String,
    },
    genre: {
        type: Array,
    },
    overview: {
        type: String, 
    },
    year: {
        type: String,
    },
    watched: {
        type: Boolean,
    },
});

mongoose.model('Film', FilmSchema);