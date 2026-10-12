const express = require('express');

const app = express();

const port = 8000;


app.set('view engine', 'ejs');

app.set('views', './views');


app.get('/hello', (req, res) => {
	res.send('Hello World from Express!');
});


app.use(express.static('www'));

app.get(['/', '/index'], (req, res) => {
	res.render('index');
});


app.listen(port, () => {
	console.log(`Express server běží na portu ${port}...`);
});