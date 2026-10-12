const router = require('express').Router();

router.get('/hello', (req, res) => {
	res.send('Hello World from Express!');
});

router.get(['/','/index'], (req, res) => {
	res.render('index', {
		titulek: 'Můj web',
		jmeno: 'Bozi pritomnost',
		datum: new Date().toLocaleDateString(),
	});
});


router.use((req, res) => {
    res.render('error', {
		titulek: 'Chyba',
	});
});


module.exports = router;