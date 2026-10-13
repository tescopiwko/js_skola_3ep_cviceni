const router = require('express').Router();

const model = require('../models/postsModel.js');

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

router.get('/posts', (req, res) => {
	res.render('posts', {
		titulek: 'Příspěvky',
		prispevky: model.nacistPrispevky(),
	});
});


router.use((req, res) => {
    res.render('error', {
		titulek: 'Chyba',
	});
});


module.exports = router;