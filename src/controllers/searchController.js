const axios = require('axios');

const mongoose = require('mongoose');

const Film = mongoose.model('Film');

module.exports = {
    async search(req, res){
        const {term} = req.body;
        let value = 1;//await req.body;
        const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=1bcc763d1279f4d2d3cb5a06f1093374&language=pt-BR&query=${term}&page=${value}&include_adult=false`);

        return res.json(response.data);
    },
    // async selected(req,res){
    //     const obj = req.body;
    //     const {id} =
    // }
}