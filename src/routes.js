const express = require('express');

const routes = express.Router();
const SearchController = require('./controllers/searchController')
const UserController = require('./controllers/userController');
const FilmController = require('./controllers/filmController');
const ProfileController = require('./controllers/profileController');

routes.post('/index', SearchController.search);

routes.get('/user', UserController.index);
routes.post('/user', UserController.create);
routes.put('/user/:id', UserController.update);
routes.delete('/user/:id', UserController.remove);

routes.get('/profile', ProfileController.findAll);
routes.get('/profile/:id', ProfileController.show);
routes.post('/profile', ProfileController.create);
routes.put('/profile/:id', ProfileController.update);
routes.delete('/profile/:id', ProfileController.remove);

routes.get('/film', FilmController.findAll);
routes.get('/film/:id', FilmController.show);
routes.post('/film', FilmController.create);
routes.put('/film/:id', FilmController.update);
routes.delete('/film/:id', FilmController.remove);


module.exports = routes;
