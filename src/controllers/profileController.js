const mongoose = require('mongoose');

const Profile = mongoose.model('Profile');
const User = mongoose.model('User');

module.exports = {
    async findAll(req, res){
        const profile = await Profile.findById();
    }
}