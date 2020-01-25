const mongoose = require('mongoose');

const Profile = mongoose.model('Profile');


module.exports = {
    async findAll(req, res){
        const profile = await Profile.find();
        return res.json(profile);
    },

    async create (req, res){
       const profile = await Profile.create(req.body);
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