const mongoose = require('mongoose');

const Film = mongoose.model('Film');

module.exports = {
    async findAll(req, res){
        const film = await Film.find();
        return res.json(film);
    },

    async create (req, res){
       const film = await Film.create(req.body);
       return res.json(film);
    },

    async update(req, res){
        const film = await Film.findByIdAndUpdate(req.params.id, req.body, {new : true});
        return res.json(film);        
    },

    async remove(req, res){
        await Film.findByIdAndRemove(req.params.id);
        return res.send();
    },
}