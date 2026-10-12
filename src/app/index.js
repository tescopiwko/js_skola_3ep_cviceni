const express = require('express');

const app = express();


app.set('view engine', 'ejs');

app.set('views', './app/views');

app.use(express.static('public'));


app.get('/hello', (req, res) => {
	res.send('Nodemon funguje');
});

app.get(['/', '/index'], (req, res) => {
	res.render('index');
});

module.exports = app;
