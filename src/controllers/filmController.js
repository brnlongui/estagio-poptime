const mongoose = require('mongoose');

const Film = mongoose.model('Film');

module.exports = {
    async findAll(req, res){
        const film = await Film.find();
        return res.json(film);
    },
    
}