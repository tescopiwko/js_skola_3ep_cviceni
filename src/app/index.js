const express = require('express');

// nacteni balicku pro praci se session
const session = require('express-session');

const app = express();

const mineRoutes = require('./routes/defaultRouter');


app.set('view engine', 'ejs');

app.set('views', './app/views');

// prijem dat z formularu
app.use(express.urlencoded({ extended: false }));

app.use(session({
    secret: require('dotenv').config().parsed.SECRET,
    resave: false,
    saveUninitialized: true,
}));

app.use(express.static('public'));


app.use(mineRoutes);

module.exports = app;
