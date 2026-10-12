const express = require('express');

const app = express();

const mineRoutes = require('./routes/defaultRouter');


app.set('view engine', 'ejs');

app.set('views', './app/views');

app.use(express.static('public'));


app.use(mineRoutes);

module.exports = app;
