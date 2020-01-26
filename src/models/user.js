const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password:{
        type: String,
        required: true,
        select: false,
    },
    dateBirth:{
        type: String,
        required: true,
    },
    profile:{
        type: Array,
        required: false,
        max: 4,
    },

});

mongoose.model('User', UserSchema);