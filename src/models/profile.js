const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    },
    watchList: {
        type: Array,
        required: true,
    },
    recommendedList: {
        type: Array,
        required: true,
    },
});

mongoose.model('Profile', ProfileSchema);