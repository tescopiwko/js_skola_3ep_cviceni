const express = require('express');

const app = express();

const mineRoutes = require('./routes/defaultRouter');


app.set('view engine', 'ejs');

app.set('views', './app/views');

// prijem dat z formularu
app.use(express.urlencoded({ extended: false }));

app.use(express.static('public'));


app.use(mineRoutes);

module.exports = app;
