const express = require('express');

const routes = express.Router();
const UserController = require('./controllers/userController');
const FilmController = require('./controllers/filmController');
const ProfileController = require('./controllers/profileController');

routes.get('/user', UserController.index);
routes.post('/user', UserController.create);
routes.put('/user/:id', UserController.update);
routes.delete('/user/:id', UserController.remove);


module.exports = routes;