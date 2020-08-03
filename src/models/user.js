const mongoose = require('mongoose');
const Profile = mongoose.model('Profile');

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
    profiles:{
        type:
        [{
            type: mongoose.Schema.Types.ObjectId,
            ref: Profile,
        }],
        validate: [arrayLimit, '{PATH} exceeds the limit of 4']
    }

});
function arrayLimit(val) {
    return val.length <= 4;
}
mongoose.model('User', UserSchema);