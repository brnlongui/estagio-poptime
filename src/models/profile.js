const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    },
    watchList: {
        type: Array,
    },
    recommendedList: {
        type: Array,
    },
});

mongoose.model('Profile', ProfileSchema);