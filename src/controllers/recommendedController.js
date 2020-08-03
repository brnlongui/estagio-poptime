const axios = require('axios');
const mongoose = require('mongoose');
const Film = mongoose.model('Film');
const Profile = mongoose.model('Profile');


module.exports = {
    async store(req, res) {
        const { profile } = req.headers;
        const logged = await Profile.findById(profile);
        const film = await logged.watchList[0];
        const response = await Film.findById(film);
        const genre = response.genre[0].id;
        const recommend = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=1bcc763d1279f4d2d3cb5a06f1093374&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genre}`);
        

        return res.json(recommend.data.results);


    },

}