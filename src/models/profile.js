const mongoose = require('mongoose');
const Film = mongoose.model('Film');

const ProfileSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true,
        maxlength: 10,
    },
    watchList: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: Film
    }],
    recommendedList: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: Film
    }]
});

mongoose.model('Profile', ProfileSchema);