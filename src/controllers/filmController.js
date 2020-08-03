const axios = require('axios');
const mongoose = require('mongoose');

const Profile = mongoose.model('Profile');
const Film = mongoose.model('Film');

module.exports = {
    async findAll(req, res){
        const film = await Film.find();
        return res.json(film);
    },

    async show(req, res){
        const film = await Film.findById(req.params.id);
        return res.json(film);
    },

    async create (req, res){
        const {movie_id} = req.body;
        const {profile} = req.headers;

        const movieExists = await Film.findOne({movie_id});
        if(movieExists){
            return res.json(movieExists);
        }
        
        const logged = await Profile.findById(profile);
        
        const film = await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=1bcc763d1279f4d2d3cb5a06f1093374&language=pt-BR`);
        const { title, genres, overview, year} = film.data;
        const movie = await Film.create({
            movie_id,
            name: title,
            genre: genres,
            overview,
            year,
            watched: false
        });
        logged.watchList.push(movie._id);
        await logged.save();
        return res.json(movie);
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