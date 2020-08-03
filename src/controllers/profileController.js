const mongoose = require('mongoose');

const User = mongoose.model('User');
const Profile = mongoose.model('Profile');


module.exports = {
    async findAll(req, res){
        const profile = await Profile.find();
        return res.json(profile);
    },

    async show(req, res){
        const profile = await Profile.findById(req.params.id);
        return res.json(profile);
    },

    async create (req, res){
        const {user} = req.headers;
        const logged = await User.findById(user);
        const profile = await Profile.create(req.body);

        logged.profiles.push(profile._id);
        await logged.save();

        return res.json(profile);
    },

    async update(req, res){
        const profile = await Profile.findByIdAndUpdate(req.params.id, req.body, {new : true});
        return res.json(profile);        
    },

    async remove(req, res){
        await Profile.findByIdAndRemove(req.params.id);
        return res.send();
    },
}