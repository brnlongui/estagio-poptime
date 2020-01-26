const mongoose = require('mongoose');

const Profile = mongoose.model('Profile');


module.exports = {
    async findAll(req, res){
        const {page = 1} = req.query;
        const profile = await Profile.paginate({},{page,limit: 10});
        return res.json(profile);
    },

    async show(req, res){
        const profile = await Profile.findById(req.params.id);
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