const express = require('express');
const app = express();



app.use(express.static('html+css'));
app.get('/hello', (req, res) => {
  res.send('Hello World!');
});

app.get(['/', '/index'], (req, res) => {
	res.render('index');
});

module.exports = app;
