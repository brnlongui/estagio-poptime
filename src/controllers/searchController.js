const axios = require('axios');

const mongoose = require('mongoose');

const Film = mongoose.model('Film');

module.exports = {
    async search(req, res){
        const {term} = req.body;
        const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=1bcc763d1279f4d2d3cb5a06f1093374&language=pt-BR&query=${term}&include_adult=false`);
        const id = response.data.results[0].id;
        
        return res.json(id);
    }
}