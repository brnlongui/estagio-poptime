const mongoose = require('mongoose');

const FilmSchema = new mongoose.Schema({
    id: {
        type : Number,
        required: false,
    },
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
        required: true,
    },
    watched: {
        type: Boolean,
    },
});

mongoose.model('Film', FilmSchema);