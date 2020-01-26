const express = require('express');
const  cors = require ('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://omnistack:omnistack@estagio-jera-sbvla.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useFindAndModify : false,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

requireDir('./models');

app.use('/api', require('./routes'));

app.listen(3000);