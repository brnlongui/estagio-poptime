const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true,
        maxlength: 10,
    },
    watchList: {
        type: Array,
    },
    recommendedList: {
        type: Array,
        max: 10,
    },
});

mongoose.model('Profile', ProfileSchema);