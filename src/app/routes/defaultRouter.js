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

router.get('/posts', (req, res) => {
	res.render('posts', {
		titulek: 'Příspěvky',
		prispevky: [
			{ id: 1, nadpis: 'První příspěvek', obsah: 'Toto je první příspěvek.' },
			{ id: 2, nadpis: 'Druhý příspěvek', obsah: 'Toto je druhý příspěvek.' },
			{ id: 3, nadpis: 'Třetí příspěvek', obsah: 'Toto je třetí příspěvek.' },
		],
	});
});


router.use((req, res) => {
    res.render('error', {
		titulek: 'Chyba',
	});
});


module.exports = router;